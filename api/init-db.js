import { Pool } from 'pg';

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false, // Для работы с Vercel Postgres
  },
});

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    res.status(405).json({ error: 'Method not allowed' });
    return;
  }

  try {
    const client = await pool.connect();

    // Пример проверки доступности таблицы
    const result = await client.query(`
      SELECT table_name 
      FROM information_schema.tables 
      WHERE table_schema = 'public';
    `);

    if (result.rows.length === 0) {
      res.status(200).json({ message: 'No tables found. Database is empty.' });
    } else {
      res.status(200).json({ message: 'Database is ready.', tables: result.rows });
    }

    client.release();
  } catch (error) {
    console.error('Error connecting to database:', error);
    res.status(500).json({ error: 'Failed to connect to database.' });
  }
}

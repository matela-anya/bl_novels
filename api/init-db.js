import { Pool } from 'pg';

const pool = new Pool({
  connectionString: process.env.DATABASE_URL, // Используется переменная окружения для подключения
});

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    res.status(405).json({ error: 'Method not allowed' });
    return;
  }

  try {
    const client = await pool.connect();

    // Создаем таблицы для базы данных
    await client.query(`
      CREATE TABLE IF NOT EXISTS novels (
        id SERIAL PRIMARY KEY,
        title VARCHAR(255) NOT NULL,
        description TEXT,
        cover_url VARCHAR(255),
        rating NUMERIC DEFAULT 0,
        tags VARCHAR(255)[] DEFAULT '{}'
      );
    `);

    await client.query(`
      CREATE TABLE IF NOT EXISTS chapters (
        id SERIAL PRIMARY KEY,
        novel_id INTEGER REFERENCES novels(id) ON DELETE CASCADE,
        title VARCHAR(255),
        content TEXT,
        chapter_number INTEGER,
        UNIQUE (novel_id, chapter_number)
      );
    `);

    await client.query(`
      CREATE TABLE IF NOT EXISTS users (
        id SERIAL PRIMARY KEY,
        telegram_id BIGINT UNIQUE NOT NULL,
        username VARCHAR(255),
        last_read_chapter_id INTEGER REFERENCES chapters(id) ON DELETE SET NULL
      );
    `);

    res.status(200).json({ message: 'Database initialized successfully' });
  } catch (error) {
    console.error('Error initializing database:', error);
    res.status(500).json({ error: 'Failed to initialize database' });
  }
}

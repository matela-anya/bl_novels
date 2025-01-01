import React, { useEffect, useState } from 'react';
import Layout from '../../components/Layout';

const NovelPage = ({ id }) => {
  const [novel, setNovel] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`/api/novels/${id}`)
      .then(response => response.json())
      .then(data => {
        setNovel(data);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <Layout><p>Загрузка...</p></Layout>;
  }

  return (
    <Layout>
      <h1>{novel.title}</h1>
      <img src={novel.cover} alt={novel.title} />
      <p>{novel.description}</p>
      <p>Рейтинг: {novel.rating} / 5</p>
      <ul>
        {novel.chapters.map(chapter => (
          <li key={chapter.id}>
            <a href={`/chapter/${chapter.id}`}>Глава {chapter.number}: {chapter.title}</a>
          </li>
        ))}
      </ul>
    </Layout>
  );
};

// Для динамических маршрутов в Next.js
export async function getServerSideProps(context) {
  const { id } = context.params;
  return { props: { id } };
}

export default NovelPage;

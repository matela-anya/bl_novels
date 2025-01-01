import React, { useEffect, useState } from 'react';
import Layout from '../../components/Layout';
import Reader from '../../components/Reader';

const ChapterPage = ({ id }) => {
  const [chapter, setChapter] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`/api/chapters/${id}`)
      .then(response => response.json())
      .then(data => {
        setChapter(data);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <Layout><p>Загрузка...</p></Layout>;
  }

  return (
    <Layout>
      <Reader chapter={chapter} />
    </Layout>
  );
};

// Для динамических маршрутов в Next.js
export async function getServerSideProps(context) {
  const { id } = context.params;
  return { props: { id } };
}

export default ChapterPage;


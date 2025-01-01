import React, { useEffect, useState } from 'react';
import NovelCard from './NovelCard';

const NovelList = () => {
  const [novels, setNovels] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/novels')
      .then(response => response.json())
      .then(data => {
        setNovels(data);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>Загрузка...</p>;
  }

  return (
    <div className="novel-list">
      {novels.map(novel => (
        <NovelCard key={novel.id} novel={novel} />
      ))}
    </div>
  );
};

export default NovelList;


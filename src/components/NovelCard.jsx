import React from 'react';

const NovelCard = ({ novel }) => {
  return (
    <div className="novel-card">
      <img src={novel.cover} alt={novel.title} className="novel-cover" />
      <div className="novel-info">
        <h3>{novel.title}</h3>
        <p>{novel.rating} / 5</p>
        <p>{novel.tags.join(', ')}</p>
        <button onClick={() => window.location.href = `/novel/${novel.id}`}>Читать</button>
      </div>
    </div>
  );
};

export default NovelCard;

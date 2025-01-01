import React from 'react';

const Reader = ({ chapter }) => {
  return (
    <div className="reader">
      <h1>{chapter.title}</h1>
      <p>{chapter.content}</p>
      <div className="navigation">
        {chapter.prev && <button onClick={() => window.location.href = `/chapter/${chapter.prev}`}>Назад</button>}
        {chapter.next && <button onClick={() => window.location.href = `/chapter/${chapter.next}`}>Вперед</button>}
      </div>
    </div>
  );
};

export default Reader;


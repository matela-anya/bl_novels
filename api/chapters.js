export default async (req, res) => {
  const { id } = req.query;
  const chapter = {
    id,
    title: `Глава ${id}`,
    content: `Содержимое главы ${id}`,
    prev: id > 1 ? id - 1 : null,
    next: parseInt(id) + 1,
  };
  res.status(200).json(chapter);
};


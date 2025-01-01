export default async (req, res) => {
  const novels = [
    { id: 1, title: 'Новелла 1', rating: 4.5, tags: ['романтика'], cover: '/covers/novel1.jpg' },
    { id: 2, title: 'Новелла 2', rating: 4.7, tags: ['драма'], cover: '/covers/novel2.jpg' },
  ];
  res.status(200).json(novels);
};


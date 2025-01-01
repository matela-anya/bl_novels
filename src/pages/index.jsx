import React from 'react';
import NovelList from '../components/NovelList';
import Layout from '../components/Layout';

const HomePage = () => {
  return (
    <Layout>
      <h1>Список новелл</h1>
      <NovelList />
    </Layout>
  );
};

export default HomePage;


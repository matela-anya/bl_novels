import React from 'react';

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <header>
        <h1>BL Novels</h1>
        <nav>
          <a href="/">Главная</a>
        </nav>
      </header>
      <main>{children}</main>
      <footer>
        <p>© 2025 BL Novels</p>
      </footer>
    </div>
  );
};

export default Layout;


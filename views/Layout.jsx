const React = require('react');
const Navbar = require('../views/Navbar');

function Layout({ children, user }) {
  return (
    <html lang="ru">
      <head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" href="/css/bootstrap.min.css" />
        <link rel="stylesheet" href="/css/style.css" />
        <script defer src="/js/bootstrap.bundle.min.js" />
        <title>Foto</title>
      </head>
      <Navbar user={user} />
      <body>{children}</body>
    </html>
  );
}

module.exports = Layout;

const React = require('react');

function Navbar({ user }) {
  return (
    <>
      {user ? (
        <ul className="nav">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#">
              Все альбомы пользователя
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Добавить фото
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/logout">
              Выход
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link disabled">{user.name}</a>
          </li>
        </ul>
      ) : (
        <li className="nav-item">
          <a className="nav-link disabled">Войдите</a>
        </li>
      )}
    </>
  );
}
module.exports = Navbar;

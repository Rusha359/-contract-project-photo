const React = require('react');

function Navbar({ user }) {
  return (
    <>
      <nav className="navbar bg-light">
        <div className="container">
          <a className="navbar-brand" href="/">
            <img src="/img/D P A .png" alt="DPA" width="30" height="24" />
          </a>
          <h1>Your digital photo album</h1>
        </div>
      </nav>
      {user ? (
        <ul className="nav">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="/albums">
              Мои альбомы
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href={`/profile/${user.id}`}>
              личный кабинет
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/upload">
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
        <div className="container">
          <div className="list-group">
            <a
              href="/login"
              className="list-group-item list-group-item-action list-group-item-primary"
            >
              Войти
            </a>

            <a
              href="/registration"
              className="list-group-item list-group-item-action list-group-item-success"
            >
              Зарегистрироваться
            </a>
          </div>
        </div>
      )}
    </>
  );
}
module.exports = Navbar;

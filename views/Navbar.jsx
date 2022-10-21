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
            <a className="nav-link active" aria-current="page" href={`/albums/${user.id}`}>
              Мои альбомы
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href={`/profile/${user.id}`}>
              Личный кабинет
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href={`/mynewalbum/${user.id}`}>
              Создать новый альбом
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/logout">
              Выход
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link disabled"> Привет {user.name}</a>
          </li>
        </ul>
      ) : (
        <div className="container text-center row">
          <div className="col">
            <div className="alert alert-primary" role="alert">
              <a href="/login" className="btn btn-primary active" aria-current="page">
                Войти
              </a>
              <div className="col">
                <div className="alert">
                  <a href="/registration" className="btn btn-primary">
                    Зарегистрироваться
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
module.exports = Navbar;

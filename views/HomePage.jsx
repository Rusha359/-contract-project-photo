const React = require('react');
const Layout = require('./Layout');

function HomePage({ user }) {
  return (
    <Layout user={user}>
      {user ? (
        <>
          <h2>Мои альбомы</h2>
          <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img
                  src="https://mirpozitiva.ru/wp-content/uploads/2019/11/1472042719_15.jpg"
                  className="d-block w-100"
                  alt="..."
                />
              </div>
              <div className="carousel-item">
                <img src="..." className="d-block w-100" alt="..." />
              </div>
              <div className="carousel-item">
                <img src="..." className="d-block w-100" alt="..." />
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleControls"
              data-bs-slide="prev"
            >
              <span className="carousel-control-prev-icon" aria-hidden="true" />
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleControls"
              data-bs-slide="next"
            >
              <span className="carousel-control-next-icon" aria-hidden="true" />
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </>
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
    </Layout>
  );
}

module.exports = HomePage;

const React = require('react');
const Layout = require('./Layout');

function HomePage({ user }) {
  return (
    <Layout user={user}>
      {user ? (
        <>
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
                <img
                  src="https://funik.ru/wp-content/uploads/2018/10/0a37dbac85e134cfb3a5.jpg"
                  className="d-block w-100"
                  alt="..."
                />
              </div>
              <div className="carousel-item">
                <img
                  src="https://funik.ru/wp-content/uploads/2018/10/547c45340245c1650014.jpg"
                  className="d-block w-100"
                  alt="..."
                />
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
          <h1>публичные альбомы</h1>
        </div>
      )}
    </Layout>
  );
}

module.exports = HomePage;

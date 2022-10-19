const React = require('react');
const Layout = require('./Layout');
// const AlbumCard = require('./AlbumCard');

function UserAlbums({ album }) {
  return (
    <Layout>
      <form action="/albums">
        <div className="row row-cols-1 row-cols-md-2 g-4">
          <div className="col">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Album 1</h5>
                <p className="card-text">Comments</p>
                <button type="button">Посмотреть альбом</button>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Album 2</h5>
                <p className="card-text">Comments</p>
                <button type="button">Посмотреть альбом</button>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Album 3</h5>
                <p className="card-text">Comments</p>
                <button type="button">Посмотреть альбом</button>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">

              <div className="card-body">
                <h5 className="card-title">Album 4</h5>
                <p className="card-text">Comments</p>
                <button type="button">Посмотреть альбом</button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </Layout>
  );
}

module.exports = UserAlbums;

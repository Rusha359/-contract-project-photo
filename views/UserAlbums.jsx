const React = require('react');
const Layout = require('./Layout');

function UserAlbums({ albums, user, albumsvis }) {
  return (
    <Layout albums={albums} user={user} albumsvis={albumsvis}>
      <div className="container container__albums">
        <div>
          <p>
            {albums.length === 0 ? (
              <p>
                У вас еще нет альбомов{' '}
                <li className="nav-item">
                  <a className="nav-link active" href={`/mynewalbum/${user.id}`}>
                    Создать новый альбом
                  </a>
                </li>
              </p>
            ) : (
              <p>Ваши альбомы</p>
            )}
          </p>
          {albums.map((album) => (
            <div className="card" key={album.id} style={{ width: '18rem' }}>
              <img src={album.title_img} className="card-img-top" alt={album.title} />
              <div className="card-body">
                <h5 className="card-title">{album.title}</h5>
                <a
                  href={`/photo/albums/${album.id}`}
                  className="btn btn-outline-secondary p-3 border"
                  key={album.id}
                >
                  Посмотреть альбом
                </a>
              </div>
            </div>
          ))}
        </div>

        <div>
          <p>Публичные альбомы</p>
          {albumsvis.map((albumv) => (
            <div key={albumv.id} className="card" style={{ width: '18rem' }}>
              <img src={albumv.title_img} className="card-img-top" alt={albumv.title} />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">{albumv.title}</p>
                <a
                  href={`/albums/${albumv.id}`}
                  className="btn btn-outline-secondary"
                  key={albumv.id}
                >
                  Посмотреть альбом
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
      <script defer src="/js/viewalbum.js" />
    </Layout>
  );
}

module.exports = UserAlbums;

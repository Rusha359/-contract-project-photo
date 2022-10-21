const React = require('react');
const Layout = require('./Layout');
const VisibilityAlbums = require('./VisibilityAlbums');

function UserAlbums({ albums, user }) {
  return (
    <Layout albums={albums} user={user}>
      <div className="row row-cols-2 row-cols-md-2 g-4">
        {albums.map((album) => (
          <div
            key={album.id}
            className="card"
            style={{ width: '18rem', maxHeight: 500 }}
          >
            <img src={album.title_img} className="card-img-top" alt={album.title} />
            <div className="card-body">
              <h5 className="card-title">{album.title}</h5>
            </div>
            <a
              href={`/photo/albums/${album.id}`}
              className="btn btn-outline-secondary p-3 border"
              key={album.id}
            >
              Посмотреть альбом
            </a>
          </div>
        ))}
        <div>
          <p>Публичные альбомы</p>
          <VisibilityAlbums albums={albums} />
        </div>
      </div>
      <script defer src="/js/viewalbum.js" />
    </Layout>
  );
}

module.exports = UserAlbums;

const React = require('react');
const Layout = require('./Layout');

function UserAlbums({ albums, user }) {
  console.log(albums);
  return (
    <Layout albums={albums} user={user}>
      <div className="row row-cols-1 row-cols-md-2 g-4">
        {albums.map((album) => (
          <div
            key={album.id}
            className="js-answer card card-body align-items-center"
            style={{ width: '12rem' }}
          >
            <img src={album.title_img} className="card-img-top" alt={album.title} />
            <div className="card-body">
              <h5 className="card-title">{album.title}</h5>
            </div>
            <a href={`/albums/${album.id}`} className="btn btn-outline-secondary" key={album.id}>
              Посмотреть альбом
            </a>
          </div>
        ))}
      </div>
      <script defer src="/js/viewalbum.js" />
    </Layout>
  );
}

module.exports = UserAlbums;

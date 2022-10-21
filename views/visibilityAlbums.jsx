const React = require('react');

function VisibilityAlbums({ albums }) {
  return (
    <div className="row row-cols-1 row-cols-md-3 g-2 ">
      <div className="col">
        {albums.map((album) => (
          <div
            key={album.id}
            className="card"
            style={{ width: '12rem', padding: '20px' }}
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
    </div>
  );
}

module.exports = VisibilityAlbums;

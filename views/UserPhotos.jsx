const React = require('react');
const Layout = require('./Layout');

function UserPhotos({ photos, user, albumsId }) {
  return (
    <Layout photos={photos} user={user} albumsId={albumsId}>
      <div className="row row-cols-1 row-cols-md-2 g-4">
        <p>здесь будут фото</p>
        <div>
          {' '}
          <a
            href={`/photo/add/albums/${albumsId}`}
            className="btn btn-outline-secondary p-3 border"
          >
            Добавить фотографии в альбом
          </a>
        </div>

        {photos.map((photo) => (
          <div
            // key={photo.id}
            className="js-answer card card-body align-items-center"
            style={{ width: '12rem' }}
          >
            <img src={`/${photo.img}`} className="card-img-top" alt="#" />
            <div className="photo-body">
              <h5 className="photo-title">{photo.id}</h5>
            </div>
            <a href="#" className="btn btn-outline-secondary">
              Посмотреть
            </a>
          </div>
        ))}
      </div>
      <script defer src="/js/addPhoto.js" />
    </Layout>
  );
}

module.exports = UserPhotos;

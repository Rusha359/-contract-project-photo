const React = require('react');
const Layout = require('./Layout');

function UserPhotos({ photos, user }) {
  return (
    <Layout photos={photos} user={user}>
      <div className="row row-cols-1 row-cols-md-2 g-4">
        <p>здесь будут фото</p>
        {photos.map((photo) => (
          <div
            key={photo.id}
            className="js-answer card card-body align-items-center"
            style={{ width: '12rem' }}
          >
            <img src={photo.title_img} className="card-img-top" alt={photo.title} />
            <div className="photo-body">
              <h5 className="photo-title">{photo.title}</h5>
            </div>
            <a href={`/photos/${photo.id}`} className="btn btn-outline-secondary" key={photo.id}>
              Посмотреть
            </a>
          </div>
        ))}
      </div>
    </Layout>
  );
}

module.exports = UserPhotos;
const React = require('react');
const Layout = require('./Layout');

function FormAddPhoto({ user, albumsId }) {
  return (
    <Layout user={user}>
      <form
        id="formAddPhoto"
        action={`/photo/add/albums/${albumsId}`}
        encType="multipart/form-data"
        data-id={albumsId}
        data-userId={user.id}
      >
        <div className="mb-3">
          <label htmlFor="formFileMultiple" className="form-label">
            Добавить фотографию
          </label>
          <input className="form-control" name="file" type="file" id="formFileMultiple" multiple />
        </div>
        <button type="submit" className="btn btn-outline-primary">
          Primary
        </button>
      </form>
      <script defer src="/js/addPhoto.js" />
    </Layout>
  );
}

module.exports = FormAddPhoto;

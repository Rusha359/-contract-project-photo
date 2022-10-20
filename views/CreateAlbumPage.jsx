const React = require('react');
const Layout = require('./Layout');

module.exports = function CreateAlbumPage({ user }) {
  return (
    <Layout user={user}>
      <section className="container">
        <form
          className="js-newalbum"
          method="POST"
          action={`/mynewalbum/${user.id}`}
          data-id={user.id}
        >
          <div className="mb-3">
            <label className="form-label">Название нового альбома</label>
            <input name="title" type="text" className="form-control" />
          </div>
          <select name="visibility" className="form-select" aria-label="Default select example">
            <option selected>Выберите видимость альбома</option>
            <option value="public">Public</option>
            <option value="private">Private</option>
          </select>
          <section className="container">
            <input className="btn btn-primary" type="submit" value="Submit" />
          </section>
        </form>
      </section>
      <script defer src="/js/createalbum.js" />
    </Layout>
  );
};

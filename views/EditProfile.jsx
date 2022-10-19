const React = require('react');
const Layout = require('./Layout');

function EditProfile({ user }) {
  return (
    <Layout user={user}>
      <main className="">
        <h2>Внесите изменения</h2>
        <div className="container-xxl input-group">
          <form
            id="editProfileform"
            action={`/edit/${user.id}`}
            encType="multipart/form-data"
            data-id={user.id}
          >
            <div className="mb-3">
              <label htmlFor="formFileMultiple" className="form-label">
                Multiple files input example
              </label>
              <input
                className="form-control"
                name="file"
                type="file"
                id="formFileMultiple"
                multiple
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Name
              </label>
              <input
                type="text"
                name="name"
                value={user.name}
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                email
              </label>
              <input
                type="email"
                name="email"
                value={user.email}
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
            </div>
            <button type="submit" className="btn btn-success">
              Сохранить изменения
            </button>
          </form>
        </div>
      </main>
      <script defer src="/js/edit.js" />
    </Layout>
  );
}

module.exports = EditProfile;

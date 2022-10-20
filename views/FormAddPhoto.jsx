const React = require('react');
const Layout = require('./Layout');

function FormAddPhoto({ user }) {
  return (
    <Layout user={user}>
      <form
        id="formAddPhoto"
        action={`/addphoto/${user.id}`}
        encType="multipart/form-data"
        data-id={user.id}
      >
        <div class="mb-3">
          <label for="formFileMultiple" class="form-label">
            Multiple files input example
          </label>
          <input class="form-control" type="file" id="formFileMultiple" multiple />
        </div>
      </form>
    </Layout>
  );
}

module.exports = FormAddPhoto;

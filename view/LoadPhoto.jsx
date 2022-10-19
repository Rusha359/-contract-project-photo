const React = require('react');
const Layout = require('./Layout');

module.exports = function Album() {
    return (
      <Layout>
          <h1> Загрузка изображения</h1>
          <form id='upload' method='POST' action='upload' encType='multipart/form-data'>
              <input type="file" name="image" />
              <input type="submit" />
          </form>
          
        </Layout>
    )
}

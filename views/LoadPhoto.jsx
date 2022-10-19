const React = require('react');
const Layout = require('../views/Layout');

module.exports = function Album({ user }) {
    return (
        <Layout user={user}>
            <h1> Загрузка изображения</h1>
            <form id='upload' method='POST' action='/upload' encType='multipart/form-data'>
                <input id='preload' type="file" name="image" />
                <input type="submit" />
            </form>
            <img id="viewImg" />
            <script defer src="/js/preload.js" />
        </Layout>
    )
}

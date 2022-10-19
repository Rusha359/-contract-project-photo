const React = require('react');
const Layout = require('./Layout');

function AlbumCard({ album }) {
  return (
    <Layout>
      <div className="album m-4" style={{ width: '18rem' }}>
        <div className="album-body">
          <h5 className="album-title">Название</h5>
          <p className="album-text" />
          <button type="submit">Edit album</button>
          <button type="submit">Delete album</button>
        </div>
      </div>
    </Layout>
  );
}

module.exports = AlbumCard;

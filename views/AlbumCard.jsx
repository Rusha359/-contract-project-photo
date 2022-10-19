const React = require('react');
const Layout = require('./Layout');

function AlbumCard({ album }) {
  return (
    <Layout album={album}>
      <div className="album m-4" style={{ width: '18rem' }}>
        <div className="album-body">
          <h5 className="album-title">Альбом</h5>
          <img src="{album.title_img}" className="card-img-top" alt="..." />
          <br />
          <button type="submit" className="btn btn-outline-success">Edit album</button>
          <button type="submit" className="btn btn-outline-secondary">Delete album</button>
        </div>
      </div>
    </Layout>
  );
}

module.exports = AlbumCard;

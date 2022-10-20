const React = require('react');
const Layout = require('./Layout');

function AlbumCard({ photos, user }) {
  return (
    <Layout photo ={photos} user={user}>
      <div className="album m-4" style={{ width: '18rem' }}>
        <div className="album-body">
          <h5 className="album-title">Альбом</h5>
          <img src="" className="card-img-top" alt="..." />
          <br />
          <button type="submit" className="btn btn-outline-success">Edit album</button>
          <button type="submit" className="btn btn-outline-secondary">Delete album</button>
        </div>
      </div>
    </Layout>
  );
}

// function AlbumCard({ albums, user }) {
//   return (
//     <Layout album={albums} user={user}>
//       <div className="album m-4" style={{ width: '18rem' }}>
//         <section className='photo'>
//           {
//             albums.map(((photo) => (
//               <section className='photo-one'>
//               <img src=
//             )))
//           }
//           <div className="album-body">
//             <h5 className="album-title">Альбом</h5>
//             <img src="{album.title_img}" className="card-img-top" alt="..." />
//             <br />
//             <button type="submit" className="btn btn-outline-success">Edit album</button>
//             <button type="submit" className="btn btn-outline-secondary">Delete album</button>
//           </div>
//       </div>
//     </Layout>
//   );
// }

module.exports = AlbumCard;

const btnAlbum = document.querySelector('form');

btnAlbum.addEventListener('click', (event) => {
  event.preventDefault();
  console.log(event.target);
  const { id } = event.target.album.id;
  console.log(id);
});

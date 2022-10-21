const album = document.querySelector('.js-newalbum');
const albumcreated = document.querySelector('.js-albumcreate');

album.addEventListener('submit', async (event) => {
  event.preventDefault();
  const { id } = event.target.dataset;
  const { title, visibility } = event.target;
  const responce = await fetch(`/mynewalbum/${id}`, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify({
      title: title.value,
      visibility: visibility.value,
    }),
  });
  const data = await responce.json();
  if (data.status === 'created') {
    albumcreated.innerHTML = data.message;
  }
});

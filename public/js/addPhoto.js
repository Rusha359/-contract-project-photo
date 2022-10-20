const formAddPhoto = document.querySelector('#formAddPhoto');
console.log(formAddPhoto);

// fetch на изменение профиля

formAddPhoto.addEventListener('submit', async (event) => {
  event.preventDefault();
  const { id } = event.target.dataset;
  console.log(event.target.dataset);
  const file = event.target.file.files[0];
  const data = new FormData();
  data.append('newPhoto', file);
  console.log(data);
  const res = await axios.post(`/photo/add/albums/${id}`, data, {
    headers: {
      'Content-type': 'multipart/form-data',
    },
  });
});

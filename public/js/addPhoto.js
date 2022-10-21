const formAddPhoto = document.querySelector('#formAddPhoto');
console.log(formAddPhoto);

// кнопка добавить фото

// fetch добавление фото

formAddPhoto.addEventListener('submit', async (event) => {
  event.preventDefault();
  const { id } = event.target.dataset;
  const { userId } = event.target.dataset;
  console.log(userId);
  const file = event.target.file.files[0];
  const data = new FormData();
  data.append('newPhoto', file);
  console.log(data);
  const res = await axios.post(`/photo/add/albums/${id}`, data, {
    headers: {
      'Content-type': 'multipart/form-data',
    },
  });

  if (res.status === 201) {
    window.location.assign(`/photo/albums/${id}`);
  }
});

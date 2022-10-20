const editProfileform = document.querySelector('#editProfileform');
console.log(editProfileform);

// fetch на изменение профиля

editProfileform.addEventListener('submit', async (event) => {
  event.preventDefault();
  const { id } = event.target.dataset;
  const file = event.target.file.files[0];
  const data = new FormData();
  data.append('avatar', file);
  const res = await axios.post(`/edit/${id}`, data, {
    headers: {
      'Content-type': 'multipart/form-data',
    },
  });
});

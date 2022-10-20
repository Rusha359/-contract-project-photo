const album = document.querySelector('.js-newalbum');

album.addEventListener('submit', async (event) => {
    event.preventDefault();
    const { id } = event.target.dataset;
    console.log(id);
    const { title, visibility } = event.target
    console.log(visibility.value, title)
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
});

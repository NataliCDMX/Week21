const button = document.querySelector('.search__button');
function onSearch() {
    const searchUser = document.querySelector('.search');
    const searchValue = searchUser.value;
    const apiKey = '93fxayBlyn5YQH9NoaFPfmzH9k61rGKw'
    fetch(`https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${searchValue}&limit=5&offset=0&rating=g&lang=en`)
        .then(response => response.json())
        .then(gifka => {
            console.log(gifka.data[0]);

            document.getElementById('gif').src = gifka.data[0].images.fixed_height.url;

        })
        .catch(error => console.log(error));
}

button.addEventListener('click', () => {
    onSearch();
})


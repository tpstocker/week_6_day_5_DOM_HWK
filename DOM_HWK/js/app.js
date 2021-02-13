document.addEventListener('DOMContentLoaded', () => {
    const newItemForm = document.querySelector('#new-game-form');
    newItemForm.addEventListener('submit', handleNewItemFormSubmit);

    const deleteAllButton = document.querySelector('#delete-all');
    deleteAllButton.addEventListener('click', handleDeleteAllClick);
})

const handleNewItemFormSubmit = function(event) {
    event.preventDefault();

    const gameListItem = createGameListItem(event.target);
    const gameList = document.querySelector('#game-list');
    gameList.appendChild(gameListItem);

    event.target.reset();
}

const createGameListItem = function(form) {
    const gameListItem = document.createElement('li');
    gameListItem.classList.add('game-list-item');

    const gameTitle = document.createElement('h2');
    gameTitle.textContent = form.gameTitle.value;
    gameListItem.appendChild(gameTitle);

    const genre = document.createElement('h3');
    genre.textContent = form.genre.value;
    gameListItem.appendChild(genre);

    const platform = document.createElement('h3');
    platform.textContent = form.platform.value;
    gameListItem.appendChild(platform);

    const developer = document.createElement('h3');
    developer.textContent = form.developer.value;
    gameListItem.appendChild(developer);

    const releaseDate = document.createElement('h3');
    releaseDate.textContent = form.releaseDate.value;
    gameListItem.appendChild(releaseDate);

    return gameListItem;
}

const handleDeleteAllClick = function(event) {
    const gameList = document.querySelector('#game-list');
    gameList.innerHTML = '';
  }

const rebuildOtter = async() => {
    const titleDiv = document.querySelector('body').firstElementChild;
    titleDiv.classList.add('title');

    const cardSection = document.querySelector('section');
    cardSection.id = 'cardContainer';
}

rebuildOtter();


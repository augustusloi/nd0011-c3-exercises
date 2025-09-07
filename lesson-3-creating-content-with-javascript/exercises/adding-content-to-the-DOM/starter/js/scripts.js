const rebuildOtter = async() => {
    const titleDiv = document.querySelector('body').firstElementChild;
    titleDiv.classList.add('title');

    const cardSection = document.querySelector('section');
    cardSection.id = 'cardContainer';

    const documentFragment = document.createDocumentFragment();

    const profileCardDiv = document.createElement('div');
    profileCardDiv.classList.add('profileCard');
}

rebuildOtter();


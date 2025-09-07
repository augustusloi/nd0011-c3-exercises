const rebuildOtter = async() => {
    const titleDiv = document.querySelector('body').firstElementChild;
    titleDiv.classList.add('title');

    const cardSection = document.querySelector('section');
    cardSection.id = 'cardContainer';

    const documentFragment = document.createDocumentFragment();

    const profileCardDiv = document.createElement('div');
    profileCardDiv.classList.add('profileCard');

    const pictureDiv = document.createElement('div');
    pictureDiv.classList.add('picFrame');

    const picture = document.createElement('img');
    picture.src = './images/otter_profile.webp';
    picture.alt = 'profilePic';

    pictureDiv.append(picture);
    profileCardDiv.append(pictureDiv);
}

rebuildOtter();


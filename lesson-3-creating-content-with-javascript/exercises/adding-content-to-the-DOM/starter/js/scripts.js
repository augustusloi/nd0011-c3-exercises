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

    const profileDiv = document.createElement('div');
    profileDiv.classList.add('userInfo');

    const userInfoDiv = document.createElement('div');
    const userName = document.createElement('h2');
    userName.textContent = 'Whiskers McOtter';
    const userBio = document.createElement('p');
    userBio.textContent = `Hi! My name is Whiskers McOtter and I'm from Seattle, Washington. Some of my favorite things are Frappuccinos and fish.`;

    userInfoDiv.append(userName, userBio);
    profileDiv.append(userInfoDiv);

    const buttonDiv = document.createElement('div');
    const onlineButton = document.createElement('button');
    onlineButton.classList.add('active');
    onlineButton.textContent = 'Online now!';

    buttonDiv.append(onlineButton);
    profileDiv.append(buttonDiv);

    profileCardDiv.append(profileDiv);

    documentFragment.append(profileCardDiv);

    cardSection.append(documentFragment);
}

rebuildOtter();


const restyleOtter = async() => {
    const titleDiv = document.querySelector('body').firstElementChild;
    console.log(titleDiv);
    titleDiv.classList.add('title');
    
    const cardContainer = titleDiv.nextElementSibling;
    cardContainer.id = 'cardContainer';
}

restyleOtter();


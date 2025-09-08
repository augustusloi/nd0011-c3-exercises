const handleClick = (event) => {
    const productCard = event.target.closest('.product-card');

    const selectedCard = productCard.querySelector('.product-name').textContent;

    alert(`You selected the ${selectedCard}. Good Choice!`);
};


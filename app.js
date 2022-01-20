//Grab a couple of things
const section = document.querySelector('section');
const playerLivesCount = document.querySelector('span');
const playerLives = 6;

//Link text
playerLivesCount.textContent = playerLives;

//Generate the data
const getData = () => [
	{ imgSrc: './images/cheaptrick.jpg', name: 'cheap trick' },
	{ imgSrc: './images/elviscostello.jpg', name: 'elvis costello' },
	{ imgSrc: './images/eminem.jpg', name: 'eminem' },
	{ imgSrc: './images/mcr.jpg', name: 'my chemical romance' },
	{ imgSrc: './images/muse.jpg', name: 'muse' },
	{ imgSrc: './images/nirvana.jpg', name: 'nirvana' },
	{ imgSrc: './images/nofx.jpg', name: 'nofx' },
	{ imgSrc: './images/wutang.jpg', name: 'wu tang clan' },
	{ imgSrc: './images/cheaptrick.jpg', name: 'cheap trick' },
	{ imgSrc: './images/elviscostello.jpg', name: 'elvis costello' },
	{ imgSrc: './images/eminem.jpg', name: 'eminem' },
	{ imgSrc: './images/mcr.jpg', name: 'my chemical romance' },
	{ imgSrc: './images/muse.jpg', name: 'muse' },
	{ imgSrc: './images/nirvana.jpg', name: 'nirvana' },
	{ imgSrc: './images/nofx.jpg', name: 'nofx' },
	{ imgSrc: './images/wutang.jpg', name: 'wu tang clan' },
];

// Randomize
const randomize = () => {
    const cardData = getData();
    cardData.sort(() => Math.random() -0.5);
    return cardData;
}

// Card Generator Function
const cardGenerator = () => {
    const cardData = randomize();
    // Generate HTML
    const cards = document.querySelectorAll('.card');
    cardData.forEach((item) => {
        const card =document.createElement('div');
        const face =document.createElement('img');
        const back =document.createElement('div');
        card.classList = 'card';
        face.classList = 'face';
        back.classList = 'back';
        // Attach the info to the cards
        face.src = item.imgSrc;
        card.setAttribute('name', item.name)
        // Attach the cards to the section
        section.appendChild(card);
        card.appendChild(face);
        card.appendChild(back);

        card.addEventListener('click', (e) => {
            card.classList.toggle('toggleCard')
            checkCards(e)
        })
    })
};

// Check Cards
const checkCards = (e) => {
    console.log(e);
    const clickedCard = e.target
    clickedCard.classList.add('flipped');
    const flippedCards = document.querySelectorAll('.flipped')
    console.log(flippedCards);
    // Logic
    if(flippedCards.length === 2){
        if(
            flippedCards[0].getAttribute('name') === 
            flippedCards[1].getAttribute('name')){
                console.log('match');
                flippedCards.forEach((card) => {
                    card.classList.remove('flipped');
                    card.style.pointerEvents = 'none';
                })
            } else {
                console.log('wrong');
                flippedCards.forEach((card) => {
                    card.classList.remove('flipped');
                    setTimeout(() => card.classList.remove('toggleCard'), 1000)
                })
            }
            
    }
}

cardGenerator()

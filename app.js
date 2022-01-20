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
	{ imgSrc: './images/muse.jpeg', name: 'muse' },
	{ imgSrc: './images/nirvana.jpeg', name: 'nirvana' },
	{ imgSrc: './images/nofx.jpg', name: 'nofx' },
	
	{ imgSrc: './images/wutang.jpg', name: 'wu tang clan' },
	{ imgSrc: './images/cheaptrick.jpg', name: 'cheap trick' },
	{ imgSrc: './images/elviscostello.jpg', name: 'elvis costello' },
	{ imgSrc: './images/eminem.jpg', name: 'eminem' },
	{ imgSrc: './images/mcr.jpg', name: 'my chemical romance' },
	{ imgSrc: './images/muse.jpeg', name: 'muse' },
	{ imgSrc: './images/nirvana.jpeg', name: 'nirvana' },
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
    cardData.forEach(item => {
        const card =document.createElement('div');
        const face =document.createElement('img');
        const back =document.createElement('div');
        card.classList = 'card';
        face.classList = 'face';
        back.classList = 'back';
        // Attach the info to the cards
        face.src = item.imgSrc;
        // Attach the cards to the section
        section.appendChild(card);
        card.appendChild(face);
        card.appendChild(back);
    })
};

cardGenerator()

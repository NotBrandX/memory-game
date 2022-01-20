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
	{ imgSrc: './images/vulfpeck.jpeg', name: 'vulfpeck' },
	{ imgSrc: './images/wutang.jpg', name: 'wu tang clan' },
	{ imgSrc: './images/cheaptrick.jpg', name: 'cheap trick' },
	{ imgSrc: './images/elviscostello.jpg', name: 'elvis costello' },
	{ imgSrc: './images/eminem.jpg', name: 'eminem' },
	{ imgSrc: './images/mcr.jpg', name: 'my chemical romance' },
	{ imgSrc: './images/muse.jpeg', name: 'muse' },
	{ imgSrc: './images/nirvana.jpeg', name: 'nirvana' },
	{ imgSrc: './images/nofx.jpg', name: 'nofx' },
	{ imgSrc: './images/vulfpeck.jpeg', name: 'vulfpeck' },
	{ imgSrc: './images/wutang.jpg', name: 'wu tang clan' },
];

// Randomize
const randomize = () => {
    const cardData = getData();

    cardData.sort(() => Math.random() -0.5);
    console.log(cardData);
}

randomize();


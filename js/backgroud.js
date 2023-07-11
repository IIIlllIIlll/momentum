const images = ["0.jpg", "1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg"];

const chosenImgae = images[Math.floor(Math.random() * images.length)];

const bgImges = `img/${chosenImgae}`;
document.body.style.backgroundImage = `url(${bgImges})`;

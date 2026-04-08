/*Покласти в папку будь-які зображення 1.jpg, 2.jpg, 3.jpg, 4.jpg, 5.jpg, 6.jpg, 7.jpg, 8.jpg, 9.jpg. 
Вивести зображення, отримане випадковим чином (Math.random)*
*/
const images = [
  "img/1.jpg",
  "img/2.jpg",
  "img/3.jpg",
  "img/4.jpg",
  "img/5.jpg",
  "img/6.jpg",
  "img/7.jpg",
  "img/8.jpg",
  "img/9.jpg",
  "img/10.jpg"
];

const img = document.querySelector("img");

const randomIndex = Math.floor(Math.random() * images.length);
img.setAttribute("src", images[randomIndex]);

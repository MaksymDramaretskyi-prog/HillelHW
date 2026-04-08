let currentIndex = 0;
const images = [
  "img/img1.png",
  "img/img2.jpg",
  "img/img3.jpg",
];

const prevBtn = document.querySelector(".slider-btn-prev")
const nextBtn = document.querySelector(".slider-btn-next");
const dotsContainer = document.querySelector(".slider-dots");


const img = document.querySelector("img");
img.src = images[currentIndex];
dotsContainer.innerHTML = "";

for(let i = 0; i < images.length ; i++){
  let spanDots = document.createElement("span");
  spanDots.classList.add("dot")

  spanDots.addEventListener("click", ()=> {
    currentIndex = i;

    updateImage();
    updateButtons();
    updateDots();
  });

  dotsContainer.appendChild(spanDots);
}

updateDots();
updateButtons();

prevBtn.addEventListener("click",() =>{
  if(currentIndex > 0 ){
    currentIndex--;
    updateImage();
    updateButtons();
    updateDots()
  }
});

nextBtn.addEventListener("click",() =>{
  if(currentIndex < images.length - 1){
    currentIndex++;
    updateImage();
    updateButtons();
    updateDots();
  };
});


function updateImage() {
  img.src = images[currentIndex];
}

function updateButtons() {
  if (currentIndex === 0) {
    prevBtn.classList.add("disabled");
  } else{
    prevBtn.classList.remove("disabled")
  }
  if (currentIndex === images.length - 1) {
    nextBtn.classList.add("disabled");
  } else {
    nextBtn.classList.remove("disabled");
  }
}

function updateDots() {
  const spanDotsClass = document.querySelectorAll(".dot"); 
  spanDotsClass.forEach(dot => dot.classList.remove("active"));
  spanDotsClass[currentIndex].classList.add("active");
}

const bannerText = document.querySelector("h2")
const bannerButton = document.querySelector("button");

bannerButton.addEventListener("click", function(){
  bannerText.classList.toggle("red")
  console.log("clikk")
});

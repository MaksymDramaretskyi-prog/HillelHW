  const div = document.querySelector("div");

  div.addEventListener("click", function(event ){
    const target  = event.target;
    if(target.tagName === "BUTTON") {
      console.log(event.target);
      alert(`Сlick on the ${target.textContent}`)
    }
  });
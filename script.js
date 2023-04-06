
function reveal() {
    var reveals = document.querySelectorAll(".text-box");
  
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight/5*3;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible =-200;
  
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }
  window.addEventListener("scroll", reveal);
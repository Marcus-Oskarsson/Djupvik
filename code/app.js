const hamburger = document.getElementById("hamburger")

const toggleHamburgerMeny =() => {
    const links = document.querySelector("nav");
    links.classList.toggle("nav-active")
  } 

  hamburger.addEventListener("click", toggleHamburgerMeny)
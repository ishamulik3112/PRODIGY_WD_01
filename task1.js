// Get the navbar element
const navbar = document.getElementById("navbar");

// Function to add the 'scrolled' class to the navbar when scrolled
window.onscroll = function() {
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
};

// Show the scroll-to-top button when the user scrolls down 20px from the top
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("scroll-to-top-btn").style.display = "block";
  } else {
    document.getElementById("scroll-to-top-btn").style.display = "none";
  }
}

// Scroll back to the top when the user clicks on the button
document.getElementById("scroll-to-top-btn").addEventListener("click", function() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});

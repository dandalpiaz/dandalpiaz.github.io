document.addEventListener("DOMContentLoaded", function(event) {

  var mode = localStorage.getItem("mode");
  var lightToggleButton = document.getElementById("light-toggle");
  if (mode == "light") {
    document.body.classList.toggle("darkmode");
    lightToggleButton.classList.toggle("fa-sun");
    lightToggleButton.classList.toggle("fa-moon");
    lightToggleButton.style.color = "rgba(0, 0, 0, 0.8)";
  }

});

function lightToggle() {
  
  var mode = localStorage.getItem("mode");
  var lightToggleButton = document.getElementById("light-toggle");
  
  if (mode == "light") {
    lightToggleButton.style.color = "rgba(250, 250, 250, 0.8)";
    localStorage.setItem("mode", "dark");
  }
  if (mode == "dark" || mode == null) {
    lightToggleButton.style.color = "rgba(0, 0, 0, 0.8)";
    localStorage.setItem("mode", "light");
  }

  document.body.classList.toggle("darkmode");
  lightToggleButton.classList.toggle("fa-sun");
  lightToggleButton.classList.toggle("fa-moon");
}
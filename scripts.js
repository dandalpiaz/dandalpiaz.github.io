document.addEventListener("DOMContentLoaded", function(event) {

  var mode = getCookie("mode");
  var lightToggleButton = document.getElementById("light-toggle");
  if (mode == "light") {
    document.body.classList.toggle("darkmode");
    lightToggleButton.classList.toggle("fa-sun");
    lightToggleButton.classList.toggle("fa-moon");
    lightToggleButton.style.color = "rgba(0, 0, 0, 0.8)";
  }

});

function getCookie(cname) {
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';');
  for(var i = 0; i <ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

function lightToggle() {
  
  var mode = getCookie("mode");
  var lightToggleButton = document.getElementById("light-toggle");
  
  if (mode == "light") {
    lightToggleButton.style.color = "rgba(250, 250, 250, 0.8)";
    document.cookie = "mode=dark; expires=Thu, 18 Dec 2030 12:00:00 UTC";
  }
  if (mode == "dark" || mode == null) {
    lightToggleButton.style.color = "rgba(0, 0, 0, 0.8)";
    document.cookie = "mode=light; expires=Thu, 18 Dec 2030 12:00:00 UTC";
  }

  document.body.classList.toggle("darkmode");
  lightToggleButton.classList.toggle("fa-sun");
  lightToggleButton.classList.toggle("fa-moon");
}


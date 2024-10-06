  const appsIcon = document.getElementById("appsIcon");
  const popupcard = document.getElementById("popupcard");
  const darkbutton = document.getElementById("darkModeToggle");
  const body = document.body;
  const links = document.querySelectorAll('body a[href]');

  popupcard.style.display = "none";

  appsIcon.addEventListener("click", (event) => {
    event.preventDefault(); 
    
    if (popupcard.style.display === "none" || popupcard.style.display === "") {
      popupcard.style.display = "grid";
    } else {
      popupcard.style.display = "none";
    }
  });

  document.addEventListener("click", (event) => {

    if (!popupcard.contains(event.target) && !appsIcon.contains(event.target)) {
      popupcard.style.display = "none";
    }
  });

  darkbutton.addEventListener('click', function(){
    body.classList.toggle('dark-mode');
    
  });
 
  links.forEach(link => {
    link.classList.toggle('lightlinks');
  });
document.addEventListener('DOMContentLoaded', function () {
    // Obține elementul cu id-ul "navbar"
    var navbar = document.getElementById('navbar');

    // Adaugă un ascultător de eveniment de clic pe bara de navigare
    navbar.addEventListener('click', function (event) {
      // Verifică dacă elementul pe care s-a făcut clic este un element "div" cu clasa "text-wrapper-9"
      if (event.target.tagName === 'DIV' && event.target.classList.contains('text-wrapper-9')) {
        // Obține textul din interiorul elementului pe care s-a făcut clic
        var buttonText = event.target.innerText;

        // Redirecționează către pagina corespunzătoare în funcție de textul butonului
        switch (buttonText) {
          case 'PERSONAL':
            window.location.href = '/CSU-pages/html/players1.html'; // Schimbă cu numele real al paginii CLUB
            break;
          case 'CLUB':
            window.location.href = '/CSU-pages/html/club.html';
            break;
          case 'CALENDAR':
            window.location.href = '/CSU-pages/html/calendar.html';
            break;
          case 'NOUTATI':
            window.location.href = '/CSU-pages/html/noutati.html';
            break;
          case 'PARTENERI':
            window.location.href = '/CSU-pages/html/parteneri.html';
            break;
          // Adaugă cazuri pentru celelalte pagini
        }
      }
    });

    var home_page = document.getElementById('home_page');

    // Adaugă un ascultător de eveniment de clic pe bara de navigare
    home_page.addEventListener('click', function (event) {
      // Verifică dacă elementul pe care s-a făcut clic este un element "div" cu clasa "text-wrapper-9"
      if (event.target.tagName === 'IMG' && event.target.classList.contains('img-2')) {
        // Obține textul din interiorul elementului pe care s-a făcut clic
        window.location.href = '/CSU-pages/html/home.html';
      }
    });

    /*redirectionare parteneri */
    var sponsor_pepenero = document.getElementById('parteneri');
    sponsor_pepenero.addEventListener('click', function (event) {
      if (event.target.tagName === 'IMG' && event.target.classList.contains('pepenero')) {
            window.location.href = 'https://pepeneropizza.ro/'; 
      }
    });

    var sponsor_mihu = document.getElementById('parteneri');
    sponsor_mihu.addEventListener('click', function (event) {
      if (event.target.tagName === 'IMG' && event.target.classList.contains('mihu')) {
            window.location.href = 'https://www.acoperisuri-mihu.ro/'; 
      }
    });

    var sponsor_celestin = document.getElementById('parteneri');
    sponsor_celestin.addEventListener('click', function (event) {
      if (event.target.tagName === 'IMG' && event.target.classList.contains('celestin')) {
            window.location.href = 'https://www.tipografiacelestin.ro/'; 
      }
    });

    var sponsor_vivendi = document.getElementById('parteneri');
    sponsor_vivendi.addEventListener('click', function (event) {
      if (event.target.tagName === 'IMG' && event.target.classList.contains('vivendi')) {
            window.location.href = 'https://restaurantvivendi.ro/'; 
      }
    });

    var sponsor_iulius_mall = document.getElementById('parteneri');
    sponsor_iulius_mall.addEventListener('click', function (event) {
      if (event.target.tagName === 'IMG' && event.target.classList.contains('iulius-mall')) {
            window.location.href = 'https://suceava.iuliusmall.com/'; 
      }
    });

    var sponsor_urban = document.getElementById('parteneri');
    sponsor_urban.addEventListener('click', function (event) {
      if (event.target.tagName === 'IMG' && event.target.classList.contains('urban')) {
            window.location.href = 'https://www.urbanstreetfood.ro/'; 
      }
    });

    /*redirectionare retele de socializare */
    var facebook = document.getElementById('retele');
    facebook.addEventListener('click', function (event) {
      if (event.target.tagName === 'IMG' && event.target.classList.contains('facebook')) {
            window.location.href = 'https://www.facebook.com/CSUSuceava'; 
      }
    });

    var youtube = document.getElementById('retele');
    youtube.addEventListener('click', function (event) {
      if (event.target.tagName === 'IMG' && event.target.classList.contains('youtube')) {
            window.location.href = 'https://www.youtube.com/@CSUSuceava'; 
      }
    });

    var imageContainer = document.getElementById('div-3');
    imageContainer.addEventListener('keydown', (event) => {
      if (event.key === 'ArrowRight') {
        imageContainer.scrollBy({
          left: 200, // Ajustează cu cât să facă scroll la fiecare apăsare de săgeată
          behavior: 'smooth', // Creează o animație de scroll lină
        });
      } else if (event.key === 'ArrowLeft') {
        imageContainer.scrollBy({
          left: -200, // Ajustează cu cât să facă scroll la fiecare apăsare de săgeată
          behavior: 'smooth',
        });
      }
    });
 

const carousel = document.querySelector(".lot-imagini"),
firstImg = carousel.querySelectorAll(".image-item")[0],
arrowIcons = document.querySelectorAll(".lot i");

let isDragStart = false, isDragging = false, prevPageX, prevScrollLeft, positionDiff;

const showHideIcons = () => {
    // showing and hiding prev/next icon according to carousel scroll left value
    let scrollWidth = carousel.scrollWidth - carousel.clientWidth; // getting max scrollable width
    arrowIcons[0].style.display = carousel.scrollLeft == 0 ? "none" : "block";
    arrowIcons[1].style.display = carousel.scrollLeft == scrollWidth ? "none" : "block";
}

arrowIcons.forEach(icon => {
    icon.addEventListener("click", () => {
        let firstImgWidth = firstImg.clientWidth + 14; // getting first img width & adding 14 margin value
        // if clicked icon is left, reduce width value from the carousel scroll left else add to it
        carousel.scrollLeft += icon.id == "left" ? -firstImgWidth : firstImgWidth;
        setTimeout(() => showHideIcons(), 60); // calling showHideIcons after 60ms
    });
});

const autoSlide = () => {
    // if there is no image left to scroll then return from here
    if(carousel.scrollLeft - (carousel.scrollWidth - carousel.clientWidth) > -1 || carousel.scrollLeft <= 0) return;

    positionDiff = Math.abs(positionDiff); // making positionDiff value to positive
    let firstImgWidth = firstImg.clientWidth + 14;
    // getting difference value that needs to add or reduce from carousel left to take middle img center
    let valDifference = firstImgWidth - positionDiff;

    if(carousel.scrollLeft > prevScrollLeft) { // if user is scrolling to the right
        return carousel.scrollLeft += positionDiff > firstImgWidth / 3 ? valDifference : -positionDiff;
    }
    // if user is scrolling to the left
    carousel.scrollLeft -= positionDiff > firstImgWidth / 3 ? valDifference : -positionDiff;
}

const dragStart = (e) => {
    // updatating global variables value on mouse down event
    isDragStart = true;
    prevPageX = e.pageX || e.touches[0].pageX;
    prevScrollLeft = carousel.scrollLeft;
}

const dragging = (e) => {
    // scrolling images/carousel to left according to mouse pointer
    if(!isDragStart) return;
    e.preventDefault();
    isDragging = true;
    carousel.classList.add("dragging");
    positionDiff = (e.pageX || e.touches[0].pageX) - prevPageX;
    carousel.scrollLeft = prevScrollLeft - positionDiff;
    showHideIcons();
}

const dragStop = () => {
    isDragStart = false;
    carousel.classList.remove("dragging");

    if(!isDragging) return;
    isDragging = false;
    autoSlide();
}

carousel.addEventListener("mousedown", dragStart);
carousel.addEventListener("touchstart", dragStart);

document.addEventListener("mousemove", dragging);
carousel.addEventListener("touchmove", dragging);

document.addEventListener("mouseup", dragStop);
carousel.addEventListener("touchend", dragStop);
});
  function changeColor(id)
{
  document.getElementById(id).style.color = "#ff0000"; // forecolor
  document.getElementById(id).style.backgroundColor = "#ff0000"; // backcolor
};
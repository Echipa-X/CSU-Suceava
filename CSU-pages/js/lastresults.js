document.addEventListener('DOMContentLoaded', function () {
  // Obține elementul cu id-ul "navbar"
  var navbar = document.getElementById('navbar');

  // Adaugă un ascultător de eveniment de clic pe bara de navigare
  navbar.addEventListener('click', function (event) {
    // Verifică dacă elementul pe care s-a făcut clic este un element "div" cu clasa "text-wrapper-9"
    if (event.target.tagName === 'DIV' && event.target.classList.contains('text-wrapper')) {
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

    // Obțineți elementul select
var selectField = document.getElementById('editie');
var fixedDiv = document.getElementById('frame');
var contentToHide_2023 = document.getElementById("2023");
var contentToHide_2024 = document.getElementById("2024");
// Adăugați un eveniment pentru când se schimbă selecția
selectField.addEventListener('change', function(event) {
  var selectedOption = event.target.value;
  switch (selectedOption) {
    case '2022':
      contentToHide_2023.style.display="none";
      contentToHide_2024.style.display="none";
      break;
    case '2023':
      contentToHide_2024.style.display="none";
      contentToHide_2023.style.display="block";
      break;
    case '2024':
      contentToHide_2023.style.display="none";
      contentToHide_2024.style.display="block";
  }
});

var selectField_campionat = document.getElementById('campionat');

// Adăugați un eveniment pentru când se schimbă selecția
selectField_campionat.addEventListener('change', function(event) {
var selectedOption_campionat = event.target.value;
  switch (selectedOption_campionat) {
    case 'LIGA_1':
      contentToHide_2023.style.display="none";
      contentToHide_2024.style.display="none";
      break;
    case 'LIGA_2':
      contentToHide_2024.style.display="none";
      contentToHide_2023.style.display="block";
      break;
  }
});


  var navbarmeciuri = document.getElementById('tab');

  // Adaugă un ascultător de eveniment de clic pe bara de navigare
  navbarmeciuri.addEventListener('click', function (event) {
    // Verifică dacă elementul pe care s-a făcut clic este un element "div" cu clasa "text-wrapper-9"
    if (event.target.tagName === 'DIV' && event.target.classList.contains('text-wrapper-3')) {
      // Obține textul din interiorul elementului pe care s-a făcut clic
      var buttonText = event.target.innerText;

      // Redirecționează către pagina corespunzătoare în funcție de textul butonului
      switch (buttonText) {
        case 'Meciuri viitoare':
          window.location.href = '/CSU-pages/html/calendar.html'; // Schimbă cu numele real al paginii CLUB
          break;
        case 'Ultimele rezultate':
          window.location.href = '/CSU-pages/html/lastresults.html';
          break;
        // Adaugă cazuri pentru celelalte pagini
      }
    }
  });

  
  var home_page = document.getElementById('home_page');

  // Adaugă un ascultător de eveniment de clic pe bara de navigare
  home_page.addEventListener('click', function (event) {
    // Verifică dacă elementul pe care s-a făcut clic este un element "div" cu clasa "text-wrapper-9"
    if (event.target.tagName === 'IMG' && event.target.classList.contains('img-sigla')) {
      // Obține textul din interiorul elementului pe care s-a făcut clic
      window.location.href = '/CSU-pages/html/home.html';
    }
  });

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

});
function changeColor(id)
{
document.getElementById(id).style.color = "#ff0000"; // forecolor
document.getElementById(id).style.backgroundColor = "#ff0000"; // backcolor
};
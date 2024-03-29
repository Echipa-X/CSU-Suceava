const username = localStorage.getItem('username');
      console.log('Numele utilizatorului a fost stocat cu succes în localStorage:', username);
       var loginButton = document.getElementById('login-button');
       var logoutButton = document.getElementById('logout-button');
      if (username) {
        
          loginButton.textContent = username;
          logoutButton.style.display = 'block';
      }
    
logoutButton.addEventListener('click', function () {
    localStorage.removeItem('username'); // Elimină informațiile de conectare din localStorage
    window.location.reload(); // Reîmprospătează pagina
});
document.addEventListener('DOMContentLoaded', function () {
  
    var navbar = document.getElementById('navbar');


  // Adaugă un ascultător de eveniment de clic pe bara de navigare
  navbar.addEventListener('click', function (event) {
    if (event.target.tagName === 'DIV' && event.target.classList.contains('text-wrapper-8')){
      var buttonText = event.target.innerText;
      switch (buttonText) {
        case 'PERSONAL':
          window.location.href = '/CSU-pages/html/players1.html';
          break;
        case 'CLUB':
          window.location.href = '/CSU-pages/html/club.html';
          break;
        case 'CALENDAR':
          window.location.href = '/CSU-pages/html/calendar.html';
          break;
        case 'NOUTĂȚI':
          window.location.href = '/CSU-pages/html/noutati.html';
          break;
        case 'PARTENERI':
          window.location.href = '/CSU-pages/html/parteneri.html';
          break;
      }
    }
  });

  var navbar = document.getElementById('jucatori');
  navbar.addEventListener('click', function (event) {
    if (event.target.tagName === 'DIV' && event.target.classList.contains('text-wrapper-7')){
      var buttonText = event.target.innerText;
      switch (buttonText) {
        case 'Portari':
          window.location.href = '/CSU-pages/html/players1.html'; 
          break;
        case 'Interi':
          window.location.href = '/CSU-pages/html/players2.html'; 
          break;
        case 'Centru':
          window.location.href = '/CSU-pages/html/centru.html'; 
          break;
        case 'Extreme':
          window.location.href = '/CSU-pages/html/extreme.html';
          break;
        case 'Pivoti':
          window.location.href = '/CSU-pages/html/pivoti.html';
          break;
        case 'Antrenori':
          window.location.href = '/CSU-pages/html/antrenori.html';
          break;
      }
    }
  });


  var home_page = document.getElementById('home_page');
  // Adaugă un ascultător de eveniment de clic pe bara de navigare
  home_page.addEventListener('click', function (event) {
    // Verifică dacă elementul pe care s-a făcut clic este un element "div" cu clasa "text-wrapper-9"
    if (event.target.tagName === 'IMG' && event.target.classList.contains('sigla-2')) {
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
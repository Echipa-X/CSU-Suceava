const username = localStorage.getItem('username');
const loginButton = document.getElementById('login-button');
const logoutButton = document.getElementById('logout-button');
const adaugaButton = document.getElementById('adauga-button');
console.log('Numele utilizatorului a fost stocat cu succes în localStorage:', username);
 console.log(adaugaButton);

if (username) {
    loginButton.textContent = username;
    logoutButton.style.display = 'block'; // Afiseaza butonul de deconectare
   if(username === 'Admin'){
    adaugaButton.style.display = 'block';}
  }
 
 
logoutButton.addEventListener('click', function () {
    localStorage.removeItem('username'); // Elimină informațiile de conectare din localStorage
    window.location.reload(); // Reîmprospătează pagina
});
adaugaButton.addEventListener('click', function() {
window.location.href = '/CSU-Pages/html/adaugastire.html';
});
document.addEventListener('DOMContentLoaded', async function () {
  // try {
  //   const response = await fetch('/stiri');
  //   if (!response.ok) {
  //     throw new Error('A apărut o eroare la încărcarea știrilor.');
  //   }
  //   const stiri = await response.json();

  //   // Iterează prin fiecare știre și înlocuiește conținutul imaginii și titlului direct în HTML
  //   stiri.forEach((stire, index) => {
  //     // Selectează elementele pentru imagine și titlu
  //     const imgElement = document.querySelector('.rectangle');
  //     const divWrapperElement = document.querySelector('.div-wrapper');
  //     const pElement = document.querySelector('.p a');

  //     // Înlocuiește imaginea
  //     imgElement.src = stire.imagineUrl; // Verifică dacă imagineUrl este calea corectă către imagine

  //     // Înlocuiește titlul și linkul
  //     pElement.textContent = stire.titlu;
  //     pElement.href = `/CSU-pages/html/individualnews.html?id=${index}`;

  //     // Afiseaza elementele care nu mai sunt necesare
  //     divWrapperElement.style.display = 'block';
  //   });
  // } catch (error) {
  //   console.error('Eroare:', error);
  // }

    var navbar = document.getElementById('navbar');
    // Adaugă un ascultător de eveniment de clic pe bara de navigare
    navbar.addEventListener('click', function (event) {
      // Verifică dacă elementul pe care s-a făcut clic este un element "div" cu clasa "text-wrapper-9"
      if (event.target.tagName === 'DIV' && event.target.classList.contains('text-wrapper-6-1')) {
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
          case 'NOUTĂȚI':
            window.location.href = '/CSU-pages/html/noutati.html';
            break;
          case 'PARTENERI':
            window.location.href = '/CSU-pages/html/parteneri.html';
            break;
          // Adaugă cazuri pentru celelalte pagini
        }
      }
    });
    var log_in = document.getElementById('navbar2');
    log_in.addEventListener('click', function (event) {
      // Verifică dacă elementul pe care s-a făcut clic este un element "div" cu clasa "text-wrapper-9"
      if (event.target.tagName === 'DIV' && event.target.classList.contains('text-wrapper-6-1')) {
        // Obține textul din interiorul elementului pe care s-a făcut clic
        window.location.href = '/CSU-pages/html/LogInSignUp.html';
      }
    });

    var navbar = document.getElementById('club-tab');

    // Adaugă un ascultător de eveniment de clic pe bara de navigare
    navbar.addEventListener('click', function (event) {
      // Verifică dacă elementul pe care s-a făcut clic este un element "div" cu clasa "text-wrapper-9"
      if (event.target.tagName === 'DIV' && event.target.classList.contains('text-wrapper-5-1')) {
        // Obține textul din interiorul elementului pe care s-a făcut clic
        var buttonText = event.target.innerText;

        // Redirecționează către pagina corespunzătoare în funcție de textul butonului
        switch (buttonText) {
          case 'MECIURI VIITOARE':
            window.location.href = '/CSU-pages/html/calendar.html'; // Schimbă cu numele real al paginii CLUB
            break;
          case 'ULTIMELE REZULTATE':
            window.location.href = '/CSU-pages/html/club.html';
            break;
          // Adaugă cazuri pentru celelalte pagini
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

    var youtube = document.getElementById('club-tab');
    youtube.addEventListener('click', function (event) {
      if (event.target.tagName === 'DIV' && event.target.classList.contains('text-wrapper-5')) {
        var buttonText = event.target.innerText;

        // Redirecționează către pagina corespunzătoare în funcție de textul butonului
        switch (buttonText) {
          case 'Viziune':
            window.location.href = '/CSU-pages/html/club.html'; // Schimbă cu numele real al paginii CLUB
            break;
          case 'Istorie':
            window.location.href = '/CSU-pages/html/istorie.html';
            break;
          case 'Trofee':
            window.location.href = '/CSU-pages/html/trofee.html';
            break;        
          // Adaugă cazuri pentru celelalte pagini
        }
      }
    });
    

  });
  function changeColor(id)
{
  document.getElementById(id).style.color = "#ff0000"; // forecolor
  document.getElementById(id).style.backgroundColor = "#ff0000"; // backcolor
};
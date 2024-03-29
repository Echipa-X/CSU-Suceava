  
document.addEventListener('DOMContentLoaded', function () {
  
    
  const username = localStorage.getItem('username');
  const loggedIn = localStorage.getItem('loggedIn');

  // Verifică dacă utilizatorul este autentificat
  if (loggedIn === 'true' && username) {
      // Dacă este autentificat, afișează numele utilizatorului în locul butonului "LOGIN"
      document.getElementById('login-button').innerText = username;
  }
console.log('Numele utilizatorului a fost stocat cu succes în localStorage:', username);  
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
              window.location.href = '/CSU-pages/html/nextfixtures.html';
              break;
              case 'NOUTATI':
                window.location.href = '/CSU-pages/html/news.html';
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


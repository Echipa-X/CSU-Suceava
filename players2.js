document.addEventListener('DOMContentLoaded', function () {
    // Obține elementul cu id-ul "navbar"
    var navbar = document.getElementById('navbar');

    // Adaugă un ascultător de eveniment de clic pe bara de navigare
    navbar.addEventListener('click', function (event) {
      // Verifică dacă elementul pe care s-a făcut clic este un element "div" cu clasa "text-wrapper-9"
      if (event.target.tagName === 'DIV' && event.target.classList.contains('text-wrapper-6')) {
        // Obține textul din interiorul elementului pe care s-a făcut clic
        var buttonText = event.target.innerText;

        // Redirecționează către pagina corespunzătoare în funcție de textul butonului
        switch (buttonText) {
          case 'JUCATORI':
            window.location.href = 'players1.html'; // Schimbă cu numele real al paginii CLUB
            break;
          case 'CLUB':
            window.location.href = 'club.html';
            break;
            case 'CALENDAR':
              window.location.href = 'nextfixtures.html';
              break;
              case 'NOUTATI':
                window.location.href = 'news.html';
                break;
          case 'Portari':
            window.location.href = 'players1.html'; // Schimbă cu numele real al paginii CLUB
            break;
          case 'Interi':
            window.location.href = 'players2.html'; // Schimbă cu numele real al paginii CALENDAR
            break;
          // Adaugă cazuri pentru celelalte pagini
        }
      }
    });
  });
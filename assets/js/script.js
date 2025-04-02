document.querySelectorAll('.fa-star').forEach(star => {
    star.addEventListener('click', function() {
      let value = this.getAttribute('data-value');
      document.querySelectorAll('.fa-star').forEach(s => s.classList.remove('checked'));
      for (let i = 0; i < value; i++) {
        document.querySelectorAll('.fa-star')[i].classList.add('checked');
      }
    });
  });

  // Simulación de búsqueda en vivo
  document.getElementById('searchInput').addEventListener('keyup', function() {
    let filter = this.value.toLowerCase();
    document.querySelectorAll('.product-card').forEach(card => {
      let title = card.querySelector('.card-title').innerText.toLowerCase();
      card.style.display = title.includes(filter) ? 'block' : 'none';
    });
  });
  <script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
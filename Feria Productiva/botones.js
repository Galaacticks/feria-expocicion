// navbar.js
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    // oculta todas las secciones
    document.querySelectorAll('.seccion').forEach(s => s.style.display = 'none');
    // muestra la sección clicada
    const destino = document.getElementById(link.dataset.sec);
    if (destino) destino.style.display = 'block';
  });
});




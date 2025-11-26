// Comportamiento sticky para headers usando Waypoints.js
document.addEventListener('DOMContentLoaded', function() {
  // Buscar todos los headers de sección
  const sectionHeaders = document.querySelectorAll('header.header');
  
  // Procesar cada header de sección
  sectionHeaders.forEach(function(sectionHeader) {
    // Waypoint para cuando el header está a punto de salir por arriba
    new Waypoint({
      element: sectionHeader,
      handler: function(direction) {
        if (direction === 'up') {
          sectionHeader.classList.remove('stuck');
          // Cuando vuelve a entrar, quitar sticky
        } else {
          sectionHeader.classList.add('stuck');
        }
      },
      offset: 0 // Se activa cuando el top del elemento toca el top del viewport
    });
  });
});
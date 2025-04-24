document.addEventListener('DOMContentLoaded', () => {
    const toggles = document.querySelectorAll('.toggle');
  
    toggles.forEach((btn) => {
      btn.addEventListener('click', () => {
        const targetId = btn.getAttribute('data-target');
        const content = document.getElementById(targetId);
        //alert(JSON.stringify(content));
  
        if (content) {
          const isOpen = content.style.display === 'block';
  
          // Cierra todas las demás secciones
          document.querySelectorAll('.content').forEach((el) => {
            el.style.display = 'none';
          });
  
          // Alterna la sección actual
          content.style.display = isOpen ? 'none' : 'block';
        }
      });
    });
  });
  
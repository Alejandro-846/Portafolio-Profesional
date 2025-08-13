document.addEventListener("DOMContentLoaded", () => {
    const modal = document.getElementById("construction-modal");
    const closeBtn = document.getElementById("close-modal");

    closeBtn.addEventListener("click", () => {
        modal.style.display = "none";
    });
});


document.addEventListener('DOMContentLoaded', function() {
    // Cargar componentes
    const includes = document.querySelectorAll('[data-include]');
    includes.forEach(include => {
        const filePath = include.getAttribute('data-include');
        fetch(filePath)
            .then(response => response.text())
            .then(data => {
                include.innerHTML = data;
                // Cargar charts.js después de que skills.html se cargue
                if (filePath.includes('skills.html')) {
                    const script = document.createElement('script');
                    script.src = './js/components/charts.js';
                    document.body.appendChild(script);
                }
            });
    });

    // Cursor personalizado
    const cursor = document.querySelector('.cursor');
    if (cursor) {
        document.addEventListener('mousemove', (e) => {
            cursor.style.left = e.clientX + 'px';
            cursor.style.top = e.clientY + 'px';
        });

        document.querySelectorAll('a, button').forEach(el => {
            el.addEventListener('mouseenter', () => {
                cursor.classList.add('cursor-hover');
            });
            el.addEventListener('mouseleave', () => {
                cursor.classList.remove('cursor-hover');
            });
        });
    }

   
    


});
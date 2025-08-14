// main.js

document.addEventListener("DOMContentLoaded", () => {
    const modal = document.getElementById("construction-modal");
    const closeBtn = document.getElementById("close-modal");

    closeBtn.addEventListener("click", () => {
        modal.style.display = "none";
    });
});



// ===============================
// Función para cargar componentes
// ===============================
async function loadComponents() {
    const includeElements = document.querySelectorAll('[data-include]');
    for (const el of includeElements) {
        const file = el.getAttribute('data-include');
        try {
            const response = await fetch(file);
            if (!response.ok) throw new Error(`No se pudo cargar ${file}`);
            const content = await response.text();
            el.innerHTML = content;
        } catch (error) {
            console.error(error);
            el.innerHTML = `<p style="color:red;">Error cargando ${file}</p>`;
        }
    }
}

// =======================================
// Función para escribir letra por letra
// =======================================
function typeHeroName() {
    const nameElement = document.getElementById("typed-name");
    if (!nameElement) return;

    const fullName = nameElement.textContent.trim();
    nameElement.textContent = "";
    let index = 0;

    function typeLetter() {
        if (index < fullName.length) {
            nameElement.textContent += fullName[index];
            index++;
            setTimeout(typeLetter, 350); // velocidad de escritura
        }
    }

    typeLetter();
}


// ===============================
// Cursor personalizado
// ===============================
function initCursor() {
    const cursor = document.querySelector('.cursor');
    if (!cursor) return;

    document.addEventListener('mousemove', e => {
        cursor.style.left = `${e.clientX}px`;
        cursor.style.top = `${e.clientY}px`;
    });
}

// ===============================
// Inicialización
// ===============================
document.addEventListener('DOMContentLoaded', async () => {
    setTimeout(async () => {
        await loadComponents();
        typeHeroName();
        initCursor();
    }, 1000); // Espera 2 segundos antes de iniciar
});

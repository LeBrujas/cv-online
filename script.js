const langToggle = document.getElementById('langToggle');
const langLabel = document.getElementById('langLabel');

langToggle.addEventListener('change', () => {
    const isSpanish = langToggle.checked;
    langLabel.textContent = isSpanish ? 'ES' : 'EN';

    if (isSpanish) {
        document.getElementById('expTitle').textContent = 'Experiencia';
        document.getElementById('skillsTitle').textContent = 'Habilidades';
        document.getElementById('eduTitle').textContent = 'Educación';
        document.getElementById('intTitle').textContent = 'Intereses';
        document.getElementById('eduText').textContent = 'Actualmente cursando Ingeniería en Computación – Universidad Tecnológica Nacional (UTN)';
        document.getElementById('intText').textContent = 'Me apasiona diseñar y desarrollar juegos que combinan creatividad y diseño de sistemas. También disfruto enseñar y compartir conocimiento para ayudar a otros a crecer en tecnología y desarrollo de videojuegos.';
        document.getElementById('expContent').innerHTML = `
          <p><b>CUDI – Centro Universitario de La Matanza (2021–2023)</b><br>Dicté cursos de desarrollo web (HTML, CSS, JS) y Linux desde cero. Diseñé materiales, exámenes y guié a los estudiantes en sus proyectos finales.</p>
          <p><b>Argentina Programa (2023)</b><br>Instructor en un curso de introducción a Java de 3 meses, cubriendo fundamentos de programación y conceptos de objetos.</p>
          <p><b>IAC – Instituto Argentino de Computación (2022–2024)</b><br>Dicté dos cursos de desarrollo web: uno introductorio (HTML, CSS, JS) y otro avanzado (React, Node.js, MySQL).</p>
        `;
    } else {
        location.reload(); // más simple para volver a EN
    }
});

document.getElementById('downloadPDF').addEventListener('click', () => {
    // Redirige directamente al archivo para descargarlo
    window.location.href = 'samuel_camacho_cv.pdf';
});
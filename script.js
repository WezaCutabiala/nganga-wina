// Para o scroll suave ao clicar nos links do menu
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({
            behavior: 'smooth'
        });
    });
});


const carousel = document.querySelector('.carousel');
const images = carousel.querySelectorAll('img');
const totalImages = images.length;
let currentIndex = 0;
const intervalTime = 3000; // Tempo em milissegundos (3 segundos neste caso)
let slideInterval;

// Função para avançar para a próxima imagem
function nextSlide() {
    images[currentIndex].style.display = 'none';
    currentIndex = (currentIndex + 1) % totalImages;
    images[currentIndex].style.display = 'block';
}

// Iniciar o carrossel automaticamente
function startSlide() {
    slideInterval = setInterval(nextSlide, intervalTime);
}

// Parar o carrossel quando o usuário interagir com ele
carousel.addEventListener('mouseover', () => {
    clearInterval(slideInterval);
});

carousel.addEventListener('mouseleave', () => {
    startSlide();
});

// Iniciar o carrossel
startSlide();


// JavaScript para o botão hamburger
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('open');
    hamburger.classList.toggle('open');
});
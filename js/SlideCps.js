let currentIndex = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;
const slideInterval = 5000; // Defina o tempo em milissegundos (5 segundos neste exemplo)

function showSlide(index) {
  if (index < 0) {
    currentIndex = totalSlides - 1;
  } else if (index >= totalSlides) {
    currentIndex = 0;
  } else {
    currentIndex = index;
  }

  const newTransformValue = -currentIndex * 100 + '%';
  document.getElementById('slide-wrapper').style.transform = 'translateX(' + newTransformValue + ')';
}

function prevSlide() {
  showSlide(currentIndex - 1);
}

function nextSlide() {
  showSlide(currentIndex + 1);
}

// Adiciona a funcionalidade de passar o slide automaticamente
function startAutoSlide() {
  setInterval(nextSlide, slideInterval);
}

// Inicia a apresentação automática ao carregar a página
startAutoSlide();

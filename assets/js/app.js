const menuToggle = document.getElementById('menuToggle');
const mainNav = document.getElementById('mainNav');

menuToggle?.addEventListener('click', () => {
  mainNav.classList.toggle('open');
});

document.querySelectorAll('#mainNav a').forEach(a => {
  a.addEventListener('click', () => mainNav.classList.remove('open'));
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

document.querySelectorAll('.accordion-trigger').forEach(trigger => {
  trigger.addEventListener('click', () => {
    const item = trigger.closest('.accordion-item');
    const group = trigger.closest('.accordion-group');

    group.querySelectorAll('.accordion-item').forEach(other => {
      if(other !== item) other.classList.remove('open');
    });

    item.classList.toggle('open');
  });
});

const form = document.getElementById('contactForm');
const formMsg = document.getElementById('formMsg');

form?.addEventListener('submit', e => {
  e.preventDefault();
  formMsg.textContent = 'Formulario visual listo. Después se puede conectar a PHP, correo o base de datos.';
});

// Mobile menu toggle
const menuToggle = document.getElementById('menuToggle');
const primaryNav = document.getElementById('primaryNav');
if (menuToggle && primaryNav) {
  menuToggle.addEventListener('click', () => {
    const isOpen = primaryNav.classList.toggle('open');
    menuToggle.setAttribute('aria-expanded', String(isOpen));
  });
}

// Highlight active nav link
(function highlightNav() {
  const links = document.querySelectorAll('#primaryNav a');
  let page = location.pathname.split('/').pop() || 'index.html';
  links.forEach(a => {
    const href = a.getAttribute('href');
    if ((page === '' && href === 'index.html') || href === page) {
      a.classList.add('active');
    }
  });
})();

// Footer year
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = String(new Date().getFullYear());

// Newsletter form
const newsForm = document.getElementById('newsletter-form');
if (newsForm) {
  newsForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = /** @type {HTMLInputElement} */(document.getElementById('newsletter-email')).value.trim();
    const msg = document.getElementById('newsletter-msg');
    const ok = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    msg.textContent = ok ? 'Thanks for subscribing! Check your inbox for a welcome note.' : 'Please enter a valid email address.';
  });
}

// Contact form
const contactForm = document.getElementById('contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = /** @type {HTMLInputElement} */(document.getElementById('name')).value.trim();
    const email = /** @type {HTMLInputElement} */(document.getElementById('email')).value.trim();
    const message = /** @type {HTMLTextAreaElement} */(document.getElementById('message')).value.trim();
    const msgEl = document.getElementById('contact-msg');
    if (!name || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || message.length < 5) {
      msgEl.textContent = 'Please complete all fields with a valid email and a short message.';
      return;
    }
    msgEl.textContent = 'Thanks! Your message has been sent (simulated). We will reply within 1 business day.';
    contactForm.reset();
  });
}

// Blog search filter
const blogSearch = document.getElementById('blog-search');
if (blogSearch) {
  const list = document.getElementById('blog-list');
  blogSearch.addEventListener('input', () => {
    const q = blogSearch.value.toLowerCase();
    list.querySelectorAll('li').forEach(li => {
      const t = li.textContent.toLowerCase();
      li.style.display = t.includes(q) ? '' : 'none';
    });
  });
}

// Populate schedule table
const scheduleTable = document.getElementById('schedule-table');
if (scheduleTable) {
  const tbody = scheduleTable.querySelector('tbody');
  const data = [
    { day: 'Monday',    time: '7:00 AM', class: 'Gentle Flow', teacher: 'Alina' },
    { day: 'Monday',    time: '6:00 PM', class: 'Vinyasa',     teacher: 'Jon' },
    { day: 'Tuesday',   time: '9:00 AM', class: 'Foundations', teacher: 'Alina' },
    { day: 'Tuesday',   time: '6:30 PM', class: 'Yin',         teacher: 'Mara' },
    { day: 'Wednesday', time: '7:00 AM', class: 'Power',       teacher: 'Jon' },
    { day: 'Wednesday', time: '6:00 PM', class: 'Vinyasa',     teacher: 'Jon' },
    { day: 'Thursday',  time: '9:30 AM', class: 'Gentle Flow', teacher: 'Mara' },
    { day: 'Thursday',  time: '6:30 PM', class: 'Restorative', teacher: 'Mara' },
    { day: 'Friday',    time: '7:00 AM', class: 'Vinyasa',     teacher: 'Alina' },
    { day: 'Saturday',  time: '10:00 AM', class: 'Foundations', teacher: 'Alina' },
    { day: 'Sunday',    time: '10:00 AM', class: 'Yin',         teacher: 'Mara' }
  ];
  let html = '';
  for (const row of data) {
    html += `<tr><td>${row.day}</td><td>${row.time}</td><td>${row.class}</td><td>${row.teacher}</td></tr>`;
  }
  tbody.innerHTML = html;
}

// Gallery lightbox
const lightbox = document.getElementById('lightbox');
if (lightbox) {
  const lightImg = document.getElementById('lightbox-img');
  const closeBtn = lightbox.querySelector('.lightbox-close');
  document.getElementById('gallery').addEventListener('click', (e) => {
    const link = e.target.closest('a.glight');
    if (!link) return;
    e.preventDefault();
    lightImg.src = link.href;
    lightbox.hidden = false;
  });
  closeBtn.addEventListener('click', () => lightbox.hidden = true);
  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) lightbox.hidden = true;
  });
}
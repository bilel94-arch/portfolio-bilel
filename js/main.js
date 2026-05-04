/* ============================================
   main.js — Portfolio Bilel Rahmouni
   ============================================ */

/* ── Particles canvas ───────────────────────── */
(function initParticles() {
  const canvas = document.getElementById('particlesCanvas');
  if (!canvas) return;
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  const ctx = canvas.getContext('2d');
  let W, H, particles = [];

  const ACCENT = 'rgba(239,159,39,';

  function resize() {
    W = canvas.width  = window.innerWidth;
    H = canvas.height = window.innerHeight;
  }

  function Particle() {
    this.reset = function () {
      this.x  = Math.random() * W;
      this.y  = Math.random() * H;
      this.r  = Math.random() * 1.6 + 0.4;
      this.vx = (Math.random() - 0.5) * 0.3;
      this.vy = (Math.random() - 0.5) * 0.3;
      this.a  = Math.random() * 0.45 + 0.05;
    };
    this.reset();
  }

  function init() {
    const count = window.innerWidth <= 768 ? 20 : 55;
    particles = Array.from({ length: count }, () => new Particle());
  }

  function draw() {
    ctx.clearRect(0, 0, W, H);
    particles.forEach(p => {
      p.x += p.vx;
      p.y += p.vy;
      if (p.x < 0) p.x = W;
      if (p.x > W) p.x = 0;
      if (p.y < 0) p.y = H;
      if (p.y > H) p.y = 0;

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = ACCENT + p.a + ')';
      ctx.fill();
    });

    /* Draw connections */
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 120) {
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.strokeStyle = ACCENT + (0.06 * (1 - dist / 120)) + ')';
          ctx.lineWidth = 0.5;
          ctx.stroke();
        }
      }
    }
    requestAnimationFrame(draw);
  }

  resize();
  init();
  draw();
  window.addEventListener('resize', () => { resize(); init(); });
})();

/* ── Cursor glow ────────────────────────────── */
(function initCursorGlow() {
  if (window.matchMedia('(pointer: coarse)').matches) return;
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  const glow = document.createElement('div');
  glow.className = 'cursor-glow';
  document.body.appendChild(glow);

  let tx = 0, ty = 0, cx = 0, cy = 0;

  document.addEventListener('mousemove', e => { tx = e.clientX; ty = e.clientY; });
  document.addEventListener('mouseleave', () => { glow.style.opacity = '0'; });
  document.addEventListener('mouseenter', () => { glow.style.opacity = '1'; });

  (function loop() {
    cx += (tx - cx) * 0.07;
    cy += (ty - cy) * 0.07;
    glow.style.left = cx + 'px';
    glow.style.top  = cy + 'px';
    requestAnimationFrame(loop);
  })();
})();

/* ── Nav scroll shadow ──────────────────────── */
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('is-scrolled', window.scrollY > 40);
}, { passive: true });

/* ── Nav: active link ───────────────────────── */
const sections = document.querySelectorAll('main section[id]');
const navLinks = document.querySelectorAll('.nav__link');
const sectionObs = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (!e.isIntersecting) return;
    navLinks.forEach(l => l.classList.toggle('is-active', l.getAttribute('href') === '#' + e.target.id));
  });
}, { threshold: 0.4 });
sections.forEach(s => sectionObs.observe(s));

/* ── Mobile menu ────────────────────────────── */
const menuBtn    = document.getElementById('menuBtn');
const mobileMenu = document.getElementById('mobileMenu');

function openMenu()  {
  mobileMenu.classList.add('is-open');
  menuBtn.classList.add('is-active');
  menuBtn.setAttribute('aria-expanded', 'true');
  mobileMenu.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
}
function closeMenu() {
  mobileMenu.classList.remove('is-open');
  menuBtn.classList.remove('is-active');
  menuBtn.setAttribute('aria-expanded', 'false');
  mobileMenu.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}
menuBtn.addEventListener('click', () => mobileMenu.classList.contains('is-open') ? closeMenu() : openMenu());
mobileMenu.querySelectorAll('.mobile-menu__link').forEach(l => l.addEventListener('click', closeMenu));
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeMenu(); });

/* ── Reveal on scroll ───────────────────────── */
const revealObs = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (!e.isIntersecting) return;
    e.target.classList.add('is-visible');
    revealObs.unobserve(e.target);
  });
}, { threshold: 0.08, rootMargin: '0px 0px -48px 0px' });
document.querySelectorAll('.reveal').forEach(el => revealObs.observe(el));

/* ── Skill bars animate on scroll ──────────── */
const skillObs = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (!e.isIntersecting) return;
    const bar   = e.target;
    const level = bar.getAttribute('data-level');
    bar.style.setProperty('--level', level + '%');
    bar.classList.add('is-animated');
    skillObs.unobserve(bar);
  });
}, { threshold: 0.3 });
document.querySelectorAll('.skill-bar__fill').forEach(b => skillObs.observe(b));

/* ── Project filters ────────────────────────── */
const filterBtns = document.querySelectorAll('.filter-btn');
const cards      = document.querySelectorAll('.project-card');

filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    filterBtns.forEach(b => b.classList.remove('is-active'));
    btn.classList.add('is-active');
    const cat = btn.getAttribute('data-filter');
    cards.forEach(card => {
      if (cat === 'all' || card.getAttribute('data-category') === cat) {
        delete card.dataset.hidden;
      } else {
        card.dataset.hidden = '';
      }
    });
  });
});

/* ── Parcours tabs ──────────────────────────── */
const tabBtns = document.querySelectorAll('.tab-btn');
tabBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    tabBtns.forEach(b => b.classList.remove('is-active'));
    btn.classList.add('is-active');
    const target = btn.getAttribute('data-tab');
    document.getElementById('tab-exp').classList.toggle('is-hidden', target !== 'exp');
    document.getElementById('tab-edu').classList.toggle('is-hidden', target !== 'edu');
  });
});

/* ── Project modal ──────────────────────────── */
const overlay   = document.getElementById('modalOverlay');
const modalBody = document.getElementById('modalBody');
const modalClose = document.getElementById('modalClose');

const projectTags = {
  p1: ['ANSYS Fluent', 'k-ε', 'Maillage structuré', 'Compressible'],
  p2: ['ANSYS Fluent', 'k-ω SST', 'Thermique', 'Transfert de chaleur'],
  p3: ['ANSYS Fluent', 'FSI', 'System Coupling', 'Maillage dynamique', 'Laminaire'],
  p4: ['ANSYS Fluent', 'RANS', 'LES', 'k-ω SST', 'Turbulence', 'Canal plan'],
  p5: ['FUGU', 'VOF', 'Pénalisation tensorielle', 'Multiphasique', 'Python', 'Fortran', 'Paraview'],
  p6: ['VOAG', 'Aérosols', 'Spectrofluorimétrie', 'ANSYS Fluent', 'Métrologie', 'Python'],
  p7: ['Python', 'Fortran', 'Volumes Finis', 'Navier-Stokes', 'Maillage décalé'],
  p8: ['COMSOL Multiphysics', 'Milieux poreux', 'Darcy', 'Kozeny-Carman', 'Homogénéisation', 'Stokes'],
};

const projectReports = {
  p1: 'assets/projects/TP_dynamique_fluide.pdf',
  p2: 'assets/projects/TP_CONVECTION_ECHANGEUR_BILEL_RAHMOUNI.pdf',
  p3: 'assets/projects/FSI.pdf',
  p4: 'assets/projects/PRESENTATION_TURBULENCE_RAHMOUNI_ABOUDA.pdf',
  p5: 'assets/projects/CR_Projet_RAHMOUN_ABOUDA.pdf',
  p6: 'assets/projects/Rapport-de-stage.pdf',
  p7: 'assets/projects/PRESENTATION_VF_ABOUDA_RAHMOUNI.pdf',
  p8: 'assets/projects/TP_MP_ABOUDA_RAHMOUNI.pdf',
};

function getResults(key) {
  const results = [];
  for (let i = 1; i <= 4; i++) {
    const val = t('projects.' + key + '.r' + i);
    if (val && val !== 'projects.' + key + '.r' + i) results.push(val);
  }
  return results;
}

function openModal(projectKey) {
  const title     = t('projects.' + projectKey + '.title');
  const desc      = t('projects.' + projectKey + '.desc');
  const date      = t('projects.' + projectKey + '.date');
  const typeKey   = document.querySelector('[data-project="' + projectKey + '"] .project-card__type')?.getAttribute('data-i18n') || '';
  const typeLabel = t(typeKey) || '';
  const results   = getResults(projectKey);
  const tags      = (projectTags[projectKey] || []);
  const report    = projectReports[projectKey] || '';

  const tagsHTML    = tags.map(tg => '<span class="tag">' + tg + '</span>').join('');
  const resultsHTML = results.map(r => '<li>' + r + '</li>').join('');

  let reportHTML;
  if (projectKey === 'cea') {
    reportHTML = '<p style="font-size:12px; color:rgba(239,159,39,0.5); font-style:italic;">🔒 Rapport confidentiel — CEA Saclay</p>';
  } else if (report) {
    reportHTML = `<a href="${report}" target="_blank" class="btn btn--outline">${t('projects.modal.report')}</a>`;
  } else {
    reportHTML = `<a href="#" class="btn btn--outline" style="display:none">${t('projects.modal.report')}</a>`;
  }

  modalBody.innerHTML = `
    <p class="modal-type">${typeLabel}</p>
    <h2 id="modalTitle">${title}</h2>
    <p class="modal-desc">${desc}</p>
    <p class="modal-section-title">${t('projects.modal.results')}</p>
    <ul class="modal-results">${resultsHTML}</ul>
    <p class="modal-section-title">${t('projects.modal.tools')}</p>
    <div class="modal-tags">${tagsHTML}</div>
    <div class="modal-meta">
      <div>${t('projects.modal.duration')} : ${date}</div>
    </div>
    <div class="modal-actions">
      ${reportHTML}
    </div>
  `;

  overlay.classList.add('is-open');
  overlay.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
  modalClose.focus();
}

function closeModal() {
  overlay.classList.remove('is-open');
  overlay.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}

cards.forEach(card => {
  const btn = card.querySelector('.project-card__more');
  const key = card.getAttribute('data-project');
  if (btn && key) btn.addEventListener('click', e => { e.stopPropagation(); openModal(key); });
  card.addEventListener('click', () => openModal(key));
});

modalClose.addEventListener('click', closeModal);
overlay.addEventListener('click', e => { if (e.target === overlay) closeModal(); });
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });

/* ── Smooth scroll ──────────────────────────── */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', e => {
    const href = anchor.getAttribute('href');
    if (href === '#') return;
    const target = document.querySelector(href);
    if (!target) return;
    e.preventDefault();
    const offset = nav.offsetHeight + 16;
    const top    = target.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top, behavior: 'smooth' });
    closeMenu();
  });
});

/* ── Footer year ────────────────────────────── */
const yearEl = document.getElementById('footerYear');
if (yearEl) yearEl.textContent = new Date().getFullYear();

/**
 * GestorRH — Shared Navigation & Footer
 * Uso: <script src="../shared/nav.js"></script>  (subpáginas)
 *      <script src="shared/nav.js"></script>      (home)
 * Añade data-page="android"|"escritorio"|"home" al <body>
 */
(function () {

  function logoSVG(size) {
    const s = size;
    // Radios y padding proporcionales al tamaño
    const rOuter  = Math.round(s * 0.24);   // radio esquinas blancas exteriores
    const rFrame  = Math.round(s * 0.20);   // radio marco azul oscuro
    const rInner  = Math.round(s * 0.15);   // radio área contenido
    const frameP  = s * 0.075;              // padding marco sobre blanco
    const innerP  = s * 0.145;             // padding contenido sobre marco

    const fi = frameP;
    const fw = s - fi * 2;
    const ii = innerP;
    const iw = s - ii * 2;

    // Persona: cabeza
    const pcx = s * 0.385;
    const pcy = s * 0.355;
    const pr  = s * 0.22;

    // Persona: cuerpo (path de arco)
    const bodyTop  = pcy + pr * 0.45;
    const bodyBott = s * 0.89;
    const bodyHalf = pr * 1.3;

    // Panel lista
    const lx = s * 0.46;
    const ly = pcy - pr * 0.18;
    const lw = s - lx - ii + s * 0.01;
    const lh = s * 0.56;
    const lr = s * 0.075;

    // Líneas de lista
    const llx  = lx + s * 0.055;
    const llw  = lw - s * 0.11;
    const llh  = s * 0.065;
    const llr  = llh / 2;
    const ll1y = ly + lh * 0.20;
    const ll2y = ly + lh * 0.46;
    const ll3y = ly + lh * 0.72;

    const sw = Math.max(0.5, s * 0.022); // stroke-width borde cyan (no se usa ahora)

    return `<svg xmlns="http://www.w3.org/2000/svg" width="${s}" height="${s}" viewBox="0 0 ${s} ${s}" role="img" aria-label="GestorRH logo">
  <rect width="${s}" height="${s}" rx="${rOuter}" fill="#FFFFFF"/>
  <rect x="${fi}" y="${fi}" width="${fw}" height="${fw}" rx="${rFrame}" fill="#1A365D"/>
  <rect x="${ii}" y="${ii}" width="${iw}" height="${iw}" rx="${rInner}" fill="#F0F6FC"/>
  <circle cx="${pcx}" cy="${pcy}" r="${pr}" fill="#00A8E8"/>
  <path d="M${ii + 0.01} ${bodyBott} Q${ii + 0.01} ${bodyTop} ${pcx} ${bodyTop} Q${pcx + bodyHalf} ${bodyTop} ${pcx + bodyHalf} ${bodyBott} Z" fill="#00A8E8"/>
  <rect x="${lx}" y="${ly}" width="${lw}" height="${lh}" rx="${lr}" fill="#1A365D"/>
  <rect x="${llx}" y="${ll1y}" width="${llw}" height="${llh}" rx="${llr}" fill="#F0F6FC"/>
  <rect x="${llx}" y="${ll2y}" width="${llw}" height="${llh}" rx="${llr}" fill="#F0F6FC"/>
  <rect x="${llx}" y="${ll3y}" width="${llw}" height="${llh}" rx="${llr}" fill="#F0F6FC"/>
</svg>`;
  }

  const depth = window.location.pathname.split('/').filter(Boolean).length;
  const root  = depth <= 1 ? '' : '../';
  const page  = document.body.dataset.page || 'home';

  document.body.insertAdjacentHTML('afterbegin', `
<nav id="grh-nav">
  <a href="${root}index.html" class="nav-logo">
    <div class="nav-logo-icon">${logoSVG(34)}</div>
    GestorRH
    <span class="nav-badge">Multiplataforma</span>
  </a>
  <div class="nav-links">
    <a href="${root}index.html"             ${page==='home'       ?'class="active"':''}>Inicio</a>
    <a href="${root}android/index.html"     ${page==='android'    ?'class="active"':''}>Android</a>
    <a href="${root}escritorio/index.html"  ${page==='escritorio' ?'class="active"':''}>Escritorio</a>
  </div>
</nav>`);

  document.body.insertAdjacentHTML('beforeend', `
<footer>
  <div class="container">
    <div class="footer-inner">
      <div class="footer-brand">
        <div class="footer-brand-img">${logoSVG(28)}</div>
        <span class="footer-brand-name">GestorRH</span>
      </div>
      <div class="footer-links">
        <a href="https://github.com/GestorRH-Multiplataforma" target="_blank" rel="noopener">GitHub</a>
        <a href="${root}android/index.html">Android</a>
        <a href="${root}escritorio/index.html">Escritorio</a>
      </div>
    </div>
    <div class="footer-bottom">
      <span class="footer-copy">© 2026 GestorRH Multiplataforma · Todos los derechos reservados</span>
      <span class="footer-version" id="grh-footer-version"></span>
    </div>
  </div>
</footer>`);

  /* Scroll reveal */
  const obs = new IntersectionObserver(
    entries => entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); } }),
    { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
  );
  document.querySelectorAll('.reveal').forEach(el => obs.observe(el));

  /* Utilidades globales */
  window.GRH = window.GRH || {};

  window.GRH.detectPlatform = () => {
    const ua = navigator.userAgent.toLowerCase();
    if (/android/.test(ua)) return 'android';
    if (/iphone|ipad/.test(ua)) return 'ios';
    if (/mac/.test(ua) && !/windows/.test(ua)) return 'macos';
    if (/win/.test(ua)) return 'windows';
    return null;
  };
})();

/* ── Estilos del contenido Markdown del changelog ──────────── */
(function () {
  const s = document.createElement('style');
  s.textContent = `
    .changelog-content h1,.changelog-content h2,.changelog-content h3{font-family:'Epilogue',sans-serif;color:#fff;margin:18px 0 8px;font-size:15px;font-weight:700;}
    .changelog-content h2{font-size:14px;}
    .changelog-content h3{font-size:13px;color:rgba(255,255,255,0.8);}
    .changelog-content ul,.changelog-content ol{padding-left:20px;margin:8px 0;}
    .changelog-content li{margin-bottom:6px;color:rgba(255,255,255,0.75);font-size:14px;line-height:1.6;}
    .changelog-content p{margin:8px 0;color:rgba(255,255,255,0.75);font-size:14px;line-height:1.7;}
    .changelog-content code{background:rgba(0,168,232,0.1);color:#00A8E8;padding:1px 6px;border-radius:4px;font-size:12px;}
    .changelog-content pre{background:rgba(0,0,0,0.3);border-radius:8px;padding:12px;overflow-x:auto;margin:10px 0;}
    .changelog-content pre code{background:none;color:rgba(255,255,255,0.8);font-size:12px;}
    .changelog-content blockquote{border-left:3px solid rgba(0,168,232,0.4);margin:10px 0;padding:8px 16px;background:rgba(0,168,232,0.06);border-radius:0 8px 8px 0;}
    .changelog-content blockquote p{color:rgba(255,255,255,0.6);margin:0;}
    .changelog-content a{color:#00A8E8;text-decoration:none;}
    .changelog-content a:hover{text-decoration:underline;}
    .changelog-content strong{color:#fff;font-weight:700;}
    .changelog-content hr{border:none;border-top:1px solid rgba(255,255,255,0.08);margin:16px 0;}
  `;
  document.head.appendChild(s);
})();

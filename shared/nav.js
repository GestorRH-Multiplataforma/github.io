/**
 * GestorRH — Shared Navigation & Footer
 * Uso: <script src="../shared/nav.js"></script>  (subpáginas)
 *      <script src="shared/nav.js"></script>      (home)
 * Añade data-page="android"|"escritorio"|"home" al <body>
 */
(function () {
 
  function logoSVG(size) {
    const r   = Math.round(size * 0.22);
    const ir  = Math.round(size * 0.15);
    const pad = Math.round(size * 0.12);
    const inner = size - pad * 2;
    const cx  = size * 0.38;
    const hcy = size * 0.33;
    const hr  = size * 0.25;
    const bodyT  = hcy + hr * 0.5;
    const bodyW  = hr * 2.4;
    const bodyBL = size * 0.88;
    const lx  = size * 0.46;
    const ly  = hcy - hr * 0.2;
    const lw  = size * 0.43;
    const lh  = size * 0.55;
    const lr  = size * 0.08;
    const llx = lx + size * 0.06;
    const llw = lw - size * 0.12;
    const llh = size * 0.06;
    const llr = llh / 2;
    const ll1y = ly + size * 0.12;
    const ll2y = ll1y + size * 0.16;
    const ll3y = ll2y + size * 0.16;
    return `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 ${size} ${size}" role="img" aria-label="GestorRH logo">
  <rect width="${size}" height="${size}" rx="${r}" fill="#1A365D" stroke="#00A8E8" stroke-width="${Math.max(0.6, size * 0.025)}"/>
  <rect x="${pad}" y="${pad}" width="${inner}" height="${inner}" rx="${ir}" fill="#F0F6FC"/>
  <circle cx="${cx}" cy="${hcy}" r="${hr}" fill="#00A8E8"/>
  <path d="M${pad + size*0.01} ${bodyBL} Q${pad + size*0.01} ${bodyT} ${cx} ${bodyT} Q${cx + bodyW/2} ${bodyT} ${cx + bodyW/2} ${bodyBL} Z" fill="#00A8E8"/>
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
 
  const obs = new IntersectionObserver(
    entries => entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); } }),
    { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
  );
  document.querySelectorAll('.reveal').forEach(el => obs.observe(el));
 
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

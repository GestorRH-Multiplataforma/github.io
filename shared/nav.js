/**
 * GestorRH — Shared Navigation & Footer
 * Uso: <script src="../shared/nav.js"></script>  (subpáginas)
 *      <script src="shared/nav.js"></script>      (home)
 * Añade data-page="android"|"escritorio"|"home" al <body>
 */
(function () {

  const LOGO_B64 = 'data:image/png;base64,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';

  const depth = window.location.pathname.split('/').filter(Boolean).length;
  const root  = depth <= 1 ? '' : '../';
  const page  = document.body.dataset.page || 'home';

  document.body.insertAdjacentHTML('afterbegin', `
<nav id="grh-nav">
  <a href="${root}index.html" class="nav-logo">
    <div class="nav-logo-icon">
      <img src="${LOGO_B64}" alt="GestorRH" width="34" height="34" style="border-radius:9px;display:block;" />
    </div>
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
        <div class="footer-brand-img">
          <img src="${LOGO_B64}" alt="GestorRH" width="28" height="28" style="border-radius:7px;display:block;" />
        </div>
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

  /* Carga marked.js si no está disponible y luego convierte */
  window.GRH.markdownToHtml = function (md) {
    if (window.marked) {
      return window.marked.parse(md);
    }
    /* Fallback básico mientras carga la librería */
    return md
      .replace(/^### (.+)$/gm,'<h3>$1</h3>').replace(/^## (.+)$/gm,'<h2>$1</h2>').replace(/^# (.+)$/gm,'<h1>$1</h1>')
      .replace(/\*\*(.+?)\*\*/g,'<strong>$1</strong>').replace(/`([^`]+)`/g,'<code>$1</code>')
      .replace(/^[-*] (.+)$/gm,'<li>$1</li>').replace(/(<li>.*<\/li>\n?)+/gs,m=>'<ul>'+m+'</ul>')
      .replace(/\n\n/g,'<br/><br/>').replace(/\n/g,'<br/>');
  };

  /* Inyectar marked.js desde CDN */
  const markedScript = document.createElement('script');
  markedScript.src = 'https://cdnjs.cloudflare.com/ajax/libs/marked/9.1.6/marked.min.js';
  markedScript.onload = () => {
    window.marked.setOptions({ breaks: true, gfm: true });
    /* Re-renderizar cualquier changelog que ya esté visible */
    document.querySelectorAll('[data-markdown]').forEach(el => {
      el.innerHTML = window.marked.parse(el.dataset.markdown);
    });
  };
  document.head.appendChild(markedScript);

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

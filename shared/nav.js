/**
 * GestorRH — Shared Navigation & Footer
 *
 * Uso:
 *   <script src="../shared/nav.js"></script>   ← desde subpáginas
 *   <script src="shared/nav.js"></script>       ← desde la home
 *
 * Añade data-page="android" | "escritorio" | "home" al <body>
 */
(function () {
  const LOGO_B64 = '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';

  const depth = window.location.pathname.split('/').filter(Boolean).length;
  const root  = depth <= 1 ? '' : '../';

  const page = document.body.dataset.page || 'home';

  const navHTML = `
<nav id="grh-nav">
  <a href="${root}index.html" class="nav-logo">
    <div class="nav-logo-icon">
      <img src="data:image/png;base64,${LOGO_B64}" alt="GestorRH" width="34" height="34" style="border-radius:9px;" />
    </div>
    GestorRH
    <span class="nav-badge">Multiplataforma</span>
  </a>

  <div class="nav-links">
    <a href="${root}index.html"               ${page==='home'       ? 'class="active"' : ''}>Inicio</a>
    <a href="${root}android/index.html"       ${page==='android'    ? 'class="active"' : ''}>Android</a>
    <a href="${root}escritorio/index.html"    ${page==='escritorio' ? 'class="active"' : ''}>Escritorio</a>
    <a href="https://gestorrh-multiplataforma.github.io/GestorRH-API/" target="_blank" rel="noopener">Documentación</a>
  </div>

  <a href="${root}android/index.html#descarga" class="nav-cta">
    <svg viewBox="0 0 24 24"><path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/></svg>
    Descargar
  </a>
</nav>`;

  const footerHTML = `
<footer>
  <div class="container">
    <div class="footer-inner">
      <div class="footer-brand">
        <div class="footer-brand-img">
          <img src="data:image/png;base64,${LOGO_B64}" alt="GestorRH" width="28" height="28" style="border-radius:7px;" />
        </div>
        <span class="footer-brand-name">GestorRH</span>
      </div>
      <div class="footer-links">
        <a href="https://github.com/GestorRH-Multiplataforma" target="_blank" rel="noopener">GitHub</a>
        <a href="${root}android/index.html">Android</a>
        <a href="${root}escritorio/index.html">Escritorio</a>
        <a href="https://gestorrh-multiplataforma.github.io/GestorRH-API/" target="_blank" rel="noopener">Documentación</a>
      </div>
    </div>
    <div class="footer-bottom">
      <span class="footer-copy">© 2026 GestorRH Multiplataforma · Todos los derechos reservados</span>
    </div>
  </div>
</footer>`;

  document.body.insertAdjacentHTML('afterbegin', navHTML);
  document.body.insertAdjacentHTML('beforeend', footerHTML);

  /* Scroll reveal */
  const observer = new IntersectionObserver(
    entries => entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('visible'); observer.unobserve(e.target); }
    }),
    { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
  );
  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

  /* Utilidades globales */
  window.GRH = window.GRH || {};

  window.GRH.markdownToHtml = function (md) {
    return md
      .replace(/^### (.+)$/gm, '<h3>$1</h3>')
      .replace(/^## (.+)$/gm, '<h2>$1</h2>')
      .replace(/^# (.+)$/gm, '<h1>$1</h1>')
      .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
      .replace(/`([^`]+)`/g, '<code>$1</code>')
      .replace(/^[-*] (.+)$/gm, '<li>$1</li>')
      .replace(/(<li>.*<\/li>\n?)+/gs, m => '<ul>' + m + '</ul>')
      .replace(/\n\n/g, '<br/><br/>')
      .replace(/\n/g, '<br/>');
  };

  window.GRH.detectPlatform = function () {
    const ua = navigator.userAgent.toLowerCase();
    if (/iphone|ipad|android/.test(ua)) return 'android';
    if (/mac/.test(ua) && !/windows/.test(ua)) return 'macos';
    if (/win/.test(ua)) return 'windows';
    return null;
  };
})();

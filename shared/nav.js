/**
 * GestorRH — Shared Navigation & Footer
 *
 * Uso en cada página:
 *   <script src="../shared/nav.js"></script>          ← desde subpáginas
 *   <script src="shared/nav.js"></script              ← desde la home
 *
 * Añade data-page="android" | "escritorio" | "home" al <body>
 * para que el nav marque el enlace activo automáticamente.
 *
 * Requiere: shared/styles.css cargado antes que este script.
 */

(function () {
  /* ── Logo base64 (misma imagen que el index actual) ──────── */
  const LOGO_B64 = 'data:image/png;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDAAUDBAQEAwUEBAQFBQUGBwwIBwcHBw8LCwkMEQ8SEhEPERETFhwXExQaFRERGCEYGh0dHx8fExciJCIeJBweHx7/wAARCABAAEADASIAAhEBAxEB/8QAGwAAAgMBAQEAAAAAAAAAAAAABAUCAwYBAAf/xAAvEAACAQMDAgUDBAMAAAAAAAABAgMABBEFEiExBhNBUWEicYGRFDKhscHR4f/EABQBAQAAAAAAAAAAAAAAAAAAAAD/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwDz+nz3F1MsVqjSSMeBjmvQ9J0P7HpoSRuaVgDziqHQmgt9ft5JpkiQHljIAFeiRyrJGGRgwIyCKBKKz5OSBUB95oA5oAB9aTbXVxp9wJ7aTY+Mdqc1U/8AJ0+e5e3jlJkTqBQBR1vxjqeoSmO1YW0Y4AVck/U1W4fEGswzCT7RK5B4Em0j9KVXNpPauEuIXiY9A6kV20ua40bVI7oRM0DYEir14FAbE3iXUpXWR7iVncbmYOck0ms/EWoaVqkF9aTESxHKkjIPsRVe+1Oe+VZLiVnZMgOTnGfWklAGtb/ELVbWeK4N0zm1lEixt0DDp9j6V7ppWow6pYR3kH3SNuO/IIPIIrxmCGS4lEcMbSuegVc165oGmpp2lW8CMHKJhnHVj3NAcO5HlRgQeRge9QbiJJF5Oa7OOvXrUC+7UAr2NxLZ3kNxCxSSJw6kdwRjFe36PqcWr6bDexghZV5X9J7j4NeHnp616N4V1+K+0yKzkmX7ZbJtKE/MW7EUAaHFU5Lf8ATvzilI+IKsQe9QKAKGt6lFpekT3kxHlonA7k9BXi2palNqd5LdzElnYnJ7CvUPiZKsejwx5+aWVQB8gGv/FeBMQJAD3FANxEzyKiDLMQAPer0Giz2VxFfqiJJbOHUsM8jn+KqdE0i41TVoLMR7Y3bLv2Uel7Vq1u2SASKAe068t7+yiurVw8UqhlI9P9qsGsfqajB/FaG7tLkRXdoB5jrwsgHQH2PQ+1Afb//Z';

  /* ── Detectar profundidad de ruta ────────────────────────── */
  const depth = window.location.pathname.split('/').filter(Boolean).length;
  const root  = depth <= 1 ? '' : '../';     // '' desde home, '../' desde subpáginas

  /* ── Página activa ───────────────────────────────────────── */
  const page = document.body.dataset.page || 'home';

  /* ── HTML del nav ────────────────────────────────────────── */
  const navHTML = `
<nav id="grh-nav">
  <a href="${root}index.html" class="nav-logo">
    <div class="nav-logo-icon">
      <img src="${LOGO_B64}" alt="GestorRH logo" width="34" height="34" />
    </div>
    GestorRH
    <span class="nav-badge">Multiplataforma</span>
  </a>

  <div class="nav-links">
    <a href="${root}index.html"          ${page==='home'      ? 'class="active"' : ''}>Inicio</a>
    <a href="${root}android/index.html"  ${page==='android'   ? 'class="active"' : ''}>Android</a>
    <a href="${root}escritorio/index.html" ${page==='escritorio'? 'class="active"' : ''}>Escritorio</a>
    <a href="https://gestorrh-multiplataforma.github.io/GestorRH-API/" target="_blank" rel="noopener">API Docs</a>
  </div>

  <a href="${root}android/index.html#descarga" class="nav-cta">
    <svg viewBox="0 0 24 24"><path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/></svg>
    Descargar
  </a>
</nav>`;

  /* ── HTML del footer ─────────────────────────────────────── */
  const footerHTML = `
<footer>
  <div class="container">
    <div class="footer-inner">
      <div class="footer-brand">
        <div class="footer-brand-img">
          <img src="${LOGO_B64}" alt="GestorRH" width="28" height="28" />
        </div>
        <span class="footer-brand-name">GestorRH</span>
      </div>
      <div class="footer-links">
        <a href="https://github.com/GestorRH-Multiplataforma" target="_blank" rel="noopener">GitHub</a>
        <a href="https://github.com/GestorRH-Multiplataforma/GestorRH-API" target="_blank" rel="noopener">API</a>
        <a href="https://github.com/GestorRH-Multiplataforma/gestorrh-android" target="_blank" rel="noopener">Android</a>
        <a href="https://github.com/GestorRH-Multiplataforma/GestorRH-Escritorio" target="_blank" rel="noopener">Escritorio</a>
        <a href="https://gestorrh-multiplataforma.github.io/GestorRH-API/" target="_blank" rel="noopener">Documentación</a>
      </div>
    </div>
    <div class="footer-bottom">
      <span class="footer-copy">© 2026 GestorRH Multiplataforma · Todos los derechos reservados</span>
      <span class="footer-version" id="grh-footer-version">Ecosistema v1.1.3</span>
    </div>
  </div>
</footer>`;

  /* ── Inyección ───────────────────────────────────────────── */
  document.body.insertAdjacentHTML('afterbegin', navHTML);
  document.body.insertAdjacentHTML('beforeend', footerHTML);

  /* ── Scroll reveal (compartido en todas las páginas) ──────── */
  const observer = new IntersectionObserver(
    (entries) => entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('visible'); observer.unobserve(e.target); }
    }),
    { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
  );
  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

  /* ── Markdown lite (changelog) ────────────────────────────── */
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

  /* ── Detección de plataforma ──────────────────────────────── */
  window.GRH.detectPlatform = function () {
    const ua = navigator.userAgent.toLowerCase();
    if (/iphone|ipad|android/.test(ua)) return 'android';
    if (/mac/.test(ua) && !/windows/.test(ua)) return 'macos';
    if (/win/.test(ua)) return 'windows';
    return null;
  };
})();

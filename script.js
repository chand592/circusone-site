/* Circus One Limited — site interactions
   No build step. No dependencies. Just vanilla JS. */

(function () {
  'use strict';

  /* ---------- Mobile menu toggle ---------- */
  const toggle = document.getElementById('menu-toggle');
  const menu = document.getElementById('mobile-menu');
  if (toggle && menu) {
    toggle.addEventListener('click', () => {
      const isOpen = menu.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', String(isOpen));
      toggle.setAttribute('aria-label', isOpen ? 'Close menu' : 'Open menu');
    });
  }

  /* ---------- Portfolio filter ---------- */
  const filterBar = document.getElementById('filter-bar');
  const grid = document.getElementById('project-grid');
  const emptyState = document.getElementById('empty-state');
  if (filterBar && grid) {
    const items = grid.querySelectorAll('.project-item');
    const buttons = filterBar.querySelectorAll('button[data-filter]');

    filterBar.addEventListener('click', (event) => {
      const target = event.target;
      if (!(target instanceof HTMLElement)) return;
      const btn = target.closest('button[data-filter]');
      if (!btn) return;
      const filter = btn.dataset.filter;

      buttons.forEach((b) => b.setAttribute('aria-pressed', 'false'));
      btn.setAttribute('aria-pressed', 'true');

      let visible = 0;
      items.forEach((item) => {
        const matches = filter === 'All' || item.dataset.category === filter;
        item.classList.toggle('is-hidden', !matches);
        if (matches) visible++;
      });

      if (emptyState) {
        emptyState.classList.toggle('is-hidden', visible > 0);
      }
    });
  }
})();

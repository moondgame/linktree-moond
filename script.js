'use strict';

/**
 * Toggle panel submenu (Sosial Media / Game).
 * Tidak lagi dipanggil lewat atribut onclick="" di HTML (yang butuh
 * CSP 'unsafe-inline'), tapi lewat addEventListener di bawah.
 * Ini memungkinkan CSP script-src diperketat jadi 'self' saja.
 */
function togglePanel(name) {
  const panel = document.getElementById('panel-' + name);
  const btn = document.getElementById('btn-' + name);
  if (!panel || !btn) return;

  const isOpen = panel.classList.contains('open');

  // Tutup semua panel lain
  document.querySelectorAll('.panel').forEach(p => p.classList.remove('open'));
  document.querySelectorAll('.link-btn').forEach(b => b.classList.remove('active'));

  // Buka panel yang diklik jika sebelumnya tertutup
  if (!isOpen) {
    panel.classList.add('open');
    btn.classList.add('active');
  }
}

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.link-btn[data-panel]').forEach(btn => {
    btn.addEventListener('click', () => togglePanel(btn.dataset.panel));
  });
});

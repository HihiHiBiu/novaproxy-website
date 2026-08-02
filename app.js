const store = {
  get(key, fallback) { try { return JSON.parse(localStorage.getItem(`nova_${key}`)) ?? fallback; } catch { return fallback; } },
  set(key, value) { localStorage.setItem(`nova_${key}`, JSON.stringify(value)); },
  user() { return this.get('user', null); },
  login(user) { this.set('user', user); },
  logout() { localStorage.removeItem('nova_user'); }
};

function currency(value) { return `¥${Number(value).toLocaleString('zh-CN')}`; }
function toast(message) { const t = document.querySelector('.toast'); if (!t) return; t.textContent = message; t.classList.add('show'); setTimeout(()=>t.classList.remove('show'), 2800); }
function randomId(prefix) { return `${prefix}${Math.random().toString(36).slice(2,8).toUpperCase()}`; }
function formatDate(iso) { return new Intl.DateTimeFormat('zh-CN',{year:'numeric',month:'short',day:'numeric'}).format(new Date(iso)); }

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('[data-user-name]').forEach(el => { const u=store.user(); el.textContent = u?.name || '访客'; });
  document.querySelectorAll('[data-logout]').forEach(btn => btn.addEventListener('click', () => { store.logout(); location.href='index.html'; }));
  document.querySelectorAll('[data-protected]').forEach(el => { if (!store.user()) el.href='auth.html?mode=register'; });
});

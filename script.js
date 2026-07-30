const toast = document.querySelector('.toast');
let timer;
document.querySelectorAll('[data-toast]').forEach(button => button.addEventListener('click', () => {
  toast.textContent = button.dataset.toast;
  toast.classList.add('show');
  clearTimeout(timer); timer = setTimeout(() => toast.classList.remove('show'), 3200);
}));
const prices = [159, 279, 499, 899, 1499];
const traffic = document.querySelector('#traffic');
const price = document.querySelector('#price');
const trafficLabel = document.querySelector('#traffic-label');
let yearly = false;
function updatePrice(){ const n = +traffic.value; const value = yearly ? Math.round(prices[n-1]*.8) : prices[n-1]; price.textContent = value; trafficLabel.textContent = `${[5,10,20,50,100][n-1]} GB`; }
traffic.addEventListener('input', updatePrice);
document.querySelectorAll('[data-billing]').forEach(b => b.addEventListener('click', () => { document.querySelectorAll('[data-billing]').forEach(x=>x.classList.remove('active')); b.classList.add('active'); yearly=b.dataset.billing==='yearly'; updatePrice(); }));

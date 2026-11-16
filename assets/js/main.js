let cart = +(localStorage.getItem('leyn_cart') || 0);
const cntEl = () => document.getElementById('cnt');
function paint(){ if(cntEl()) cntEl().textContent = cart; }
paint();
function toast(t){
  let el = document.querySelector('.toast');
  if(!el){ el = document.createElement('div'); el.className = 'toast'; document.body.appendChild(el); }
  el.textContent = t; el.classList.add('on');
  setTimeout(() => el.classList.remove('on'), 2200);
}
document.querySelectorAll('[data-add]').forEach(b => b.addEventListener('click', e => {
  e.preventDefault();
  cart++; localStorage.setItem('leyn_cart', cart); paint();
  toast((b.dataset.add || 'Ürün') + ' sepete eklendi');
}));
document.querySelectorAll('.size').forEach(b => b.addEventListener('click', () => {
  b.parentElement.querySelectorAll('.size').forEach(x => x.classList.remove('on'));
  b.classList.add('on');
}));
document.querySelectorAll('.gal-thumbs div').forEach(t => t.addEventListener('click', () => {
  document.querySelectorAll('.gal-thumbs div').forEach(x => x.classList.remove('on'));
  t.classList.add('on');
  const m = document.querySelector('.gal-main img'); if(m) m.src = t.dataset.src;
}));
const bg = document.querySelector('.burger');
if(bg) bg.addEventListener('click', () => document.querySelector('.menu').classList.toggle('open'));
document.querySelectorAll('[data-filter]').forEach(ch => ch.addEventListener('click', () => {
  document.querySelectorAll('[data-filter]').forEach(c => c.classList.remove('on'));
  ch.classList.add('on');
  const f = ch.dataset.filter;
  document.querySelectorAll('[data-cat]').forEach(card => {
    card.style.display = (f === 'all' || card.dataset.cat.split(' ').includes(f)) ? '' : 'none';
  });
}));
const sortSel = document.getElementById('sort');
if(sortSel) sortSel.addEventListener('change', () => {
  const g = document.getElementById('grid'); if(!g) return;
  const items = [...g.children];
  if(sortSel.value === 'asc') items.sort((a,b) => +a.dataset.price - +b.dataset.price);
  if(sortSel.value === 'desc') items.sort((a,b) => +b.dataset.price - +a.dataset.price);
  items.forEach(i => g.appendChild(i));
});
const wa = document.createElement('a');
wa.href = 'https://wa.me/905315595503?text=Merhaba%2C%20%C3%BCr%C3%BCn%20hakk%C4%B1nda%20bilgi%20almak%20istiyorum';
wa.target = '_blank'; wa.rel = 'noopener'; wa.className = 'wafloat'; wa.textContent = 'WhatsApp';
document.body.appendChild(wa);
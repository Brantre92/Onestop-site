const btn=document.querySelector('.menu-btn');
const menu=document.querySelector('.menu');
btn?.addEventListener('click',()=>menu.classList.toggle('open'));
document.querySelectorAll('.menu a').forEach(a=>a.addEventListener('click',()=>menu.classList.remove('open')));
const obs=new IntersectionObserver(entries=>{entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('show')})},{threshold:.15});
document.querySelectorAll('.reveal').forEach(el=>obs.observe(el));

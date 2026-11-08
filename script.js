// Preloader
(function(){
  var p=0,el=document.getElementById('pct'),b=document.getElementById('pbar'),l=document.getElementById('loader');
  var t=setInterval(function(){p=Math.min(100,p+Math.ceil(Math.random()*12));el.textContent=p+'%';b.style.width=p+'%';
    if(p>=100){clearInterval(t);setTimeout(function(){l.style.opacity=0;setTimeout(function(){l.remove()},500)},250)}},80);
})();
// Menu
var menu=document.getElementById('menu');
document.getElementById('burger').onclick=function(){menu.classList.toggle('open')};
menu.onclick=function(){menu.classList.remove('open')};
// Marquee
var words='RUNNING • BILLIARD • FOOTBALL • RIDE • PLAYSTATION • ';
document.getElementById('mq').innerHTML='<span>'+words.repeat(4)+'</span><span>'+words.repeat(4)+'</span>';
// Counters
function count(e){var to=+e.dataset.to,c=0,s=Math.max(1,Math.ceil(to/60));
  var i=setInterval(function(){c=Math.min(to,c+s);e.textContent=c;if(c>=to)clearInterval(i)},25)}
// Reveal on scroll
var io=new IntersectionObserver(function(es){es.forEach(function(x){
  if(!x.isIntersecting)return;var e=x.target;e.classList.add('on');
  if(e.dataset&&e.dataset.to&&!e.done){e.done=1;count(e)}
  if(e.dataset&&e.dataset.w){e.style.width=e.dataset.w+'%'}
  io.unobserve(e)})},{threshold:.2});
document.querySelectorAll('.rv,[data-to],[data-w]').forEach(function(e){io.observe(e)});
// Form → WhatsApp (ganti nomor di bawah)
document.getElementById('f').onsubmit=function(ev){ev.preventDefault();
  var m='Halo, saya '+fn.value+' ('+fe.value+'). '+fm.value;
  window.open('https://wa.me/6283125581380?text='+encodeURIComponent(m),'_blank')};

(function(){
  var h=document.querySelector('.site-header');
  if(h&&document.body.classList.contains('homepage-redesign')){
    var f=function(){h.classList.toggle('is-solid',window.scrollY>40)};f();window.addEventListener('scroll',f,{passive:true});
  }
  document.querySelectorAll('[data-carousel]').forEach(function(c){
    var t=c.querySelector('.car-track'),w=c.closest('section');
    w.querySelectorAll('[data-car]').forEach(function(b){b.addEventListener('click',function(){
      var step=(t.querySelector('.car-item')||t).offsetWidth+20;
      t.scrollBy({left:b.dataset.car==='next'?step:-step,behavior:'smooth'});});});
  });
  var g=document.querySelector('[data-bs-grid]');
  if(g){
    var cat=function(el){var n=(el.textContent||'').toLowerCase();
      if(/co-?ord/.test(n))return'coords';if(/jogger|trouser|pant/.test(n))return'joggers';
      if(/sweatshirt|hoodie/.test(n))return'sweatshirts';if(/t-?shirt|tee/.test(n))return'tshirts';
      if(/shirt/.test(n))return'shirts';return'';};
    var items=[].slice.call(g.children);
    items.forEach(function(i){i.dataset.cat=(i.dataset.category||'')});
    document.querySelectorAll('.bs-tab').forEach(function(b){b.addEventListener('click',function(){
      document.querySelectorAll('.bs-tab').forEach(function(x){x.classList.toggle('is-active',x===b)});
      items.forEach(function(i){i.hidden=!(b.dataset.filter==='all'||(' '+i.dataset.cat+' ').indexOf(' '+b.dataset.filter+' ')>-1)});});});
  }
  document.querySelectorAll('[data-demo-form]').forEach(function(f){
    f.addEventListener('submit',function(e){e.preventDefault();var n=f.querySelector('.form-note');if(n)n.hidden=false;});
  });
})();
/* Customer feedback: open inline form and send via WhatsApp / email (no backend) */
(function(){
  var open=document.querySelector('[data-fb-open]'),f=document.getElementById('fb-form');
  if(!open||!f)return;
  open.addEventListener('click',function(e){e.preventDefault();f.hidden=!f.hidden;open.setAttribute('aria-expanded',String(!f.hidden));if(!f.hidden)document.getElementById('fb-name').focus();});
  f.querySelectorAll('[data-fb-send]').forEach(function(b){b.addEventListener('click',function(){
    var n=document.getElementById('fb-name').value.trim(),c=document.getElementById('fb-city').value.trim(),m=document.getElementById('fb-msg').value.trim();
    var err=f.querySelector('.fb-err');err.hidden=!!(n&&m);if(!n||!m)return;
    var t='Customer feedback for THE YOUTH LABEL\nName: '+n+(c?'\nCity: '+c:'')+'\n\n'+m;
    if(b.dataset.fbSend==='wa')window.open('https://wa.me/918838666712?text='+encodeURIComponent(t),'_blank','noopener');
    else window.location.href='mailto:support.theyouthlabel@gmail.com?subject='+encodeURIComponent('Customer feedback')+'&body='+encodeURIComponent(t);
  });});
})();
/* Fits in Motion reel: gentle auto-advance + pause toggle */
(function(){
  var sec=document.querySelector('.fits-reel-section'),track=document.getElementById('motion-reel');
  if(!sec||!track)return;
  var paused=false,timer=null,reduce=window.matchMedia&&matchMedia('(prefers-reduced-motion: reduce)').matches;
  function step(){var cards=track.querySelectorAll('.reel-card'),w=cards[0].offsetWidth+14;
    if(track.scrollLeft+track.clientWidth>=track.scrollWidth-4)track.scrollTo({left:0,behavior:'smooth'});else track.scrollBy({left:w,behavior:'smooth'});}
  function start(){stop();if(!paused&&!reduce)timer=setInterval(step,3200);}
  function stop(){if(timer){clearInterval(timer);timer=null}}
  function setPaused(p){paused=p;sec.classList.toggle('is-paused',p);
    sec.querySelectorAll('video').forEach(function(v){p?v.pause():v.play&&v.play()});
    sec.querySelectorAll('[data-reel-pause]').forEach(function(b){b.setAttribute('aria-label',p?'Play motion':'Pause motion');
      b.innerHTML=p?'<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M8 5l11 7-11 7z"/></svg>':'<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M8 5h3v14H8zM13 5h3v14h-3z"/></svg>'});
    p?stop():start();}
  sec.querySelectorAll('[data-reel-pause]').forEach(function(b){b.addEventListener('click',function(){setPaused(!paused)})});
  sec.addEventListener('mouseenter',stop);sec.addEventListener('mouseleave',function(){if(!paused)start()});
  track.addEventListener('touchstart',stop,{passive:true});
  var vids=[].slice.call(sec.querySelectorAll('video'));
  function playVids(on){vids.forEach(function(v){if(on&&!paused&&!reduce){var p=v.play();if(p&&p.catch)p.catch(function(){})}else v.pause()})}
  if('IntersectionObserver' in window){new IntersectionObserver(function(en){var on=en[0].isIntersecting;on?start():stop();playVids(on)},{threshold:.25}).observe(sec)}else{start();playVids(true)}
})();

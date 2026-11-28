/* Product image zoom: click an image on the product page to open a zoomable viewer */
(function(){
  var imgs=document.querySelectorAll('.gallery .stage .view img');
  if(!imgs.length)return;
  var box=document.createElement('div');
  box.className='zm';box.hidden=true;box.setAttribute('role','dialog');box.setAttribute('aria-modal','true');box.setAttribute('aria-label','Product image zoom');
  box.innerHTML='<div class="zm-bar"><span class="zm-title"></span><div class="zm-tools"><button type="button" class="zm-btn" data-z="out" aria-label="Zoom out">&minus;</button><button type="button" class="zm-btn" data-z="in" aria-label="Zoom in">+</button><button type="button" class="zm-btn" data-z="close" aria-label="Close">&times;</button></div></div><div class="zm-view"><img alt=""></div><p class="zm-hint">Click image or use + / − to zoom &middot; move to pan &middot; Esc to close</p>';
  document.body.appendChild(box);
  var view=box.querySelector('.zm-view'),im=view.querySelector('img'),title=box.querySelector('.zm-title'),lvl=1,last=null;
  function apply(){
    im.style.width=(lvl*100)+'%';
    view.classList.toggle('is-zoomed',lvl>1);
    if(lvl>1){view.scrollLeft=(view.scrollWidth-view.clientWidth)/2;view.scrollTop=(view.scrollHeight-view.clientHeight)/2}
  }
  function open(src,alt,from){
    last=from;im.src=src;im.alt=alt||'';title.textContent=alt||'';lvl=1;apply();
    box.hidden=false;document.documentElement.classList.add('zm-open');box.querySelector('[data-z=close]').focus();
  }
  function close(){box.hidden=true;document.documentElement.classList.remove('zm-open');im.removeAttribute('src');if(last)last.focus&&last.focus()}
  function setLvl(n){lvl=Math.max(1,Math.min(3,n));apply()}
  imgs.forEach(function(i){
    i.style.cursor='zoom-in';
    var v=i.closest('.view');v.setAttribute('tabindex','0');v.setAttribute('role','button');v.setAttribute('aria-label','Zoom product image');
    function go(){open(i.currentSrc||i.src,i.alt,v)}
    v.addEventListener('click',go);
    v.addEventListener('keydown',function(e){if(e.key==='Enter'||e.key===' '){e.preventDefault();go()}});
  });
  box.addEventListener('click',function(e){
    var t=e.target.closest('[data-z]');
    if(t){var a=t.dataset.z;if(a==='close')close();else if(a==='in')setLvl(lvl+.75);else setLvl(lvl-.75);return}
    if(e.target===im){setLvl(lvl>1?1:2.2)}
    else if(e.target===view||e.target===box)close();
  });
  view.addEventListener('mousemove',function(e){
    if(lvl<=1)return;var r=view.getBoundingClientRect();
    view.scrollLeft=(e.clientX-r.left)/r.width*(view.scrollWidth-view.clientWidth);
    view.scrollTop=(e.clientY-r.top)/r.height*(view.scrollHeight-view.clientHeight);
  });
  view.addEventListener('wheel',function(e){e.preventDefault();setLvl(lvl+(e.deltaY<0?.25:-.25))},{passive:false});
  document.addEventListener('keydown',function(e){
    if(box.hidden)return;
    if(e.key==='Escape')close();else if(e.key==='+'||e.key==='=')setLvl(lvl+.75);else if(e.key==='-')setLvl(lvl-.75);
  });
})();

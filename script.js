if(window.top!==window.self){try{window.top.location=window.self.location}catch(e){document.documentElement.remove()}}
(function(){
  var r=document.documentElement,b=document.getElementById('theme');
  try{var s=localStorage.getItem('theme');if(s)r.setAttribute('data-theme',s)}catch(e){}
  b.addEventListener('click',function(){
    var dark=r.getAttribute('data-theme')!=='light';
    var n=dark?'light':'dark';r.setAttribute('data-theme',n);
    try{localStorage.setItem('theme',n)}catch(e){}
  });
  var ENDPOINT='https://separ-form.YOUR-SUBDOMAIN.workers.dev/',t0=Date.now();
  document.getElementById('f').addEventListener('submit',function(e){
    e.preventDefault();
    var f=e.target,m=document.getElementById('msg'),b=f.querySelector('button');
    function say(t,bad){m.style.color=bad?'#c0392b':'';m.textContent=t}
    if(!f.n.value.trim()||!f.c.value.trim()){say('نام و راه تماس را وارد کنید.',1);return}
    b.disabled=true;say('در حال ارسال…');
    fetch(ENDPOINT,{method:'POST',headers:{'Content-Type':'application/json'},referrerPolicy:'no-referrer',credentials:'omit',
      body:JSON.stringify({n:f.n.value,c:f.c.value,k:f.t.value,m:f.d.value,website:f.website.value,t:Date.now()-t0})})
    .then(function(r){if(!r.ok)throw 0;f.reset();say('درخواست شما ثبت شد. به‌زودی با شما تماس می‌گیرم.')})
    .catch(function(){say('ارسال انجام نشد. لطفاً از تلگرام یا ایمیل تماس بگیرید.',1)})
    .then(function(){b.disabled=false});
  });
})();
(function(){var c=document.getElementById('mx');if(!c||matchMedia('(prefers-reduced-motion: reduce)').matches)return;var x=c.getContext('2d'),w,h,n,d=[],ch='01<>{}/#$%';function s(){w=c.width=c.offsetWidth;h=c.height=c.offsetHeight;n=Math.floor(w/18);d=[];for(var i=0;i<n;i++)d[i]=Math.random()*h/18}s();addEventListener('resize',s);setInterval(function(){x.fillStyle='rgba(5,9,18,.12)';x.fillRect(0,0,w,h);x.fillStyle='#22e5ff';x.font='14px monospace';for(var i=0;i<n;i++){x.fillText(ch[Math.floor(Math.random()*ch.length)],i*18,d[i]*18);if(d[i]*18>h&&Math.random()>.97)d[i]=0;d[i]++}},70)})();

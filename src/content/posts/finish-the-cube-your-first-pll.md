---
title: "Finish the Cube: Your First 2-Look PLL"
date: "2026-10-10"
description: "Finish the cube using 2-Look PLL with just 4 algorithms."
author: "Edmund Lam"
tags:
  - "Cubing"
---

<div class="cube-post">

Teaching this to someone? Read the [teacher's notes](/posts/teaching-a-4-alg-2-look-pll).

<p>You've solved the first two layers and turned the top all yellow. This page covers the last step: moving the yellow-layer pieces into their correct spots. It uses just <b>4 algorithms</b>.</p>

<div class="card"><b>Quick words</b>
<ul style="margin-top:6px">
<li><b>PLL</b> = "Permute the Last Layer": moving pieces to the right places.</li>
<li><b>OLL</b> = "Orient the Last Layer": making the top all yellow. You must finish this first.</li>
<li><b>Corner</b> = a piece with 3 colors. <b>Edge</b> = a piece with 2 colors.</li>
<li><b>Algorithm (alg)</b> = a fixed sequence of turns you memorize.</li>
</ul></div>

<h2>Reading the moves</h2>
<div class="card">
<ul>
<li><b>R, U, F</b>: turn the Right, Up (top), or Front face a quarter turn clockwise, as if you were looking at that face.</li>
<li><b>'</b> (like R'): turn it counterclockwise.</li>
<li><b>2</b> (like R2): turn it twice.</li>
<li><b>M</b>: turn the middle slice, between left and right, in the same direction as the left face turns.</li>
</ul>
<p class="mut">Turning just U between algs (to line things up) is totally fine. It's called an AUF.</p></div>

<div class="card"><b>Diagram key</b>
<p class="mut" style="margin:4px 0 8px">Top-down view of the yellow layer, with the front at the bottom. The colored bars are the side stickers. Arrows show where pieces need to go. Gray means ignore for now.</p>
<p class="mut" style="margin:0">Sides: <span class="dot" style="background:#2fa84f"></span>front <span class="dot" style="background:#f08a24"></span>right <span class="dot" style="background:#2b6fe0"></span>back <span class="dot" style="background:#d93a3a"></span>left</p></div>

<h2>The 4 algs</h2>
<div class="card">
<div><span class="pill">T</span>fixes the corners<code class="alg">R U R' U' R' F R2 U' R' U' R U R' F'</code></div><br>
<div><span class="pill">Ua</span>fixes 3 edges<code class="alg">R2 U R U R' U' R' U' R' U R'</code></div><br>
<div><span class="pill">H</span>swaps opposite edges<code class="alg">M2 U M2 U2 M2 U M2</code></div><br>
<div><span class="pill">Z</span>swaps two pairs of neighbor edges<code class="alg">M2 U M2 U M' U2 M2 U2 M'</code></div>
<p class="mut">Learn T first and practice it until it's smooth. You'll use it every solve.</p></div>

<h2>Step 1: Fix the corners</h2>
<p>Ignore the edges for now. Just look at the corners. <b>Headlights</b> are two corners next to each other with the same color on one side, like the two red bars on the left below, with light shining out.</p>
<div class="card row"><div class="fig" data-c="0123"></div>
<div><b>Corners already right?</b><p class="mut" style="margin:4px 0 0">Turn the top layer. If all four corners match the center colors on their sides, skip to Step 2.</p></div></div>
<div class="card row"><div class="fig" data-c="1023" data-l="1" data-a="TR-BR*"></div>
<div><b>Headlights?</b><p class="mut" style="margin:4px 0 0">Turn the top so the headlights face <b>left</b>. Do the <b>T</b> alg once.</p><code class="alg">R U R' U' R' F R2 U' R' U' R U R' F'</code></div></div>
<div class="card row"><div class="fig" data-c="2103" data-a="TR-BL*"></div>
<div><b>No headlights?</b><p class="mut" style="margin:4px 0 0">Do the <b>T</b> alg once from any angle. You'll get headlights. Then do the headlights step above.</p><code class="alg">R U R' U' R' F R2 U' R' U' R U R' F'</code></div></div>
<p>After that, turn the top layer until all four corners match their centers. You'll never need more than 2 T algs.</p>

<h2>Step 2: Fix the edges</h2>
<p>Turn the top layer so the corners match their centers. Now look at the edges (the middle pieces on each side). Which picture matches?</p>
<div class="grid">
<div class="cell"><div class="fig" data-c="0123" data-e="0123"></div><b>All match</b><span>Turn the top to line up. Done!</span></div>
<div class="cell"><div class="fig" data-c="0123" data-e="0231" data-a="B-L,L-R,R-B"></div><b>One matches</b><span>Hold it at the back. Do <code>Ua</code>. Not solved? Do <code>Ua</code> again.</span><code class="alg">R2 U R U R' U' R' U' R' U R'</code></div>
<div class="cell"><div class="fig" data-c="0123" data-e="2301" data-a="T-B*,L-R*"></div><b>H</b><span>Each edge shows the color of the face on the opposite side. Do <code>H</code>.</span><code class="alg">M2 U M2 U2 M2 U M2</code></div>
<div class="cell"><div class="fig" data-c="0123" data-e="1032" data-a="B-L*,T-R*"></div><b>Z</b><span>Each edge shows the color of a neighboring face. Do <code>Z</code>. If it's mirrored, turn the whole cube 90° first.</span><code class="alg">M2 U M2 U M' U2 M2 U2 M'</code></div>
</div>

<h2>Step 3: Line it up</h2>
<p>Turn the top layer until every side matches. You've solved the cube.</p>

<h2>If something goes wrong</h2>
<ul>
<li><b>Yellow isn't all on top after an alg.</b> You made a mistake partway through. Re-solve the top first (OLL), then try again.</li>
<li><b>Nothing changed in Step 2.</b> Turn the top layer to check the corners still match their centers, then recheck which picture you have.</li>
<li><b>Ua made it worse.</b> Just do Ua again. Doing it twice goes the other way around.</li>
<li><b>Moves feel slow.</b> Normal. Practice each alg 20 times before a full solve.</li>
</ul>

<h2>Practice tips</h2>
<ul>
<li>Before moving, say the case out loud: "headlights", "H", and so on.</li>
<li>Learn one alg at a time. Add the next when the last feels automatic.</li>
<li>Recognizing the case is the hardest part, and it gets easier fast.</li>
</ul>

<h2>What's next</h2>
<p class="mut">This method uses more moves than the usual one, which is fine for learning. Later you can add the A-perm and other algs to get faster.</p>

</div>

<script data-astro-rerun>
(function(){
var COL=['#2b6fe0','#f08a24','#2fa84f','#d93a3a'];
var P={TL:[0,0],T:[1,0],TR:[2,0],L:[0,1],R:[2,1],BL:[0,2],B:[1,2],BR:[2,2]};
var FI=[2,2,0,0],SI=[0,2,2,0];
function ctr(n){return [25+P[n][0]*34+16,25+P[n][1]*34+16]}
function strip(face,idx,col){
var O=25,T=7,g=3,a=O+idx*34,x,y,w,h;
if(face==0){x=a;y=O-T-g;w=32;h=T}
else if(face==1){x=O+100+g;y=a;w=T;h=32}
else if(face==2){x=a;y=O+100+g;w=32;h=T}
else{x=O-T-g;y=a;w=T;h=32}
var f=col==null?'var(--mut)" opacity=".35':COL[col];
return '<rect x="'+x+'" y="'+y+'" width="'+w+'" height="'+h+'" rx="2" fill="'+f+'"/>';
}
function dg(ch){return ch==null||ch=='x'?null:+ch}
function svg(a,c,e,l){
var s='<svg viewBox="-25 0 175 150" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="lg" gradientUnits="userSpaceOnUse" x1="15" y1="0" x2="-25" y2="0"><stop offset="0" stop-color="#ffd23f" stop-opacity=".95"/><stop offset="1" stop-color="#ffd23f" stop-opacity="0"/></linearGradient><marker id="ah" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" fill="var(--acc)"/></marker></defs>';
for(var y=0;y<3;y++)for(var x=0;x<3;x++){
var corner=(x!=1&&y!=1);
s+='<rect x="'+(25+x*34)+'" y="'+(25+y*34)+'" width="32" height="32" rx="5" fill="'+(corner?'var(--yd)':'var(--y)')+'"/>';}
if(l){[25,93].forEach(function(y0){s+='<polygon points="15,'+y0+' 15,'+(y0+32)+' -25,'+(y0+46)+' -25,'+(y0-14)+'" fill="url(#lg)"/>'})}
if(c){
for(var q=0;q<4;q++){
var p=dg(c[q]);
s+=strip(q,FI[q],p);
s+=strip((q+1)%4,SI[q],p==null?null:(p+1)%4);
s+=strip(q,1,e?dg(e[q]):null);
}}
(a?a.split(','):[]).forEach(function(t){
if(!t)return;var bi=t.slice(-1)=='*';if(bi)t=t.slice(0,-1);
var p=t.split('-'),f=ctr(p[0]),g=ctr(p[1]);
var dx=g[0]-f[0],dy=g[1]-f[1],d=Math.sqrt(dx*dx+dy*dy),k=10/d;
s+='<line x1="'+(f[0]+dx*k)+'" y1="'+(f[1]+dy*k)+'" x2="'+(g[0]-dx*k)+'" y2="'+(g[1]-dy*k)+'" stroke="var(--acc)" stroke-width="3" stroke-linecap="round" marker-end="url(#ah)"'+(bi?' marker-start="url(#ah)"':'')+'/>';
});
return s+'</svg>';}
document.querySelectorAll('.fig').forEach(function(el){el.outerHTML=svg(el.dataset.a,el.dataset.c,el.dataset.e,el.dataset.l)});
})();
</script>

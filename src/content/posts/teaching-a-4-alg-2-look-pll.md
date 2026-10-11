---
title: "Teaching 2-Look PLL with just 4 algorithms"
date: "2026-10-10"
description: "For teaching someone who has F2L and 2-look OLL, but no PLL algs yet. The aim is the smallest alg set that finishes the cube, trading move count for less to memorize."
author: "Edmund Lam"
tags:
  - "Cubing"
  - "Teaching"
---

<div class="cube-post">

Learning it yourself? Read the [learner version](/posts/finish-the-cube-your-first-pll).

<p class="mut">For teaching someone who has F2L and 2-look OLL, but no PLL algs yet. The aim is the smallest alg set that finishes the cube, trading move count for less to memorize.</p>

<div class="card"><b>The idea</b>
<p style="margin:6px 0 0">Standard 2-look PLL needs about 6 algs (A and E or Y for corners, Ua, Ub, H, Z for edges). This version needs 4: <b>T, Ua, H, Z</b>. Ub is just Ua done twice, and T replaces the corner algs.</p>
<p class="mut" style="margin:6px 0 0">The cost is moves. T is 14 moves, so corners take up to 28 instead of about 9 to 17 with a dedicated alg. It's a good first PLL, not an endpoint.</p></div>

<div class="card"><b>Diagram key</b>
<p class="mut" style="margin:4px 0 8px">Top-down view of the last layer, front at the bottom. Bars are side stickers. Arrows are where pieces need to go. Gray means ignore for now.</p>
<p class="mut" style="margin:0">Sides: <span class="dot" style="background:#2fa84f"></span>front <span class="dot" style="background:#f08a24"></span>right <span class="dot" style="background:#2b6fe0"></span>back <span class="dot" style="background:#d93a3a"></span>left</p></div>

<h2>The algs</h2>
<div class="card">
<div><span class="pill">T</span>14 moves. Swaps the two right corners and the left and right edges (headlights on the left).<code class="alg">R U R' U' R' F R2 U' R' U' R U R' F'</code></div><br>
<div><span class="pill">Ua</span>11 moves. With the solved edge at the back, moves front to left, left to right, right to front. Run it twice for the reverse direction (Ub).<code class="alg">R2 U R U R' U' R' U' R' U R'</code></div><br>
<div><span class="pill">H</span>7 moves. Swaps front with back and left with right.<code class="alg">M2 U M2 U2 M2 U M2</code></div><br>
<div><span class="pill">Z</span>9 moves. Swaps front with left and back with right.<code class="alg">M2 U M2 U M' U2 M2 U2 M'</code></div>
<p class="mut">M turns the middle slice like L. Any U turn between algs is an AUF.</p></div>

<h2>Step 1: Corners</h2>
<p>Corners count as solved when all four match their centers after a U turn. Edges are ignored. Headlights are two adjacent corners with matching stickers on one face.</p>
<div class="card row"><div class="fig" data-c="0123"></div>
<div><b>Solved</b><p class="mut" style="margin:4px 0 0">Go to Step 2.</p></div></div>
<div class="card row"><div class="fig" data-c="1023" data-l="1" data-a="TR-BR*"></div>
<div><b>Headlights</b><p class="mut" style="margin:4px 0 0">Put them on the left, do T. One T solves every headlights case, whether it looks like an adjacent swap or a 3-cycle.</p><code class="alg">R U R' U' R' F R2 U' R' U' R U R' F'</code></div></div>
<div class="card row"><div class="fig" data-c="2103" data-a="TR-BL*"></div>
<div><b>No headlights</b><p class="mut" style="margin:4px 0 0">Do T from any angle. Headlights will now exist, then follow the headlights rule. Covers diagonal swaps and the E case.</p><code class="alg">R U R' U' R' F R2 U' R' U' R U R' F'</code></div></div>
<p class="mut">Worst case is 2 T-perms.</p>

<h2>Step 2: Edges</h2>
<p>Turn U so the corners match their centers, then read the edges:</p>
<div class="grid">
<div class="cell"><div class="fig" data-c="0123" data-e="0123"></div><b>Solved</b><span>AUF and done</span></div>
<div class="cell"><div class="fig" data-c="0123" data-e="0231" data-a="B-L,L-R,R-B"></div><b>One correct</b><span>Put it at the back. <code>Ua</code>, and if it didn't solve, <code>Ua</code> again</span><code class="alg">R2 U R U R' U' R' U' R' U R'</code></div>
<div class="cell"><div class="fig" data-c="0123" data-e="2301" data-a="T-B*,L-R*"></div><b>H</b><span>Each edge shows the opposite face's color</span><code class="alg">M2 U M2 U2 M2 U M2</code></div>
<div class="cell"><div class="fig" data-c="0123" data-e="1032" data-a="B-L*,T-R*"></div><b>Z</b><span>Each edge shows a neighbor's color. This alg swaps front/left and back/right. If yours are front/right and back/left, rotate the whole cube 90° first.</span><code class="alg">M2 U M2 U M' U2 M2 U2 M'</code></div>
</div>

<h2>Why it works</h2>
<ul>
<li><b>Corners:</b> a U turn is itself a corner move, so "solved" means solved up to a rotation. That makes a 3-cycle exactly one T-perm from solved, and an adjacent swap too. A state with no headlights (diagonal swap or E) turns into a headlights state after any one T. I checked all 24 corner arrangements this way.</li>
<li><b>Edges:</b> once corners are solved, the edge permutation must be even. That leaves 12 cases: solved (1), 3-cycles (8), and double swaps (3, which are H and the two mirror forms of Z). Ua and its repeat cover the 3-cycles, and a 90° cube turn covers the mirrored Z.</li>
<li>The alg effects were checked on a cube simulator.</li>
</ul>

<h2>Teaching sequence</h2>
<ol>
<li><b>T-perm first.</b> Drill until it's fast and clean. It's used in almost every solve here.</li>
<li><b>Headlights recognition</b> before adding anything else. Have them point out headlights on random cases.</li>
<li><b>Ua</b>, then <b>H</b> and <b>Z</b> (M-slice grips take practice).</li>
<li><b>Full solves</b> with the recipe, talking through each decision aloud.</li>
</ol>

<h2>Common mistakes</h2>
<ul>
<li>Checking edges during Step 1. They'll look wrong, and that's expected.</li>
<li>Putting headlights on the wrong side. T swaps the right two corners.</li>
<li>Skipping the U turn to compare corners with centers.</li>
<li>Doing Ua once when the 3-cycle goes the other way. Do it again.</li>
<li>Forgetting the final AUF.</li>
</ul>

<h2>Where to go next</h2>
<p class="mut">A-perm first, since it replaces the repeated T. Then Y and E, then the rest of full PLL as cases come up.</p>

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

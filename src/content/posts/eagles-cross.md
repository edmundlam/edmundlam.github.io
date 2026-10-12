---
title: "Bald Eagles and White Rabbits: The Rubik's Cross Method"
date: "2026-07-24"
description: "How I taught my kids the first step of solving a Rubik's Cube using eagles, trees, and a very unlucky rabbit."
author: "Edmund Lam"
tags:
  - "Parenting"
  - "Kids"
  - "Cubing"
  - "Teaching"
---

The white cross is the first step of solving a Rubik's Cube in the beginner's method.
This step should be done intuitively, there are no specific algorithms to remember.
But the standard teaching language - "edges," "centers," "orienting pieces" - can feel like vocabulary lessons rather than a puzzle.

Here's an alternative approach that I used to teach my kids using a story metaphor: bald eagles, colored trees, and a white rabbit. This reframes
technical concepts into visualizable actions that make sense to beginners of any age.

<div class="cube-post">

<p class="mut">Every diagram is tagged with its viewpoint. In top views, the front of the cube is at the bottom of the picture.</p>

<h2>The cast</h2>
<div class="grid">
<div class="cell"><div class="fig" data-k="cf"></div><b>The landscape</b><span>Sun on top, rabbit on the ground</span></div>
<div class="cell"><div class="fig" data-k="cg"></div><b>The goal</b><span>All 4 eagles around the rabbit</span></div>
</div>
<div class="card"><ul style="margin:0">
<li>☀️ <b>Sun</b>: the yellow center. It marks the top.</li>
<li>🐇 <b>Rabbit</b>: the white center, on the ground (bottom).</li>
<li>🌳 <b>Trees</b>: the colored side centers. A tree is a whole face.</li>
<li>🦅 <b>Eagles</b>: the 4 white edge pieces. Each has a white <b>head</b> and colored <b>claws</b>.</li>
</ul>
<p style="margin:8px 0 0"><b>Goal:</b> all 4 eagles on the ground, heads toward the rabbit, claws out and matching their tree. That's the white cross.</p></div>

<h2><span class="n">0</span>Find the rabbit</h2>
<p>Hold the cube with the rabbit (white center) on the ground and the sun (yellow center) on top. Keep it that way the whole time. If the rabbit moves, the eagles lose their target.</p>

<h2><span class="n">1</span>Pick an eagle, get it to the nest</h2>
<p>Turning a tree moves its eagle around the edge spots: <b>nest</b> (top), <b>branch</b> (side), <b>ground</b> (bottom). Pick any eagle that isn't already home.</p>
<div class="grid">
<div class="cell"><div class="fig" data-k="claws"></div><b>On a branch</b><span>Turn the tree its claws are on, upward. Its head ends on top.</span></div>
<div class="cell"><div class="fig" data-k="g2n"></div><b>On the ground</b><span>A half turn sends it up to the nest.</span></div>
</div>
<ul>
<li>A branch eagle touches two trees. Either quarter turn gets it to the nest, but turning the claws' tree puts the head on top, which is better.</li>
<li>Already on the ground in the right spot, head toward the rabbit, claws matching its tree? It's done. Pick another.</li>
<li>At the nest, the head can face up or sideways. Don't worry yet, step 3 handles it.</li>
</ul>

<h2><span class="n">2</span>Fly to its nest</h2>
<p>Look at the claw color. Turn the top until the eagle is above the tree of that color. Then turn the whole cube so that tree faces you.</p>
<div class="grid">
<div class="cell"><div class="fig" data-k="bef"></div><b>Before</b><span>Claws are orange, but it's over the green tree.</span></div>
<div class="cell"><div class="fig" data-k="aft"></div><b>After</b><span>Turn the top. Now it's over the orange tree.</span></div>
</div>
<p class="mut">The colored bars are the trees. The head can face sideways here, as in these pictures.</p>

<h2><span class="n">3</span>Check the perch</h2>
<div class="grid">
<div class="cell"><div class="fig" data-k="good"></div><b>Properly perched</b><span>White head up. Go to step 4.</span></div>
<div class="cell"><div class="fig" data-k="poor"></div><b>Poorly perched</b><span>Head sideways. Fix it below.</span></div>
</div>
<div class="card"><b>Fixing a poorly perched eagle</b>
<div class="chips">
<div class="chip"><code>F</code>land on the right tree</div>
<div class="chip"><code>R</code>fly up</div>
<div class="chip"><code>U</code>fly home</div>
<div class="chip"><code>R'</code>reset the tree</div>
</div>
<div class="g3">
<div class="cell"><div class="fig" data-k="f1"></div><span>Start</span></div>
<div class="cell"><div class="fig" data-k="f2"></div><span>After <code>F R</code></span></div>
<div class="cell"><div class="fig" data-k="f3"></div><span>After <code>U R'</code></span></div>
</div>
<p class="mut" style="margin:0">Prefer the left side? Mirror it: <code>F' L' U' L</code>. Now it's properly perched.</p></div>

<h2><span class="n">4</span>Dive to the rabbit</h2>
<div class="grid">
<div class="cell"><div class="fig" data-k="n2g"></div><b>Half turn</b><span>Turn its tree 180° (<code>F2</code>).</span></div>
<div class="cell"><div class="fig" data-k="land"></div><b>Landed</b><span>Head by the rabbit, claws out, matching its tree.</span></div>
</div>
<p>That eagle is solved. Repeat steps 1 to 4 for each remaining eagle.</p>

<div class="card call"><b>When a wrong eagle invades</b>
<p style="margin:6px 0 0">If turning a tree knocks a finished eagle loose, send the intruder away (turn the top), then turn the tree back. The finished eagle chased the intruder off and now returns to the rabbit.</p></div>

<div class="card"><b>Move key</b>
<p class="mut" style="margin:6px 0 0">Turning a tree means turning that face: <code>F</code> front, <code>R</code> right, <code>L</code> left, <code>U</code> top. A letter alone is a clockwise quarter turn, <code>'</code> is counterclockwise, <code>2</code> is a half turn.</p></div>

</div>

## Core Concepts

This method teaches fundamental cube-solving concepts through story:

1. **Orientation** - Properly perched (white head up) vs. poorly perched (head sideways)
2. **Permutation** - Flying to the nest above the matching tree
3. **Insertion** - Diving down to the prey
4. **Recovery** - The eagle defends its tree and returns to its prey

These concepts transfer directly to the next steps of the beginner's method and more advanced solving.

I use different metaphors for the next steps, but one could continue with the eagle metaphor: The corners are just
eagles that need to nest differently. The second layer is just eagles that need to land in middle branches.


<script data-astro-rerun>
(function(){
var C={f:'#2fa84f',r:'#f08a24',b:'#2b6fe0',l:'#d93a3a'},W='#fff',G='var(--line)',Y='var(--y)',T='rgba(47,168,79,.25)';
function rect(x,y,w,h,f,rx){return '<rect x="'+x+'" y="'+y+'" width="'+w+'" height="'+h+'" rx="'+(rx||3)+'" fill="'+f+'" stroke="var(--line)" stroke-width="1.5"/>'}
function tx(x,y,t,sz,a){return '<text x="'+x+'" y="'+y+'" font-size="'+sz+'" text-anchor="'+(a||'middle')+'" dominant-baseline="central" fill="var(--fg)">'+t+'</text>'}
function sv(tag,b){return '<svg viewBox="-24 -12 200 172" xmlns="http://www.w3.org/2000/svg"><defs><marker id="ah" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0 0L10 5L0 10z" fill="var(--acc)"/></marker></defs><text x="-6" y="-3" font-size="9" fill="var(--mut)">'+tag+'</text>'+b+'</svg>'}
function grid(c,e){var s='';for(var i=0;i<9;i++){var x=25+(i%3)*34,y=25+Math.floor(i/3)*34;s+=rect(x,y,32,32,c[i],5);if(e&&e[i])s+=tx(x+16,y+17,e[i],18)}return s}
function st(side,idx,col){var a=25+idx*34,x,y,w,h;if(side=='b'){x=a;y=15;w=32;h=7}else if(side=='r'){x=128;y=a;w=7;h=32}else if(side=='f'){x=a;y=128;w=32;h=7}else{x=15;y=a;w=7;h=32}return rect(x,y,w,h,col,2)}
function arc(p){return '<path d="'+p+'" fill="none" stroke="var(--acc)" stroke-width="3" marker-end="url(#ah)"/>'}
function bars(){return rect(25,2,100,6,C.b)+rect(142,25,6,100,C.r)+rect(25,142,100,6,C.f)+rect(2,25,6,100,C.l)}
function tree(){var c=[];for(var i=0;i<9;i++)c.push(i==4?C.f:G);return c}
function face(eg,p,noR,extra,col){var c=tree(),e=[];c[eg]=col||W;e[eg]='🦅';e[4]='🌳';
return sv('Front view',grid(c,e)+tx(75,6,'nest',10)+tx(75,144,'ground',10)+tx(20,75,'branch',10,'end')+(noR?'':tx(132,75,'branch',10,'start'))+(extra||'')+arc(p))}
function topv(c,e,s,b,a){return sv('Top view',grid(c,e)+s+(b?bars():'')+(a?arc(a):''))}
function tc(i,col){var c=[G,G,G,G,Y,G,G,G,G],e=[];e[4]='☀️';c[i]=col;e[i]='🦅';return [c,e]}
var F={
cf:function(){var c=tree(),e=[];c[1]=W;e[1]='🦅';e[4]='🌳';
return sv('Front view',tx(75,12,'☀️',20)+tx(92,12,'sun (top)',9,'start')+grid(c,e)+tx(20,41,'nest',9,'end')+tx(20,75,'branch',9,'end')+tx(20,109,'ground',9,'end')+tx(75,148,'🐇',18)+tx(92,148,'rabbit (bottom)',8,'start'))},
cg:function(){return sv('Ground view (from above)',grid([G,W,G,W,W,W,G,W,G],[0,'🦅',0,'🦅','🐇','🦅',0,'🦅',0])+st('b',1,C.b)+st('r',1,C.r)+st('f',1,C.f)+st('l',1,C.l))},
claws:function(){var c=tree(),e=[];c[5]=W;e[5]='🦅';e[4]='🌳';
return sv('Front view',grid(c,e)+tx(75,6,'nest',10)+tx(75,144,'ground',10)+tx(20,75,'branch',10,'end')+st('r',1,C.r)+tx(142,100,'claws',8)+'<path d="M142 90 L142 44" fill="none" stroke="var(--acc)" stroke-width="3" marker-end="url(#ah)"/>')},
g2n:function(){return face(7,'M81 108 A34 34 0 0 0 81 42',0,st('f',1,W),C.r)},
n2g:function(){return face(1,'M81 42 A34 34 0 0 1 81 108',0,st('b',1,W),C.f)},
bef:function(){var t=tc(7,C.r);return topv(t[0],t[1],st('f',1,W),1,'M87 107 A34 34 0 0 0 107 87')},
aft:function(){var t=tc(5,C.r);return topv(t[0],t[1],st('r',1,W),1)},
good:function(){var t=tc(7,W);return topv(t[0],t[1],st('f',1,C.f))},
poor:function(){var t=tc(7,C.f);return topv(t[0],t[1],st('f',1,W))},
f1:function(){var t=tc(7,C.f);return topv(t[0],t[1],st('f',1,W))},
f2:function(){var t=tc(5,W);return topv(t[0],t[1],st('r',1,C.f))},
f3:function(){var t=tc(7,W);return topv(t[0],t[1],st('f',1,C.f))},
land:function(){return sv('Ground view (from above)',grid([G,G,G,G,W,G,G,W,G],[0,0,0,0,'🐇',0,0,'🦅',0])+st('f',1,C.f))}
};
document.querySelectorAll('.fig').forEach(function(e){e.outerHTML=F[e.dataset.k]()});
})();
</script>

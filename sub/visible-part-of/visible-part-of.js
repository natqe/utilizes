(function () {var b={};Object.defineProperty(b,"__esModule",{value:!0});var c=function(e){var t=e instanceof Element?e.getBoundingClientRect():e,o=t.top,$=t.left;return{top:o+pageYOffset||document.documentElement.scrollTop,left:$+pageXOffset||document.documentElement.scrollLeft}};b.offset=c;var e=c;b.default=e;var a={};Object.defineProperty(a,"__esModule",{value:!0});var d=function(t){var e={x:0,y:0,offsetTop:0,offsetLeft:0};if(!t)return e;var l=t.getBoundingClientRect(),r=l.top,f=l.bottom,i=l.left,o=l.right,$=c({top:r,left:i}),a=$.top,n=$.left;return e.offsetTop=a,e.offsetLeft=n,e.y=Math.max(0,r>0?Math.min(t.offsetHeight,innerHeight-r):f<innerHeight?f:innerHeight),e.x=Math.max(0,i>0?Math.min(t.offsetWidth,innerWidth-i):o<innerWidth?o:innerWidth),e};a.visiblePartOf=d;var f=d;a.default=f;if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=a}else if(typeof define==="function"&&define.amd){define(function(){return a})}})();
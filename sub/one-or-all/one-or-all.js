(function () {var g=this;var r={},M=Array.isArray;r=M;var N={},O=Object.prototype;function P(o){var t=o&&o.constructor;return o===("function"==typeof t&&t.prototype||O)}N=P;var Q={};function R(r,o){return function($){return r(o($))}}Q=R;var S={},T=Q(Object.keys,Object);S=T;var U={},V=Object.prototype,W=V.hasOwnProperty;function X(r){if(!N(r))return S(r);var $=[];for(var e in Object(r))W.call(r,e)&&"constructor"!=e&&$.push(e);return $}U=X;var Y={},Z="object"==typeof g&&g&&g.Object===Object&&g;Y=Z;var a={},$="object"==typeof self&&self&&self.Object===Object&&self,_=Y||$||Function("return this")();a=_;var h={},aa=a.Symbol;h=aa;var ba={},s=Object.prototype,ca=s.hasOwnProperty,da=s.toString,e=h?h.toStringTag:void 0;function ea($){var r=ca.call($,e),a=$[e];try{$[e]=void 0;var i=!0}catch(o){}var t=da.call($);return i&&(r?$[e]=a:delete $[e]),t}ba=ea;var fa={},ga=Object.prototype,ha=ga.toString;function ia(t){return ha.call(t)}fa=ia;var i={},ja="[object Null]",ka="[object Undefined]",t=h?h.toStringTag:void 0;function la($){return null==$?void 0===$?ka:ja:t&&t in Object($)?ba($):fa($)}i=la;var u={};function ma($){var t=typeof $;return null!=$&&("object"==t||"function"==t)}u=ma;var v={},na="[object AsyncFunction]",oa="[object Function]",pa="[object GeneratorFunction]",qa="[object Proxy]";function ra($){if(!u($))return!1;var a=i($);return a==oa||a==pa||a==na||a==qa}v=ra;var j={},sa=a["__core-js_shared__"];j=sa;var ta={},w=function(){var $=/[^.]+$/.exec(j&&j.keys&&j.keys.IE_PROTO||"");return $?"Symbol(src)_1."+$:""}();function ua($){return!!w&&w in $}ta=ua;var b={},va=Function.prototype,wa=va.toString;function xa(r){if(null!=r){try{return wa.call(r)}catch($){}try{return r+""}catch($){}}return""}b=xa;var ya={},za=/[\\^$.*+?()[\]{}|]/g,Aa=/^\[object .+?Constructor\]$/,Ba=Function.prototype,Ca=Object.prototype,Da=Ba.toString,Ea=Ca.hasOwnProperty,Fa=RegExp("^"+Da.call(Ea).replace(za,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function Ga($){return!(!u($)||ta($))&&(v($)?Fa:Aa).test(b($))}ya=Ga;var Ha={};function Ia($,e){return null==$?void 0:$[e]}Ha=Ia;var f={};function Ja($,e){var a=Ha($,e);return ya(a)?a:void 0}f=Ja;var k={},Ka=f(a,"DataView");k=Ka;var l={},La=f(a,"Map");l=La;var m={},Ma=f(a,"Promise");m=Ma;var n={},Na=f(a,"Set");n=Na;var o={},Oa=f(a,"WeakMap");o=Oa;var Pa={},x="[object Map]",Qa="[object Object]",y="[object Promise]",z="[object Set]",A="[object WeakMap]",B="[object DataView]",Ra=b(k),Sa=b(l),Ta=b(m),Ua=b(n),Va=b(o),d=i;(k&&d(new k(new ArrayBuffer(1)))!=B||l&&d(new l)!=x||m&&d(m.resolve())!=y||n&&d(new n)!=z||o&&d(new o)!=A)&&(d=function($){var a=i($),t=a==Qa?$.constructor:void 0,r=t?b(t):"";if(r)switch(r){case Ra:return B;case Sa:return x;case Ta:return y;case Ua:return z;case Va:return A;}return a}),Pa=d;var Wa={},Xa=9007199254740991;function Ya($){return"number"==typeof $&&$>-1&&$%1==0&&$<=Xa}Wa=Ya;var Za={};function $a($){return null!=$&&Wa($.length)&&!v($)}Za=$a;var _a={};function ab($){return null!=$&&"object"==typeof $}_a=ab;var bb={},cb="[object String]";function db($){return"string"==typeof $||!r($)&&_a($)&&i($)==cb}bb=db;var eb={};function fb(r){return function($){return null==$?void 0:$[r]}}eb=fb;var gb={},hb=eb("length");gb=hb;var ib={},jb="\\ud800-\\udfff",kb="\\u0300-\\u036f",lb="\\ufe20-\\ufe2f",mb="\\u20d0-\\u20ff",nb=kb+lb+mb,ob="\\ufe0e\\ufe0f",pb="\\u200d",qb=RegExp("["+pb+jb+nb+ob+"]");function rb($){return qb.test($)}ib=rb;var sb={},C="\\ud800-\\udfff",tb="\\u0300-\\u036f",ub="\\ufe20-\\ufe2f",vb="\\u20d0-\\u20ff",wb=tb+ub+vb,xb="\\ufe0e\\ufe0f",yb="["+C+"]",p="["+wb+"]",q="\\ud83c[\\udffb-\\udfff]",zb="(?:"+p+"|"+q+")",D="[^"+C+"]",E="(?:\\ud83c[\\udde6-\\uddff]){2}",F="[\\ud800-\\udbff][\\udc00-\\udfff]",Ab="\\u200d",G=zb+"?",H="["+xb+"]?",Bb="(?:"+Ab+"(?:"+[D,E,F].join("|")+")"+H+G+")*",Cb=H+G+Bb,Db="(?:"+[D+p+"?",p,E,F,yb].join("|")+")",I=RegExp(q+"(?="+q+")|"+Db+Cb,"g");function Eb($){for(var r=I.lastIndex=0;I.test($);)++r;return r}sb=Eb;var Fb={};function Gb($){return ib($)?sb($):gb($)}Fb=Gb;var Hb={},Ib="[object Map]",Jb="[object Set]";function Kb(a){if(null==a)return 0;if(Za(a))return bb(a)?Fb(a):a.length;var $=Pa(a);return $==Ib||$==Jb?a.size:U(a).length}Hb=Kb;var c={},J=c&&c.__importDefault||function($){return $&&$.__esModule?$:{default:$}};Object.defineProperty(c,"__esModule",{value:!0});var Lb=J(r),K=J(Hb),L=function($){return!Lb.default($)||K.default($)>1?$:1===K.default($)?$[0]:void 0};c.oneOrAll=L;var Mb=L;c.default=Mb;if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=c}else if(typeof define==="function"&&define.amd){define(function(){return c})}})();
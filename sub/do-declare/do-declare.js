(function () {var a={};function d(r){return h(r)||g(r)||f(r)||e()}function e(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function f(r,e){if(r){if("string"==typeof r)return b(r,e);var a=Object.prototype.toString.call(r).slice(8,-1);return"Object"===a&&r.constructor&&(a=r.constructor.name),"Map"===a||"Set"===a?Array.from(r):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?b(r,e):void 0}}function g(r){if("undefined"!=typeof Symbol&&null!=r[Symbol.iterator]||null!=r["@@iterator"])return Array.from(r)}function h(r){if(Array.isArray(r))return b(r)}function b(r,e){(null==e||e>r.length)&&(e=r.length);for(var a=0,t=new Array(e);a<e;a++)t[a]=r[a];return t}Object.defineProperty(a,"__esModule",{value:!0});var c=void 0;a.doDeclare=c;var i=function(r){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];return"function"!=typeof r||/^\s*class\s+/.test(r.toString())||r.apply(void 0,d(e)),r};c=i,a.doDeclare=c;var j=c;a.default=j;if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=a}else if(typeof define==="function"&&define.amd){define(function(){return a})}})();
System.register(["./index-legacy.dff47cd5.js"],(function(e,n){"use strict";var t,r,o,i,c,s,a,l,u,p,d,h,f,v,m,y,g;return{setters:[e=>{t=e.i,r=e.j,o=e.k,i=e.l,c=e.M,s=e.q,a=e.d,l=e.s,u=e.v,p=e.x,d=e.y,h=e.z,f=e.A,v=e.B,m=e.C,y=e.D,g=e.E}],execute:function(){e({b:I,c:O,f:x,g:function(e,n,t){var r=null==e?void 0:I(e,n);return void 0===r?t:r},i:w,t:B,u:function(e,n){return t(e,(e=>{void 0!==e&&(n.value=e)})),r((()=>void 0===e.value?n.value:e.value))}});const n=/^(\d|\.)+$/,b=/(\d|\.)+/;function x(e,{c:t=1,offset:r=0,attachPx:o=!0}={}){if("number"==typeof e){const n=(e+r)*t;return 0===n?"0":`${n}px`}if("string"==typeof e){if(n.test(e)){const n=(Number(e)+r)*t;return o?0===n?"0":`${n}px`:`${n}`}{const n=b.exec(e);return n?e.replace(b,String((Number(n[0])+r)*t)):e}}return e}var C=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,$=/^\w*$/;function w(e,n){if(o(e))return!1;var t=typeof e;return!("number"!=t&&"symbol"!=t&&"boolean"!=t&&null!=e&&!i(e))||$.test(e)||!C.test(e)||null!=n&&e in Object(n)}function z(e,n){if("function"!=typeof e||null!=n&&"function"!=typeof n)throw new TypeError("Expected a function");var t=function(){var r=arguments,o=n?n.apply(this,r):r[0],i=t.cache;if(i.has(o))return i.get(o);var c=e.apply(this,r);return t.cache=i.set(o,c)||i,c};return t.cache=new(z.Cache||c),t}z.Cache=c;var k,D,S,_=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,j=/\\(\\)?/g,E=(k=function(e){var n=[];return 46===e.charCodeAt(0)&&n.push(""),e.replace(_,(function(e,t,r,o){n.push(r?o.replace(j,"$1"):t||e)})),n},D=z(k,(function(e){return 500===S.size&&S.clear(),e})),S=D.cache,D);const N=E;function O(e,n){return o(e)?e:w(e,n)?[e]:N(s(e))}function B(e){if("string"==typeof e||i(e))return e;var n=e+"";return"0"==n&&1/e==-1/0?"-0":n}function I(e,n){for(var t=0,r=(n=O(n,e)).length;null!=e&&t<r;)e=e[B(n[t++])];return t&&t==r?e:void 0}e("E",a({name:"Eye",render:()=>l("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},l("path",{d:"M255.66 112c-77.94 0-157.89 45.11-220.83 135.33a16 16 0 0 0-.27 17.77C82.92 340.8 161.8 400 255.66 400c92.84 0 173.34-59.38 221.79-135.25a16.14 16.14 0 0 0 0-17.47C428.89 172.28 347.8 112 255.66 112z",fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"32"}),l("circle",{cx:"256",cy:"256",r:"80",fill:"none",stroke:"currentColor","stroke-miterlimit":"10","stroke-width":"32"}))}));const P={name:"Icon",common:u,self:e=>{const{textColorBase:n,opacity1:t,opacity2:r,opacity3:o,opacity4:i,opacity5:c}=e;return{color:n,opacity1Depth:t,opacity2Depth:r,opacity3Depth:o,opacity4Depth:i,opacity5Depth:c}}},R=p("icon","\n height: 1em;\n width: 1em;\n line-height: 1em;\n text-align: center;\n display: inline-block;\n position: relative;\n fill: currentColor;\n transform: translateZ(0);\n",[d("color-transition",{transition:"color .3s var(--n-bezier)"}),d("depth",{color:"var(--n-color)"},[h("svg",{opacity:"var(--n-opacity)",transition:"opacity .3s var(--n-bezier)"})]),h("svg",{height:"1em",width:"1em"})]),A=Object.assign(Object.assign({},f.props),{depth:[String,Number],size:[Number,String],color:String,component:Object});e("N",a({_n_icon__:!0,name:"Icon",inheritAttrs:!1,props:A,setup(e){const{mergedClsPrefixRef:n,inlineThemeDisabled:t}=v(e),o=f("Icon","-icon",R,P,e,n),i=r((()=>{const{depth:n}=e,{common:{cubicBezierEaseInOut:t},self:r}=o.value;if(void 0!==n){const{color:e,[`opacity${n}Depth`]:o}=r;return{"--n-bezier":t,"--n-color":e,"--n-opacity":o}}return{"--n-bezier":t,"--n-color":"","--n-opacity":""}})),c=t?m("icon",r((()=>`${e.depth||"d"}`)),i,e):void 0;return{mergedClsPrefix:n,mergedStyle:r((()=>{const{size:n,color:t}=e;return{fontSize:x(n),color:t}})),cssVars:t?void 0:i,themeClass:null==c?void 0:c.themeClass,onRender:null==c?void 0:c.onRender}},render(){var e;const{$parent:n,depth:t,mergedClsPrefix:r,component:o,onRender:i,themeClass:c}=this;return(null===(e=null==n?void 0:n.$options)||void 0===e?void 0:e._n_icon__)&&y("icon","don't wrap `n-icon` inside `n-icon`"),null==i||i(),l("i",g(this.$attrs,{role:"img",class:[`${r}-icon`,c,{[`${r}-icon--depth`]:t,[`${r}-icon--color-transition`]:void 0!==t}],style:[this.cssVars,this.mergedStyle]}),o?l(o):this.$slots)}}))}}}));

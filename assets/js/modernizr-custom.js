/*! modernizr 3.6.0 (Custom Build) | MIT *
 * https://modernizr.com/download/?-apng-arrow-backgroundblendmode-backgroundcliptext-backgroundsize-bgpositionshorthand-bgpositionxy-bgrepeatspace_bgrepeatround-bgsizecover-borderimage-borderradius-boxsizing-classlist-contains-cssanimations-csschunit-cssescape-cssfilters-cssinvalid-csspointerevents-csspseudotransitions-cssremunit-cssscrollbar-csstransforms-csstransforms3d-csstransformslevel2-csstransitions-cssvalid-cssvminunit-cubicbezierrange-ellipsis-es5-es5array-es5function-es5object-es5string-es5syntax-es5undefined-es6array-es6collections-es6number-es6object-es6string-eventlistener-flexbox-flexboxlegacy-flexboxtweener-focuswithin-fontface-hairline-ie8compat-imgcrossorigin-jpegxr-lastchild-mediaqueries-nthchild-objectfit-opacity-passiveeventlisteners-preserve3d-progressbar_meter-queryselector-siblinggeneral-smil-subpixelfont-svg-svgasimg-svgclippaths-svgfilters-svgforeignobject-textalignlast-wrapflow-domprefixes-prefixedcss-prefixedcssvalue-prefixes-printshiv-setclasses !*/
!function(window,document,undefined){function is(e,t){return typeof e===t}function testRunner(){var e,t,r,n,o,i,s;for(var d in tests)if(tests.hasOwnProperty(d)){if(e=[],t=tests[d],t.name&&(e.push(t.name.toLowerCase()),t.options&&t.options.aliases&&t.options.aliases.length))for(r=0;r<t.options.aliases.length;r++)e.push(t.options.aliases[r].toLowerCase());for(n=is(t.fn,"function")?t.fn():t.fn,o=0;o<e.length;o++)i=e[o],s=i.split("."),1===s.length?Modernizr[s[0]]=n:(!Modernizr[s[0]]||Modernizr[s[0]]instanceof Boolean||(Modernizr[s[0]]=new Boolean(Modernizr[s[0]])),Modernizr[s[0]][s[1]]=n),classes.push((n?"":"no-")+s.join("-"))}}function setClasses(e){var t=docElement.className,r=Modernizr._config.classPrefix||"";if(isSVG&&(t=t.baseVal),Modernizr._config.enableJSClass){var n=new RegExp("(^|\\s)"+r+"no-js(\\s|$)");t=t.replace(n,"$1"+r+"js$2")}Modernizr._config.enableClasses&&(t+=" "+r+e.join(" "+r),isSVG?docElement.className.baseVal=t:docElement.className=t)}function domToCSS(e){return e.replace(/([A-Z])/g,function(e,t){return"-"+t.toLowerCase()}).replace(/^ms-/,"-ms-")}function createElement(){return"function"!=typeof document.createElement?document.createElement(arguments[0]):isSVG?document.createElementNS.call(document,"http://www.w3.org/2000/svg",arguments[0]):document.createElement.apply(document,arguments)}function cssToDOM(e){return e.replace(/([a-z])-([a-z])/g,function(e,t,r){return t+r.toUpperCase()}).replace(/^-/,"")}function roundedEquals(e,t){return e-1===t||e===t||e+1===t}function computedStyle(e,t,r){var n;if("getComputedStyle"in window){n=getComputedStyle.call(window,e,t);var o=window.console;if(null!==n)r&&(n=n.getPropertyValue(r));else if(o){var i=o.error?"error":"log";o[i].call(o,"getComputedStyle returning null, its possible modernizr test results are inaccurate")}}else n=!t&&e.currentStyle&&e.currentStyle[r];return n}function addTest(e,t){if("object"==typeof e)for(var r in e)hasOwnProp(e,r)&&addTest(r,e[r]);else{e=e.toLowerCase();var n=e.split("."),o=Modernizr[n[0]];if(2==n.length&&(o=o[n[1]]),"undefined"!=typeof o)return Modernizr;t="function"==typeof t?t():t,1==n.length?Modernizr[n[0]]=t:(!Modernizr[n[0]]||Modernizr[n[0]]instanceof Boolean||(Modernizr[n[0]]=new Boolean(Modernizr[n[0]])),Modernizr[n[0]][n[1]]=t),setClasses([(t&&0!=t?"":"no-")+n.join("-")]),Modernizr._trigger(e,t)}return Modernizr}function getBody(){var e=document.body;return e||(e=createElement(isSVG?"svg":"body"),e.fake=!0),e}function injectElementWithStyles(e,t,r,n){var o,i,s,d,a="modernizr",l=createElement("div"),c=getBody();if(parseInt(r,10))for(;r--;)s=createElement("div"),s.id=n?n[r]:a+(r+1),l.appendChild(s);return o=createElement("style"),o.type="text/css",o.id="s"+a,(c.fake?c:l).appendChild(o),c.appendChild(l),o.styleSheet?o.styleSheet.cssText=e:o.appendChild(document.createTextNode(e)),l.id=a,c.fake&&(c.style.background="",c.style.overflow="hidden",d=docElement.style.overflow,docElement.style.overflow="hidden",docElement.appendChild(c)),i=t(l,e),c.fake?(c.parentNode.removeChild(c),docElement.style.overflow=d,docElement.offsetHeight):l.parentNode.removeChild(l),!!i}function contains(e,t){return!!~(""+e).indexOf(t)}function nativeTestProps(e,t){var r=e.length;if("CSS"in window&&"supports"in window.CSS){for(;r--;)if(window.CSS.supports(domToCSS(e[r]),t))return!0;return!1}if("CSSSupportsRule"in window){for(var n=[];r--;)n.push("("+domToCSS(e[r])+":"+t+")");return n=n.join(" or "),injectElementWithStyles("@supports ("+n+") { #modernizr { position: absolute; } }",function(e){return"absolute"==computedStyle(e,null,"position")})}return undefined}function testProps(e,t,r,n){function o(){s&&(delete mStyle.style,delete mStyle.modElem)}if(n=is(n,"undefined")?!1:n,!is(r,"undefined")){var i=nativeTestProps(e,r);if(!is(i,"undefined"))return i}for(var s,d,a,l,c,u=["modernizr","tspan","samp"];!mStyle.style&&u.length;)s=!0,mStyle.modElem=createElement(u.shift()),mStyle.style=mStyle.modElem.style;for(a=e.length,d=0;a>d;d++)if(l=e[d],c=mStyle.style[l],contains(l,"-")&&(l=cssToDOM(l)),mStyle.style[l]!==undefined){if(n||is(r,"undefined"))return o(),"pfx"==t?l:!0;try{mStyle.style[l]=r}catch(p){}if(mStyle.style[l]!=c)return o(),"pfx"==t?l:!0}return o(),!1}function fnBind(e,t){return function(){return e.apply(t,arguments)}}function testDOMProps(e,t,r){var n;for(var o in e)if(e[o]in t)return r===!1?e[o]:(n=t[e[o]],is(n,"function")?fnBind(n,r||t):n);return!1}function testPropsAll(e,t,r,n,o){var i=e.charAt(0).toUpperCase()+e.slice(1),s=(e+" "+cssomPrefixes.join(i+" ")+i).split(" ");return is(t,"string")||is(t,"undefined")?testProps(s,t,n,o):(s=(e+" "+domPrefixes.join(i+" ")+i).split(" "),testDOMProps(s,t,r))}function testAllProps(e,t,r){return testPropsAll(e,undefined,undefined,t,r)}var classes=[],tests=[],ModernizrProto={_version:"3.6.0",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,t){var r=this;setTimeout(function(){t(r[e])},0)},addTest:function(e,t,r){tests.push({name:e,fn:t,options:r})},addAsyncTest:function(e){tests.push({name:null,fn:e})}},Modernizr=function(){};Modernizr.prototype=ModernizrProto,Modernizr=new Modernizr,Modernizr.addTest("eventlistener","addEventListener"in window),Modernizr.addTest("ie8compat",!window.addEventListener&&!!document.documentMode&&7===document.documentMode),Modernizr.addTest("queryselector","querySelector"in document&&"querySelectorAll"in document),Modernizr.addTest("svg",!!document.createElementNS&&!!document.createElementNS("http://www.w3.org/2000/svg","svg").createSVGRect);var CSS=window.CSS;Modernizr.addTest("cssescape",CSS?"function"==typeof CSS.escape:!1),Modernizr.addTest("focuswithin",function(){try{document.querySelector(":focus-within")}catch(e){return!1}return!0}),Modernizr.addTest("es6string",!!(String.fromCodePoint&&String.raw&&String.prototype.codePointAt&&String.prototype.repeat&&String.prototype.startsWith&&String.prototype.endsWith&&String.prototype.includes)),Modernizr.addTest("svgfilters",function(){var e=!1;try{e="SVGFEColorMatrixElement"in window&&2==SVGFEColorMatrixElement.SVG_FECOLORMATRIX_TYPE_SATURATE}catch(t){}return e});var prefixes=ModernizrProto._config.usePrefixes?" -webkit- -moz- -o- -ms- ".split(" "):["",""];ModernizrProto._prefixes=prefixes;var docElement=document.documentElement,isSVG="svg"===docElement.nodeName.toLowerCase(),html5;isSVG||!function(e,t){function r(e,t){var r=e.createElement("p"),n=e.getElementsByTagName("head")[0]||e.documentElement;return r.innerHTML="x<style>"+t+"</style>",n.insertBefore(r.lastChild,n.firstChild)}function n(){var e=x.elements;return"string"==typeof e?e.split(" "):e}function o(e,t){var r=x.elements;"string"!=typeof r&&(r=r.join(" ")),"string"!=typeof e&&(e=e.join(" ")),x.elements=r+" "+e,l(t)}function i(e){var t=M[e[w]];return t||(t={},S++,e[w]=S,M[S]=t),t}function s(e,r,n){if(r||(r=t),h)return r.createElement(e);n||(n=i(r));var o;return o=n.cache[e]?n.cache[e].cloneNode():z.test(e)?(n.cache[e]=n.createElem(e)).cloneNode():n.createElem(e),!o.canHaveChildren||v.test(e)||o.tagUrn?o:n.frag.appendChild(o)}function d(e,r){if(e||(e=t),h)return e.createDocumentFragment();r=r||i(e);for(var o=r.frag.cloneNode(),s=0,d=n(),a=d.length;a>s;s++)o.createElement(d[s]);return o}function a(e,t){t.cache||(t.cache={},t.createElem=e.createElement,t.createFrag=e.createDocumentFragment,t.frag=t.createFrag()),e.createElement=function(r){return x.shivMethods?s(r,e,t):t.createElem(r)},e.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+n().join().replace(/[\w\-:]+/g,function(e){return t.createElem(e),t.frag.createElement(e),'c("'+e+'")'})+");return n}")(x,t.frag)}function l(e){e||(e=t);var n=i(e);return!x.shivCSS||g||n.hasCSS||(n.hasCSS=!!r(e,"article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")),h||a(e,n),e}function c(e){for(var t,r=e.getElementsByTagName("*"),o=r.length,i=RegExp("^(?:"+n().join("|")+")$","i"),s=[];o--;)t=r[o],i.test(t.nodeName)&&s.push(t.applyElement(u(t)));return s}function u(e){for(var t,r=e.attributes,n=r.length,o=e.ownerDocument.createElement(T+":"+e.nodeName);n--;)t=r[n],t.specified&&o.setAttribute(t.nodeName,t.nodeValue);return o.style.cssText=e.style.cssText,o}function p(e){for(var t,r=e.split("{"),o=r.length,i=RegExp("(^|[\\s,>+~])("+n().join("|")+")(?=[[\\s,>+~#.:]|$)","gi"),s="$1"+T+"\\:$2";o--;)t=r[o]=r[o].split("}"),t[t.length-1]=t[t.length-1].replace(i,s),r[o]=t.join("}");return r.join("{")}function f(e){for(var t=e.length;t--;)e[t].removeNode()}function m(e){function t(){clearTimeout(s._removeSheetTimer),n&&n.removeNode(!0),n=null}var n,o,s=i(e),d=e.namespaces,a=e.parentWindow;return!E||e.printShived?e:("undefined"==typeof d[T]&&d.add(T),a.attachEvent("onbeforeprint",function(){t();for(var i,s,d,a=e.styleSheets,l=[],u=a.length,f=Array(u);u--;)f[u]=a[u];for(;d=f.pop();)if(!d.disabled&&b.test(d.media)){try{i=d.imports,s=i.length}catch(m){s=0}for(u=0;s>u;u++)f.push(i[u]);try{l.push(d.cssText)}catch(m){}}l=p(l.reverse().join("")),o=c(e),n=r(e,l)}),a.attachEvent("onafterprint",function(){f(o),clearTimeout(s._removeSheetTimer),s._removeSheetTimer=setTimeout(t,500)}),e.printShived=!0,e)}var g,h,y="3.7.3",A=e.html5||{},v=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,z=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,w="_html5shiv",S=0,M={};!function(){try{var e=t.createElement("a");e.innerHTML="<xyz></xyz>",g="hidden"in e,h=1==e.childNodes.length||function(){t.createElement("a");var e=t.createDocumentFragment();return"undefined"==typeof e.cloneNode||"undefined"==typeof e.createDocumentFragment||"undefined"==typeof e.createElement}()}catch(r){g=!0,h=!0}}();var x={elements:A.elements||"abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output picture progress section summary template time video",version:y,shivCSS:A.shivCSS!==!1,supportsUnknownElements:h,shivMethods:A.shivMethods!==!1,type:"default",shivDocument:l,createElement:s,createDocumentFragment:d,addElements:o};e.html5=x,l(t);var b=/^$|\b(?:all|print)\b/,T="html5shiv",E=!h&&function(){var r=t.documentElement;return!("undefined"==typeof t.namespaces||"undefined"==typeof t.parentWindow||"undefined"==typeof r.applyElement||"undefined"==typeof r.removeNode||"undefined"==typeof e.attachEvent)}();x.type+=" print",x.shivPrint=m,m(t),"object"==typeof module&&module.exports&&(module.exports=x)}("undefined"!=typeof window?window:this,document),Modernizr.addTest("es6collections",!!(window.Map&&window.Set&&window.WeakMap&&window.WeakSet)),Modernizr.addTest("contains",is(String.prototype.contains,"function")),Modernizr.addTest("es6number",!!(Number.isFinite&&Number.isInteger&&Number.isSafeInteger&&Number.isNaN&&Number.parseInt&&Number.parseFloat&&Number.isInteger(Number.MAX_SAFE_INTEGER)&&Number.isInteger(Number.MIN_SAFE_INTEGER)&&Number.isFinite(Number.EPSILON))),Modernizr.addTest("es6object",!!(Object.assign&&Object.is&&Object.setPrototypeOf));var omPrefixes="Moz O ms Webkit",domPrefixes=ModernizrProto._config.usePrefixes?omPrefixes.toLowerCase().split(" "):[];ModernizrProto._domPrefixes=domPrefixes;var prefixedCSSValue=function(e,t){var r=!1,n=createElement("div"),o=n.style;if(e in o){var i=domPrefixes.length;for(o[e]=t,r=o[e];i--&&!r;)o[e]="-"+domPrefixes[i]+"-"+t,r=o[e]}return""===r&&(r=!1),r};ModernizrProto.prefixedCSSValue=prefixedCSSValue,Modernizr.addTest("bgpositionshorthand",function(){var e=createElement("a"),t=e.style,r="right 10px bottom 10px";return t.cssText="background-position: "+r+";",t.backgroundPosition===r}),Modernizr.addTest("cubicbezierrange",function(){var e=createElement("a");return e.style.cssText=prefixes.join("transition-timing-function:cubic-bezier(1,0,0,1.1); "),!!e.style.length}),Modernizr.addTest("imgcrossorigin","crossOrigin"in createElement("img")),Modernizr.addTest("opacity",function(){var e=createElement("a").style;return e.cssText=prefixes.join("opacity:.55;"),/^0.55$/.test(e.opacity)}),Modernizr.addTest("csspointerevents",function(){var e=createElement("a").style;return e.cssText="pointer-events:auto","auto"===e.pointerEvents}),Modernizr.addTest("cssremunit",function(){var e=createElement("a").style;try{e.fontSize="3rem"}catch(t){}return/rem/.test(e.fontSize)});var modElem={elem:createElement("modernizr")};Modernizr._q.push(function(){delete modElem.elem}),Modernizr.addTest("csschunit",function(){var e,t=modElem.elem.style;try{t.fontSize="3ch",e=-1!==t.fontSize.indexOf("ch")}catch(r){e=!1}return e});var newSyntax="CSS"in window&&"supports"in window.CSS,oldSyntax="supportsCSS"in window;Modernizr.addTest("supports",newSyntax||oldSyntax),Modernizr.addTest("preserve3d",function(){var e,t,r=window.CSS,n=!1;return r&&r.supports&&r.supports("(transform-style: preserve-3d)")?!0:(e=createElement("a"),t=createElement("a"),e.style.cssText="display: block; transform-style: preserve-3d; transform-origin: right; transform: rotateY(40deg);",t.style.cssText="display: block; width: 9px; height: 1px; background: #000; transform-origin: right; transform: rotateY(40deg);",e.appendChild(t),docElement.appendChild(e),n=t.getBoundingClientRect(),docElement.removeChild(e),n=n.width&&n.width<4)}),Modernizr.addTest("classlist","classList"in docElement),Modernizr.addTest("passiveeventlisteners",function(){var e=!1;try{var t=Object.defineProperty({},"passive",{get:function(){e=!0}});window.addEventListener("test",null,t)}catch(r){}return e}),Modernizr.addTest("progressbar",createElement("progress").max!==undefined),Modernizr.addTest("meter",createElement("meter").max!==undefined),Modernizr.addTest("es5array",function(){return!!(Array.prototype&&Array.prototype.every&&Array.prototype.filter&&Array.prototype.forEach&&Array.prototype.indexOf&&Array.prototype.lastIndexOf&&Array.prototype.map&&Array.prototype.some&&Array.prototype.reduce&&Array.prototype.reduceRight&&Array.isArray)}),Modernizr.addTest("es5function",function(){return!(!Function.prototype||!Function.prototype.bind)}),Modernizr.addTest("es5object",function(){return!!(Object.keys&&Object.create&&Object.getPrototypeOf&&Object.getOwnPropertyNames&&Object.isSealed&&Object.isFrozen&&Object.isExtensible&&Object.getOwnPropertyDescriptor&&Object.defineProperty&&Object.defineProperties&&Object.seal&&Object.freeze&&Object.preventExtensions)}),Modernizr.addTest("es5string",function(){return!(!String.prototype||!String.prototype.trim)}),Modernizr.addTest("es5syntax",function(){var value,obj,stringAccess,getter,setter,reservedWords,zeroWidthChars;try{return stringAccess=eval('"foobar"[3] === "b"'),getter=eval("({ get x(){ return 1 } }).x === 1"),eval("({ set x(v){ value = v; } }).x = 1"),setter=1===value,eval("obj = ({ if: 1 })"),reservedWords=1===obj["if"],zeroWidthChars=eval("_‌‍ = true"),stringAccess&&getter&&setter&&reservedWords&&zeroWidthChars}catch(ignore){return!1}}),Modernizr.addTest("es5undefined",function(){var e,t;try{t=window.undefined,window.undefined=12345,e="undefined"==typeof window.undefined,window.undefined=t}catch(r){return!1}return e}),Modernizr.addTest("es6array",!!(Array.prototype&&Array.prototype.copyWithin&&Array.prototype.fill&&Array.prototype.find&&Array.prototype.findIndex&&Array.prototype.keys&&Array.prototype.entries&&Array.prototype.values&&Array.from&&Array.of)),Modernizr.addTest("arrow",function(){try{eval("()=>{}")}catch(e){return!1}return!0}),Modernizr.addTest("canvas",function(){var e=createElement("canvas");return!(!e.getContext||!e.getContext("2d"))});var toStringFn={}.toString;Modernizr.addTest("svgclippaths",function(){return!!document.createElementNS&&/SVGClipPath/.test(toStringFn.call(document.createElementNS("http://www.w3.org/2000/svg","clipPath")))}),Modernizr.addTest("svgforeignobject",function(){return!!document.createElementNS&&/SVGForeignObject/.test(toStringFn.call(document.createElementNS("http://www.w3.org/2000/svg","foreignObject")))}),Modernizr.addTest("es5date",function(){var e="2013-04-12T06:06:37.307Z",t=!1;try{t=!!Date.parse(e)}catch(r){}return!!(Date.now&&Date.prototype&&Date.prototype.toISOString&&Date.prototype.toJSON&&t)}),Modernizr.addTest("strictmode",function(){"use strict";return!this}());var hasOwnProp;!function(){var e={}.hasOwnProperty;hasOwnProp=is(e,"undefined")||is(e.call,"undefined")?function(e,t){return t in e&&is(e.constructor.prototype[t],"undefined")}:function(t,r){return e.call(t,r)}}(),ModernizrProto._l={},ModernizrProto.on=function(e,t){this._l[e]||(this._l[e]=[]),this._l[e].push(t),Modernizr.hasOwnProperty(e)&&setTimeout(function(){Modernizr._trigger(e,Modernizr[e])},0)},ModernizrProto._trigger=function(e,t){if(this._l[e]){var r=this._l[e];setTimeout(function(){var e,n;for(e=0;e<r.length;e++)(n=r[e])(t)},0),delete this._l[e]}},Modernizr._q.push(function(){ModernizrProto.addTest=addTest}),Modernizr.addAsyncTest(function(){if(!Modernizr.canvas)return!1;var e=new Image,t=createElement("canvas"),r=t.getContext("2d");e.onload=function(){addTest("apng",function(){return"undefined"==typeof t.getContext?!1:(r.drawImage(e,0,0),0===r.getImageData(0,0,1,1).data[3])})},e.src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAACGFjVEwAAAABAAAAAcMq2TYAAAANSURBVAiZY2BgYPgPAAEEAQB9ssjfAAAAGmZjVEwAAAAAAAAAAQAAAAEAAAAAAAAAAAD6A+gBAbNU+2sAAAARZmRBVAAAAAEImWNgYGBgAAAABQAB6MzFdgAAAABJRU5ErkJggg=="}),Modernizr.addAsyncTest(function(){var e=new Image;e.onload=e.onerror=function(){addTest("jpegxr",1==e.width,{aliases:["jpeg-xr"]})},e.src="data:image/vnd.ms-photo;base64,SUm8AQgAAAAFAAG8AQAQAAAASgAAAIC8BAABAAAAAQAAAIG8BAABAAAAAQAAAMC8BAABAAAAWgAAAMG8BAABAAAAHwAAAAAAAAAkw91vA07+S7GFPXd2jckNV01QSE9UTwAZAYBxAAAAABP/gAAEb/8AAQAAAQAAAA=="}),Modernizr.addTest("svgasimg",document.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#Image","1.1")),Modernizr.addTest("json","JSON"in window&&"parse"in JSON&&"stringify"in JSON),Modernizr.addTest("es5",function(){return!!(Modernizr.es5array&&Modernizr.es5date&&Modernizr.es5function&&Modernizr.es5object&&Modernizr.strictmode&&Modernizr.es5string&&Modernizr.json&&Modernizr.es5syntax&&Modernizr.es5undefined)});var cssomPrefixes=ModernizrProto._config.usePrefixes?omPrefixes.split(" "):[];ModernizrProto._cssomPrefixes=cssomPrefixes;var atRule=function(e){var t,r=prefixes.length,n=window.CSSRule;if("undefined"==typeof n)return undefined;if(!e)return!1;if(e=e.replace(/^@/,""),t=e.replace(/-/g,"_").toUpperCase()+"_RULE",t in n)return"@"+e;for(var o=0;r>o;o++){var i=prefixes[o],s=i.toUpperCase()+"_"+t;if(s in n)return"@-"+i.toLowerCase()+"-"+e}return!1};ModernizrProto.atRule=atRule;var testStyles=ModernizrProto.testStyles=injectElementWithStyles,blacklist=function(){var e=navigator.userAgent,t=e.match(/w(eb)?osbrowser/gi),r=e.match(/windows phone/gi)&&e.match(/iemobile\/([0-9])+/gi)&&parseFloat(RegExp.$1)>=9;return t||r}();blacklist?Modernizr.addTest("fontface",!1):testStyles('@font-face {font-family:"font";src:url("https://")}',function(e,t){var r=document.getElementById("smodernizr"),n=r.sheet||r.styleSheet,o=n?n.cssRules&&n.cssRules[0]?n.cssRules[0].cssText:n.cssText||"":"",i=/src/i.test(o)&&0===o.indexOf(t.split(" ")[0]);Modernizr.addTest("fontface",i)}),Modernizr.addTest("hairline",function(){return testStyles("#modernizr {border:.5px solid transparent}",function(e){return 1===e.offsetHeight})}),Modernizr.addTest("cssinvalid",function(){return testStyles("#modernizr input{height:0;border:0;padding:0;margin:0;width:10px} #modernizr input:invalid{width:50px}",function(e){var t=createElement("input");return t.required=!0,e.appendChild(t),t.clientWidth>10})}),testStyles("#modernizr div {width:100px} #modernizr :last-child{width:200px;display:block}",function(e){Modernizr.addTest("lastchild",e.lastChild.offsetWidth>e.firstChild.offsetWidth)},2),testStyles("#modernizr div {width:1px} #modernizr div:nth-child(2n) {width:2px;}",function(e){for(var t=e.getElementsByTagName("div"),r=!0,n=0;5>n;n++)r=r&&t[n].offsetWidth===n%2+1;Modernizr.addTest("nthchild",r)},5),testStyles("#modernizr{overflow: scroll; width: 40px; height: 40px; }#"+prefixes.join("scrollbar{width:10px} #modernizr::").split("#").slice(1).join("#")+"scrollbar{width:10px}",function(e){Modernizr.addTest("cssscrollbar","scrollWidth"in e&&30==e.scrollWidth)}),Modernizr.addTest("siblinggeneral",function(){return testStyles("#modernizr div {width:100px} #modernizr div ~ div {width:200px;display:block}",function(e){return 200==e.lastChild.offsetWidth},2)}),testStyles("#modernizr{position: absolute; top: -10em; visibility:hidden; font: normal 10px arial;}#subpixel{float: left; font-size: 33.3333%;}",function(e){var t=e.firstChild;t.innerHTML="This is a text written in Arial",Modernizr.addTest("subpixelfont",window.getComputedStyle?"44px"!==window.getComputedStyle(t,null).getPropertyValue("width"):!1)},1,["subpixel"]),Modernizr.addTest("cssvalid",function(){return testStyles("#modernizr input{height:0;border:0;padding:0;margin:0;width:10px} #modernizr input:valid{width:50px}",function(e){var t=createElement("input");return e.appendChild(t),t.clientWidth>10})}),testStyles("#modernizr1{width: 50vm;width:50vmin}#modernizr2{width:50px;height:50px;overflow:scroll}#modernizr3{position:fixed;top:0;left:0;bottom:0;right:0}",function(e){var t=e.childNodes[2],r=e.childNodes[1],n=e.childNodes[0],o=parseInt((r.offsetWidth-r.clientWidth)/2,10),i=n.clientWidth/100,s=n.clientHeight/100,d=parseInt(50*Math.min(i,s),10),a=parseInt(computedStyle(t,null,"width"),10);Modernizr.addTest("cssvminunit",roundedEquals(d,a)||roundedEquals(d,a-o))},3);var mq=function(){var e=window.matchMedia||window.msMatchMedia;return e?function(t){var r=e(t);return r&&r.matches||!1}:function(e){var t=!1;return injectElementWithStyles("@media "+e+" { #modernizr { position: absolute; } }",function(e){t="absolute"==(window.getComputedStyle?window.getComputedStyle(e,null):e.currentStyle).position}),t}}();ModernizrProto.mq=mq,Modernizr.addTest("mediaqueries",mq("only all"));var mStyle={style:modElem.elem.style};Modernizr._q.unshift(function(){delete mStyle.style}),ModernizrProto.testAllProps=testPropsAll;var prefixed=ModernizrProto.prefixed=function(e,t,r){return 0===e.indexOf("@")?atRule(e):(-1!=e.indexOf("-")&&(e=cssToDOM(e)),t?testPropsAll(e,t,r):testPropsAll(e,"pfx"))},prefixedCSS=ModernizrProto.prefixedCSS=function(e){var t=prefixed(e);return t&&domToCSS(t)};Modernizr.addTest("backgroundblendmode",prefixed("backgroundBlendMode","text")),Modernizr.addTest("objectfit",!!prefixed("objectFit"),{aliases:["object-fit"]}),Modernizr.addTest("wrapflow",function(){var e=prefixed("wrapFlow");if(!e||isSVG)return!1;var t=e.replace(/([A-Z])/g,function(e,t){return"-"+t.toLowerCase()}).replace(/^ms-/,"-ms-"),r=createElement("div"),n=createElement("div"),o=createElement("span");n.style.cssText="position: absolute; left: 50px; width: 100px; height: 20px;"+t+":end;",o.innerText="X",r.appendChild(n),r.appendChild(o),docElement.appendChild(r);var i=o.offsetLeft;return docElement.removeChild(r),n=o=r=undefined,150==i}),ModernizrProto.testAllProps=testAllProps,Modernizr.addTest("cssanimations",testAllProps("animationName","a",!0)),Modernizr.addTest("backgroundcliptext",function(){return testAllProps("backgroundClip","text")}),Modernizr.addTest("bgpositionxy",function(){return testAllProps("backgroundPositionX","3px",!0)&&testAllProps("backgroundPositionY","5px",!0)}),Modernizr.addTest("bgrepeatround",testAllProps("backgroundRepeat","round")),Modernizr.addTest("bgrepeatspace",testAllProps("backgroundRepeat","space")),Modernizr.addTest("backgroundsize",testAllProps("backgroundSize","100%",!0)),Modernizr.addTest("bgsizecover",testAllProps("backgroundSize","cover")),Modernizr.addTest("borderimage",testAllProps("borderImage","url() 1",!0)),Modernizr.addTest("borderradius",testAllProps("borderRadius","0px",!0)),Modernizr.addTest("ellipsis",testAllProps("textOverflow","ellipsis")),Modernizr.addTest("cssfilters",function(){if(Modernizr.supports)return testAllProps("filter","blur(2px)");var e=createElement("a");return e.style.cssText=prefixes.join("filter:blur(2px); "),!!e.style.length&&(document.documentMode===undefined||document.documentMode>9)}),Modernizr.addTest("boxsizing",testAllProps("boxSizing","border-box",!0)&&(document.documentMode===undefined||document.documentMode>7)),Modernizr.addTest("flexbox",testAllProps("flexBasis","1px",!0)),Modernizr.addTest("flexboxlegacy",testAllProps("boxDirection","reverse",!0)),Modernizr.addTest("flexboxtweener",testAllProps("flexAlign","end",!0)),Modernizr.addTest("textalignlast",testAllProps("textAlignLast")),Modernizr.addTest("csstransforms",function(){return-1===navigator.userAgent.indexOf("Android 2.")&&testAllProps("transform","scale(1)",!0)}),Modernizr.addTest("csstransforms3d",function(){return!!testAllProps("perspective","1px",!0)}),Modernizr.addTest("csstransformslevel2",function(){return testAllProps("translate","45px",!0)}),Modernizr.addTest("csstransitions",testAllProps("transition","all",!0)),Modernizr.addTest("csspseudotransitions",function(){var e=!1;if(!Modernizr.csstransitions||!window.getComputedStyle)return e;var t='#modernizr:before { content:" "; font-size:5px;'+Modernizr._prefixes.join("transition:0s 100s;")+"}#modernizr.trigger:before { font-size:10px; }";return Modernizr.testStyles(t,function(t){window.getComputedStyle(t,":before").getPropertyValue("font-size"),t.className+="trigger",e="5px"===window.getComputedStyle(t,":before").getPropertyValue("font-size")}),e}),Modernizr.addTest("smil",function(){return!!document.createElementNS&&/SVGAnimate/.test(toStringFn.call(document.createElementNS("http://www.w3.org/2000/svg","animate")))}),testRunner(),setClasses(classes),delete ModernizrProto.addTest,delete ModernizrProto.addAsyncTest;for(var i=0;i<Modernizr._q.length;i++)Modernizr._q[i]();window.Modernizr=Modernizr}(window,document);
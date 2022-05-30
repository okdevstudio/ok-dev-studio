"use strict";(self.webpackChunkok_dev=self.webpackChunkok_dev||[]).push([[218],{4811:function(e){var t=function(e,t){if("string"!=typeof e&&!Array.isArray(e))throw new TypeError("Expected the input to be `string | string[]`");t=Object.assign({pascalCase:!1},t);var r;return e=Array.isArray(e)?e.map((function(e){return e.trim()})).filter((function(e){return e.length})).join("-"):e.trim(),0===e.length?"":1===e.length?t.pascalCase?e.toUpperCase():e.toLowerCase():(e!==e.toLowerCase()&&(e=function(e){for(var t=!1,r=!1,a=!1,n=0;n<e.length;n++){var i=e[n];t&&/[a-zA-Z]/.test(i)&&i.toUpperCase()===i?(e=e.slice(0,n)+"-"+e.slice(n),t=!1,a=r,r=!0,n++):r&&a&&/[a-zA-Z]/.test(i)&&i.toLowerCase()===i?(e=e.slice(0,n-1)+"-"+e.slice(n-1),a=r,r=!1,t=!0):(t=i.toLowerCase()===i&&i.toUpperCase()!==i,a=r,r=i.toUpperCase()===i&&i.toLowerCase()!==i)}return e}(e)),e=e.replace(/^[_.\- ]+/,"").toLowerCase().replace(/[_.\- ]+(\w|$)/g,(function(e,t){return t.toUpperCase()})).replace(/\d+(\w|$)/g,(function(e){return e.toUpperCase()})),r=e,t.pascalCase?r.charAt(0).toUpperCase()+r.slice(1):r)};e.exports=t,e.exports.default=t},9230:function(e,t,r){r.d(t,{L:function(){return f},M:function(){return E},P:function(){return w},S:function(){return j},_:function(){return s},a:function(){return o},b:function(){return c},g:function(){return u},h:function(){return l}});var a=r(7294),n=(r(4811),r(5697)),i=r.n(n);function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},o.apply(this,arguments)}function s(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)t.indexOf(r=i[a])>=0||(n[r]=e[r]);return n}var l=function(){return"undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype};function c(e,t,r,a,n){return void 0===n&&(n={}),o({},r,{loading:a,shouldLoad:e,"data-main-image":"",style:o({},n,{opacity:t?1:0})})}function u(e,t,r,a,n,i,s,l){var c={};i&&(c.backgroundColor=i,"fixed"===r?(c.width=a,c.height=n,c.backgroundColor=i,c.position="relative"):("constrained"===r||"fullWidth"===r)&&(c.position="absolute",c.top=0,c.left=0,c.bottom=0,c.right=0)),s&&(c.objectFit=s),l&&(c.objectPosition=l);var u=o({},e,{"aria-hidden":!0,"data-placeholder-image":"",style:o({opacity:t?0:1,transition:"opacity 500ms linear"},c)});return u}var d,p=["children"],g=function(e){var t=e.layout,r=e.width,n=e.height;return"fullWidth"===t?a.createElement("div",{"aria-hidden":!0,style:{paddingTop:n/r*100+"%"}}):"constrained"===t?a.createElement("div",{style:{maxWidth:r,display:"block"}},a.createElement("img",{alt:"",role:"presentation","aria-hidden":"true",src:"data:image/svg+xml;charset=utf-8,%3Csvg height='"+n+"' width='"+r+"' xmlns='http://www.w3.org/2000/svg' version='1.1'%3E%3C/svg%3E",style:{maxWidth:"100%",display:"block",position:"static"}})):null},f=function(e){var t=e.children,r=s(e,p);return a.createElement(a.Fragment,null,a.createElement(g,o({},r)),t,null)},m=["src","srcSet","loading","alt","shouldLoad"],h=["fallback","sources","shouldLoad"],y=function(e){var t=e.src,r=e.srcSet,n=e.loading,i=e.alt,l=void 0===i?"":i,c=e.shouldLoad,u=s(e,m);return a.createElement("img",o({},u,{decoding:"async",loading:n,src:c?t:void 0,"data-src":c?void 0:t,srcSet:c?r:void 0,"data-srcset":c?void 0:r,alt:l}))},v=function(e){var t=e.fallback,r=e.sources,n=void 0===r?[]:r,i=e.shouldLoad,l=void 0===i||i,c=s(e,h),u=c.sizes||(null==t?void 0:t.sizes),d=a.createElement(y,o({},c,t,{sizes:u,shouldLoad:l}));return n.length?a.createElement("picture",null,n.map((function(e){var t=e.media,r=e.srcSet,n=e.type;return a.createElement("source",{key:t+"-"+n+"-"+r,type:n,media:t,srcSet:l?r:void 0,"data-srcset":l?void 0:r,sizes:u})})),d):d};y.propTypes={src:n.string.isRequired,alt:n.string.isRequired,sizes:n.string,srcSet:n.string,shouldLoad:n.bool},v.displayName="Picture",v.propTypes={alt:n.string.isRequired,shouldLoad:n.bool,fallback:n.exact({src:n.string.isRequired,srcSet:n.string,sizes:n.string}),sources:n.arrayOf(n.oneOfType([n.exact({media:n.string.isRequired,type:n.string,sizes:n.string,srcSet:n.string.isRequired}),n.exact({media:n.string,type:n.string.isRequired,sizes:n.string,srcSet:n.string.isRequired})]))};var b=["fallback"],w=function(e){var t=e.fallback,r=s(e,b);return t?a.createElement(v,o({},r,{fallback:{src:t},"aria-hidden":!0,alt:""})):a.createElement("div",o({},r))};w.displayName="Placeholder",w.propTypes={fallback:n.string,sources:null==(d=v.propTypes)?void 0:d.sources,alt:function(e,t,r){return e[t]?new Error("Invalid prop `"+t+"` supplied to `"+r+"`. Validation failed."):null}};var E=function(e){return a.createElement(a.Fragment,null,a.createElement(v,o({},e)),a.createElement("noscript",null,a.createElement(v,o({},e,{shouldLoad:!0}))))};E.displayName="MainImage",E.propTypes=v.propTypes;var C,L,k=function(e,t,r){for(var a=arguments.length,n=new Array(a>3?a-3:0),o=3;o<a;o++)n[o-3]=arguments[o];return e.alt||""===e.alt?i().string.apply(i(),[e,t,r].concat(n)):new Error('The "alt" prop is required in '+r+'. If the image is purely presentational then pass an empty string: e.g. alt="". Learn more: https://a11y-style-guide.com/style-guide/section-media.html')},x={image:i().object.isRequired,alt:k},S=["as","image","style","backgroundColor","className","class","onStartLoad","onLoad","onError"],_=["style","className"],T=new Set,O=function(e){var t=e.as,n=void 0===t?"div":t,i=e.image,c=e.style,u=e.backgroundColor,d=e.className,p=e.class,g=e.onStartLoad,f=e.onLoad,m=e.onError,h=s(e,S),y=i.width,v=i.height,b=i.layout,w=function(e,t,r){var a={},n="gatsby-image-wrapper";return"fixed"===r?(a.width=e,a.height=t):"constrained"===r&&(n="gatsby-image-wrapper gatsby-image-wrapper-constrained"),{className:n,"data-gatsby-image-wrapper":"",style:a}}(y,v,b),E=w.style,k=w.className,x=s(w,_),O=(0,a.useRef)(),I=(0,a.useMemo)((function(){return JSON.stringify(i.images)}),[i.images]);p&&(d=p);var N=function(e,t,r){var a="";return"fullWidth"===e&&(a='<div aria-hidden="true" style="padding-top: '+r/t*100+'%;"></div>'),"constrained"===e&&(a='<div style="max-width: '+t+'px; display: block;"><img alt="" role="presentation" aria-hidden="true" src="data:image/svg+xml;charset=utf-8,%3Csvg height=\''+r+"' width='"+t+"' xmlns='http://www.w3.org/2000/svg' version='1.1'%3E%3C/svg%3E\" style=\"max-width: 100%; display: block; position: static;\"></div>"),a}(b,y,v);return(0,a.useEffect)((function(){C||(C=Promise.all([r.e(774),r.e(36)]).then(r.bind(r,9036)).then((function(e){var t=e.renderImageToString,r=e.swapPlaceholderImage;return L=t,{renderImageToString:t,swapPlaceholderImage:r}})));var e,t,a=O.current.querySelector("[data-gatsby-image-ssr]");return a&&l()?(a.complete?(null==g||g({wasCached:!0}),null==f||f({wasCached:!0}),setTimeout((function(){a.removeAttribute("data-gatsby-image-ssr")}),0)):document.addEventListener("load",(function e(){document.removeEventListener("load",e),null==g||g({wasCached:!0}),null==f||f({wasCached:!0}),setTimeout((function(){a.removeAttribute("data-gatsby-image-ssr")}),0)})),void T.add(I)):L&&T.has(I)?void 0:(C.then((function(r){var a=r.renderImageToString,n=r.swapPlaceholderImage;O.current.innerHTML=a(o({isLoading:!0,isLoaded:T.has(I),image:i},h)),T.has(I)||(e=requestAnimationFrame((function(){O.current&&(t=n(O.current,I,T,c,g,f,m))})))})),function(){e&&cancelAnimationFrame(e),t&&t()})}),[i]),(0,a.useLayoutEffect)((function(){T.has(I)&&L&&(O.current.innerHTML=L(o({isLoading:T.has(I),isLoaded:T.has(I),image:i},h)),null==g||g({wasCached:!0}),null==f||f({wasCached:!0}))}),[i]),(0,a.createElement)(n,o({},x,{style:o({},E,c,{backgroundColor:u}),className:k+(d?" "+d:""),ref:O,dangerouslySetInnerHTML:{__html:N},suppressHydrationWarning:!0}))},I=(0,a.memo)((function(e){return e.image?(0,a.createElement)(O,e):null}));I.propTypes=x,I.displayName="GatsbyImage";var N,q=["src","__imageData","__error","width","height","aspectRatio","tracedSVGOptions","placeholder","formats","quality","transformOptions","jpgOptions","pngOptions","webpOptions","avifOptions","blurredOptions"],z=function(e,t){for(var r=arguments.length,a=new Array(r>2?r-2:0),n=2;n<r;n++)a[n-2]=arguments[n];return"fullWidth"!==e.layout||"width"!==t&&"height"!==t||!e[t]?i().number.apply(i(),[e,t].concat(a)):new Error('"'+t+'" '+e[t]+" may not be passed when layout is fullWidth.")},A=new Set(["fixed","fullWidth","constrained"]),R={src:i().string.isRequired,alt:k,width:z,height:z,sizes:i().string,layout:function(e){if(void 0!==e.layout&&!A.has(e.layout))return new Error("Invalid value "+e.layout+'" provided for prop "layout". Defaulting to "constrained". Valid values are "fixed", "fullWidth" or "constrained".')}},j=(N=I,function(e){var t=e.src,r=e.__imageData,n=e.__error,i=s(e,q);return n&&console.warn(n),r?a.createElement(N,o({image:r},i)):(console.warn("Image not loaded",t),null)});j.displayName="StaticImage",j.propTypes=R},9597:function(e,t,r){r.r(t),r.d(t,{default:function(){return l}});var a=r(7294),n=r(5414);var i=r(9230);function o(e){return function(e){if(null==e)throw new TypeError("Cannot destructure undefined")}(e),a.createElement("div",{className:"container"},a.createElement(i.S,{src:"../images/not_found.png",alt:"not-found",__imageData:r(2756)}),a.createElement("h1",null,"Page Not Found"))}var s={display:"flex",justifyContent:"center",height:"100vh"},l=function(){return a.createElement(a.Fragment,null,a.createElement(n.q,null,a.createElement("title",null,"Not Found")),a.createElement("main",{style:s},a.createElement(o,null)))}},2756:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#080808","images":{"fallback":{"src":"/static/c83988be6ce40f856bbe714734a10e44/ccc41/not_found.png","srcSet":"/static/c83988be6ce40f856bbe714734a10e44/bf8e1/not_found.png 128w,\\n/static/c83988be6ce40f856bbe714734a10e44/acb7c/not_found.png 256w,\\n/static/c83988be6ce40f856bbe714734a10e44/ccc41/not_found.png 512w","sizes":"(min-width: 512px) 512px, 100vw"},"sources":[{"srcSet":"/static/c83988be6ce40f856bbe714734a10e44/6766a/not_found.webp 128w,\\n/static/c83988be6ce40f856bbe714734a10e44/22bfc/not_found.webp 256w,\\n/static/c83988be6ce40f856bbe714734a10e44/d689f/not_found.webp 512w","type":"image/webp","sizes":"(min-width: 512px) 512px, 100vw"}]},"width":512,"height":512}')}}]);
//# sourceMappingURL=component---src-pages-404-tsx-9ea51c6014ac4452e35e.js.map
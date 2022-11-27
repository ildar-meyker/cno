/*! modernizr 3.11.8 (Custom Build) | MIT *
 * https://modernizr.com/download/?-hiddenscroll-setclasses !*/
!function(e,n,t,o){function s(e,n){return typeof e===n}function a(){return"function"!=typeof t.createElement?t.createElement(arguments[0]):p?t.createElementNS.call(t,"http://www.w3.org/2000/svg",arguments[0]):t.createElement.apply(t,arguments)}function i(){var e=t.body;return e||(e=a(p?"svg":"body"),e.fake=!0),e}function l(e,n,o,s){var l,r,d,f,p="modernizr",u=a("div"),h=i();if(parseInt(o,10))for(;o--;)d=a("div"),d.id=s?s[o]:p+(o+1),u.appendChild(d);return l=a("style"),l.type="text/css",l.id="s"+p,(h.fake?h:u).appendChild(l),h.appendChild(u),l.styleSheet?l.styleSheet.cssText=e:l.appendChild(t.createTextNode(e)),u.id=p,h.fake&&(h.style.background="",h.style.overflow="hidden",f=c.style.overflow,c.style.overflow="hidden",c.appendChild(h)),r=n(u,e),h.fake&&h.parentNode?(h.parentNode.removeChild(h),c.style.overflow=f,c.offsetHeight):u.parentNode.removeChild(u),!!r}var r=[],d={_version:"3.11.8",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,n){var t=this;setTimeout(function(){n(t[e])},0)},addTest:function(e,n,t){r.push({name:e,fn:n,options:t})},addAsyncTest:function(e){r.push({name:null,fn:e})}},Modernizr=function(){};Modernizr.prototype=d,Modernizr=new Modernizr;var f=[],c=t.documentElement,p="svg"===c.nodeName.toLowerCase(),u=d.testStyles=l;Modernizr.addTest("hiddenscroll",function(){return u("#modernizr {width:100px;height:100px;overflow:scroll}",function(e){return e.offsetWidth===e.clientWidth})}),function(){var e,n,t,o,a,i,l;for(var d in r)if(r.hasOwnProperty(d)){if(e=[],n=r[d],n.name&&(e.push(n.name.toLowerCase()),n.options&&n.options.aliases&&n.options.aliases.length))for(t=0;t<n.options.aliases.length;t++)e.push(n.options.aliases[t].toLowerCase());for(o=s(n.fn,"function")?n.fn():n.fn,a=0;a<e.length;a++)i=e[a],l=i.split("."),1===l.length?Modernizr[l[0]]=o:(Modernizr[l[0]]&&(!Modernizr[l[0]]||Modernizr[l[0]]instanceof Boolean)||(Modernizr[l[0]]=new Boolean(Modernizr[l[0]])),Modernizr[l[0]][l[1]]=o),f.push((o?"":"no-")+l.join("-"))}}(),function(e){var n=c.className,t=Modernizr._config.classPrefix||"";if(p&&(n=n.baseVal),Modernizr._config.enableJSClass){var o=new RegExp("(^|\\s)"+t+"no-js(\\s|$)");n=n.replace(o,"$1"+t+"js$2")}Modernizr._config.enableClasses&&(e.length>0&&(n+=" "+t+e.join(" "+t)),p?c.className.baseVal=n:c.className=n)}(f),delete d.addTest,delete d.addAsyncTest;for(var h=0;h<Modernizr._q.length;h++)Modernizr._q[h]();e.Modernizr=Modernizr}(window,window,document);
!function(a){function b(b,c){var d=a.proxy(this.process,this),e=a(b).is("body")?a(window):a(b),f;this.options=a.extend({},a.fn.scrollspy.defaults,c),this.$scrollElement=e.on("scroll.scroll-spy.data-api",d),this.selector=(this.options.target||(f=a(b).attr("href"))&&f.replace(/.*(?=#[^\s]+$)/,"")||"")+" .nav li > a",this.$body=a("body"),this.refresh(),this.process()}"use strict",b.prototype={constructor:b,refresh:function(){var b=this,c;this.offsets=a([]),this.targets=a([]),c=this.$body.find(this.selector).map(function(){var c=a(this),d=c.data("target")||c.attr("href"),e=/^#\w/.test(d)&&a(d);return e&&e.length&&[[e.position().top+(!a.isWindow(b.$scrollElement.get(0))&&b.$scrollElement.scrollTop()),d]]||null}).sort(function(a,b){return a[0]-b[0]}).each(function(){b.offsets.push(this[0]),b.targets.push(this[1])})},process:function(){var a=this.$scrollElement.scrollTop()+this.options.offset,b=this.$scrollElement[0].scrollHeight||this.$body[0].scrollHeight,c=b-this.$scrollElement.height(),d=this.offsets,e=this.targets,f=this.activeTarget,g;if(a>=c)return f!=(g=e.last()[0])&&this.activate(g);for(g=d.length;g--;)f!=e[g]&&a>=d[g]&&(!d[g+1]||a<=d[g+1])&&this.activate(e[g])},activate:function(b){var c,d;this.activeTarget=b,a(this.selector).parent(".active").removeClass("active"),d=this.selector+'[data-target="'+b+'"],'+this.selector+'[href="'+b+'"]',c=a(d).parent("li").addClass("active"),c.parent(".dropdown-menu").length&&(c=c.closest("li.dropdown").addClass("active")),c.trigger("activate")}};var c=a.fn.scrollspy;a.fn.scrollspy=function(c){return this.each(function(){var d=a(this),e=d.data("scrollspy"),f=typeof c=="object"&&c;e||d.data("scrollspy",e=new b(this,f)),typeof c=="string"&&e[c]()})},a.fn.scrollspy.Constructor=b,a.fn.scrollspy.defaults={offset:10},a.fn.scrollspy.noConflict=function(){return a.fn.scrollspy=c,this},a(window).on("load",function(){a('[data-spy="scroll"]').each(function(){var b=a(this);b.scrollspy(b.data())})})}(window.jQuery),function(){var a=/\blang(?:uage)?-(?!\*)(\w+)\b/i,b=self.Prism={util:{type:function(a){return Object.prototype.toString.call(a).match(/\[object (\w+)\]/)[1]},clone:function(a){var c=b.util.type(a);switch(c){case"Object":var d={};for(var e in a)a.hasOwnProperty(e)&&(d[e]=b.util.clone(a[e]));return d;case"Array":return a.slice()}return a}},languages:{extend:function(a,c){var d=b.util.clone(b.languages[a]);for(var e in c)d[e]=c[e];return d},insertBefore:function(a,c,d,e){e=e||b.languages;var f=e[a],g={};for(var h in f)if(f.hasOwnProperty(h)){if(h==c)for(var i in d)d.hasOwnProperty(i)&&(g[i]=d[i]);g[h]=f[h]}return e[a]=g},DFS:function(a,c){for(var d in a)c.call(a,d,a[d]),b.util.type(a)==="Object"&&b.languages.DFS(a[d],c)}},highlightAll:function(a,c){var d=document.querySelectorAll('code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code');for(var e=0,f;f=d[e++];)b.highlightElement(f,a===!0,c)},highlightElement:function(d,f,g){var h,i,j=d;while(j&&!a.test(j.className))j=j.parentNode;j&&(h=(j.className.match(a)||[,""])[1],i=b.languages[h]);if(!i)return;d.className=d.className.replace(a,"").replace(/\s+/g," ")+" language-"+h,j=d.parentNode,/pre/i.test(j.nodeName)&&(j.className=j.className.replace(a,"").replace(/\s+/g," ")+" language-"+h);var k=d.textContent;if(!k)return;k=k.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/\u00a0/g," ");var l={element:d,language:h,grammar:i,code:k};b.hooks.run("before-highlight",l);if(f&&self.Worker){var m=new Worker(b.filename);m.onmessage=function(a){l.highlightedCode=c.stringify(JSON.parse(a.data)),l.element.innerHTML=l.highlightedCode,g&&g.call(l.element),b.hooks.run("after-highlight",l)},m.postMessage(JSON.stringify({language:l.language,code:l.code}))}else l.highlightedCode=b.highlight(l.code,l.grammar),l.element.innerHTML=l.highlightedCode,g&&g.call(d),b.hooks.run("after-highlight",l)},highlight:function(a,d){return c.stringify(b.tokenize(a,d))},tokenize:function(a,c){var d=b.Token,e=[a],f=c.rest;if(f){for(var g in f)c[g]=f[g];delete c.rest}a:for(var g in c){if(!c.hasOwnProperty(g)||!c[g])continue;var h=c[g],i=h.inside,j=!!h.lookbehind||0;h=h.pattern||h;for(var k=0;k<e.length;k++){var l=e[k];if(e.length>a.length)break a;if(l instanceof d)continue;h.lastIndex=0;var m=h.exec(l);if(m){j&&(j=m[1].length);var n=m.index-1+j,m=m[0].slice(j),o=m.length,p=n+o,q=l.slice(0,n+1),r=l.slice(p+1),s=[k,1];q&&s.push(q);var u=new d(g,i?b.tokenize(m,i):m);s.push(u),r&&s.push(r),Array.prototype.splice.apply(e,s)}}}return e},hooks:{all:{},add:function(a,c){var d=b.hooks.all;d[a]=d[a]||[],d[a].push(c)},run:function(a,c){var d=b.hooks.all[a];if(!d||!d.length)return;for(var e=0,f;f=d[e++];)f(c)}}},c=b.Token=function(a,b){this.type=a,this.content=b};c.stringify=function(a){if(typeof a=="string")return a;if(Object.prototype.toString.call(a)=="[object Array]")return a.map(c.stringify).join("");var d={type:a.type,content:c.stringify(a.content),tag:"span",classes:["token",a.type],attributes:{}};d.type=="comment"&&(d.attributes.spellcheck="true"),b.hooks.run("wrap",d);var e="";for(var f in d.attributes)e+=f+'="'+(d.attributes[f]||"")+'"';return"<"+d.tag+' class="'+d.classes.join(" ")+'" '+e+">"+d.content+"</"+d.tag+">"};if(!self.document){self.addEventListener("message",function(a){var c=JSON.parse(a.data),d=c.language,e=c.code;self.postMessage(JSON.stringify(b.tokenize(e,b.languages[d]))),self.close()},!1);return}var d=document.getElementsByTagName("script");d=d[d.length-1],d&&(b.filename=d.src,document.addEventListener&&!d.hasAttribute("data-manual")&&document.addEventListener("DOMContentLoaded",b.highlightAll))}(),Prism.languages.markup={comment:/&lt;!--[\w\W]*?--(&gt;|&gt;)/g,prolog:/&lt;\?.+?\?&gt;/,doctype:/&lt;!DOCTYPE.+?&gt;/,cdata:/&lt;!\[CDATA\[[\w\W]+?]]&gt;/i,tag:{pattern:/&lt;\/?[\w:-]+\s*(?:\s+[\w:-]+(?:=(?:("|')(\\?[\w\W])*?\1|\w+))?\s*)*\/?&gt;/gi,inside:{tag:{pattern:/^&lt;\/?[\w:-]+/i,inside:{punctuation:/^&lt;\/?/,namespace:/^[\w-]+?:/}},"attr-value":{pattern:/=(?:('|")[\w\W]*?(\1)|[^\s>]+)/gi,inside:{punctuation:/=|&gt;|"/g}},punctuation:/\/?&gt;/g,"attr-name":{pattern:/[\w:-]+/g,inside:{namespace:/^[\w-]+?:/}}}},entity:/&amp;#?[\da-z]{1,8};/gi},Prism.hooks.add("wrap",function(a){a.type==="entity"&&(a.attributes.title=a.content.replace(/&amp;/,"&"))}),Prism.languages.css={comment:/\/\*[\w\W]*?\*\//g,atrule:/@[\w-]+?(\s+[^;{]+)?(?=\s*{|\s*;)/gi,url:/url\((["']?).*?\1\)/gi,selector:/[^\{\}\s][^\{\}]*(?=\s*\{)/g,property:/(\b|\B)[a-z-]+(?=\s*:)/ig,string:/("|')(\\?.)*?\1/g,important:/\B!important\b/gi,ignore:/&(lt|gt|amp);/gi,punctuation:/[\{\};:]/g},Prism.languages.markup&&Prism.languages.insertBefore("markup","tag",{style:{pattern:/(&lt;|<)style[\w\W]*?(>|&gt;)[\w\W]*?(&lt;|<)\/style(>|&gt;)/ig,inside:{tag:{pattern:/(&lt;|<)style[\w\W]*?(>|&gt;)|(&lt;|<)\/style(>|&gt;)/ig,inside:Prism.languages.markup.tag.inside},rest:Prism.languages.css}}}),Prism.languages.clike={comment:{pattern:/(^|[^\\])(\/\*[\w\W]*?\*\/|\/\/.*?(\r?\n|$))/g,lookbehind:!0},string:/("|')(\\?.)*?\1/g,keyword:/\b(if|else|while|do|for|return|in|instanceof|function|new|try|catch|finally|null|break|continue)\b/g,"boolean":/\b(true|false)\b/g,number:/\b-?(0x)?\d*\.?[\da-f]+\b/g,operator:/[-+]{1,2}|!|=?&lt;|=?&gt;|={1,2}|(&amp;){1,2}|\|?\||\?|\*|\//g,ignore:/&(lt|gt|amp);/gi,punctuation:/[{}[\];(),.:]/g},Prism.languages.javascript=Prism.languages.extend("clike",{keyword:/\b(var|let|if|else|while|do|for|return|in|instanceof|function|new|with|typeof|try|catch|finally|null|break|continue)\b/g,number:/\b(-?(0x)?\d*\.?[\da-f]+|NaN|-?Infinity)\b/g}),Prism.languages.insertBefore("javascript","keyword",{regex:{pattern:/(^|[^/])\/(?!\/)(\[.+?]|\\.|[^/\r\n])+\/[gim]{0,3}(?=\s*($|[\r\n,.;})]))/g,lookbehind:!0}}),Prism.languages.markup&&Prism.languages.insertBefore("markup","tag",{script:{pattern:/(&lt;|<)script[\w\W]*?(>|&gt;)[\w\W]*?(&lt;|<)\/script(>|&gt;)/ig,inside:{tag:{pattern:/(&lt;|<)script[\w\W]*?(>|&gt;)|(&lt;|<)\/script(>|&gt;)/ig,inside:Prism.languages.markup.tag.inside},rest:Prism.languages.javascript}}});
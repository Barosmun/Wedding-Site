var app=function(){"use strict";function t(){}function n(t){return t()}function e(){return Object.create(null)}function o(t){t.forEach(n)}function r(t){return"function"==typeof t}function c(t,n){return t!=t?n==n:t!==n||t&&"object"==typeof t||"function"==typeof t}function u(t,n){t.appendChild(n)}function s(t){t.parentNode.removeChild(t)}function a(t){return document.createElement(t)}function i(t){return document.createTextNode(t)}function l(){return i(" ")}function f(t,n,e){null==e?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}let d;function p(t){d=t}const h=[],$=[],m=[],g=[],b=Promise.resolve();let y=!1;function _(t){m.push(t)}const x=new Set;let v=0;function k(){const t=d;do{for(;v<h.length;){const t=h[v];v++,p(t),w(t.$$)}for(p(null),h.length=0,v=0;$.length;)$.pop()();for(let t=0;t<m.length;t+=1){const n=m[t];x.has(n)||(x.add(n),n())}m.length=0}while(h.length);for(;g.length;)g.pop()();y=!1,x.clear(),p(t)}function w(t){if(null!==t.fragment){t.update(),o(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(_)}}const E=new Set;function j(t,n){-1===t.$$.dirty[0]&&(h.push(t),y||(y=!0,b.then(k)),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function A(c,u,a,i,l,f,h,$=[-1]){const m=d;p(c);const g=c.$$={fragment:null,ctx:null,props:f,update:t,not_equal:l,bound:e(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(u.context||(m?m.$$.context:[])),callbacks:e(),dirty:$,skip_bound:!1,root:u.target||m.$$.root};h&&h(g.root);let b=!1;if(g.ctx=a?a(c,u.props||{},((t,n,...e)=>{const o=e.length?e[0]:n;return g.ctx&&l(g.ctx[t],g.ctx[t]=o)&&(!g.skip_bound&&g.bound[t]&&g.bound[t](o),b&&j(c,t)),n})):[],g.update(),b=!0,o(g.before_update),g.fragment=!!i&&i(g.ctx),u.target){if(u.hydrate){const t=function(t){return Array.from(t.childNodes)}(u.target);g.fragment&&g.fragment.l(t),t.forEach(s)}else g.fragment&&g.fragment.c();u.intro&&((y=c.$$.fragment)&&y.i&&(E.delete(y),y.i(x))),function(t,e,c,u){const{fragment:s,on_mount:a,on_destroy:i,after_update:l}=t.$$;s&&s.m(e,c),u||_((()=>{const e=a.map(n).filter(r);i?i.push(...e):o(e),t.$$.on_mount=[]})),l.forEach(_)}(c,u.target,u.anchor,u.customElement),k()}var y,x;p(m)}function S(n){let e,o,r,c,d,p,h,$,m;return{c(){e=a("main"),o=a("h1"),r=i("Hello "),c=i(n[0]),d=i("!"),p=l(),h=a("p"),h.innerHTML='Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn how to build Svelte apps.',$=l(),m=a("p"),m.textContent="this is a test",f(o,"class","svelte-1tky8bj"),f(e,"class","svelte-1tky8bj")},m(t,n){!function(t,n,e){t.insertBefore(n,e||null)}(t,e,n),u(e,o),u(o,r),u(o,c),u(o,d),u(e,p),u(e,h),u(e,$),u(e,m)},p(t,[n]){1&n&&function(t,n){n=""+n,t.wholeText!==n&&(t.data=n)}(c,t[0])},i:t,o:t,d(t){t&&s(e)}}}function C(t,n,e){let{name:o}=n;return t.$$set=t=>{"name"in t&&e(0,o=t.name)},[o]}return new class extends class{$destroy(){!function(t,n){const e=t.$$;null!==e.fragment&&(o(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}(this,1),this.$destroy=t}$on(t,n){const e=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return e.push(n),()=>{const t=e.indexOf(n);-1!==t&&e.splice(t,1)}}$set(t){var n;this.$$set&&(n=t,0!==Object.keys(n).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}{constructor(t){super(),A(this,t,C,S,c,{name:0})}}({target:document.body,props:{name:"world"}})}();
//# sourceMappingURL=bundle.js.map

import{S as fe,i as ue,s as Y,e as re,b as H,T as W,h as d,J as de,k as p,a as M,q as F,l as v,m as g,c as k,r as G,U as X,n as _,W as le,E as l,u as Z,Q as me,g as z,f as pe,d as K,X as ve,y as _e,z as ge,A as be,B as we,v as ye}from"../chunks/index.e8edb9a4.js";function oe(r){let t,a=r[0].content+"",e;return{c(){t=p("section"),e=F(a),this.h()},l(s){t=v(s,"SECTION",{class:!0});var o=g(t);e=G(o,a),o.forEach(d),this.h()},h(){_(t,"class","p-4")},m(s,o){H(s,t,o),l(t,e)},p(s,o){o&1&&a!==(a=s[0].content+"")&&Z(e,a)},d(s){s&&d(t)}}}function ne(r){let t,a=r[0].footer+"",e;return{c(){t=p("footer"),e=F(a),this.h()},l(s){t=v(s,"FOOTER",{class:!0});var o=g(t);e=G(o,a),o.forEach(d),this.h()},h(){_(t,"class","card-footer")},m(s,o){H(s,t,o),l(t,e)},p(s,o){o&1&&a!==(a=s[0].footer+"")&&Z(e,a)},d(s){s&&d(t)}}}function Q(r){let t,a,e,s,o,w,N,C,y,P=r[0].title+"",I,E,T,A,u=r[0].content&&oe(r),m=r[0].footer&&ne(r),S=[{class:"card card-hover"},{href:A=r[0].href}],D={};for(let n=0;n<S.length;n+=1)D=de(D,S[n]);return{c(){t=p(r[0].href?"a":"div"),a=p("div"),e=p("img"),N=M(),C=p("div"),y=p("span"),I=F(P),E=M(),u&&u.c(),T=M(),m&&m.c(),this.h()},l(n){t=v(n,((r[0].href?"a":"div")||"null").toUpperCase(),{class:!0,href:!0});var h=g(t);a=v(h,"DIV",{});var j=g(a);e=v(j,"IMG",{src:!0,alt:!0,class:!0}),j.forEach(d),N=k(h),C=v(h,"DIV",{class:!0});var R=g(C);y=v(R,"SPAN",{});var B=g(y);I=G(B,P),B.forEach(d),R.forEach(d),E=k(h),u&&u.l(h),T=k(h),m&&m.l(h),h.forEach(d),this.h()},h(){X(e.src,s=r[0].src)||_(e,"src",s),_(e,"alt",o=r[0].title),_(e,"class",w="w-96 h-48 overflow-hidden "+(r[0].srcCover?"object-cover":"object-contain")+" object-"+(r[0].placement??(r[0].srcCover?"top":"centre"))),_(C,"class","p-1 bg-secondary-100-800-token"),le(r[0].href?"a":"div")(t,D)},m(n,h){H(n,t,h),l(t,a),l(a,e),l(t,N),l(t,C),l(C,y),l(y,I),l(t,E),u&&u.m(t,null),l(t,T),m&&m.m(t,null)},p(n,h){h&1&&!X(e.src,s=n[0].src)&&_(e,"src",s),h&1&&o!==(o=n[0].title)&&_(e,"alt",o),h&1&&w!==(w="w-96 h-48 overflow-hidden "+(n[0].srcCover?"object-cover":"object-contain")+" object-"+(n[0].placement??(n[0].srcCover?"top":"centre")))&&_(e,"class",w),h&1&&P!==(P=n[0].title+"")&&Z(I,P),n[0].content?u?u.p(n,h):(u=oe(n),u.c(),u.m(t,T)):u&&(u.d(1),u=null),n[0].footer?m?m.p(n,h):(m=ne(n),m.c(),m.m(t,null)):m&&(m.d(1),m=null),le(n[0].href?"a":"div")(t,D=me(S,[{class:"card card-hover"},h&1&&A!==(A=n[0].href)&&{href:A}]))},d(n){n&&d(t),u&&u.d(),m&&m.d()}}}function Ve(r){let t=r[0].href?"a":"div",a,e=(r[0].href?"a":"div")&&Q(r);return{c(){e&&e.c(),a=re()},l(s){e&&e.l(s),a=re()},m(s,o){e&&e.m(s,o),H(s,a,o)},p(s,[o]){s[0].href,t?Y(t,s[0].href?"a":"div")?(e.d(1),e=Q(s),t=s[0].href?"a":"div",e.c(),e.m(a.parentNode,a)):e.p(s,o):(e=Q(s),t=s[0].href?"a":"div",e.c(),e.m(a.parentNode,a))},i:W,o:W,d(s){s&&d(a),e&&e.d(s)}}}function Ce(r,t,a){let{option:e}=t;return r.$$set=s=>{"option"in s&&a(0,e=s.option)},[e]}class Ee extends fe{constructor(t){super(),ue(this,t,Ce,Ve,Y,{option:0})}}function ie(r,t,a){const e=r.slice();return e[2]=t[a],e}function ce(r){let t,a;return t=new Ee({props:{option:r[2]}}),{c(){_e(t.$$.fragment)},l(e){ge(t.$$.fragment,e)},m(e,s){be(t,e,s),a=!0},p:W,i(e){a||(z(t.$$.fragment,e),a=!0)},o(e){K(t.$$.fragment,e),a=!1},d(e){we(t,e)}}}function Pe(r){let t,a,e,s,o,w,N,C,y,P,I,E,T,A,u,m,S,D,n,h,j,R,B,$,L,x=r[0].sort(r[1]),c=[];for(let f=0;f<x.length;f+=1)c[f]=ce(ie(r,x,f));const he=f=>K(c[f],1,1,()=>{c[f]=null});return{c(){t=p("div"),a=p("div"),e=p("div"),s=p("header"),o=p("div"),w=p("img"),C=M(),y=p("h1"),P=F("Vauxs"),I=M(),E=p("i"),T=F("Also known as MrVauxs, ThatVauxs, etc."),A=M(),u=p("span"),m=p("p"),S=F(`
				A Polish Robot or Goblin, depending on the mood. Hobbyist Programmer and Content Creator. Loves
				TTRPGs, art, and music.`),D=M(),n=p("hr"),h=M(),j=p("span"),R=F("Some of the stuff I made:"),B=M(),$=p("div");for(let f=0;f<c.length;f+=1)c[f].c();this.h()},l(f){t=v(f,"DIV",{class:!0});var b=g(t);a=v(b,"DIV",{class:!0});var i=g(a);e=v(i,"DIV",{});var V=g(e);s=v(V,"HEADER",{class:!0});var q=g(s);o=v(q,"DIV",{});var O=g(o);w=v(O,"IMG",{class:!0,src:!0,alt:!0}),C=k(O),y=v(O,"H1",{class:!0});var ee=g(y);P=G(ee,"Vauxs"),ee.forEach(d),O.forEach(d),I=k(q),E=v(q,"I",{class:!0});var te=g(E);T=G(te,"Also known as MrVauxs, ThatVauxs, etc."),te.forEach(d),q.forEach(d),A=k(V),u=v(V,"SPAN",{});var U=g(u);m=v(U,"P",{}),g(m).forEach(d),S=G(U,`
				A Polish Robot or Goblin, depending on the mood. Hobbyist Programmer and Content Creator. Loves
				TTRPGs, art, and music.`),U.forEach(d),D=k(V),n=v(V,"HR",{class:!0}),h=k(V),j=v(V,"SPAN",{});var se=g(j);R=G(se,"Some of the stuff I made:"),se.forEach(d),V.forEach(d),B=k(i),$=v(i,"DIV",{class:!0});var ae=g($);for(let J=0;J<c.length;J+=1)c[J].l(ae);ae.forEach(d),i.forEach(d),b.forEach(d),this.h()},h(){_(w,"class","inline-flex pixels w-8 h-8 mx-3 scale-150 align-baseline"),X(w.src,N="robot.gif")||_(w,"src",N),_(w,"alt","Vauxs Robot GIF"),_(y,"class","inline-flex h1 gradient-heading svelte-wv2he3"),_(E,"class","text-xs"),_(s,"class","pb-1 pt-6"),_(n,"class","my-2"),_($,"class","gap-1.5 grid sm:grid-cols-2 md:grid-cols-4"),_(a,"class","space-y-3 text-center flex flex-col items-center"),_(t,"class","container h-full mx-auto flex justify-center items-center")},m(f,b){H(f,t,b),l(t,a),l(a,e),l(e,s),l(s,o),l(o,w),l(o,C),l(o,y),l(y,P),l(s,I),l(s,E),l(E,T),l(e,A),l(e,u),l(u,m),l(u,S),l(e,D),l(e,n),l(e,h),l(e,j),l(j,R),l(a,B),l(a,$);for(let i=0;i<c.length;i+=1)c[i]&&c[i].m($,null);L=!0},p(f,[b]){if(b&1){x=f[0].sort(f[1]);let i;for(i=0;i<x.length;i+=1){const V=ie(f,x,i);c[i]?(c[i].p(V,b),z(c[i],1)):(c[i]=ce(V),c[i].c(),z(c[i],1),c[i].m($,null))}for(ye(),i=x.length;i<c.length;i+=1)he(i);pe()}},i(f){if(!L){for(let b=0;b<x.length;b+=1)z(c[b]);L=!0}},o(f){c=c.filter(Boolean);for(let b=0;b<c.length;b+=1)K(c[b]);L=!1},d(f){f&&d(t),ve(c,f)}}}function Me(r){return[[{title:"PF2e Target Damage",href:"https://github.com/MrVauxs/PF2e-Target-Damage",src:"https://github.com/MrVauxs/PF2e-Target-Damage/raw/master/assets/setup.webp",srcCover:!0,default:!1},{title:"PF2e Magaambya",href:"https://github.com/MrVauxs/pf2e-magaambya",src:"fvtt-cc-text-sm.png",srcCover:!1,default:!0},{title:"PF2eTools",href:"https://pf2etools.com/",src:"https://repository-images.githubusercontent.com/261793667/a354346c-f84c-41a4-a5db-477345127dab",srcCover:!0,default:!1},{title:"Foundry Summons",href:"https://github.com/MrVauxs/foundry-summons",src:"https://github.com/MrVauxs/foundry-summons/raw/main/assets/setup.webp",srcCover:!0,default:!1,placement:"centre"},{title:"PF2e Animations",href:"https://github.com/MrVauxs/pf2e-jb2a-macros",src:"https://github.com/MrVauxs/pf2e-jb2a-macros/blob/master/preview.gif?raw=true",srcCover:!0,default:!1},{title:"D&D5e Animations",href:"https://github.com/MrVauxs/dnd5e-animations",src:"fvtt-cc-text-sm.png",srcCover:!1,default:!0},{title:"Speaking As",href:"https://github.com/MrVauxs/speaking-as",src:"fvtt-cc-text-sm.png",srcCover:!1,default:!0},{title:"Botanical Bestiary",href:"https://www.drivethrurpg.com/product/428111/The-Botanical-Bestiary-Foundry-Module",src:"https://static.wixstatic.com/media/6e5ee1_65ecfb847d3a44519f21986abc21759d~mv2.jpg/v1/fill/w_468,h_597,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/bb%20cover%20leshy%20final%20v2%20SMALL.jpg",srcCover:!0,default:!1},{title:"Loot Tavern Themed Item Packs",href:"https://loottavern.com/shop/?ixwpst[product_cat][]=47&ixwpst[product_cat][]=116&title=1&excerpt=1&content=1&categories=1&attributes=1&tags=1&sku=1&ixwpsf[taxonomy][product_cat][show]=all&ixwpsf[taxonomy][product_cat][multiple]=1&ixwpsf[taxonomy][product_cat][filter]=1",src:"https://foundryvtt.s3.us-west-2.amazonaws.com/website-media-dev/user_1/asset/loot-tavern-banner-2020-11-04.jpg",srcCover:!0,default:!1},{title:"Asian Monsters (5e)",href:"https://foundryvtt.com/packages/asian-monsters-5e",src:"https://i.imgur.com/GIS22O5.png",srcCover:!0,default:!1}],(e,s)=>Number(e.default)-Number(s.default)]}class Ie extends fe{constructor(t){super(),ue(this,t,Me,Pe,Y,{})}}export{Ie as component};

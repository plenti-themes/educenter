import{SvelteComponent,append_hydration,attr,children,claim_element,claim_space,claim_text,detach,element,init,insert_hydration,noop,safe_not_equal,set_data,space,src_url_equal,text}from"../../web_modules/svelte/internal/index.mjs";function create_fragment(e){let o,a,s,n,r,f,g,l,v,i,d=e[2].title+"",h,p,c,t,m,u;return{c(){o=element("section"),a=element("div"),s=element("div"),n=element("div"),r=element("h2"),f=text(e[0]),g=space(),l=element("p"),v=space(),i=element("a"),h=text(d),p=space(),c=element("div"),t=element("img"),this.h()},l(u){o=claim_element(u,"SECTION",{class:!0});var m,b,j,y,_,w,O,x=children(o);a=claim_element(x,"DIV",{class:!0}),y=children(a),s=claim_element(y,"DIV",{class:!0}),b=children(s),n=claim_element(b,"DIV",{class:!0}),m=children(n),r=claim_element(m,"H2",{class:!0}),_=children(r),f=claim_text(_,e[0]),_.forEach(detach),g=claim_space(m),l=claim_element(m,"P",{}),O=children(l),O.forEach(detach),v=claim_space(m),i=claim_element(m,"A",{href:!0,class:!0}),j=children(i),h=claim_text(j,d),j.forEach(detach),m.forEach(detach),p=claim_space(b),c=claim_element(b,"DIV",{class:!0}),w=children(c),t=claim_element(w,"IMG",{class:!0,src:!0,alt:!0}),w.forEach(detach),b.forEach(detach),y.forEach(detach),x.forEach(detach),this.h()},h(){attr(r,"class","section-title"),attr(i,"href","aboutus"),attr(i,"class","btn btn-outline-primary"),attr(n,"class","col-md-6 order-2 order-md-1"),attr(t,"class","img-fluid w-100"),src_url_equal(t.src,m=e[3].url)||attr(t,"src",m),attr(t,"alt",u=e[3].alt),attr(c,"class","col-md-6 order-1 order-md-2 mb-4 mb-md-0"),attr(s,"class","row align-items-center"),attr(a,"class","container"),attr(o,"class","section")},m(d,u){insert_hydration(d,o,u),append_hydration(o,a),append_hydration(a,s),append_hydration(s,n),append_hydration(n,r),append_hydration(r,f),append_hydration(n,g),append_hydration(n,l),l.innerHTML=e[1],append_hydration(n,v),append_hydration(n,i),append_hydration(i,h),append_hydration(s,p),append_hydration(s,c),append_hydration(c,t)},p(e,[n]){n&1&&set_data(f,e[0]),n&2&&(l.innerHTML=e[1]),n&4&&d!==(d=e[2].title+"")&&set_data(h,d),n&8&&!src_url_equal(t.src,m=e[3].url)&&attr(t,"src",m),n&8&&u!==(u=e[3].alt)&&attr(t,"alt",u)},i:noop,o:noop,d(e){e&&detach(o)}}}function instance(e,t,n){let{title:s,description:o,link:i,image:a}=t;return e.$$set=e=>{"title"in e&&n(0,s=e.title),"description"in e&&n(1,o=e.description),"link"in e&&n(2,i=e.link),"image"in e&&n(3,a=e.image)},[s,o,i,a]}class Component extends SvelteComponent{constructor(e){super(),init(this,e,instance,create_fragment,safe_not_equal,{title:0,description:1,link:2,image:3})}}export default Component
import{SvelteComponent,append_hydration,attr,children,claim_element,claim_space,claim_text,detach,element,init,insert_hydration,noop,safe_not_equal,set_data,space,src_url_equal,text}from"../../web_modules/svelte/internal/index.mjs";function create_fragment(e){let s,o,i,t,n,d,c,u,r,l,h,a;return{c(){s=element("section"),o=element("div"),i=element("div"),t=element("div"),n=element("img"),u=space(),r=element("h2"),l=text(e[0]),h=space(),a=element("p"),this.h()},l(c){s=claim_element(c,"SECTION",{class:!0});var d,m,f,p,v,g=children(s);o=claim_element(g,"DIV",{class:!0}),m=children(o),i=claim_element(m,"DIV",{class:!0}),f=children(i),t=claim_element(f,"DIV",{class:!0}),d=children(t),n=claim_element(d,"IMG",{class:!0,src:!0,alt:!0}),u=claim_space(d),r=claim_element(d,"H2",{id:!0}),p=children(r),l=claim_text(p,e[0]),p.forEach(detach),h=claim_space(d),a=claim_element(d,"P",{}),v=children(a),v.forEach(detach),d.forEach(detach),f.forEach(detach),m.forEach(detach),g.forEach(detach),this.h()},h(){attr(n,"class","img-fluid w-100 mb-4"),src_url_equal(n.src,d=e[2].url)||attr(n,"src",d),attr(n,"alt",c=e[2].alt),attr(r,"id","about-our-journy"),attr(t,"class","col-12"),attr(i,"class","row"),attr(o,"class","container"),attr(s,"class","section")},m(c,d){insert_hydration(c,s,d),append_hydration(s,o),append_hydration(o,i),append_hydration(i,t),append_hydration(t,n),append_hydration(t,u),append_hydration(t,r),append_hydration(r,l),append_hydration(t,h),append_hydration(t,a),a.innerHTML=e[1]},p(e,[t]){t&4&&!src_url_equal(n.src,d=e[2].url)&&attr(n,"src",d),t&4&&c!==(c=e[2].alt)&&attr(n,"alt",c),t&1&&set_data(l,e[0]),t&2&&(a.innerHTML=e[1])},i:noop,o:noop,d(e){e&&detach(s)}}}function instance(e,t,n){let{title:s,description:o,image:i}=t;return e.$$set=e=>{"title"in e&&n(0,s=e.title),"description"in e&&n(1,o=e.description),"image"in e&&n(2,i=e.image)},[s,o,i]}class Component extends SvelteComponent{constructor(e){super(),init(this,e,instance,create_fragment,safe_not_equal,{title:0,description:1,image:2})}}export default Component
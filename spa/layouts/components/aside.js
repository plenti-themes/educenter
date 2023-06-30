import{SvelteComponent,append_hydration,attr,children,claim_component,claim_element,claim_space,claim_text,create_component,destroy_component,destroy_each,detach,element,init,insert_hydration,mount_component,safe_not_equal,set_data,space,text,transition_in,transition_out}from"../../web_modules/svelte/internal/index.mjs";import LatestArticles from"../components/latest_articles.js";function get_each_context(e,t,n){const s=e.slice();return s[1]=t[n],s}function get_each_context_1(e,t,n){const s=e.slice();return s[4]=t[n],s}function create_each_block_1(e){let t,n,s=e[4].fields.name+"",o,i,r,a;return{c(){t=element("li"),n=element("a"),o=text(s),r=space(),this.h()},l(e){t=claim_element(e,"LI",{class:!0});var a,i=children(t);n=claim_element(i,"A",{href:!0,class:!0}),a=children(n),o=claim_text(a,s),a.forEach(detach),r=claim_space(i),i.forEach(detach),this.h()},h(){attr(n,"href",i=e[4].path),attr(n,"class","d-block pb-3 mt-3"),attr(t,"class",a="border-bottom "+(e[4]?e[4].fields.name:""))},m(e,s){insert_hydration(e,t,s),append_hydration(t,n),append_hydration(n,o),append_hydration(t,r)},p(e,r){r&1&&s!==(s=e[4].fields.name+"")&&set_data(o,s),r&1&&i!==(i=e[4].path)&&attr(n,"href",i),r&1&&a!==(a="border-bottom "+(e[4]?e[4].fields.name:""))&&attr(t,"class",a)},d(e){e&&detach(t)}}}function create_each_block(e){let t,n,s=e[1].fields.name+"",o,i,r,a;return{c(){t=element("li"),n=element("a"),o=text(s),r=space(),this.h()},l(e){t=claim_element(e,"LI",{class:!0});var a,i=children(t);n=claim_element(i,"A",{href:!0}),a=children(n),o=claim_text(a,s),a.forEach(detach),r=claim_space(i),i.forEach(detach),this.h()},h(){attr(n,"href",i=e[1].path),attr(t,"class",a="list-inline-item mb-2 "+(e[1]?e[1].fields.name:""))},m(e,s){insert_hydration(e,t,s),append_hydration(t,n),append_hydration(n,o),append_hydration(t,r)},p(e,r){r&1&&s!==(s=e[1].fields.name+"")&&set_data(o,s),r&1&&i!==(i=e[1].path)&&attr(n,"href",i),r&1&&a!==(a="list-inline-item mb-2 "+(e[1]?e[1].fields.name:""))&&attr(t,"class",a)},d(e){e&&detach(t)}}}function create_fragment(e){let s,i,u,f,b,r,v,a,d,j,g,c,p,o,m,h=Object(e[0].filter(func)),n=[];for(let t=0;t<h.length;t+=1)n[t]=create_each_block_1(get_each_context_1(e,h,t));let l=Object(e[0].filter(func_1)),t=[];for(let n=0;n<l.length;n+=1)t[n]=create_each_block(get_each_context(e,l,n));return o=new LatestArticles({props:{allContent:e[0]}}),{c(){s=element("aside"),i=element("div"),u=element("h4"),f=text("Categories"),b=space(),r=element("ul");for(let e=0;e<n.length;e+=1)n[e].c();v=space(),a=element("div"),d=element("h4"),j=text("Tags"),g=space(),c=element("ul");for(let e=0;e<t.length;e+=1)t[e].c();p=space(),create_component(o.$$.fragment),this.h()},l(e){s=claim_element(e,"ASIDE",{class:!0});var h,m,y,_,w,O,l=children(s);i=claim_element(l,"DIV",{class:!0}),h=children(i),u=claim_element(h,"H4",{class:!0}),y=children(u),f=claim_text(y,"Categories"),y.forEach(detach),b=claim_space(h),r=claim_element(h,"UL",{class:!0}),_=children(r);for(let e=0;e<n.length;e+=1)n[e].l(_);_.forEach(detach),h.forEach(detach),v=claim_space(l),a=claim_element(l,"DIV",{class:!0}),m=children(a),d=claim_element(m,"H4",{class:!0}),w=children(d),j=claim_text(w,"Tags"),w.forEach(detach),g=claim_space(m),c=claim_element(m,"UL",{class:!0}),O=children(c);for(let e=0;e<t.length;e+=1)t[e].l(O);O.forEach(detach),m.forEach(detach),p=claim_space(l),claim_component(o.$$.fragment,l),l.forEach(detach),this.h()},h(){attr(u,"class","mb-4"),attr(r,"class","list-unstyled"),attr(i,"class","bg-white mb-5"),attr(d,"class","mb-4"),attr(c,"class","list-inline tag-list"),attr(a,"class","bg-white mb-5"),attr(s,"class","col-lg-4 order-1 order-lg-2")},m(e,l){insert_hydration(e,s,l),append_hydration(s,i),append_hydration(i,u),append_hydration(u,f),append_hydration(i,b),append_hydration(i,r);for(let e=0;e<n.length;e+=1)n[e]&&n[e].m(r,null);append_hydration(s,v),append_hydration(s,a),append_hydration(a,d),append_hydration(d,j),append_hydration(a,g),append_hydration(a,c);for(let e=0;e<t.length;e+=1)t[e]&&t[e].m(c,null);append_hydration(s,p),mount_component(o,s,null),m=!0},p(e,[s]){if(s&1){h=Object(e[0].filter(func));let t;for(t=0;t<h.length;t+=1){const o=get_each_context_1(e,h,t);n[t]?n[t].p(o,s):(n[t]=create_each_block_1(o),n[t].c(),n[t].m(r,null))}for(;t<n.length;t+=1)n[t].d(1);n.length=h.length}if(s&1){l=Object(e[0].filter(func_1));let n;for(n=0;n<l.length;n+=1){const o=get_each_context(e,l,n);t[n]?t[n].p(o,s):(t[n]=create_each_block(o),t[n].c(),t[n].m(c,null))}for(;n<t.length;n+=1)t[n].d(1);t.length=l.length}const i={};s&1&&(i.allContent=e[0]),o.$set(i)},i(e){if(m)return;transition_in(o.$$.fragment,e),m=!0},o(e){transition_out(o.$$.fragment,e),m=!1},d(e){e&&detach(s),destroy_each(n,e),destroy_each(t,e),destroy_component(o)}}}const func=e=>e.type=="blog_catgs",func_1=e=>e.type=="blog_tags";function instance(e,t,n){let{allContent:s}=t;return e.$$set=e=>{"allContent"in e&&n(0,s=e.allContent)},[s]}class Component extends SvelteComponent{constructor(e){super(),init(this,e,instance,create_fragment,safe_not_equal,{allContent:0})}}export default Component
import{SvelteComponent,add_render_callback,append_hydration,attr,children,claim_element,claim_space,claim_text,create_in_transition,destroy_each,detach,element,empty,init,insert_hydration,listen,noop,run_all,safe_not_equal,set_data,set_style,space,text,transition_in}from"../../web_modules/svelte/internal/index.mjs";import{fly}from"../../web_modules/svelte/transition/index.mjs";function get_each_context(e,t,n){const s=e.slice();return s[6]=t[n],s[8]=n,s}function get_each_context_1(e,t,n){const s=e.slice();return s[6]=t[n],s[8]=n,s}function create_if_block(e){let n,i=e[6].title+"",h,f,c,s,o=e[6].body+"",r,m,d,t,a=e[6].link.title+"",l,u,p;return{c(){n=element("h1"),h=text(i),c=space(),s=element("p"),r=text(o),d=space(),t=element("a"),l=text(a),this.h()},l(e){n=claim_element(e,"H1",{class:!0});var u,m,f=children(n);h=claim_text(f,i),f.forEach(detach),c=claim_space(e),s=claim_element(e,"P",{class:!0}),u=children(s),r=claim_text(u,o),u.forEach(detach),d=claim_space(e),t=claim_element(e,"A",{href:!0,class:!0}),m=children(t),l=claim_text(m,a),m.forEach(detach),this.h()},h(){attr(n,"class","text-white"),attr(s,"class","text-muted mb-4"),attr(t,"href",u=e[6].link.url),attr(t,"class","btn btn-primary")},m(e,o){insert_hydration(e,n,o),append_hydration(n,h),insert_hydration(e,c,o),insert_hydration(e,s,o),append_hydration(s,r),insert_hydration(e,d,o),insert_hydration(e,t,o),append_hydration(t,l)},p(e,n){n&1&&i!==(i=e[6].title+"")&&set_data(h,i),n&1&&o!==(o=e[6].body+"")&&set_data(r,o),n&1&&a!==(a=e[6].link.title+"")&&set_data(l,a),n&1&&u!==(u=e[6].link.url)&&attr(t,"href",u)},i(e){e&&(f||add_render_callback(()=>{f=create_in_transition(n,fly,{x:-200,delay:250}),f.start()})),e&&(m||add_render_callback(()=>{m=create_in_transition(s,fly,{x:-200,delay:750}),m.start()})),e&&(p||add_render_callback(()=>{p=create_in_transition(t,fly,{x:-200,delay:1250}),p.start()}))},o:noop,d(e){e&&detach(n),e&&detach(c),e&&detach(s),e&&detach(d),e&&detach(t)}}}function create_each_block_1(e){let n,t=e[8]===e[2]&&create_if_block(e);return{c(){t&&t.c(),n=empty()},l(e){t&&t.l(e),n=empty()},m(e,s){t&&t.m(e,s),insert_hydration(e,n,s)},p(e,s){e[8]===e[2]?t?(t.p(e,s),s&4&&transition_in(t,1)):(t=create_if_block(e),t.c(),transition_in(t,1),t.m(n.parentNode,n)):t&&(t.d(1),t=null)},d(e){t&&t.d(e),e&&detach(n)}}}function create_each_block(e){let t,n,s,o;function i(){return e[5](e[8])}return{c(){t=element("div"),this.h()},l(e){t=claim_element(e,"DIV",{class:!0});var n=children(t);n.forEach(detach),this.h()},h(){attr(t,"class",n="dot"+(e[8]===e[2]?" active":"")+" svelte-mnx9r1")},m(e,n){insert_hydration(e,t,n),s||(o=listen(t,"click",i),s=!0)},p(s,o){e=s,o&4&&n!==(n="dot"+(e[8]===e[2]?" active":"")+" svelte-mnx9r1")&&attr(t,"class",n)},d(e){e&&detach(t),s=!1,o()}}}function create_fragment(e){let s,h,u,o,p,c,v,i,a,f,j,r,m,g,b,y,l=e[0],n=[];for(let t=0;t<l.length;t+=1)n[t]=create_each_block_1(get_each_context_1(e,l,t));let d=e[0],t=[];for(let n=0;n<d.length;n+=1)t[n]=create_each_block(get_each_context(e,d,n));return{c(){s=element("section"),h=element("div"),u=element("div"),o=element("div");for(let e=0;e<n.length;e+=1)n[e].c();p=space(),c=element("div");for(let e=0;e<t.length;e+=1)t[e].c();v=space(),i=element("div"),a=element("button"),f=element("i"),j=space(),r=element("button"),m=element("i"),this.h()},l(e){s=claim_element(e,"SECTION",{class:!0,"data-background":!0,alt:!0,style:!0});var l,d,g,b,y,_,w,O=children(s);h=claim_element(O,"DIV",{class:!0}),b=children(h),u=claim_element(b,"DIV",{class:!0}),y=children(u),o=claim_element(y,"DIV",{class:!0}),l=children(o);for(let e=0;e<n.length;e+=1)n[e].l(l);p=claim_space(l),c=claim_element(l,"DIV",{class:!0}),_=children(c);for(let e=0;e<t.length;e+=1)t[e].l(_);_.forEach(detach),v=claim_space(l),i=claim_element(l,"DIV",{class:!0}),d=children(i),a=claim_element(d,"BUTTON",{type:!0,class:!0}),g=children(a),f=claim_element(g,"I",{class:!0}),children(f).forEach(detach),g.forEach(detach),j=claim_space(d),r=claim_element(d,"BUTTON",{type:!0,class:!0}),w=children(r),m=claim_element(w,"I",{class:!0}),children(m).forEach(detach),w.forEach(detach),d.forEach(detach),l.forEach(detach),y.forEach(detach),b.forEach(detach),O.forEach(detach),this.h()},h(){attr(c,"class","controls svelte-mnx9r1"),attr(f,"class","ti-angle-left"),attr(a,"type","button"),attr(a,"class","prevArrow slick-arrow"),attr(m,"class","ti-angle-right"),attr(r,"type","button"),attr(r,"class","nextArrow slick-arrow"),attr(i,"class","arrows"),attr(o,"class","col-md-8"),attr(u,"class","hero-slider"),attr(h,"class","container"),attr(s,"class","hero-section overlay bg-cover"),attr(s,"data-background",g=e[1].url),attr(s,"alt","A group of students looking at their lesson"),set_style(s,"background-image","url("+e[1].url+")")},m(l,d){insert_hydration(l,s,d),append_hydration(s,h),append_hydration(h,u),append_hydration(u,o);for(let e=0;e<n.length;e+=1)n[e]&&n[e].m(o,null);append_hydration(o,p),append_hydration(o,c);for(let e=0;e<t.length;e+=1)t[e]&&t[e].m(c,null);append_hydration(o,v),append_hydration(o,i),append_hydration(i,a),append_hydration(a,f),append_hydration(i,j),append_hydration(i,r),append_hydration(r,m),b||(y=[listen(a,"click",e[3]),listen(r,"click",e[4])],b=!0)},p(e,[i]){if(i&5){l=e[0];let t;for(t=0;t<l.length;t+=1){const s=get_each_context_1(e,l,t);n[t]?n[t].p(s,i):(n[t]=create_each_block_1(s),n[t].c(),n[t].m(o,p))}for(;t<n.length;t+=1)n[t].d(1);n.length=l.length}if(i&5){d=e[0];let n;for(n=0;n<d.length;n+=1){const s=get_each_context(e,d,n);t[n]?t[n].p(s,i):(t[n]=create_each_block(s),t[n].c(),t[n].m(c,null))}for(;n<t.length;n+=1)t[n].d(1);t.length=d.length}i&2&&g!==(g=e[1].url)&&attr(s,"data-background",g),i&2&&set_style(s,"background-image","url("+e[1].url+")")},i:noop,o:noop,d(e){e&&detach(s),destroy_each(n,e),destroy_each(t,e),b=!1,run_all(y)}}}function instance(e,t,n){let{items:o,image:i}=t,s=0;function a(){n(2,s=(s-1+o.length)%o.length)}function r(){n(2,s=(s+1)%o.length)}const c=e=>n(2,s=e);return e.$$set=e=>{"items"in e&&n(0,o=e.items),"image"in e&&n(1,i=e.image)},[o,i,s,a,r,c]}class Component extends SvelteComponent{constructor(e){super(),init(this,e,instance,create_fragment,safe_not_equal,{items:0,image:1})}}export default Component
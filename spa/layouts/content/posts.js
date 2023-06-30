import{SvelteComponent,append_hydration,attr,children,claim_component,claim_element,claim_space,claim_text,create_component,destroy_component,detach,element,init,insert_hydration,mount_component,safe_not_equal,set_data,set_style,space,src_url_equal,text,transition_in,transition_out}from"../../web_modules/svelte/internal/index.mjs";import LatestArticles from"../components/latest_articles.js";import Aside from"../components/aside.js";function create_fragment(e){let a,C,z,l,i,T,f,de,ie,F,N,ce,A,K,ae,_,B,G,p,y,d,w,n,x,o,$,V,oe,S,s,m,b,X,g,L=e[3].name+"",I,H,se,u,E,ne,te,R=e[4].date+"",W,J,h,O,Z,Q,v,P=e[8]?.fields.name+"",Y,U,ee,k,D,ue,r,j,q,re,M,le,c,t;return c=new Aside({props:{allContent:e[7]}}),{c(){a=element("section"),C=element("div"),z=element("div"),l=element("div"),i=element("ul"),T=element("li"),f=element("a"),de=text("Home"),ie=space(),F=element("li"),N=element("i"),ce=space(),A=element("li"),K=text(e[0]),ae=space(),_=element("p"),B=text(e[6]),G=space(),p=element("section"),y=element("div"),d=element("div"),w=element("div"),n=element("div"),x=element("div"),o=element("img"),oe=space(),S=element("div"),s=element("ul"),m=element("li"),b=element("span"),X=text("Posted by :"),g=element("a"),I=text(L),se=space(),u=element("li"),E=element("span"),ne=text("Date :"),te=space(),W=text(R),J=space(),h=element("li"),O=element("span"),Z=text("Category :"),Q=space(),v=element("a"),Y=text(P),ee=space(),k=element("div"),D=element("div"),ue=space(),r=element("div"),j=element("h3"),q=text(e[0]),re=space(),M=element("p"),le=space(),create_component(c.$$.fragment),this.h()},l(t){a=claim_element(t,"SECTION",{class:!0,style:!0});var H,V,$,U,Le=children(a),Fe,Se,me,Ce,we,ye,ve,Ee,be,je,fe,_e,Oe,xe,ge,ke,Ae,he,Me,Te,ze,De,pe,Ne,Re;C=claim_element(Le,"DIV",{class:!0}),Fe=children(C),z=claim_element(Fe,"DIV",{class:!0}),Se=children(z),l=claim_element(Se,"DIV",{class:!0}),me=children(l),i=claim_element(me,"UL",{class:!0}),V=children(i),T=claim_element(V,"LI",{class:!0}),Ce=children(T),f=claim_element(Ce,"A",{class:!0,href:!0}),we=children(f),de=claim_text(we,"Home"),we.forEach(detach),Ce.forEach(detach),ie=claim_space(V),F=claim_element(V,"LI",{class:!0}),ye=children(F),N=claim_element(ye,"I",{class:!0}),children(N).forEach(detach),ye.forEach(detach),ce=claim_space(V),A=claim_element(V,"LI",{class:!0}),ve=children(A),K=claim_text(ve,e[0]),ve.forEach(detach),V.forEach(detach),ae=claim_space(me),_=claim_element(me,"P",{class:!0}),Ee=children(_),B=claim_text(Ee,e[6]),Ee.forEach(detach),me.forEach(detach),Se.forEach(detach),Fe.forEach(detach),Le.forEach(detach),G=claim_space(t),p=claim_element(t,"SECTION",{class:!0}),be=children(p),y=claim_element(be,"DIV",{class:!0}),je=children(y),d=claim_element(je,"DIV",{class:!0}),fe=children(d),w=claim_element(fe,"DIV",{class:!0}),_e=children(w),n=claim_element(_e,"DIV",{class:!0}),H=children(n),x=claim_element(H,"DIV",{class:!0}),Oe=children(x),o=claim_element(Oe,"IMG",{src:!0,alt:!0,class:!0}),Oe.forEach(detach),oe=claim_space(H),S=claim_element(H,"DIV",{class:!0}),xe=children(S),s=claim_element(xe,"UL",{class:!0}),$=children(s),m=claim_element($,"LI",{class:!0}),ge=children(m),b=claim_element(ge,"SPAN",{class:!0}),ke=children(b),X=claim_text(ke,"Posted by :"),ke.forEach(detach),g=claim_element(ge,"A",{href:!0}),Ae=children(g),I=claim_text(Ae,L),Ae.forEach(detach),ge.forEach(detach),se=claim_space($),u=claim_element($,"LI",{class:!0}),he=children(u),E=claim_element(he,"SPAN",{class:!0}),Me=children(E),ne=claim_text(Me,"Date :"),Me.forEach(detach),te=claim_space(he),W=claim_text(he,R),he.forEach(detach),J=claim_space($),h=claim_element($,"LI",{class:!0}),U=children(h),O=claim_element(U,"SPAN",{class:!0}),Te=children(O),Z=claim_text(Te,"Category :"),Te.forEach(detach),Q=claim_space(U),v=claim_element(U,"A",{href:!0}),ze=children(v),Y=claim_text(ze,P),ze.forEach(detach),U.forEach(detach),$.forEach(detach),xe.forEach(detach),ee=claim_space(H),k=claim_element(H,"DIV",{class:!0}),De=children(k),D=claim_element(De,"DIV",{class:!0}),children(D).forEach(detach),De.forEach(detach),ue=claim_space(H),r=claim_element(H,"DIV",{class:!0}),pe=children(r),j=claim_element(pe,"H3",{id:!0}),Ne=children(j),q=claim_text(Ne,e[0]),Ne.forEach(detach),re=claim_space(pe),M=claim_element(pe,"P",{}),Re=children(M),Re.forEach(detach),pe.forEach(detach),H.forEach(detach),_e.forEach(detach),le=claim_space(fe),claim_component(c.$$.fragment,fe),fe.forEach(detach),je.forEach(detach),be.forEach(detach),this.h()},h(){attr(f,"class","text-primary font-secondary"),attr(f,"href","/"),attr(T,"class","list-inline-item h2"),attr(N,"class","ti-angle-right text-white"),attr(F,"class","list-inline-item h5"),attr(A,"class","list-inline-item text-white h3 font-secondary"),attr(i,"class","list-inline custom-breadcrumb"),attr(_,"class","text-lighten"),attr(l,"class","col-md-8"),attr(z,"class","row svelte-ztr0f4"),attr(C,"class","container"),attr(a,"class","page-title-section overlay"),set_style(a,"background-image","url("+e[5].url+"),url("+e[5].url+")"),src_url_equal(o.src,$=e[2].source)||attr(o,"src",$),attr(o,"alt",V=e[2].alt),attr(o,"class","img-fluid w-100"),attr(x,"class","col-12 mb-4"),attr(b,"class","font-weight-bold mr-2 svelte-ztr0f4"),attr(g,"href",H=e[3].link),attr(m,"class","list-inline-item mr-4 mb-3 mb-md-0 text-light"),attr(E,"class","font-weight-bold mr-2 svelte-ztr0f4"),attr(u,"class","list-inline-item mr-4 mb-3 mb-md-0 text-light"),attr(O,"class","font-weight-bold mr-2 svelte-ztr0f4"),attr(v,"href",U=e[8]?.path),attr(h,"class","list-inline-item mr-4 mb-3 mb-md-0 text-light"),attr(s,"class","list-inline"),attr(S,"class","col-12"),attr(D,"class","border-bottom"),attr(k,"class","col-12 my-4"),attr(j,"id","the-standard-lorem-ipsum-passage-used-since-the-1500s"),attr(r,"class","col-12 mb-5"),attr(n,"class","row svelte-ztr0f4"),attr(w,"class","col-lg-8 order-2 order-lg-1"),attr(d,"class","row svelte-ztr0f4"),attr(y,"class","container"),attr(p,"class","section-sm")},m(L,R){insert_hydration(L,a,R),append_hydration(a,C),append_hydration(C,z),append_hydration(z,l),append_hydration(l,i),append_hydration(i,T),append_hydration(T,f),append_hydration(f,de),append_hydration(i,ie),append_hydration(i,F),append_hydration(F,N),append_hydration(i,ce),append_hydration(i,A),append_hydration(A,K),append_hydration(l,ae),append_hydration(l,_),append_hydration(_,B),insert_hydration(L,G,R),insert_hydration(L,p,R),append_hydration(p,y),append_hydration(y,d),append_hydration(d,w),append_hydration(w,n),append_hydration(n,x),append_hydration(x,o),append_hydration(n,oe),append_hydration(n,S),append_hydration(S,s),append_hydration(s,m),append_hydration(m,b),append_hydration(b,X),append_hydration(m,g),append_hydration(g,I),append_hydration(s,se),append_hydration(s,u),append_hydration(u,E),append_hydration(E,ne),append_hydration(u,te),append_hydration(u,W),append_hydration(s,J),append_hydration(s,h),append_hydration(h,O),append_hydration(O,Z),append_hydration(h,Q),append_hydration(h,v),append_hydration(v,Y),append_hydration(n,ee),append_hydration(n,k),append_hydration(k,D),append_hydration(n,ue),append_hydration(n,r),append_hydration(r,j),append_hydration(j,q),append_hydration(r,re),append_hydration(r,M),M.innerHTML=e[1],append_hydration(d,le),mount_component(c,d,null),t=!0},p(e,[n]){(!t||n&1)&&set_data(K,e[0]),(!t||n&64)&&set_data(B,e[6]),(!t||n&32)&&set_style(a,"background-image","url("+e[5].url+"),url("+e[5].url+")"),(!t||n&4&&!src_url_equal(o.src,$=e[2].source))&&attr(o,"src",$),(!t||n&4&&V!==(V=e[2].alt))&&attr(o,"alt",V),(!t||n&8)&&L!==(L=e[3].name+"")&&set_data(I,L),(!t||n&8&&H!==(H=e[3].link))&&attr(g,"href",H),(!t||n&16)&&R!==(R=e[4].date+"")&&set_data(W,R),(!t||n&256)&&P!==(P=e[8]?.fields.name+"")&&set_data(Y,P),(!t||n&256&&U!==(U=e[8]?.path))&&attr(v,"href",U),(!t||n&1)&&set_data(q,e[0]),(!t||n&2)&&(M.innerHTML=e[1]);const s={};n&128&&(s.allContent=e[7]),c.$set(s)},i(e){if(t)return;transition_in(c.$$.fragment,e),t=!0},o(e){transition_out(c.$$.fragment,e),t=!1},d(e){e&&detach(a),e&&detach(G),e&&detach(p),destroy_component(c)}}}function instance(e,t,n){let l,{title:i,description:a,image:h,author:r,publish:c,category:s,headerImage:d,titleBody:u,allContent:o}=t;return e.$$set=e=>{"title"in e&&n(0,i=e.title),"description"in e&&n(1,a=e.description),"image"in e&&n(2,h=e.image),"author"in e&&n(3,r=e.author),"publish"in e&&n(4,c=e.publish),"category"in e&&n(9,s=e.category),"headerImage"in e&&n(5,d=e.headerImage),"titleBody"in e&&n(6,u=e.titleBody),"allContent"in e&&n(7,o=e.allContent)},e.$$.update=()=>{if(e.$$.dirty&640)$:n(8,l=o.find(e=>e.type==="blog_catgs"&&e.fields.name===s.name))},[i,a,h,r,c,d,u,o,l,s]}class Component extends SvelteComponent{constructor(e){super(),init(this,e,instance,create_fragment,safe_not_equal,{title:0,description:1,image:2,author:3,publish:4,category:9,headerImage:5,titleBody:6,allContent:7})}}export default Component
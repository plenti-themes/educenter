import{SvelteComponent,assign,check_outros,claim_component,construct_svelte_component,create_component,destroy_component,destroy_each,detach,empty,get_spread_object,get_spread_update,group_outros,init,insert_hydration,mount_component,safe_not_equal,transition_in,transition_out}from"../../web_modules/svelte/internal/index.mjs";function get_each_context(e,t,n){const s=e.slice();return s[4]=t[n].name,s[5]=t[n].fields,s}function create_each_block(e){let t,s,o;const i=[e[5],{allContent:e[2]},{content:e[3]}];var n=e[1]["layouts_components_"+e[4]+"_svelte"];function a(){let t={};for(let e=0;e<i.length;e+=1)t=assign(t,i[e]);return{props:t}}return n&&(t=construct_svelte_component(n,a(e))),{c(){t&&create_component(t.$$.fragment),s=empty()},l(e){t&&claim_component(t.$$.fragment,e),s=empty()},m(e,n){t&&mount_component(t,e,n),insert_hydration(e,s,n),o=!0},p(e,o){const r=o&13?get_spread_update(i,[o&1&&get_spread_object(e[5]),o&4&&{allContent:e[2]},o&8&&{content:e[3]}]):{};if(o&3&&n!==(n=e[1]["layouts_components_"+e[4]+"_svelte"])){if(t){group_outros();const e=t;transition_out(e.$$.fragment,1,0,()=>{destroy_component(e,1)}),check_outros()}n?(t=construct_svelte_component(n,a(e)),create_component(t.$$.fragment),transition_in(t.$$.fragment,1),mount_component(t,s.parentNode,s)):t=null}else n&&t.$set(r)},i(e){if(o)return;t&&transition_in(t.$$.fragment,e),o=!0},o(e){t&&transition_out(t.$$.fragment,e),o=!1},d(e){e&&detach(s),t&&destroy_component(t,e)}}}function create_fragment(e){let s,o,n=e[0],t=[];for(let s=0;s<n.length;s+=1)t[s]=create_each_block(get_each_context(e,n,s));const i=e=>transition_out(t[e],1,1,()=>{t[e]=null});return{c(){for(let e=0;e<t.length;e+=1)t[e].c();s=empty()},l(e){for(let n=0;n<t.length;n+=1)t[n].l(e);s=empty()},m(e,n){for(let s=0;s<t.length;s+=1)t[s]&&t[s].m(e,n);insert_hydration(e,s,n),o=!0},p(e,[o]){if(o&15){n=e[0];let a;for(a=0;a<n.length;a+=1){const i=get_each_context(e,n,a);t[a]?(t[a].p(i,o),transition_in(t[a],1)):(t[a]=create_each_block(i),t[a].c(),transition_in(t[a],1),t[a].m(s.parentNode,s))}group_outros();for(a=n.length;a<t.length;a+=1)i(a);check_outros()}},i(){if(o)return;for(let e=0;e<n.length;e+=1)transition_in(t[e]);o=!0},o(){t=t.filter(Boolean);for(let e=0;e<t.length;e+=1)transition_out(t[e]);o=!1},d(e){destroy_each(t,e),e&&detach(s)}}}function instance(e,t,n){let{components:s,allLayouts:o,allContent:i,content:a}=t;return e.$$set=e=>{"components"in e&&n(0,s=e.components),"allLayouts"in e&&n(1,o=e.allLayouts),"allContent"in e&&n(2,i=e.allContent),"content"in e&&n(3,a=e.content)},[s,o,i,a]}class Component extends SvelteComponent{constructor(e){super(),init(this,e,instance,create_fragment,safe_not_equal,{components:0,allLayouts:1,allContent:2,content:3})}}export default Component
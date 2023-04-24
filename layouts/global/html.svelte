<script>
  import { onMount } from 'svelte';
  import Head from './head.svelte';
  import Nav from './nav.svelte';
  import Header from './header.svelte';
  import Footer from './footer.svelte';
  import Newsletter from './newsletter.svelte';
  import { makeTitle } from '../scripts/make_title.svelte';
  import Login from "./login.svelte";
  export let content, layout, allContent, allLayouts, env, user, shadowContent;

  let hash;
  onMount(async () => {
    hash = window.location.hash;
  });
</script>

<html lang="en">
  <Head title={makeTitle(content.filename)} {env} />
  <body>
    {#if user && $user.isAuthenticated}
        <svelte:component this={$user.menu} {user} bind:content={content} bind:shadowContent/>
    {/if}
    <Login bind:hash {user} />
    <main>
      <header class="fixed-top header">
        <Header />
        <Nav {user} />
      </header>
      <svelte:component this={layout} {...content.fields} {allContent} {allLayouts} {content} {env} bind:shadowContent/>
      <Newsletter />
      <Footer />
    </main>
  </body>
</html>

<style>
  :global(nav) ~ main header {
    top: 41px;
  }
</style>

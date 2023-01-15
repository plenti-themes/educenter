<script>
  import Head from './head.svelte';
  import Nav from './nav.svelte';
  import Header from './header.svelte';
  import Footer from './footer.svelte';
  import Newsletter from './newsletter.svelte';
  import { makeTitle } from '../scripts/make_title.svelte';
  export let content, layout, allContent, allLayouts, env, user, adminMenu, shadowContent;
</script>

<html lang="en">
  <Head title={makeTitle(content.filename)} {env} />
  <body>
    {#if user && $user.isAuthenticated}
        <svelte:component this={adminMenu} {user} bind:content={content} bind:shadowContent/>
    {/if}
    <main>
      <header class="fixed-top header">
        <div class="top-header py-2 bg-white">
          <div class="container">
            <Header />
          </div>
        </div>
        <div class="navigation w-100 top-hider" style="margin-top: 0px;">
          <div class="container">
            <Nav {user} />
          </div>
        </div>
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

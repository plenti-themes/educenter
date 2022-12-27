<script>
  import Head from './head.svelte';
  import Nav from './nav.svelte';
  import Header from './header.svelte';
  import Footer from './footer.svelte';
  import Newsletter from './newsletter.svelte';
  import { makeTitle } from '../scripts/make_title.svelte';
  export let content, layout, allContent, allLayouts, env, user, adminMenu;
</script>

<html lang="en">
  <Head title={makeTitle(content.filename)} {env} />
  <body>
    {#if user && $user.isAuthenticated}
        <svelte:component this={adminMenu} {user} bind:content={content} />
    {/if}
    <main>
      <header class="fixed-top header">
        <div class="top-header py-2 bg-white">
          <div class="container">
            <Header {user} />
          </div>
        </div>
        <div class="navigation w-100 top-hider" style="margin-top: 0px;">
          <div class="container">
            <Nav />
          </div>
        </div>
      </header>
      <svelte:component this={layout} {...content.fields} {allContent} {allLayouts} {content} />
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

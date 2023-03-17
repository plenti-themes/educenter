<script>
    import LatestArticles from "../components/latest_articles.svelte";
    export let  allContent;
</script>

<aside class="col-lg-4 order-1 order-lg-2">
    <div class="bg-white mb-5">
      <h4 class="mb-4">Categories</h4>
      {#each allContent.filter(content => content.type == "blog_catgs") as catg}
      <ul class="list-unstyled">
        <li class="border-bottom">
          <a
            href="{catg.path}"
            class="d-block pb-3 mt-3">{catg.fields.name}</a
          >
        </li>
      </ul>
      {/each}
    </div>
    <div class="bg-white mb-5">
      <h4 class="mb-4">Tags</h4>
      <ul class="list-inline tag-list">
      {#each allContent.filter(content => content.type == "tags") as tag}
        <li class="list-inline-item mb-2">
          <a href="{tag.path}">{tag.fields.name}</a>
        </li>
        {/each}
      </ul>
    </div>
    <LatestArticles {allContent} />
  </aside>
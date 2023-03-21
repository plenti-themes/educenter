<script>
    export let  allContent;
    import LatestArticles from "../components/latest_articles.svelte";
</script>

<aside class="col-lg-4 order-1 order-lg-2">
    <div class="bg-white mb-5">
      <h4 class="mb-4">Categories</h4>
      <ul class="list-unstyled">
        {#each Object(allContent.filter(content => content.type == "blog_catgs")) as category}
          <li class="border-bottom {category ? category.fields.name : ''}" >
          <a
            href={category.path}
            class="d-block pb-3 mt-3">{category.fields.name}</a
          >
        </li>
        {/each}
      </ul>
    </div>
    <div class="bg-white mb-5">
      <h4 class="mb-4">Tags</h4>
      <ul class="list-inline tag-list">
      {#each Object(allContent.filter(content => content.type == "blog_tags")) as tag}
        <li class="list-inline-item mb-2">
          <a href="{tag.path}">{tag.fields.name}</a>
        </li>
        {/each}
      </ul>
    </div>
    <LatestArticles {allContent} />
  </aside>

<script>
    import { sortByDate } from '../scripts/sortByDate.svelte';
    export let allContent;
  </script>
  
  <aside class="col-lg-4 order-1 order-lg-2"> 
    <div class="bg-white">
      <h4 class="mb-4">Latest Articles</h4>
      {#each sortByDate(allContent.filter(content => content.type === "posts")) as post,i}
        {#if i < 3}
          <div class="media border-bottom border-color pb-3 mb-3">
          <a href="{post.path}}"><img class="mr-3 post-thumb-sm" src="/assets/{post.fields.image.source}" alt="{post.fields.image.alt}"></a>
           <div class="media-body">
             <a href="{post.path}">
               <h5 class="mt-0">{post.fields.title}</h5>
             </a>
             {post.fields.publish.date}
            </div>
          </div>
        {/if}
      {/each}
    </div>
  </aside> 
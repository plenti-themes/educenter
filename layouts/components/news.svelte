<script>
  export let title, allContent;
  import { sortByDate } from '../scripts/sortByDate.svelte';
//   let articles = allContent.filter(content => content.type === "article");
</script>

<section class="section">
    <div class="container">
        <div class="row">
            <div class="col-12">
            <h2 class="section-title">{title}</h2>
            </div>
        </div>
        <div class="row justify-content-center">
            {#each sortByDate(allContent.filter(content => content.type === "posts")) as post,i}
                        {#if i < 3}
                <article class="col-lg-4 col-sm-6 mb-5 mb-lg-0">
                    <article class="card rounded-0 border-bottom border-primary border-top-0 border-left-0 border-right-0 hover-shadow">
                        <a href="{post.path}"><img class="card-img-top rounded-0" src="{post.fields.image.source}" alt="{post.fields.image.alt}"></a>
                        <div class="card-body">
                        <ul class="list-inline mb-3">
                        <li class="list-inline-item mr-3 ml-0"><i class="ti-calendar"></i> {post.fields.publish.date}</li>
                        <li class="list-inline-item mr-3 ml-0"><i class="ti-user"></i> <a href="{post.fields.author.link}">{post.fields.author.name}</a></li>
                        </ul>
                        <h4 class="card-title"><a href="{post.path}">{post.fields.title}</a></h4>
                        <p class="card-text">{post.fields.description.substring(0, 150).replace(/(<([^>]+)>)/gi, "")}</p>
                        <a href="{post.path}" class="btn btn-primary btn-sm">Read More</a>
                        </div>
                    </article>
                </article>
                {/if}
            {/each}
        </div>
    </div>
</section>

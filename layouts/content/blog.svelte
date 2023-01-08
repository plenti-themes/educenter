<script>
  import Pagination from '../components/pagination.svelte';
  import LatestArticles from '../components/latest_articles.svelte';
  export let title, image, home, body, allContent, content;
//   let articles = allContent.filter(content => content.type === "article");

  $: currentPage = content.pager ? content.pager : 1;
  let postsPerPage = 4;
  let allPosts = allContent.filter(content => content.type === "posts" && !content.pager);
  let totalPosts = allPosts.length;
  let totalPages = Math.ceil(totalPosts / postsPerPage);
  $: postRangeHigh = currentPage * postsPerPage;
  $: postRangeLow = postRangeHigh - postsPerPage;
</script>

<section class="page-title-section overlay" style="background-image:url({image.url}),url({image.url})">
    <div class="container">
        <div class="row">
            <div class="col-md-8">
                <ul class="list-inline custom-breadcrumb">
                <li class="list-inline-item h2"><a class="text-primary font-secondary" href="{home.url}">{home.title}</a></li>
                <li class="list-inline-item h5"><i class="ti-angle-right text-white"></i></li>
                <li class="list-inline-item text-white h3 font-secondary">{title}</li>
                </ul>
                <p class="text-lighten">{body}</p>
            </div>
        </div>
    </div>
</section>
<section class="section">
    <div class="container">
        <div class="row">
            <div class="col-lg-8 order-2 order-lg-1">
                <div class="row">
                    <!-- {#each allContent.filter(content => content.type == "posts") as post} -->
                    {#each allPosts as post, i}
                    {#if i >= postRangeLow && i < postRangeHigh}
                    <div class="col-sm-6 mb-5">
                        <article class="card rounded-0 border-bottom border-primary border-top-0 border-left-0 border-right-0 hover-shadow">
                        <img class="card-img-top rounded-0" src="assets/{post.fields.image.source}" alt="{post.fields.image.alt}">
                            <div class="card-body">
                            <ul class="list-inline mb-3">
                            <li class="list-inline-item mr-3 ml-0"><i class="ti-calendar"></i>
                            {post.fields.publish.date}</li>
                            <li class="list-inline-item mr-3 ml-0"><i class="ti-user"></i> <a href="{post.fields.author.link}">{post.fields.author.name}</a>
                            </li>
                            </ul>
                            <h4 class="card-title"><a href="{post.path}">{post.fields.title}</a></h4>
                            <p class="card-text">{post.fields.body.substring(0, 150).replace(/(<([^>]+)>)/gi, "")}</p>
                            <a href="{post.path}" class="btn btn-primary btn-sm">Read More</a>
                            </div>
                        </article>
                    </div>
                    {/if}
                    {/each}
                    <div class="col-12">
                    <Pagination {currentPage} {totalPages} />
                </div>
                </div>
            </div>
            <LatestArticles {allContent} />
                <!--<aside class="col-lg-4 order-1 order-lg-2"> 
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
            </aside>  -->
        </div>
    </div>
</section>

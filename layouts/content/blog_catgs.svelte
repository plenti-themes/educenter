<script>
    import Aside from "../components/aside.svelte";
    import LatestArticles from "../components/latest_articles.svelte";
    export let name, headerImage, allContent;
    let posts = allContent.filter(content => content.type === "posts");
</script>
<section
  class="page-title-section overlay"
  style="background-image:url({headerImage.url}),url({headerImage.url})"
>
  <div class="container">
    <div class="row">
      <div class="col-md-8">
        <ul class="list-inline custom-breadcrumb">
          <li class="list-inline-item h2">
            <a class="text-primary font-secondary" href="/">Home</a>
          </li>
          <li class="list-inline-item h5">
            <i class="ti-angle-right text-white" />
          </li>
          <li class="list-inline-item text-white h3 font-secondary">{name}</li>
        </ul>
      </div>
    </div>
  </div>
</section>
<section class="section">
    <div class="container">
      <div class="row">
        <div class="col-lg-8 order-2 order-lg-1">
          <div class="row">
              {#each posts as post}
                {#if post.fields.category.name === name}
                <div class="col-sm-6 mb-5">
                  <article
                    class="card rounded-0 border-bottom border-primary border-top-0 border-left-0 border-right-0 hover-shadow"
                  >
                    <a href={post.path}>
                      <img
                        class="card-img-top rounded-0"
                        src={post.fields.image.source}
                        alt={post.fields.image.alt}
                      /></a
                    >
                    <div class="card-body">
                      <ul class="list-inline mb-3">
                        <li class="list-inline-item mr-3 ml-0">
                          <i class="ti-calendar" />
                          {post.fields.publish.date}
                        </li>
                        <li class="list-inline-item mr-3 ml-0">
                          <i class="ti-user" />
                          <a href={post.fields.author.link}
                            >{post.fields.author.name}</a
                          >
                        </li>
                      </ul>
                      <h4 class="card-title">
                        <a href={post.path}>{post.fields.title}</a>
                      </h4>
                      <p class="card-text">
                        {post.fields.description
                          .substring(0, 150)
                          .replace(/(<([^>]+)>)/gi, "")}
                      </p>
                      <a href={post.path} class="btn btn-primary btn-sm"
                        >Read More</a
                      >
                    </div>
                  </article>
                </div>
                {/if}
              {/each}
          </div>
        </div>
        <Aside {allContent} />
        <!-- <LatestArticles {allContent} /> -->
          </div>
      </div>
  </section>

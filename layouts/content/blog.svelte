<script>
    export let title, image, home, body, allContent;
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
                    {#each allContent.filter(content => allContent.type ="posts") as post}
                    <div class="col-sm-6 mb-5">
                        <article class="card rounded-0 border-bottom border-primary border-top-0 border-left-0 border-right-0 hover-shadow">
                        <img class="card-img-top rounded-0" src="/assests/{post.fields.image.source}" alt="{post.fields.image.alt}">
                            <div class="card-body">
                            <ul class="list-inline mb-3">
                            <li class="list-inline-item mr-3 ml-0"><i class="ti-calendar"></i>
                            {post.published.date}</li>
                            <li class="list-inline-item mr-3 ml-0"><i class="ti-user"></i> <a href="{post.author.link}">{post.author.name}</a>
                            </li>
                            </ul>
                            <h4 class="card-title"><a href="{post.path}">{post.fields.title}</a></h4>
                            <p class="card-text">{post.fields.body}</p>
                            <a href="{post.path}" class="btn btn-primary btn-sm">Read More</a>
                            </div>
                        </article>
                    </div>
                    {/each}
                    <div class="col-12 mt-4"></div>
                </div>
            </div>
<!--             <aside class="col-lg-4 order-1 order-lg-2">
                <div class="bg-white mb-5">
                <h4 class="mb-4">Categories</h4>
                <ul class="list-unstyled">
                <li class="border-bottom"><a href="/educenter/site/categories/automation-system/" class="d-block pb-3 mt-3">Automation system</a></li>
                <li class="border-bottom"><a href="/educenter/site/categories/deep-learning/" class="d-block pb-3 mt-3">Deep learning</a></li>
                <li class="border-bottom"><a href="/educenter/site/categories/eco-system/" class="d-block pb-3 mt-3">Eco system</a></li>
                <li class="border-bottom"><a href="/educenter/site/categories/education-system/" class="d-block pb-3 mt-3">Education system</a></li>
                <li class="border-bottom"><a href="/educenter/site/categories/english-learning/" class="d-block pb-3 mt-3">English learning</a></li>
                <li class="border-bottom"><a href="/educenter/site/categories/mathmatics-learning/" class="d-block pb-3 mt-3">Mathmatics learning</a></li>
                </ul>
                </div>
                <div class="bg-white mb-5">
                <h4 class="mb-4">Tags</h4>
                <ul class="list-inline tag-list">
                <li class="list-inline-item mb-2"><a href="/educenter/site/tags/advice/">Advice</a></li>
                <li class="list-inline-item mb-2"><a href="/educenter/site/tags/ai/">Ai</a></li>
                <li class="list-inline-item mb-2"><a href="/educenter/site/tags/automation/">Automation</a></li>
                <li class="list-inline-item mb-2"><a href="/educenter/site/tags/eco/">Eco</a></li>
                <li class="list-inline-item mb-2"><a href="/educenter/site/tags/education/">Education</a></li>
                <li class="list-inline-item mb-2"><a href="/educenter/site/tags/english/">English</a></li>
                <li class="list-inline-item mb-2"><a href="/educenter/site/tags/rules/">Rules</a></li>
                </ul>
                </div>
                <div class="bg-white">
                    <h4 class="mb-4">Latest Article</h4>
                    <div class="media border-bottom border-color pb-3 mb-3">
                    <a href="https://demo.gethugothemes.com/educenter/site/blog/blog-post-1/"><img class="mr-3 post-thumb-sm" src="https://demo.gethugothemes.com/educenter/site/images/blog/post-1.jpg"></a>
                    <div class="media-body">
                    <a href="https://demo.gethugothemes.com/educenter/site/blog/blog-post-1/">
                    <h5 class="mt-0">Elegant Light Box Paper Cut Dioramas</h5>
                    </a>
                    06 Jul 2019
                    </div>
                    </div>
                    <div class="media border-bottom border-color pb-3 mb-3">
                    <a href="https://demo.gethugothemes.com/educenter/site/blog/blog-post-2/"><img class="mr-3 post-thumb-sm" src="https://demo.gethugothemes.com/educenter/site/images/blog/post-2.jpg"></a>
                    <div class="media-body">
                    <a href="https://demo.gethugothemes.com/educenter/site/blog/blog-post-2/">
                    <h5 class="mt-0">Elegant Light Box Paper Cut Dioramas</h5>
                    </a>
                    06 Jul 2019
                    </div>
                    </div>
                    <div class="media border-bottom border-color pb-3 mb-3">
                    <a href="https://demo.gethugothemes.com/educenter/site/blog/blog-post-3/"><img class="mr-3 post-thumb-sm" src="https://demo.gethugothemes.com/educenter/site/images/blog/post-3.jpg"></a>
                    <div class="media-body">
                    <a href="https://demo.gethugothemes.com/educenter/site/blog/blog-post-3/">
                    <h5 class="mt-0">Elegant Light Box Paper Cut Dioramas</h5>
                    </a>
                    06 Jul 2019
                    </div>
                    </div>
                </div>
            </aside> -->
        </div>
    </div>
</section>
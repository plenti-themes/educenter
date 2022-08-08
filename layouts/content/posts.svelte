<script>
    export let title, body, image, author, published, category;
</script>
<section class="section-sm">
    <div class="container">
    <div class="row">
    <div class="col-lg-8 order-2 order-lg-1">
    <div class="row">
    <div class="col-12 mb-4">
    <img src="/assets/{image.source}" alt="{image.alt}" class="img-fluid w-100">
    </div>
    <div class="col-12">
    <ul class="list-inline">
    <li class="list-inline-item mr-4 mb-3 mb-md-0 text-light"><span class="font-weight-bold mr-2">{author.text}
    </span><a href="{author.link}">{author.name}</a></li>
    <li class="list-inline-item mr-4 mb-3 mb-md-0 text-light"><span class="font-weight-bold mr-2">{published.text}</span> {published.date}</li>
    <li class="list-inline-item mr-4 mb-3 mb-md-0 text-light"><span class="font-weight-bold mr-2">{category.text}
    </span><a href="{category.link}">
    {category.name}</a> </li>
    </ul>
    </div>
    <div class="col-12 my-4">
    <div class="border-bottom"></div>
    </div>
    <div class="col-12 mb-5">
    <h3 id="the-standard-lorem-ipsum-passage-used-since-the-1500s">{title}</h3>
    <p>{@html body}</p>
    </div>
    </div>
    </div>
<!--     <aside class="col-lg-4 order-1 order-lg-2">
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
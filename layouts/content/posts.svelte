<script>
  import LatestArticles from '../components/latest_articles.svelte';
    export let title, body, image, author, publish, category, allContent;
</script>

<section class="page-title-section overlay" style="background-image:url(/educenter/site/images/backgrounds/page-title.jpg),url(/educenter/site/images/backgrounds/page-title.jpg)">
  <div class="container">
    <div class="row">
      <div class="col-md-8">
        <ul class="list-inline custom-breadcrumb">
          <li class="list-inline-item h2"><a class="text-primary font-secondary" href=".">Home</a></li>
          <li class="list-inline-item h5"><i class="ti-angle-right text-white"></i></li>
          <li class="list-inline-item text-white h3 font-secondary">{title}</li>
        </ul>
        <p class="text-lighten">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore. dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.</p>
      </div>
    </div>
  </div>
</section>

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
              <li class="list-inline-item mr-4 mb-3 mb-md-0 text-light">
                <span class="font-weight-bold mr-2">{author.text} </span><a href="{author.link}">{author.name}</a>
              </li>
              <li class="list-inline-item mr-4 mb-3 mb-md-0 text-light">
                <span class="font-weight-bold mr-2">{publish.text}</span> {publish.date}
              </li>
              <li class="list-inline-item mr-4 mb-3 mb-md-0 text-light">
                <span class="font-weight-bold mr-2">{category.text}</span>
                <a href="{category.link}">{category.name}</a>
              </li>
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
      <LatestArticles {allContent} />
    </div>
  </div>
</section>

<style>
    .font-weight-bold {
        font-weight: 700!important;
    }
    .mr-2 {
        margin-right: 0.5rem!important;
    }
    .row {
        display: -ms-flexbox;
        display: flex;
        -ms-flex-wrap: wrap;
        flex-wrap: wrap;
        margin-right: -15px;
        margin-left: -15px;
    }
</style>

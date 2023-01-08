<script>
    export let headimage, home, title, headbody, subtitle, body1, body2, body3, image;
</script>
<section class="page-title-section overlay" style="background-image:url({headimage.url}),url({headimage.url})">
    <div class="container">
        <div class="row">
            <div class="col-md-8">
            <ul class="list-inline custom-breadcrumb">
            <li class="list-inline-item h2"><a class="text-primary font-secondary" href="{home.url}">{home.title}</a></li>
            <li class="list-inline-item h5"><i class="ti-angle-right text-white"></i></li>
            <li class="list-inline-item text-white h3 font-secondary">{title}</li>
            </ul>
            <p class="text-lighten">{headbody}</p>
            </div>
        </div>
    </div>
  </section>
  <section class="section-sm">
    <div class="container">
        <div class="row">
            <div class="col-12">
            <h2 class="section-title">{title}</h2>
            </div>
            <div class="col-12 mb-4">
            <img style="height:500px;width:100%;object-fit:cover" src="{image.url}" alt="{image.alt}" class="img-fluid w-100">
            </div>
            </div>
            <div class="row">
            <div class="col-12 mb-50 content">
            <h3 id="about-research">{subtitle}</h3>
           <p>{body1}</p>
           <p>{body2}</p>
           <p>{body3}</p>
            </div>
        </div>
    </div>
</section>
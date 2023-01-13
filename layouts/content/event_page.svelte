<script>
    export let header, image, body, title, allContent;
</script>
<section class="page-title-section overlay" style="background-image:url({image.url}),url({image.url})">
    <div class="container">
        <div class="row">
            <div class="col-md-8">
            <ul class="list-inline custom-breadcrumb">
            <li class="list-inline-item h2"><a class="text-primary font-secondary" href="{header.url}">{header.title}</a></li>
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
            {#each allContent.filter(content => content.type == "events") as event}
            <div class="col-lg-4 col-sm-6 mb-5">
                <div class="card border-0 rounded-0 hover-shadow">
                <div class="card-img position-relative">
                <a href="{event.path}"><img class="card-img-top rounded-0" src="{event.fields.image.url}" alt="{event.fields.image.alt}"></a>
                <div class="card-date"><span>{event.fields.eventday}</span><br>{event.fields.eventmonth}</div>
                </div>
                <div class="card-body">
                <p><i class="ti-location-pin text-primary mr-2"></i>{event.fields.location.city}</p>
                <h4 class="card-title"><a href="{event.path}">{event.fields.title}</a></h4>
                </div>
                </div>
            </div>
            {/each}
        </div>
    </div>
</section>
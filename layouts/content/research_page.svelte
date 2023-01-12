<script>
    export let title, image, header, body, allContent;
   
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
            {#each allContent.filter(content => content.type == "research") as research}
            <div class="col-lg-4 col-sm-6 mb-4">
            <div class="card rounded-0 hover-shadow border-top-0 border-left-0 border-right-0">
            <img class="card-img-top rounded-0" src="media{research.fields.image.url}" alt="{research.fields.image.alt}">
            <div class="card-body">
            <h4 class="card-title"><a href="{research.path}">{research.fields.title}</a></h4>
            <p class="card-text">{research.fields.tbody}</p>
            </div>
            </div>
            </div>
            {/each}
        </div>
    </div>
</section>
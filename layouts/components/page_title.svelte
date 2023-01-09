<script>
    export let title, header, body, image;
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
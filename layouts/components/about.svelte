<script>
    export let title, description, link, image;
</script>
<section class="section">
    <div class="container">
        <div class="row align-items-center">
            <div class="col-md-6 order-2 order-md-1">
                <h2 class="section-title">{title}</h2>
                    <p>{@html description}</p>
                    <a href="{link.url}" class="btn btn-outline-primary">{link.title}</a>
            </div>
            <div class="col-md-6 order-1 order-md-2 mb-4 mb-md-0">
                <img class="img-fluid w-100" src="{image.url}" alt="{image.alt}">
            </div>
        </div>
    </div>
</section>
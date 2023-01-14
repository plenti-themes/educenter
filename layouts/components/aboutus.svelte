<script>
    // import { PageTitle } from '.page_title.svelte';
    export let title, description, image;
</script>
<section class="section">
    <div class="container">
        <div class="row">
            <div class="col-12">
            <img class="img-fluid w-100 mb-4" src="{image.url}" alt="{image.alt}">
            <h2 id="about-our-journy">{title}</h2>
            <p>{@html description}</p>
            </div>
        </div>
    </div>
</section>

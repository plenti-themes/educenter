<script>
    // import { PageTitle } from '.page_title.svelte';
    export let title, body, image;
</script>
<section class="section">
    <div class="container">
        <div class="row">
            <div class="col-12">
            <img class="img-fluid w-100 mb-4" src="{image.url}" alt="{image.alt}">
            <h2 id="about-our-journy">{title}</h2>
            <p>{body}</p>
            </div>
        </div>
    </div>
</section>

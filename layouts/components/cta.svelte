<script>
    export let title, body, link;
</script>
<section class="section bg-primary">
        <div class="container">
            <div class="row">
                <div class="col-12 text-center">
                    <h6 class="text-white font-secondary mb-0">{title}</h6>
                    <h2 class="section-title text-white">{body}</h2>
                    <a href="{link.url}" class="btn btn-light">{link.title}</a>
                </div>
            </div>
        </div>
</section>
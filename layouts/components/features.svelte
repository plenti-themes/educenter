<script>
    export let image, items;
</script>

<section class="bg-gray overflow-md-hidden">
    <div class="container-fluid p-0">
        <div class="row no-gutters">
            <div class="col-xl-4 col-lg-5 align-self-end">
            <img class="img-fluid w-100" src="{image.url}" alt="{image.alt}">
            </div>
                <div class="col-xl-8 col-lg-7">
                <div class="row feature-blocks bg-gray justify-content-between">
                    {#each items as item}
                        <div class="col-sm-6 col-xl-5 mb-xl-5 mb-lg-3 mb-4 text-center text-sm-left">
                            <i class="{item.icon} mb-xl-4 mb-lg-3 mb-4 feature-icon"></i>
                            <h3 class="mb-xl-4 mb-lg-3 mb-4">{item.title}</h3>
                            <p>{item.body}</p>
                        </div>
                    {/each}
                </div>
            </div>
        </div>
    </div>
</section>
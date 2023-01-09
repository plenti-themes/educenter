<script>
    import Slider from '../components/slideshow.svelte';
    export let title, image, header, body, allContent;
</script>

<section
    class="page-title-section overlay"
    style="background-image:url({image.url}),url({image.url})"
>
    <div class="container">
        <div class="row">
            <div class="col-md-8">
                <ul class="list-inline custom-breadcrumb">
                    <li class="list-inline-item h2">
                        <a class="text-primary font-secondary" href={header.url}>
                            {header.title}
                        </a>
                    </li>
                    <li class="list-inline-item h5">
                        <i class="ti-angle-right text-white" />
                    </li>
                    <li class="list-inline-item text-white h3 font-secondary">
                        {title}
                    </li>
                </ul>
                <p class="text-lighten">{body}</p>
            </div>
        </div>
    </div>
</section>
<section class="section">
    <div class="container">
        <div class="row">
            {#each allContent.filter((content) => content.type == "notice") as notice}
                <div class="col-12">
                    <ul class="list-unstyled">
                        <li class="d-md-table mb-4 w-100 border-bottom hover-shadow">
                            <div class="d-md-table-cell text-center p-4 bg-primary text-white mb-4 mb-md-0">
                                <span class="h2 d-block">{notice.fields.publish.day}</span>
                                {notice.fields.publish.date}
                            </div>
                            <div class="d-md-table-cell px-4 vertical-align-middle mb-4 mb-md-0">
                                <a href={notice.path} class="h4 mb-3 d-block">
                                    {notice.fields.title}
                                </a>
                                <p class="mb-0">{notice.fields.tbody}</p>
                            </div>
                            <div class="d-md-table-cell text-right pr-0 pr-md-4">
                                <a href={notice.path} class="btn btn-primary">
                                    {notice.fields.link.title}
                                </a>
                            </div>
                        </li>
                    </ul>
                </div>
            {/each}
            <Slider />
        </div>
    </div>
</section>

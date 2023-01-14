<script>
    export let title, description, video, image;
</script>

<section
    class="section bg-cover"
    data-background={image.url}
    style="background-image: url(&quot;{image.url}&quot;);"
>
    <div class="container">
        <div class="row">
            <div class="col-lg-6 col-sm-4 position-relative success-video">
                <a
                    class="play-btn venobox vbox-item"
                    href={video.url}
                    data-vbtype="video"
                >
                    <i class="ti-control-play" />
                </a>
            </div>
            <div class="col-lg-6 col-sm-8">
                <div class="bg-white p-5">
                    <h2 class="section-title">{title}</h2>
                    <p>{@html description}</p>
                    <p />
                </div>
            </div>
        </div>
    </div>
</section>

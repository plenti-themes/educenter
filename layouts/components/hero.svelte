<script>
    import Slider from "../components/slider_ai2.svelte";
    export let items, image, buttonRight, buttonLeft;
</script>

<section class="hero-section overlay bg-cover" data-background="{image.url}" alt="A group of students looking at their lesson" style="background-image: url({image.url});">
    <div class="container">
        <div class="hero-slider slick-initialized slick-slider slick-dotted">
                <div class="slick-list draggable">
                    <div class="slick-track" style="opacity: 1; width: 3330px;">
                        <div class="hero-slider-item slick-slide" data-slick-index="0" aria-hidden="true" tabindex="-1" role="tabpanel" id="slick-slide00" aria-describedby="slick-slide-control00" style="width: 1110px; position: relative; left: 0px; top: 0px; z-index: 998; opacity: 0; transition: opacity 500ms ease 0s;">
                            <div class="row">
                                <Slider />
                                {#each items as item}
                                    <div class="col-md-8">
                                    <h1 class="text-white" data-animation-out="fadeOutRight" data-delay-out="5" data-duration-in=".3" data-animation-in="fadeInLeft" data-delay-in=".1" style="opacity: 0; animation-delay: 5s; animation-duration: 0.3s;">{item.title}</h1>
                                    <p class="text-muted mb-4" data-animation-out="fadeOutRight" data-delay-out="5" data-duration-in=".3" data-animation-in="fadeInLeft" data-delay-in=".4" style="opacity: 0; animation-delay: 5s; animation-duration: 0.3s;">{item.body}</p>
                                    <a href="{item.link.url}" class="btn btn-primary" data-animation-out="fadeOutRight" data-delay-out="5" data-duration-in=".3" data-animation-in="fadeInLeft" data-delay-in=".7" tabindex="-1" style="opacity: 0; animation-delay: 5s; animation-duration: 0.3s;">{item.link.title}</a>
                                    </div>
                                {/each}
                            </div>
                        </div>
                    </div>
                </div>
            <button type="button" class="prevArrow slick-arrow" style=""><i class="{buttonLeft}"></i></button>
            <button type="button" class="nextArrow slick-arrow" style=""><i class="{buttonRight}"></i></button>
            <ul class="slick-dots" style="" role="tablist">
                <li class="" role="presentation"><button type="button" role="tab" id="slick-slide-control00" aria-controls="slick-slide00" aria-label="1 of 3" tabindex="-1">1</button></li>
                <li role="presentation" class="slick-active"><button type="button" role="tab" id="slick-slide-control01" aria-controls="slick-slide01" aria-label="2 of 3" tabindex="0" aria-selected="true">2</button></li>
                <li class="" role="presentation"><button type="button" role="tab" id="slick-slide-control02" aria-controls="slick-slide02" aria-label="3 of 3" tabindex="-1">3</button></li>
            </ul>
        </div>
    </div>
</section>
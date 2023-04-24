<script>
    import { fly } from 'svelte/transition';
    export let items, image;

    let activeSlide = 0;
</script>

<section class="hero-section overlay bg-cover" data-background="{image.url}" alt="A group of students looking at their lesson" style="background-image: url({image.url});">
    <div class="container">
        <div class="hero-slider">
            <div class="col-md-8">
                {#each items as item, i}
                    {#if i === activeSlide}
                        <h1
                            class="text-white"
                            in:fly|local={{ x: -200, delay: 250 }}
                        >
                            {item.title}
                        </h1>
                        <p
                            class="text-muted mb-4"
                            in:fly|local={{ x: -200, delay: 750 }}
                        >
                            {item.body}
                        </p>
                        <a
                            href="{item.link.url}"
                            class="btn btn-primary"
                            in:fly|local={{ x: -200, delay: 1250 }}
                        >
                            {item.link.title}
                        </a>
                    {/if}
                {/each}
                <div class="controls">
                    {#each items as item, i}
                        <div
                            class="dot{i === activeSlide ? ' active':''}"
                            on:click={() => activeSlide = i}
                        >
                        </div>
                    {/each}
                </div>
            </div>
        </div>
    </div>
</section>

<style>
    .controls {
        margin: 60px 0;
        display: flex;
        gap: 10px;
    }
    .dot {
        width: 15px;
        height: 15px;
        overflow: hidden;
        background-color: rgba(255, 255, 255, 0.5);
        z-index: 1;
        cursor: pointer;
    }
    .dot.active {
        background-color: var(--warning);
    }
</style>
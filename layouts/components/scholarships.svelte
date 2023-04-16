<script>
    // import { PageTitle } from '.page_title.svelte';
    export let title, subtitle, description, image, items;
</script>
<section class="section">
    <div class="container">
            <div class="row mb-5">
                <div class="col-md-6 mb-4 mb-md-0">
                <img class="img-fluid" src="{image.url}" alt="{image.alt}">
                </div>
                <div class="col-md-6 content">
                <h2 id="scholarships-news">{title}</h2>
                <p><strong><em>{subtitle}</em></strong></p>
                <p>{description}</p>
                </div>
            </div>
            <div class="row">
                {#each items as item}
                <div class="col-lg-4 col-sm-6 mb-4">
                <div class="card rounded-0 hover-shadow border-top-0 border-left-0 border-right-0">
                <img class="card-img-top rounded-0" src="{item.image.url}" alt="{item.image.alt}">
                <div class="card-body">
                <h4 class="card-title mb-3">{item.title}</h4>
                <div class="content"><ul>
                <li>{item.list.item1}</li>
                <li>{item.list.item2}</li>
                <li>{item.list.item3}</li>
                <li>{item.list.item4}</li>
                <li>{item.list.item5}</li>
                <li>{item.list.item6}</li>
                </ul>
                </div>
                </div>
                </div>
                </div>
                {/each}
            </div>
    </div>
</section>
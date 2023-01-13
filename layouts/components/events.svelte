<script>
    import { sortByDate } from "../scripts/sortByDate.svelte";
    export let title, link, allContent;
</script>
<section class="section bg-gray">
    <div class="container">
        <div class="row">
            <div class="col-12">
                <div class="d-flex align-items-center section-title justify-content-between">
                    <h2 class="mb-0 text-nowrap mr-3">{title}</h2>
                    <div class="border-top w-100 border-primary d-none d-sm-block"></div>
                    <div>
                    <a href="{link.url}" class="btn btn-sm btn-outline-primary ml-sm-3 d-none d-sm-block text-nowrap">{link.title}</a>
                    </div>
                </div>
            </div>
        </div>
            <div class="row justify-content-center">
               <!--  {#each allContent.filter(content => content.type === "events") as event, i}
                {#if i < 3} -->
                {#each sortByDate(allContent.filter(content => content.type === "events"), "oldest") as event, i}
            {#if i < 3}
                    <div class="col-lg-4 col-sm-6 mb-5 mb-lg-0">
                        <div class="card border-0 rounded-0 hover-shadow">
                            <div class="card-img position-relative">
                                <a href="{event.path}"><img class="card-img-top rounded-0" src="{event.fields.image.url}" alt="{event.fields.image.alt}"></a>
                            <div class="card-date"><span>{event.fields.eventday}</span><br>{event.fields.eventmonth}</div>
                            </div>
                            <div class="card-body">
                            <p><i class="ti-location-pin text-primary mr-2"></i>{event.fields.location.city}  <i class="ti-calendar text-primary mr-1"></i> {event.fields.publish.date}</p>
                            <h4 class="card-title"><a href="{event.path}">{event.fields.title}</a></h4>
                            </div>
                        </div>
                    </div>
                    {/if}
                {/each}
            </div>
        <div class="row">
        <div class="col-12 text-center">
        <a href="{link.url}" class="btn btn-sm btn-outline-primary d-sm-none d-inline-block">{link.title}</a>
        </div>
        </div>
    </div>
</section>
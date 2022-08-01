<script>
    export let title, link, items;
</script>
<section class="section-sm">
    <div class="container">
        <div class="row">
            <div class="col-12">
                <div class="d-flex align-items-center section-title justify-content-between">
                <h2 class="mb-0 text-nowrap mr-3">{title}</h2>
                <div class="border-top w-100 border-primary d-none d-sm-block"></div>
                    <div>
                    <a href="{link.url}" class="btn btn-sm btn-outline-primary ml-sm-3 d-none d-sm-block">{link.title}</a>
                    </div>
                </div>
            </div>
        </div>
            <div class="row justify-content-center">
                {#each items as item}
                    <div class="col-lg-4 col-sm-6 mb-5">
                        <div class="card p-0 border-primary rounded-0 hover-shadow">
                            <img class="card-img-top rounded-0" src="{item.image.url}" alt="{item.image.alt}">
                                <div class="card-body">
                                    <ul class="list-inline mb-2">
                                    <li class="list-inline-item"><i class="{item.icon1}"></i> {item.date}</li>
                                    <li class="list-inline-item"><i class="{item.icon2}"></i> {item.category}</li>
                                    </ul>
                                    <h4 class="card-title"><a href="{item.link}">{item.name}</a></h4>
                                    <p class="card-text mb-4">{item.body}</p>
                                    <a href="{item.button.url}" class="btn btn-primary btn-sm">{item.button.title}</a>
                                </div>
                        </div>
                    </div>
                {/each}
            </div>
         <div class="row">
            <div class="col-12 text-center">
            <a href="{link.url}" class="btn btn-sm btn-outline-primary d-sm-none d-inline-block">{link.title}</a>
            </div>
        </div>
    </div>
</section>
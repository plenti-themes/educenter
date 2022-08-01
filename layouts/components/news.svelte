<script>
    export let title, items;
</script>
<section class="section">
    <div class="container">
        <div class="row">
            <div class="col-12">
            <h2 class="section-title">{title}</h2>
            </div>
        </div>
        <div class="row justify-content-center">
            {#each items as item}
                <article class="col-lg-4 col-sm-6 mb-5 mb-lg-0">
                    <article class="card rounded-0 border-bottom border-primary border-top-0 border-left-0 border-right-0 hover-shadow">
                    <img class="card-img-top rounded-0" src="{item.image.url}" alt="{item.image.alt}">
                        <div class="card-body">
                        <ul class="list-inline mb-3">
                        <li class="list-inline-item mr-3 ml-0"><i class="{item.icon1}"></i>{item.date}</li>
                        <li class="list-inline-item mr-3 ml-0"><i class="{item.icon2}"></i> <a href="{item.user.url}">{item.user.name}</a></li>
                        </ul>
                        <h4 class="card-title"><a href="{item.link.url}">{item.title}</a></h4>
                        <p class="card-text">{item.body}</p>
                        <a href="{item.link.url}" class="btn btn-primary btn-sm">{item.link.title}</a>
                        </div>
                    </article>
                </article>
            {/each}
        </div>
    </div>
</section>
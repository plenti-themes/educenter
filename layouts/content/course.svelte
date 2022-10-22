<script>
    export let items;
</script>
<section class="section">
    <div class="container">
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
    </div>
</section>
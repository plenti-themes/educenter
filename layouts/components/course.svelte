<script>
    export let allContent, title, link;
</script>
<section class="section">
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
            {#each allContent.filter(content => content.type == "courses") as course, i}
            {#if i < 6}
            <div class="col-lg-4 col-sm-6 mb-5">
                <div class="card p-0 border-primary rounded-0 hover-shadow">
                    <a href="{course.path}"><img class="card-img-top rounded-0" src="{course.fields.image.source}" alt="{course.fields.image.altText}"></a>
                        <div class="card-body">
                            <ul class="list-inline mb-2">
                            <li class="list-inline-item"><i class="ti-calendar"></i> {course.fields.course.length}</li>
                            <li class="list-inline-item"><i class="ti-bookmark-alt"></i> {course.fields.course.category}</li>
                            </ul>
                            <h4 class="card-title"><a href="{course.path}">{course.fields.course.title}</a></h4>
                            <p class="card-text mb-4">{course.fields.bodyText1.description.substring(0, 150).replace(/(<([^>]+)>)/gi, "")}</p>
                            <a href="{course.path}" class="btn btn-primary btn-sm">{course.fields.link.title}</a>
                        </div>
                </div>
            </div>
                {/if}
            {/each}
        </div>
    </div>
</section>
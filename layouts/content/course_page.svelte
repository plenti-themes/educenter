<script>
    export let title, image, header, body, allContent;
    //   let courses = allContent.filter(content => content.type === "course");
</script>
<section class="page-title-section overlay" style="background-image:url({image.url}),url({image.url})">
    <div class="container">
        <div class="row">
            <div class="col-md-8">
            <ul class="list-inline custom-breadcrumb">
            <li class="list-inline-item h2"><a class="text-primary font-secondary" href="{header.url}">{header.title}</a></li>
            <li class="list-inline-item h5"><i class="ti-angle-right text-white"></i></li>
            <li class="list-inline-item text-white h3 font-secondary">{title}</li>
            </ul>
            <p class="text-lighten">{body}</p>
            </div>
        </div>
    </div>
</section>
<section class="section">
    <div class="container">
            <div class="row justify-content-center">
                {#each allContent.filter(content => content.type == "courses") as course}
                <!-- {#each courses as course} -->
                    <div class="col-lg-4 col-sm-6 mb-5">
                        <div class="card p-0 border-primary rounded-0 hover-shadow">
                            <img class="card-img-top rounded-0" src="{course.fields.image.src}" alt="{course.fields.image.alt}">
                            <div class="card-body">
                                <ul class="list-inline mb-2">
                                <li class="list-inline-item"><i class="{course.fields.calicon}"></i> {course.fields.length}</li>
                                <li class="list-inline-item"><i class="{course.fields.bookicon}"></i> {course.fields.category}</li>
                                </ul>
                                <h4 class="card-title"><a href="{course.path}">{course.fields.title}</a></h4>
                                <p class="card-text mb-4">{course.fields.description.substring(0, 150).replace(/(<([^>]+)>)/gi, "")}</p>
                                <a href="{course.path}" class="btn btn-primary btn-sm">{course.fields.link.title}</a>
                            </div>
                        </div>
                    </div>
                {/each}
            </div>
<!--          <div class="row">
            <div class="col-12 text-center">
            <a href="{link.url}" class="btn btn-sm btn-outline-primary d-sm-none d-inline-block">{link.title}</a>
            </div> -->
        </div>
</section>
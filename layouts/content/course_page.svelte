<script>
    export let title, image, description, allContent;
    //   let courses = allContent.filter(content => content.type === "course");
    let courses = allContent.filter(content => content.type === "courses");
    let selectedCategory;
</script>
<section class="page-title-section overlay" style="background-image:url({image.url}),url({image.url})">
    <div class="container">
        <div class="row">
            <div class="col-md-8">
            <ul class="list-inline custom-breadcrumb">
            <li class="list-inline-item h2"><a class="text-primary font-secondary" href="/">Home</a></li>
            <li class="list-inline-item h5"><i class="ti-angle-right text-white"></i></li>
            <li class="list-inline-item text-white h3 font-secondary">{title}</li>
            </ul>
            <p class="text-lighten">{@html description}</p>
            </div>
        </div>
    </div>
</section>
<section class="section">
    <div class="container">
        <div class="row">
            <div class="col-12">
                <ul class="list-inline text-center filter-controls mb-5">
                    <h4 class="mb-2">Course Categories</h4>
                    <li on:click={() => selectedCategory = 'All'} class="list-inline-item m-3 text-uppercase{selectedCategory === 'All' ? ' active' : ''}" data-filter="all">All</li>
                    <li on:click={() => selectedCategory = 'Computer Science'} class="list-inline-item m-3 text-uppercase{selectedCategory === 'Computer Science' ? ' active' : ''}" data-filter="computer-science">Computer Science</li>
                    <li on:click={() => selectedCategory = 'Humanities'} class="list-inline-item m-3 text-uppercase{selectedCategory === 'Humanities' ? ' active' : ''}" data-filter="humanities">Humanities</li>
                    <li on:click={() => selectedCategory = 'Digital Media'} class="list-inline-item m-3 text-uppercase{selectedCategory === 'Digital Media' ? ' active' : ''}" data-filter="digital-media">Digital Media</li>
                </ul>
            </div>
        </div>
        {#key selectedCategory}
            <div class="row justify-content-center">
                {#each courses as course}
                {#if !selectedCategory || selectedCategory === 'All' || selectedCategory === course.fields.course.category [0]}
                <!-- {#each courses as course} -->
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
            {/key}
<!--          <div class="row">
            <div class="col-12 text-center">
            <a href="{link.url}" class="btn btn-sm btn-outline-primary d-sm-none d-inline-block">{link.title}</a>
            </div> -->
        </div>
</section>
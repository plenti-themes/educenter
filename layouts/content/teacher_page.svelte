<script>
    export let title, image, home, body, allContent;

    let teachers = allContent.filter(content => content.type === "teachers");
    let selectedCategory;
</script>

<section class="page-title-section overlay" style="background-image:url({image.url}),url({image.url})">
    <div class="container">
        <div class="row">
            <div class="col-md-8">
                <ul class="list-inline custom-breadcrumb">
                    <li class="list-inline-item h2"><a class="text-primary font-secondary" href="{home.url}">{home.title}</a></li>
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
        <div class="row">
            <div class="col-12">
                <ul class="list-inline text-center filter-controls mb-5">
                    <li on:click={() => selectedCategory = 'All'} class="list-inline-item m-3 text-uppercase{selectedCategory === 'All' ? ' active' : ''}" data-filter="all">All</li>
                    <li on:click={() => selectedCategory = 'Vlogging'} class="list-inline-item m-3 text-uppercase{selectedCategory === 'Vlogging' ? ' active' : ''}" data-filter="vlogging">Vlogging</li>
                    <li on:click={() => selectedCategory = 'Computer Science'} class="list-inline-item m-3 text-uppercase{selectedCategory === 'Computer Science' ? ' active' : ''}" data-filter="computer-science">Computer Science</li>
                    <li on:click={() => selectedCategory = 'Humanities'} class="list-inline-item m-3 text-uppercase{selectedCategory === 'Humanities' ? ' active' : ''}" data-filter="humanities">Humanities</li>
                    <li on:click={() => selectedCategory = 'Photography'} class="list-inline-item m-3 text-uppercase{selectedCategory === 'Photography' ? ' active' : ''}" data-filter="photography">Photography</li>
                </ul>
            </div>
        </div>
       
        <div class="filtr-container row" style="padding: 0px; position: relative; width: 100%; display: flex; flex-wrap: wrap; height: 1139.14px;">
            {#each teachers as teacher}
                {#if !selectedCategory || selectedCategory === 'All' || selectedCategory === teacher.fields.category}
                    <div data-category="Vlogging" class="col-lg-4 col-sm-6 filtr-item">
                        <div class="card border-0 rounded-0 hover-shadow mb-5">
                        <img class="card-img-top rounded-0" src="{teacher.fields.image.src}" alt="{teacher.fields.image.alt}">
                            <div class="card-body">
                                <h4 class="card-title"><a href="{teacher.path}">{teacher.fields.title}</a></h4>
                                <p>{teacher.fields.category}</p>
                                <ul class="list-inline">
                                    <li class="list-inline-item">
                                        <a class="text-color" href="mailto:{teacher.fields.contact.email}">
                                            <i class="ti-email"></i>
                                        </a>
                                    </li>
                                    <li class="list-inline-item">
                                        <a class="text-color" href="tel:{teacher.fields.contact.phone}">
                                            <i class="ti-mobile"></i>
                                        </a>
                                    </li>
                                    <li class="list-inline-item">
                                        <a class="text-color" href="{teacher.fields.facebook.url}">
                                            <i class="ti-facebook"></i>
                                        </a>
                                    </li>
                                    <li class="list-inline-item">
                                        <a class="text-color" href="{teacher.fields.twitter.url}">
                                            <i class="ti-twitter-alt"></i>
                                        </a>
                                    </li>
                                    <li class="list-inline-item">
                                        <a class="text-color" href="{teacher.fields.skype.url}">
                                            <i class="ti-skype"></i>
                                        </a>
                                    </li>
                                    <li class="list-inline-item">
                                        <a class="text-color" href="{teacher.fields.contact.website}">
                                            <i class="ti-world"></i>
                                        </a>
                                    </li>
                                    <li class="list-inline-item">
                                        <a class="text-color" href="{teacher.fields.contact.address}">
                                            <i class="ti-location-pin"></i>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                {/if}
            {/each}
        </div>
    </div>
</section>
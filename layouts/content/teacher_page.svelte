<script>
    export let title, image, home, body, allContent;
    // let teachers = allContent(content => content.type === "teachers");
   
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
        <li class="list-inline-item m-3 text-uppercase active" data-filter="all">All</li>
        <li class="list-inline-item m-3 text-uppercase" data-filter="vlogging">Vlogging</li>
        <li class="list-inline-item m-3 text-uppercase" data-filter="computer-science">Computer science</li>
        <li class="list-inline-item m-3 text-uppercase" data-filter="humanities">Humanities</li>
        <li class="list-inline-item m-3 text-uppercase" data-filter="photography">Photography</li>
        </ul>
        </div>
        </div>
       
        <div class="row filtr-container" style="padding: 0px; position: relative; width: 100%; display: flex; flex-wrap: wrap; height: 1139.14px;">
        {#each allContent.filter(content => content.type == "teachers") as teacher}
        <div data-category="Vlogging" class="col-lg-4 col-sm-6 filtr-item" style="opacity: 1; transform: scale(1) translate3d(0px, 0px, 0px); backface-visibility: hidden; perspective: 1000px; transform-style: preserve-3d; position: absolute; transition: all 0.5s ease-out 0ms;">
        <div class="card border-0 rounded-0 hover-shadow mb-5">
        <img class="card-img-top rounded-0" src="{teacher.fields.image.src}" alt="{teacher.fields.image.alt}">
        <div class="card-body">
        <h4 class="card-title"><a href="{teacher.path}">{teacher.fields.title}</a></h4>
        <p>{teacher.fields.category}</p>
        <ul class="list-inline">
        <li class="list-inline-item"><a class="text-color" href="mailto:{teacher.fields.contact.email}"><i class="ti-email"></i></a>
        </li>
        <li class="list-inline-item"><a class="text-color" href="tel:{teacher.fields.contact.phone}"><i class="ti-mobile"></i></a>
        </li>
        <li class="list-inline-item"><a class="text-color" href="{teacher.fields.facebook.url}"><i class="ti-facebook"></i></a>
        </li>
        <li class="list-inline-item"><a class="text-color" href="{teacher.fields.twitter.url}"><i class="ti-twitter-alt"></i></a>
        </li>
        <li class="list-inline-item"><a class="text-color" href="{teacher.fields.skype.url}"><i class="ti-skype"></i></a>
        </li>
        <li class="list-inline-item"><a class="text-color" href="{teacher.fields.contact.website}"><i class="ti-world"></i></a>
        </li>
        <li class="list-inline-item"><a class="text-color" href="{teacher.fields.contact.address}"><i class="ti-location-pin"></i></a>
        </li>
        </ul>
        </div>
        </div>
        </div>
        {/each}
        </div>
    </div>
</section>
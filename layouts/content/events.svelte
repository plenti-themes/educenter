<script>
    export let title, subtitle, tbody, image, location, calendar, time, entry, button, body, speakerstext, speaker1, speaker2, speaker3, speaker4, home, headimage; 
</script>
<section class="page-title-section overlay" style="background-image:url({headimage.url}),url({headimage.url})">
    <div class="container">
        <div class="row">
            <div class="col-md-8">
            <ul class="list-inline custom-breadcrumb">
            <li class="list-inline-item h2"><a class="text-primary font-secondary" href="{home.url}">{home.title}</a></li>
            <li class="list-inline-item h5"><i class="ti-angle-right text-white"></i></li>
            <li class="list-inline-item text-white h3 font-secondary">{title}</li>
            </ul>
            <p class="text-lighten">{tbody}</p>
            </div>
        </div>
    </div>
  </section>
<section class="section-sm">
    <div class="container">
        <div class="row">
        <div class="col-12">
        <h2 class="section-title">{title}</h2>
        </div>
        <div class="col-12 mb-4">
        <img style="height:500px;width:100%;object-fit:cover" src="/assets{image.url}" alt="{image.url}" class="img-fluid w-100">
        </div>
        </div>
        <div class="row align-items-center mb-5">
            <div class="col-lg-9">
            <ul class="list-inline">
            <li class="list-inline-item mr-xl-5 mr-4 mb-3 mb-lg-0">
            <div class="d-flex align-items-center">
            <i class="ti-location-pin text-primary icon-md mr-2"></i>
            <div class="text-left">
            <h6 class="mb-0">{location.title}</h6>
            <p class="mb-0">{location.city}</p>
            </div>
            </div>
            </li>
            <li class="list-inline-item mr-xl-5 mr-4 mb-3 mb-lg-0">
            <div class="d-flex align-items-center">
            <i class="ti-calendar text-primary icon-md mr-2"></i>
            <div class="text-left">
            <h6 class="mb-0">{calendar.title}</h6>
            <p class="mb-0">{calendar.date}</p>
            </div>
            </div>
            </li>
            <li class="list-inline-item mr-xl-5 mr-4 mb-3 mb-lg-0">
            <div class="d-flex align-items-center">
            <i class="ti-time text-primary icon-md mr-2"></i>
            <div class="text-left">
            <h6 class="mb-0">{time.title}</h6>
            <p class="mb-0">{time.hour}</p>
            </div>
            </div>
            </li>
            <li class="list-inline-item mr-xl-5 mr-4 mb-3 mb-lg-0">
            <div class="d-flex align-items-center">
            <i class="ti-wallet text-primary icon-md mr-2"></i>
            <div class="text-left">
            <h6 class="mb-0">{entry.title}</h6>
            <p class="mb-0">{entry.fee}</p>
            </div>
            </div>
            </li>
            </ul>
            </div>
        <div class="col-lg-3 text-lg-right text-left">
        <a href="." class="btn btn-primary">{button.title}</a>
        </div>
        <div class="col-12 mt-4 order-4">
        <div class="border-bottom border-primary"></div>
        </div>
        </div>
    <div class="row">
    <div class="col-12 mb-50 content">
    <h3 id="about-event">{subtitle}</h3>
    <p>{body}</p>
    </div>
    </div>
    <div class="row">
    <div class="col-12">
    <h3 class="mb-4">{speakerstext}</h3>
    </div>
    <div class="col-lg-3 col-sm-6 mb-4 mb-lg-0">
    <div class="media">
    <img class="mr-3 img-fluid" src="/assets{speaker1.image}" alt="{speaker1.alt}">
    <div class="media-body">
    <h4 class="mt-0">{speaker1.name}</h4>
    {speaker1.title}
    </div>
    </div>
    </div>
    <div class="col-lg-3 col-sm-6 mb-4 mb-lg-0">
    <div class="media">
    <img class="mr-3 img-fluid" src="/assets{speaker2.image}" alt="{speaker2.alt}">
    <div class="media-body">
    <h4 class="mt-0">{speaker2.name}</h4>
    {speaker2.title}
    </div>
    </div>
    </div>
    <div class="col-lg-3 col-sm-6 mb-4 mb-lg-0">
    <div class="media">
    <img class="mr-3 img-fluid" src="/assets{speaker3.image}" alt="{speaker3.alt}">
    <div class="media-body">
    <h4 class="mt-0">{speaker3.name}</h4>
    {speaker3.title}
    </div>
    </div>
    </div>
    <div class="col-lg-3 col-sm-6 mb-4 mb-lg-0">
    <div class="media">
    <img class="mr-3 img-fluid" src="/assets{speaker4.image}" alt="{speaker4.alt}">
    <div class="media-body">
    <h4 class="mt-0">{speaker4.name}</h4>
    {speaker4.title}
    </div>
    </div>
    </div>
    <div class="col-12 mt-4 order-4">
    <div class="border-bottom border-primary"></div>
    </div>
    </div>
    </div>
</section>
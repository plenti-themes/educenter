<script>
    export let title,
        subtitle,
        tbody,
        image,
        location,
        publish,
        time,
        entry,
        button,
        description,
        speakerstext,
        speaker1,
        speaker2,
        speaker3,
        speaker4,
        header,
        headerImage,
        allContent;
    import { sortByDate } from "../scripts/sortByDate.svelte";
    /*     let events = allContent.filter(content => content.type === "events");
    
    const shuffle = array => {
      let currentIndex = array.length,  randomIndex;
      // While there remain elements to shuffle.
      while (currentIndex != 0) {
        // Pick a remaining element.
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
      }
      return array;
    }
    events = shuffle(events);
 */
</script>

<section
    class="page-title-section overlay"
    style="background-image:url({headerImage.url}),url({headerImage.url})"
>
    <div class="container">
        <div class="row">
            <div class="col-md-8">
                <ul class="list-inline custom-breadcrumb">
                    <li class="list-inline-item h2">
                        <a class="text-primary font-secondary" href={header.url}
                            >{header.title}</a
                        >
                    </li>
                    <li class="list-inline-item h5">
                        <i class="ti-angle-right text-white" />
                    </li>
                    <li class="list-inline-item text-white h3 font-secondary">
                        {title}
                    </li>
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
                <img
                    style="height:500px;width:100%;object-fit:cover"
                    src="{image.url}"
                    alt={image.url}
                    class="img-fluid w-100"
                />
            </div>
        </div>
        <div class="row align-items-center mb-5">
            <div class="col-lg-9">
                <ul class="list-inline">
                    <li class="list-inline-item mr-xl-5 mr-4 mb-3 mb-lg-0">
                        <div class="d-flex align-items-center">
                            <i
                                class="ti-location-pin text-primary icon-md mr-2"
                            />
                            <div class="text-left">
                                <h6 class="mb-0">{location.title}</h6>
                                <p class="mb-0">{location.city}</p>
                            </div>
                        </div>
                    </li>
                    <li class="list-inline-item mr-xl-5 mr-4 mb-3 mb-lg-0">
                        <div class="d-flex align-items-center">
                            <i class="ti-calendar text-primary icon-md mr-2" />
                            <div class="text-left">
                                <h6 class="mb-0">{publish.title}</h6>
                                <p class="mb-0">{publish.date}</p>
                            </div>
                        </div>
                    </li>
                    <li class="list-inline-item mr-xl-5 mr-4 mb-3 mb-lg-0">
                        <div class="d-flex align-items-center">
                            <i class="ti-time text-primary icon-md mr-2" />
                            <div class="text-left">
                                <h6 class="mb-0">{time.title}</h6>
                                <p class="mb-0">{time.hour}</p>
                            </div>
                        </div>
                    </li>
                    <li class="list-inline-item mr-xl-5 mr-4 mb-3 mb-lg-0">
                        <div class="d-flex align-items-center">
                            <i class="ti-wallet text-primary icon-md mr-2" />
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
                <div class="border-bottom border-primary" />
            </div>
        </div>
        <div class="row">
            <div class="col-12 mb-50 content">
                <h3 id="about-event">{subtitle}</h3>
                <p>{description}</p>
            </div>
        </div>
        <div class="row">
            <div class="col-12">
                <h3 class="mb-4">{speakerstext}</h3>
            </div>
            <div class="col-lg-3 col-sm-6 mb-4 mb-lg-0">
                <div class="media">
                    <img
                        class="mr-3 img-fluid"
                        src="{speaker1.image}"
                        alt={speaker1.alt}
                    />
                    <div class="media-body">
                        <h4 class="mt-0">{speaker1.name}</h4>
                        {speaker1.title}
                    </div>
                </div>
            </div>
            <div class="col-lg-3 col-sm-6 mb-4 mb-lg-0">
                <div class="media">
                    <img
                        class="mr-3 img-fluid"
                        src="{speaker2.image}"
                        alt={speaker2.alt}
                    />
                    <div class="media-body">
                        <h4 class="mt-0">{speaker2.name}</h4>
                        {speaker2.title}
                    </div>
                </div>
            </div>
            <div class="col-lg-3 col-sm-6 mb-4 mb-lg-0">
                <div class="media">
                    <img
                        class="mr-3 img-fluid"
                        src="{speaker3.image}"
                        alt={speaker3.alt}
                    />
                    <div class="media-body">
                        <h4 class="mt-0">{speaker3.name}</h4>
                        {speaker3.title}
                    </div>
                </div>
            </div>
            <div class="col-lg-3 col-sm-6 mb-4 mb-lg-0">
                <div class="media">
                    <img
                        class="mr-3 img-fluid"
                        src="{speaker4.image}"
                        alt={speaker4.alt}
                    />
                    <div class="media-body">
                        <h4 class="mt-0">{speaker4.name}</h4>
                        {speaker4.title}
                    </div>
                </div>
            </div>
            <div class="col-12 mt-4 order-4">
                <div class="border-bottom border-primary" />
            </div>
        </div>
    </div>
</section>
<section class="section p-0">
    <div class="container">
        <div class="row">
            <div class="col-12">
                <h2 class="section-title">More Events</h2>
            </div>
        </div>
        <div class="row justify-content-center" />
    </div>
</section>
<section class="section" style="padding-top: 0px">
    <div class="container">
        <div class="row justify-content-center">
            {#each sortByDate( allContent.filter((content) => content.type === "events"), "oldest" ) as event, i}
                {#if i < 3}
                    <div class="col-lg-4 col-sm-6 mb-5 mb-lg-0">
                        <div class="card border-0 rounded-0 hover-shadow">
                            <div class="card-img position-relative">
                                <a href="{event.path}"><img
                                    class="card-img-top rounded-0"
                                    src="{event.fields.image.url}"
                                    alt={event.fields.image.alt}
                                /></a>
                                <div class="card-date">
                                    <span>{event.fields.eventday}</span>
                                    <br />
                                    {event.fields.eventmonth}
                                </div>
                            </div>
                            <div class="card-body">
                                <p>
                                    <i class="ti-location-pin text-primary mr-1" />{event.fields.location.city}
                                    <i class="ti-calendar text-primary mr-1" />
                                    {event.fields.publish.date}
                                </p>
                                <h4 class="card-title">
                                    <a href={event.path}>{event.fields.title}</a>
                                </h4>
                            </div>
                        </div>
                    </div>
                {/if}
            {/each}
        </div>
    </div>
</section>

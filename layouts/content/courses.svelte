<script>
    export let title, subtitle, body, image, length, duration, weekly, hours, fee, cost, apply, trainer, socials, headimage, home, tbody, allContent, content;
   /*  let courses;
    $: if (content) {
      courses = allContent.filter(c => c.type === "courses" && c.filepath !== content.filepath);
    } */
    let courses = allContent.filter(c => c.type === "courses" && c.filepath !== content.filepath);
    let teacher;
    $: if (content) {
      teacher = allContent.filter(content => content.type === "teachers" && content.fields.title === trainer.name)[0];
    }
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
    courses = shuffle(courses);

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
            <div class="col-12 mb-4">
                <img style="height:500px;width:100%;object-fit:cover" alt="{image.alt}" src="assets{image.src}" class="img-fluid w-100">
            </div>
        </div>
        <div class="row align-items-center mb-5">
            <div class="col-xl-3 order-1 col-sm-6 mb-4 mb-xl-0">
                <h2>{title}</h2>
            </div>
            <div class="col-xl-6 order-sm-3 order-xl-2 col-12 order-2">
                <ul class="list-inline text-xl-center">
                    <li class="list-inline-item mr-4 mb-3 mb-sm-0">
                        <div class="d-flex align-items-center">
                            <i class="ti-calendar text-primary icon-md mr-2"></i>
                            <div class="text-left">
                                <h6 class="mb-0">{duration}</h6>
                                <p class="mb-0">{length}</p>
                            </div>
                        </div>
                    </li>
                    <li class="list-inline-item mr-4 mb-3 mb-sm-0">
                        <div class="d-flex align-items-center">
                            <i class="ti-timer text-primary icon-md mr-2"></i>
                            <div class="text-left">
                                <h6 class="mb-0">{weekly}</h6>
                                <p class="mb-0">{hours}</p>
                            </div>
                        </div>
                    </li>
                    <li class="list-inline-item mr-4 mb-3 mb-sm-0">
                        <div class="d-flex align-items-center">
                            <i class="ti-wallet text-primary icon-md mr-2"></i>
                            <div class="text-left">
                                <h6 class="mb-0">{fee}</h6>
                                <p class="mb-0">{cost}</p>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
            <div class="col-xl-3 text-sm-right text-left order-sm-2 order-3 order-xl-3 col-sm-6 mb-4 mb-xl-0">
                <a href="{apply.url}" class="btn btn-primary">{apply.title}</a>
            </div>
            <div class="col-12 mt-4 order-4">
                <div class="border-bottom border-primary"></div>
            </div>
        </div>
        <div class="row">
            <div class="col-12 mb-4 content">
                <h3 id="about-course">{subtitle}</h3>
                <p>{body}</p>
            </div>
            <div class="col-12">
                <h5 class="mb-3">{trainer.type}</h5>
                <div class="d-flex justify-content-between align-items-center flex-wrap">
                    {#if teacher}
                    <div class="media mb-2 mb-sm-0 align-items-center">
                        <img class="mr-4 img-fluid teacher-thumb-sm" src="{teacher.fields.image.src}" alt="{teacher.fields.image.alt}">
                        <div class="media-body">
                            <h4 class="mt-0">
                                <a href="{teacher.path}">
                                    {teacher.fields.title}
                                </a>
                            </h4>
                            {teacher.fields.category}
                        </div>
                    </div>
                    {/if}
                    <div class="social-link">
                        <h6 class="d-none d-sm-block text-right">{socials.title}</h6>
                        <ul class="list-inline">
                            <li class="list-inline-item"><a class="d-inline-block text-light p-1" href="mailto:{socials.email}"><i class="ti-email"></i></a></li>
                            <li class="list-inline-item"><a class="d-inline-block text-light p-1" href="tel:{socials.mobile}"><i class="ti-mobile"></i></a></li>
                            <li class="list-inline-item"><a class="d-inline-block text-light p-1" href="{socials.facebook}"><i class="ti-facebook"></i></a></li>
                            <li class="list-inline-item"><a class="d-inline-block text-light p-1" href="{socials.twitter}"><i class="ti-twitter-alt"></i></a></li>
                            <li class="list-inline-item"><a class="d-inline-block text-light p-1" href="{socials.skype}"><i class="ti-skype"></i></a></li>
                            <li class="list-inline-item"><a class="d-inline-block text-light p-1" href="{socials.web}"><i class="ti-world"></i></a></li>
                            <li class="list-inline-item"><a class="d-inline-block text-light p-1" href="{socials.location}"><i class="ti-location-pin"></i></a></li>
                        </ul>
                    </div>
                </div>
                <div class="border-bottom border-primary mt-4"></div>
            </div>
        </div>
    </div>
</section>

<section class="section pt-0">
    <div class="container">
        <div class="row">
            <div class="col-12">
                <h2 class="section-title">Other Courses</h2>
                    </div>
                        </div>
                    <div class="row">
                    {#each courses as course, i}
                    {#if courses && i < 3}
                    <div class="col-lg-4 col-sm-6 mb-5">
                        <div class="card p-0 border-primary rounded-0 hover-shadow">
                            <img class="card-img-top rounded-0" src="assets{course.fields.image.src}" alt="{course.fields.image.alt}">
                            <div class="card-body">
                            <ul class="list-inline mb-2">
                            <li class="list-inline-item"><i class="ti-calendar"></i> {course.fields.length}</li>
                            <li class="list-inline-item"><i class="ti-bookmark-alt"></i> {course.fields.category}</li>
                            </ul>
                            <h4 class="card-title"><a href="{course.path}">{course.fields.title}</a></h4>
                            <p class="card-text mb-4">{course.fields.body.substring(0, 120).replace(/(<([^>]+)>)/gi, "")}</p>
                            <a href="{course.path}" class="btn btn-primary btn-sm">{course.fields.link.title}</a>
                            </div>
                        </div>
                    </div>
                {/if}
            {/each}
        </div>
    </div>
</section>
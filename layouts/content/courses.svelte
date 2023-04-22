<script>
  export let course,
    bodyText1,
    description,
    list1,
    list2,
    subText1,
    subText2,
    subText3,
    button,
    trainer,
    image,
    socials,
    headerImage,
    header,
    allContent,
    content;
  /*  let courses;
    $: if (content) {
      courses = allContent.filter(c => c.type === "courses" && c.filepath !== content.filepath);
    } */
  let courses = allContent.filter(
    (c) => c.type === "courses" && c.filepath !== content.filepath
  );
  let teacher;
  $: if (content) {
    teacher = allContent.filter(
      (content) =>
        content.type === "teachers" && content.fields.name === trainer.name
    )[0];
  }
  const shuffle = (array) => {
    let currentIndex = array.length,
      randomIndex;
    // While there remain elements to shuffle.
    while (currentIndex != 0) {
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }
    return array;
  };
  courses = shuffle(courses);
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
            <a class="text-primary font-secondary" href="/">Home</a>
          </li>
          <li class="list-inline-item h5">
            <i class="ti-angle-right text-white" />
          </li>
          <li class="list-inline-item text-white h3 font-secondary">{course.title}</li>
        </ul>
        <p class="text-lighten">{header.text}</p>
      </div>
    </div>
  </div>
</section>
<section class="section-sm">
  <div class="container">
    <div class="row">
      <div class="col-12 mb-4">
        <img
          style="height:500px;width:100%;object-fit:cover"
          alt={image.altText}
          src={image.source}
          class="img-fluid w-100"
        />
      </div>
    </div>
    <div class="row align-items-center mb-5">
      <div class="col-xl-3 order-1 col-sm-6 mb-4 mb-xl-0">
        <h2>{course.title}</h2>
        <h6 class="text-color">{course.category}</h6>
      </div>
      <div class="col-xl-6 order-sm-3 order-xl-2 col-12 order-2">
        <ul class="list-inline text-xl-center">
          <li class="list-inline-item mr-4 mb-3 mb-sm-0">
            <div class="d-flex align-items-center">
              <i class="ti-calendar text-primary icon-md mr-2" />
              <div class="text-left">
                <h6 class="mb-0">{course.duration}</h6>
                <p class="mb-0">{course.length}</p>
              </div>
            </div>
          </li>
          <li class="list-inline-item mr-4 mb-3 mb-sm-0">
            <div class="d-flex align-items-center">
              <i class="ti-timer text-primary icon-md mr-2" />
              <div class="text-left">
                <h6 class="mb-0">{course.week}</h6>
                <p class="mb-0">{course.hours}</p>
              </div>
            </div>
          </li>
          <li class="list-inline-item mr-4 mb-3 mb-sm-0">
            <div class="d-flex align-items-center">
              <i class="ti-wallet text-primary icon-md mr-2" />
              <div class="text-left">
                <h6 class="mb-0">{course.fee}</h6>
                <p class="mb-0">{course.cost}</p>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <div
        class="col-xl-3 text-sm-right text-left order-sm-2 order-3 order-xl-3 col-sm-6 mb-4 mb-xl-0"
      >
        <a href={button.url} class="btn btn-primary">{button.title}</a>
      </div>
      <div class="col-12 mt-4 order-4">
        <div class="border-bottom border-primary" />
      </div>
    </div>
    <div class="row">
      <div class="col-12 mb-4 content">
        <h3 id="about-course">{bodyText1.title}</h3>
        <p>{bodyText1.description}</p>
        <h3 id="requirements">{subText1.title}</h3>
        <ul>
          {#each list1 as l}
          <li>{@html l.item}</li>
        {/each}
        </ul>
        <h3 id="how-to-apply">{subText2.title}</h3>
        <ul>
          {#each list2 as l}
          <li>{@html l.item}</li>
        {/each}
        </ul>
        <h3 id="fees-and-funding">{subText3.title}</h3>
        {#each description as d}
          <p>{@html d.paragraph}</p>
        {/each}
      </div>
      <div class="col-12">
        <h5 class="mb-3">{trainer.type}</h5>
        <div
          class="d-flex justify-content-between align-items-center flex-wrap"
        >
          {#if teacher}
            <div class="media mb-2 mb-sm-0 align-items-center">
              <a href={teacher.path}>
                <img
                  class="mr-4 img-fluid teacher-thumb-sm"
                  src={teacher.fields.image.source}
                  alt={teacher.fields.image.altText}
                /></a
              >
              <div class="media-body">
                <h4 class="mt-0">
                  <a href={teacher.path}>
                    {teacher.fields.name}
                  </a>
                </h4>
                {teacher.fields.category}
              </div>
            </div>
          {/if}
          <div class="social-link">
            <h6 class="d-none d-sm-block text-right">{socials.title}</h6>
            <ul class="list-inline">
              <li class="list-inline-item">
                <a
                  class="d-inline-block text-light p-1"
                  href="mailto:{socials.email}"><i class="ti-email" /></a
                >
              </li>
              <li class="list-inline-item">
                <a
                  class="d-inline-block text-light p-1"
                  href="tel:{socials.mobile}"><i class="ti-mobile" /></a
                >
              </li>
              <li class="list-inline-item">
                <a class="d-inline-block text-light p-1" href={socials.facebook}
                  ><i class="ti-facebook" /></a
                >
              </li>
              <li class="list-inline-item">
                <a class="d-inline-block text-light p-1" href={socials.twitter}
                  ><i class="ti-twitter-alt" /></a
                >
              </li>
              <li class="list-inline-item">
                <a class="d-inline-block text-light p-1" href={socials.skype}
                  ><i class="ti-skype" /></a
                >
              </li>
              <li class="list-inline-item">
                <a class="d-inline-block text-light p-1" href={socials.web}
                  ><i class="ti-world" /></a
                >
              </li>
              <li class="list-inline-item">
                <a class="d-inline-block text-light p-1" href={socials.location}
                  ><i class="ti-location-pin" /></a
                >
              </li>
            </ul>
          </div>
        </div>
        <div class="border-bottom border-primary mt-4" />
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
      {#if courses}
        {#each courses as course, i}
          {#if i < 3}
            <div class="col-lg-4 col-sm-6 mb-5">
              <div class="card p-0 border-primary rounded-0 hover-shadow">
                <a href={course.path}
                  ><img
                    class="card-img-top rounded-0"
                    src={course.fields.image.source}
                    alt={course.fields.image.altText}
                  /></a
                >
                <div class="card-body">
                  <ul class="list-inline mb-2">
                    <li class="list-inline-item">
                      <i class="ti-calendar" />
                      {course.fields.course.length}
                    </li>
                    <li class="list-inline-item">
                      <i class="ti-bookmark-alt" />
                      {course.fields.course.category}
                    </li>
                  </ul>
                  <h4 class="card-title">
                    <a href={course.path}>{course.fields.course.title}</a>
                  </h4>
                  <p class="card-text mb-4">
                    {course.fields.bodyText1.description
                      .substring(0, 120)
                      .replace(/(<([^>]+)>)/gi, "")}
                  </p>
                  <a href={course.path} class="btn btn-primary btn-sm"
                    >{course.fields.link.title}</a
                  >
                </div>
              </div>
            </div>
          {/if}
        {/each}
      {/if}
    </div>
  </div>
</section>

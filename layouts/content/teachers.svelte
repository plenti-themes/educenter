<script>
  export let title,
    headerImage,
    header,
    headerText,
    image,
    category,
    introText,
    contact,
    facebook,
    skype,
    twitter,
    interests,
    activity,
    descriptionTitle,
    description,
    coursesFeature,
    allContent;
  let course = allContent.filter(
    (content) =>
      content.type === "courses" && content.fields.trainer.name === title)[0];
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
          <li class="list-inline-item text-white h3 font-secondary">{title}</li>
        </ul>
        <p class="text-lighten">{headerText}</p>
      </div>
    </div>
  </div>
</section>

<section class="section">
  <div class="container">
    <div class="row">
      <div class="col-md-5 mb-5">
        <img class="img-fluid w-100" src={image.source} alt={image.altText} />
      </div>
      <div class="col-md-6 mb-5">
        <h3>{title}</h3>
        <h6 class="text-color">{category}</h6>
        <p class="mb-5">{introText}</p>
        <div class="row">
          <div class="col-md-6 mb-5 mb-md-0">
            <h4 class="mb-4">{contact.title}</h4>
            <ul class="list-unstyled">
              <li class="mb-3">
                <a class="text-color" href="mailto:{contact.email}"
                  ><i class="ti-email mr-2" />{contact.email}</a
                >
              </li>
              <li class="mb-3">
                <a class="text-color" href="tel:{contact.phone}"
                  ><i class="ti-mobile mr-2" />{contact.phone}</a
                >
              </li>
              <li class="mb-3">
                <a class="text-color" href={facebook.url}
                  ><i class="ti-facebook mr-2" />{facebook.handle}</a
                >
              </li>
              <li class="mb-3">
                <a class="text-color" href={twitter.url}
                  ><i class="ti-twitter-alt mr-2" />{twitter.handle}</a
                >
              </li>
              <li class="mb-3">
                <a class="text-color" href={skype.url}
                  ><i class="ti-skype mr-2" />{skype.handle}</a
                >
              </li>
              <li class="mb-3">
                <a class="text-color" href={contact.website}
                  ><i class="ti-world mr-2" />{contact.website}</a
                >
              </li>
              <li class="mb-3">
                <a class="text-color" href={contact.address}
                  ><i class="ti-location-pin mr-2" />{contact.address}</a
                >
              </li>
            </ul>
          </div>
          <div class="col-md-6">
            <h4 class="mb-4">{activity.title}</h4>
            <ul class="list-unstyled">
            {#each interests as l}
              <li class="mb-3">{@html l.item}</li>
            {/each}
          </ul>
          </div>
        </div>
      </div>
      <div class="col-12 content">
        <h3 id="about-me">{descriptionTitle}</h3>
        {#each description as d}
          <p>{@html d.paragraph}</p>
        {/each}
      </div>
    </div>
    <div class="row">
        {#if course}
          <div class="col-12">
            <h4 class="mb-4">{coursesFeature}</h4>
          </div>
          <div class="col-lg-4 col-sm-6 mb-5">
            <div class="card p-0 border-primary rounded-0 hover-shadow">
              <a href="{course.path}"><img
                class="card-img-top rounded-0"
                src={course.fields.image.source}
                alt={course.fields.image.altText}
              /></a>
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
      </div>
    </div>
</section>

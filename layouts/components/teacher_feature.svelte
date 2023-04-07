<script>
  export let title, allContent;
  let teachers = allContent.filter((content) => content.type === "teachers");
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
  teachers = shuffle(teachers);
  // selectedCategory == Object(category.filter((key) => key.name == content.fields.name)[0])
</script>

<section class="section">
  <div class="container">
    <div class="row">
      <div class="col-12">
        <h2 class="section-title">{title}</h2>
      </div>
    </div>
    <div class="row justify-content-center">
      <!-- {#each allContent.filter(content => content.type == "teachers") as teacher} -->
      {#each teachers as teacher, i}
        {#if i < 3}
          <div class="col-lg-4 col-sm-6 mb-5 mb-lg-0">
            <div class="card border-0 rounded-0 hover-shadow mb-5">
              <a href="{teacher.path}"><img
                class="card-img-top rounded-0"
                src={teacher.fields.image.source}
                alt={teacher.fields.image.altText}
              /></a>
              <div class="card-body">
                <h4 class="card-title">
                  <a href={teacher.path}>{teacher.fields.name}</a>
                </h4>
                <p>{teacher.fields.category}</p>
                <ul class="list-inline">
                  <li class="list-inline-item">
                    <a
                      class="text-color"
                      href="mailto:{teacher.fields.contact.email}"
                      ><i class="ti-email" /></a
                    >
                  </li>
                  <li class="list-inline-item">
                    <a
                      class="text-color"
                      href="tel:{teacher.fields.contact.phone}"
                      ><i class="ti-mobile" /></a
                    >
                  </li>
                  <li class="list-inline-item">
                    <a class="text-color" href={teacher.fields.facebook.url}
                      ><i class="ti-facebook" /></a
                    >
                  </li>
                  <li class="list-inline-item">
                    <a class="text-color" href={teacher.fields.twitter.url}
                      ><i class="ti-twitter-alt" /></a
                    >
                  </li>
                  <li class="list-inline-item">
                    <a class="text-color" href={teacher.fields.skype.url}
                      ><i class="ti-skype" /></a
                    >
                  </li>
                  <li class="list-inline-item">
                    <a class="text-color" href={teacher.fields.contact.website}
                      ><i class="ti-world" /></a
                    >
                  </li>
                  <li class="list-inline-item">
                    <a class="text-color" href={teacher.fields.contact.address}
                      ><i class="ti-location-pin" /></a
                    >
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

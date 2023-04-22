<script>
    export let headerImage, title, headerText, publish, bodyText1, bodyText2, bodyText3, list, description, download;
</script>
<section class="page-title-section overlay" style="background-image:url({headerImage.url}),url({headerImage.url})">
    <div class="container">
        <div class="row">
            <div class="col-md-8">
            <ul class="list-inline custom-breadcrumb">
            <li class="list-inline-item h2"><a class="text-primary font-secondary"  href="/">Home</a></li>
            <li class="list-inline-item h5"><i class="ti-angle-right text-white"></i></li>
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
            <div class="col-12">
                <div class="d-flex">
                    <div class="text-center mr-4">
                    <div class="p-4 bg-primary text-white">
                    <span class="h2 d-block">{publish.day}</span> {publish.date}
                    </div>
                    </div>
                    <div class="content">
                    <h3 id="about-notice">{bodyText1.title}</h3>
                    <p>{bodyText1.description}</p>
                    <h3 id="requirements">{bodyText2.title}</h3>
                    <ul>
                    {#each list as l}
                    <li>{@html l.item}</li>
                    {/each}
                    <h3 id="fees-and-funding">{bodyText3.title}</h3>
                    {#each description as d}
                    <p>{@html d.paragraph}</p>
                    {/each}
                    <a href="." class="btn btn-primary">{download.title}</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
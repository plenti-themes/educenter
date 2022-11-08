<script>
    export let headimage, home, title, tbody, publish, para1title, para1, para2title, para2, para3title, para3, download;
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
                    <h3 id="about-notice">{para1title}</h3>
                    <p>{para1}</p>
                    <h3 id="requirements">{para2title}</h3>
                    <ul>
                    <li>{para2.item1}</li>
                    <li>{para2.item2}</li>
                    <li>{para2.item3}</li>
                    <li>{para2.item4}</li>
                    </ul>
                    <h3 id="fees-and-funding">{para3title}</h3>
                    <p>{para3}</p>
                    <a href="." class="btn btn-primary">{download.title}</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
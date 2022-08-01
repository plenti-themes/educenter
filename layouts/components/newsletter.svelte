<script>
    export let title, placeholder, form;
</script>
<div class="newsletter">
    <div class="container">
        <div class="row">
            <div class="col-md-9 ml-auto bg-primary py-5 newsletter-block">
                <h3 class="text-white mb-4">{title}</h3>
                    <form action="{form.url}" method="post" name="mc-embedded-subscribe-form" target="_blank">
                        <div class="input-wrapper">
                        <input type="email" class="form-control border-0" id="newsletter" name="newsletter" placeholder="{placeholder}">
                        <button type="submit" name="subscribe" class="btn btn-primary">{form.title}</button>
                            <div style="position:absolute;left:-5000px" aria-hidden="true">
                            <input type="text" name="b_463ee871f45d2d93748e77cad_a0a2c6d074" tabindex="-1">
                            </div>
                        </div>
                    </form>
            </div>
        </div>
    </div>
</div>
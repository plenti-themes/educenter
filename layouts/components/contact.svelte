<script>
    // import { PageTitle } from '.page_title.svelte';
    export let title, description, contact, button, form;
</script>
<section class="section bg-gray">
    <div class="container">
        <div class="row">
            <div class="col-lg-12">
            <h2 class="section-title">{title}</h2>
            </div>
            </div>
            <div class="row">
            <div class="col-lg-7 mb-4 mb-lg-0">
            <form action="#" method="post">
            <input type="text" class="form-control mb-3" id="name" name="name" placeholder="{form.name}">
            <input type="email" class="form-control mb-3" id="mail" name="mail" placeholder="{form.email}">
            <input type="text" class="form-control mb-3" id="subject" name="subject" placeholder="{form.subject}">
            <textarea name="message" id="message" class="form-control mb-3" placeholder="{form.message}"></textarea>
            <button type="submit" value="send" class="btn btn-primary">{button.text}</button>
            </form>
            </div>
            <div class="col-lg-5 content">
            <p>{@html description}</p>
            <a href="tel:+211234565523" class="text-color h5 d-block">{contact.phone}</a>
            <a href="mailto:info@educenter.com" class="mb-4 text-color h5 d-block">{contact.email}</a>
            <p>{contact.address}</p>
            </div>
        </div>
    </div>
</section>
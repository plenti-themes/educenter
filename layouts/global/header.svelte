<script>
    let y;
</script>

<svelte:window bind:scrollY={y} />

<!-- top header -->
<div class="top-header py-2 bg-white{y > 50 ? ' hide' : ''}">
    <div class="container">
        <div class="row no-gutters align-items-center">
            <div class="col-lg-4 text-center text-lg-left">
                <ul class="list-inline">
                    <li class="list-inline-item mx-0">
                        <a class="d-inline-block p-2 text-color" href="."
                            ><i class="ti-facebook" /></a
                        >
                    </li>
                    <li class="list-inline-item mx-0">
                        <a class="d-inline-block p-2 text-color" href="."
                            ><i class="ti-twitter-alt" /></a
                        >
                    </li>
                    <li class="list-inline-item mx-0">
                        <a class="d-inline-block p-2 text-color" href="."
                            ><i class="ti-instagram" /></a
                        >
                    </li>
                    <li class="list-inline-item mx-0">
                        <a class="d-inline-block p-2 text-color" href="."
                            ><i class="ti-github" /></a
                        >
                    </li>
                    <li class="list-inline-item mx-0">
                        <a class="d-inline-block p-2 text-color" href="."
                            ><i class="ti-linkedin" /></a
                        >
                    </li>
                </ul>
            </div>
            <div class="col-lg-8 text-center text-lg-right">
                <ul class="list-inline">
                    <li class="list-inline-item">
                        <a class="text-color mr-3" href="tel:+211234565523"
                            ><strong>CALL : </strong> +211234565523</a
                        >
                    </li>
                    <li class="list-inline-item">
                        <a class="text-color" href="mailto:info@educenter.com"
                            ><strong>EMAIL : </strong> info@educenter.com</a
                        >
                    </li>
                </ul>
            </div>
        </div>
    </div>
</div>

<script>
     export let user;
</script>
<!-- navbar -->
<nav class="navbar navbar-expand-lg navbar-dark p-0">
    <a class="navbar-brand" href="/educenter/site/"><img class="img-fluid" src="/assets/logo.png" alt="Educenter | hugo education template"></a>
    <button class="navbar-toggler rounded-0" type="button" data-toggle="collapse" data-target="#navigation" aria-controls="navigation" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse text-center" id="navigation">
        <ul class="navbar-nav ml-auto">
            <li class="nav-item">
                <a class="nav-link" href=".">Home</a>
             </li>
            <li class="nav-item">
                <a class="nav-link" href="/aboutus/">About</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="/courses/">courses</a>
            </li>
            <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="." role="button" data-toggle="dropdown">
            Pages</a>
    <div class="dropdown-menu">
        <a class="dropdown-item" href="/events/">events</a>
        <a class="dropdown-item" href="/notices/">notices</a>
        <a class="dropdown-item" href="/research/">research</a>
        <a class="dropdown-item" href="/scholarships/">scholarships</a>
        <a class="dropdown-item" href="/teachers/">teachers</a>
    </div>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="/blog/">blog</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="/contact/">contact</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="." on:click={$user.login}>login</a>
            </li>
        </ul>
            <select class="m-2 border-0 mb-5 mb-lg-2" id="select-language" onchange="location=this.value"><option id="en" value="." selected="">En
        </option><option id="fr" value="https://demo.gethugothemes.com/educenter/site/fr/">Fr</option></select>
    </div>
</nav>
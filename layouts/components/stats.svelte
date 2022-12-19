<script>
    export let teachers, courses, students, satisfied;
</script>
<section class="section-sm bg-primary">
    <div class="container">
        <div class="row">
            <div class="col-md-3 col-sm-6 mb-4 mb-md-0">
                <div class="text-center">
                <h2 class="count text-white" data-count="60">{teachers.amount}</h2>
                <h5 class="text-white">{teachers.title}</h5>
                </div>
            </div>
            <div class="col-md-3 col-sm-6 mb-4 mb-md-0">
                <div class="text-center">
                <h2 class="count text-white" data-count="50">{courses.amount}</h2>
                <h5 class="text-white">{courses.title}</h5>
                </div>
            </div>
            <div class="col-md-3 col-sm-6 mb-4 mb-md-0">
                <div class="text-center">
                <h2 class="count text-white" data-count="1000">{students.amount}</h2>
                <h5 class="text-white">{students.title}</h5>
                </div>
            </div>
            <div class="col-md-3 col-sm-6 mb-4 mb-md-0">
                <div class="text-center">
                <h2 class="count text-white" data-count="1400">{satisfied.amount}</h2>
                <h5 class="text-white">{satisfied.title}</h5>
                </div>
            </div>
        </div>
    </div>
</section>
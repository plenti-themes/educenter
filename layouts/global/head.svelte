<script>
  export let title, env;
</script>

<head>
  <meta charset='utf-8'>
  <meta name='viewport' content='width=device-width,initial-scale=1'>

  <title>{ title }</title>

  <base href="{ env.local ? '/' : env.baseurl }">
  <script type="module" src="/spa/ejected/main.js"></script>
<!-- CSS only -->
<link rel="stylesheet" href="/assets/themify-icons/themify-icons.css">
<!--
<link href="https://cdn.jsdelivr.net/npm/bootstrap@4.4.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx" crossorigin="anonymous">
-->
  <link rel="icon" type="image/svg+xml" href="/assets/logo.svg">
  <link rel='stylesheet' href='/spa/bundle.css'>
  <link rel='stylesheet' href='/assets/global.css'>
</head>

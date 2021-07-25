<template>
<header class="echo-p-header" role="banner">
    <div class="echo-container">
        <div class="echo-p-header-contents">

            <p class="echo-p-header-title echo-title echo-title-level-5"><a href="/">{{ title }}</a></p>

        </div><!-- /.echo-p-header-contents -->
    </div><!-- /.echo-container -->
</header><!-- /.echo-p-header -->
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: 'Minecraft Movies',
    },
  },
}
</script>

<style scoped>
.echo-p-header-contents {
    min-height: 2.75rem;
}
.echo-p-header-title {
    color: #999;
    font-family: 'Press Start 2P', sans-serif;
    text-shadow:
        -.05em .05em 0 #000,
        .05em -.05em 0 #000,
        -.05em -.05em 0 #000,
        .15em .15em 0 #000;
    letter-spacing: -.05em;
    text-transform: uppercase;
}
.echo-p-header-title a {
    color: #999;
    text-decoration: none;
}
</style>
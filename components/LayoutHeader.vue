<template>
<header class="echo-p-header" role="banner">
    <div class="echo-container">
        <div class="echo-p-header-contents">

            <h1 class="echo-p-header-title echo-title echo-title-level-5"><a href="#">{{ title }}</a></h1>

            <div class="echo-p-header-nav" role="navigation">
                <nav class="echo-nav echo-nav-sm">
                    <ul class="echo-nav-list">
                        <li class="echo-nav-item">
                            <a href="#" class="echo-nav-label">このサイトについて</a>
                        </li>
                    </ul><!-- /.echo-nav-list -->
                </nav><!-- /.echo-nav -->
            </div><!-- /.echo-p-header-nav -->

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
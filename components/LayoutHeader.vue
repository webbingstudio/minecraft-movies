<template>
<header class="echo-p-header" role="banner">
    <div class="echo-container">
        <div class="echo-p-header-contents">

            <h1 class="echo-p-header-title"><a href="#">{{ title }}</a></h1>

            <div class="echo-p-header-nav" role="navigation">
                <nav class="echo-nav">
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
      default: 'マインクラフトムービーズ',
    },
  },
}
</script>

<style scoped>
</style>
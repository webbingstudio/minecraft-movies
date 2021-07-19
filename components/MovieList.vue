<template>
<section class="echo-container">
    <div class="echo-cards">
        <div class="echo-cards-item">
            <article class="echo-card echo-card-sm">
                <a href="#" class="echo-card-inner">
                    <div class="echo-card-object">
                        <figure class="echo-thumbnail echo-thumbnail-16to9">
                            <picture>
                            <source
                                media="(max-width:640px)"
                                srcset="/images/_dummy/image_02_s.jpg 640w"
                                sizes="100vw">
                            <source
                                srcset="/images/_dummy/image_02.jpg 1280w"
                                sizes="(max-width:1280px) 100vw, 1280px">
                            <img src="/images/_dummy/image_02.jpg" alt="">
                            </picture>
                        </figure><!-- /.echo-thumbnail -->
                    </div><!-- /.echo-card-object -->
                    <div class="echo-card-contents">
                        <h2 class="echo-card-title echo-title echo-title-level-6 echo-title-style-a">よくあるカラムレイアウトの例です</h2>
                        <time class="echo-card-meta echo-text-right echo-text-sm" datetime="2020-12-28T09:00:00+09:00">2020.12.28</time>
                    </div><!-- /.echo-card-contents -->
                </a><!-- /.echo-card-innner -->
            </article><!-- /.echo-card -->
        </div><!-- /.echo-cards-item -->
    </div><!-- /.echo-cards -->
</section>
</template>

<script>
export default {
}
</script>

<style scoped>
</style>
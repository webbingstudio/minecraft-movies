<template>
<div :class="wrapClass" class="echo-p-pagehead">
    <div class="echo-hero echo-hero-fit echo-hero-inverse">
        <div class="echo-hero-image">
            <picture v-if="eyecatchLg && eyecatchSm">
                <source
                    media="(max-width:640px)"
                    :srcset="eyecatchSmUrl + ' 640w'"
                    sizes="100vw">
                <source
                    srcset="eyecatchLgUrl + ' 100vw'"
                    sizes="100vw">
                <img
                    :src="eyecatchLgUrl"
                    :alt="'「' + title + '」のサムネイル'"
                >
            </picture>
            <img
                v-if="eyecatchLg && !eyecatchSm"
                :src="eyecatchLgUrl"
                :alt="'「' + title + '」のサムネイル'"
            />
        </div><!-- /.echo-hero-image -->
        <div class="echo-hero-contents">
            <div class="echo-hero-contents-inner">
                <div class="echo-hero-header">
                    <h1 :class="titleClass" class="echo-p-pagehead-title echo-hero-title echo-title">本文には画像がありませんがアイキャッチ画像を指定しているエントリーです</h1>
                </div><!-- /.echo-hero-header -->
                <div class="echo-hero-body">
                    <time class="echo-p-pagehead-meta" datetime="2021-01-20T09:24:00+09:00">2021.01.20</time>
                </div><!-- /.echo-hero-body -->
            </div><!-- /.echo-hero-contents-inner -->
        </div><!-- /.echo-hero-contents -->
    </div><!-- /.echo-hero -->
</div><!-- /.echo-p-pagehead -->
</template>

<script>
export default {
  props: {
    wrapClass: {
      type: String,
      default: 'echo-margin-bottom-lg echo-p-pagehead-displayed echo-p-pagehead-darken echo-p-pagehead-blended',
    },
    titleClass: {
      type: String,
      default: 'echo-title-level-4',
    },
    id: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
      default: '',
    },
    date: {
      type: String,
      required: true,
      default: '',
    },
    eyecatchLg: {
      type: String,
      required: true,
      default: null
    },
    eyecatchSm: {
      type: String,
      required: true,
      default: null
    },
    eyecatchLgUrl: {
      type: String,
      default: null
    },
    eyecatchSmUrl: {
      type: String,
      default: null
    }
  },
}
</script>

<style scoped>
.echo-p-pagehead-title {
    font-weight: 600;
    text-shadow: .05em .05em 0 #000;
}
.echo-p-pagehead-meta {
    color: #fff;
    font-family: 'Press Start 2P', sans-serif;
    text-shadow: .1em .1em 0 #000;
}
.echo-p-pagehead .echo-hero-fit .echo-hero-image {
    padding-bottom: 75%;
}
@media (min-width: 62.5rem) {
.echo-p-pagehead .echo-hero-fit .echo-hero-image {
    padding-bottom: 25%;
}
}
.echo-p-pagehead .echo-hero-fit .echo-hero-image {
    opacity: .5;
}
</style>

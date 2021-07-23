<template>
<div :class="wrapClass" class="echo-p-pagehead">
    <div class="echo-hero echo-hero-fit echo-hero-inverse">
        <div class="echo-hero-image">
            <picture>
                <source
                    v-if="eyecatchSmUrl"
                    media="(max-width:640px)"
                    :srcset="eyecatchSmUrl + ' 640w'"
                    sizes="100vw">
                <source
                    v-else
                    media="(max-width:640px)"
                    :srcset="'https://img.youtube.com/vi/' + youtubeId + '/mqdefault.jpg 640w'"
                    sizes="100vw">
                <source
                    v-if="eyecatchLgUrl"
                    :srcset="eyecatchLgUrl + ' 100vw'"
                    sizes="100vw">
                <source
                    v-else
                    :srcset="'https://img.youtube.com/vi/' + youtubeId + '/maxresdefault.jpg 100vw'"
                    sizes="100vw">
                <img
                    v-if="eyecatchLgUrl"
                    :src="eyecatchLgUrl"
                    :alt="'「' + title + '」のサムネイル'"
                >
                <img
                    v-else
                    :src="'https://img.youtube.com/vi/' + youtubeId + '/maxresdefault.jpg'"
                    :alt="'「' + title + '」のサムネイル'"
                >
            </picture>
            <img
                v-if="eyecatchLgUrl && !eyecatchSmUrl"
                :src="eyecatchLgUrl"
                :alt="'「' + title + '」のサムネイル'"
            />
        </div><!-- /.echo-hero-image -->
        <div class="echo-hero-contents">
            <div class="echo-hero-contents-inner">
                <div class="echo-hero-header">
                    <h1 :class="titleClass" class="echo-p-pagehead-title echo-hero-title echo-title">{{ title }}</h1>
                </div><!-- /.echo-hero-header -->
                <div class="echo-hero-body">
                    <p v-if="body">{{ body }}</p>
                    <time v-if="date" class="echo-p-pagehead-meta" :datetime="date">{{ date | formatDate }}</time>
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
    youtubeId: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
      default: '',
    },
    body: {
      type: String,
      default: '',
    },
    date: {
      type: String,
      default: '',
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
    height: 15rem;
    padding-bottom: 0;
}
@media (min-width: 26.75rem) {
.echo-p-pagehead .echo-hero-fit .echo-hero-image {
    padding-bottom: 50%;
}
}
@media (min-width: 48rem) {
.echo-p-pagehead .echo-hero-fit .echo-hero-image {
    padding-bottom: 25%;
}
}
.echo-p-pagehead .echo-hero-fit .echo-hero-image {
    opacity: .25;
}
.echo-p-pagehead .echo-hero-fit .echo-hero-image img {
    width: 120%;
    height: 200%;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%)  rotate(-10deg);
    transform-origin: center;
    object-position: top center;
}
</style>

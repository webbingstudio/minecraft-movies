<template>
<div :class="itemClass" class="echo-cards-item">
    <article :class="postClass" class="echo-card echo-card-sm echo-card-fixed">
        <a :href="'/post/' + id + '/'" class="echo-card-inner">
            <div class="echo-card-object">
                <figure class="echo-thumbnail echo-thumbnail-16to9">
                    <img
                        v-if="eyecatch"
                        :src="eyecatchUrl"
                        :alt="'「' + title + '」のサムネイル'"
                    />
                    <img
                        v-else
                        src="~/assets/images/noimage_16to9.jpg"
                        alt=""
                    />
                </figure><!-- /.echo-thumbnail -->
            </div><!-- /.echo-card-object -->
            <div class="echo-card-contents">
                <h2 :class="titleClass" class="echo-card-title echo-title">{{ title }}</h2>
                <time class="echo-card-meta echo-text-right echo-text-sm" datetime="date">{{ date | formatDate }}</time>
            </div><!-- /.echo-card-contents -->
        </a><!-- /.echo-card-innner -->
    </article><!-- /.echo-card -->
</div><!-- /.echo-cards-item -->
</template>

<script>
export default {
  props: {
    itemClass: {
      type: String,
      default: '',
    },
    postClass: {
      type: String,
      default: '',
    },
    titleClass: {
      type: String,
      default: 'echo-title-level-6 echo-title-style-a',
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
    eyecatch: {
      type: String,
      required: true,
      default: ''
    },
    eyecatchUrl: {
      type: String,
      default: '~/assets/images/noimage_16to9.jpg'
    }
  },
}
</script>

<style scoped>
</style>
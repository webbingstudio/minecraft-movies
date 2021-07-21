<template>
<div :class="itemClass" class="echo-cards-item">
    <article :class="postClass" class="echo-card echo-card-sm echo-card-fixed">
        <a :href="'/post/' + id + '/'" class="echo-card-inner">
            <div class="echo-card-object">
                <figure class="echo-thumbnail echo-thumbnail-16to9">
                    <img
                        v-if="eyecatchSmUrl"
                        :src="eyecatchSmUrl"
                        :alt="'「' + title + '」のサムネイル'"
                    />
                    <img
                        v-else-if="youtubeId"
                        :src="'https://img.youtube.com/vi/' + youtubeId + '/mqdefault.jpg'"
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
                <p class="echo-card-time"><span class="echo-label echo-label-style-a echo-text-md">{{ time }}</span></p>
            </div><!-- /.echo-card-contents -->
            <div class="echo-card-footer echo-padding-top-0">
                <div class="echo-card-meta">
                    <ul class="echo-list echo-list-horizontal echo-text-md">
                        <li class="echo-list-item"><time class="echo-card-date" datetime="date">{{ date | formatDate }}</time></li>
                    </ul>
                </div><!-- /.echo-card-meta -->
            </div><!-- /.echo-card-footer -->
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
    youtubeId: {
        type: String,
        default: ''
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
    time: {
        type: String,
        required: true,
        default: '',
    },
    eyecatchSm: {
        type: Object
    },
    eyecatchSmUrl: {
        type: String,
        default: ''
    }
  },
}
</script>

<style scoped>
.echo-card-contents {
    position: relative;
}
.echo-card-time {
    position: absolute;
    bottom: 100%;
    right: 0;
    margin: 0;
    z-index: 21;
}
.echo-card-time .echo-label {
    top: 0;
}
.echo-card-meta {
    width: 100%;
}
.echo-card-meta .echo-list {
    margin-right: -1em;
    justify-content: flex-end;
}
</style>
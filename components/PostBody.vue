<template>
<section :id="'post-' + id" :class="postClass" class="echo-p-post echo-container echo-container-xs">

    <div v-if="youtubeId" class="echo-p-post-header echo-margin-bottom-lg">
        <div class="echo-embed echo-embed-16to9">
          <iframe width="560" height="315" :src="'https://www.youtube.com/embed/' + youtubeId" :title="title" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
    </div><!-- /.echo-p-post-header -->

    <div class="echo-p-post-contents echo-body echo-body-fixed echo-text-sm echo-margin-bottom-lg">
        <!-- eslint-disable-next-line vue/no-v-html -->
        <div v-html="$options.filters.markdown(body)"></div>
    </div><!-- /.echo-p-post-contents -->

    <div class="echo-p-post-footer">
        <div v-if="tag" class="echo-p-post-tag echo-p-post-tag-all">
            <nav class="echo-labels">
                <dl class="echo-labels-list">
                    <dt class="echo-labels-header">Tags</dt>
                    <tag-list
                        v-for="(tag, index) in tag"
                        :id="tag.id"
                        :key="index"
                        :label="tag.label"
                    />
                </dl><!-- /.echo-labels-list -->
            </nav><!-- /.echo-labels -->
        </div><!-- /.echo-p-post-category -->
    </div><!-- /.echo-p-post-footer -->

</section><!-- /.echo-p-post -->
</template>

<script>
export default {
  props: {
    postClass: {
      type: String,
      default: 'echo-margin-y-lg',
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
    youtubeId: {
      type: String,
      default: '',
    },
    date: {
      type: String,
      required: true,
      default: '',
    },
    body: {
      type: String,
      required: true,
      default: '',
    },
    tag: {
      type: Array,
      default: null,
    }
  },
}
</script>

<style scoped>
.echo-p-post-tag .echo-labels-header {
    font-family: 'Press Start 2P', sans-serif;
    text-transform: uppercase;
}
</style>
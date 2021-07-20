<template>
<section :id="'post-' + id" :class="postClass" class="echo-p-post echo-container echo-container-xs">

    <div class="echo-p-post-contents echo-body echo-body-fixed echo-text-sm echo-margin-bottom-lg">
        <!-- eslint-disable-next-line vue/no-v-html -->
        <div v-html="body"></div>
    </div><!-- /.echo-p-post-contents -->

    <div class="echo-p-post-footer">
        <div class="echo-p-post-tag echo-p-post-tag-all">
            <nav class="echo-labels">
                <dl class="echo-labels-list">
                    <dt class="echo-labels-header">Tags</dt>
                    <dd class="echo-labels-item"><a href="#" class="echo-p-post-tag-label echo-label echo-label-style-a">たぐ</a></dd>
                    <dd class="echo-labels-item"><a href="#" class="echo-p-post-tag-label echo-label echo-label-style-a">たぐ</a></dd>
                    <dd class="echo-labels-item"><a href="#" class="echo-p-post-tag-label echo-label echo-label-style-a">たぐ</a></dd>
                    <dd class="echo-labels-item"><a href="#" class="echo-p-post-tag-label echo-label echo-label-style-a">たぐ</a></dd>
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
    tags: {
      type: String,
      required: true,
      default: '',
    }
  },
}
</script>

<style scoped>
</style>
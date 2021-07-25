<template>
<dd :class="itemClass" class="echo-labels-item">
    <a :href="`/tag/` + id + `/`" :class="labelClass" class="echo-label">
        {{ label }}
    </a>
</dd>
</template>

<script>
export default {
  props: {
    itemClass: {
        type: String,
        default: '',
    },
    labelClass: {
        type: String,
        default: 'echo-label-style-a',
    },
    id: {
        type: String,
        required: true,
    },
    label: {
        type: String,
        required: true,
        default: '',
    }
  },
}
</script>

<style scoped>
    .echo-label:before {
        content: '#';
    }
</style>
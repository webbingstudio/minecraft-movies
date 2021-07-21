import Vue from 'vue'
import marked from 'marked'

Vue.filter('markdown', (value) => {
  return marked(value)
})

<template>
  <editor v-model='content' :init='init' tag-name='div' />
</template>

<script>
import Editor from '@tinymce/tinymce-vue'

export default {
  props: {
    modelValue: String
  },
  components: {
    editor: Editor
  },
  emits: { 'update:modelValue': null },

  data() {
    return {
      content: this.modelValue
    }
  },
  mounted() {
  },
  watch: {
    content() {
      this.revert_data(this.content)
    }
  }
}
</script>

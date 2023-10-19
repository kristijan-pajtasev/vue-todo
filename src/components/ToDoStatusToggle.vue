<script>
import {defineComponent} from 'vue'

export default defineComponent({
  // type inference enabled
  props: {
    completed: Boolean
  },
  mounted() {},
  data() {
    return {
      status: this.$props.completed ? "Completed" : "Not completed"
    }
  },
  computed: {}
})
</script>

<template>
  <div>
    {{status}}
  </div>
</template>

<style scoped>
</style>
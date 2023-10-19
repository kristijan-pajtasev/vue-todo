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
    }
  },
  methods: {
    toggleCompleted() {
      this.$emit("toggle-completed")
    }
  },
  computed: {
    statusText() {
      return this.$props.completed ? "Completed" : "Not completed"
    }
  },
  emits: ['toggle-completed'],
})
</script>

<template>
  <div @click="toggleCompleted">
    {{statusText}}
  </div>
</template>

<style scoped>
</style>
<script>
import { defineComponent } from 'vue'

export default defineComponent({
  // type inference enabled
  props: {
  },
  mounted() {
    console.log("mounted")
  },
  data() {
    return {
      id: 1,
      text: "todo text",
      created: (new Date()).getTime(),
      updated: (new Date()).getTime(),
      completed: true
    }
  },
  computed: {
    displayCreatedDate(){ return new Date(this.created).toLocaleDateString()},
    displayUpdatedDate(){ return new Date(this.updated).toLocaleDateString()}
  }
})
</script>

<template>
  <div>item</div>
  <div>{{id}}</div>
  <div>{{text}}</div>
  <div>Created: {{displayCreatedDate}}</div>
  <div>Updated: {{displayUpdatedDate}}</div>
  <div>{{completed}}</div>
</template>

<style scoped>
</style>
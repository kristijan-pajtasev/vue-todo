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
      item: {
        id: 1,
        text: "todo text",
        created: (new Date()).getTime(),
        updated: (new Date()).getTime(),
        completed: true
      }
    }
  }
})
</script>

<template>
  <div>item</div>
  <div>{{item.id}}</div>
  <div>{{item.text}}</div>
  <div>{{item.created}}</div>
  <div>{{item.updated}}</div>
  <div>{{item.completed}}</div>
</template>

<style scoped>
</style>
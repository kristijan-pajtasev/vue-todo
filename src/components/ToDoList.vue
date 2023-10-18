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
      items: [
        {text: "1 item", id: 1},
        {text: "2 item", id: 2},
        {text: "3 item", id: 3}
      ]
    }
  },
  methods: {
    goToDetails(id) {
      console.log("go to details " + id)
      this.$router.push({name: "item", params: {id: id}})
    }
  }
})
</script>

<template>
  <div>todo list</div>
  <ul>
    <li v-for="item in items" :key="item.id" @click="goToDetails(item.id)">
      <div>{{item.text}}</div>
    </li>
  </ul>
</template>

<style scoped>
</style>
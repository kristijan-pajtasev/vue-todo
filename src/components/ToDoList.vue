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
    console.log(this.$store.state.items)
    return {
      items: this.$store.state.items
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
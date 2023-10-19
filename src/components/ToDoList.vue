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
  <ul class="ToDoList">
    <li class="ToDoList__itemContainer" v-for="item in items" :key="item.id">
      <div class="ToDoList__item" @click="goToDetails(item.id)">{{item.text}}</div>
    </li>
  </ul>
</template>

<style scoped>
.ToDoList {
  display: flex;
  flex-direction: row;
  flex: 1;
  list-style: none;
  padding: 0;
  gap: 32px;
  flex-wrap: wrap;
  margin: 32px 0 0;
}

.ToDoList__itemContainer {
  max-width: calc(50% - 16px);
  min-width: 25%;
  height: 150px;
}

.ToDoList__item {
  background: #FFFF99;
  height: 100%;
  padding: 8px;
  cursor: pointer;
}
</style>
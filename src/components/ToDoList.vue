<script>
import { defineComponent } from 'vue'

export default defineComponent({
  // type inference enabled
  props: {
  },
  mounted() {
    this.$store.dispatch("todo/getToDoItems")
  },
  data() {
    return {}
  },
  computed: {
    items() { return this.$store.state.todo.items }
  },
  methods: {
    goToDetails(id) {
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
  row-gap: 1rem;
  flex-wrap: wrap;
  justify-content: flex-start;
  margin: 32px 0 0;
}

.ToDoList__itemContainer {
  max-width: calc(33%);
  min-width: calc(33%);
  padding: 0 0.5rem ;
  height: 250px;
}

.ToDoList__item {
  background: #FFFF99;
  height: 100%;
  padding: 8px;
  cursor: pointer;
  font-size: 1.3rem;
  width: 100%;
  overflow: hidden;
  word-break: break-all;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 7;
  -webkit-box-orient: vertical;
}

.ToDoList__item:hover {
  background: #FFFF55;
  cursor: pointer;
}
</style>
<script>
import { defineComponent } from 'vue'

export default defineComponent({
  // type inference enabled
  props: {
  },
  mounted() {
  },
  data() {
    return {
      items: this.$store.state.items
    }
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
  gap: 32px;
  flex-wrap: wrap;
  margin: 32px 0 0;
}

.ToDoList__itemContainer {
  max-width: 25%;
  min-width: 25%;
  height: 150px;
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
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
}

.ToDoList__item:hover {
  background: #FFFF55;
  cursor: pointer;
}
</style>
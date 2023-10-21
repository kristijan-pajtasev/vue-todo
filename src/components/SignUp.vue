<script>
import { defineComponent } from 'vue'

export default defineComponent({
  // type inference enabled
  props: {
  },
  mounted() {
  },
  data() {
    return {}
  },
  computed: {
  },
  methods: {
  }
})
</script>

<template>
  <div>sign up page</div>
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
  justify-content: space-between;
  margin: 32px 0 0;
}

.ToDoList__itemContainer {
  max-width: calc(33% - 32px);
  min-width: calc(33% - 32px);
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
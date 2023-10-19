<script>
import {defineComponent} from 'vue'

export default defineComponent({
  // type inference enabled
  props: {},
  mounted() {
  },
  data() {
    return {
      text: "",
      completed: false,
    }
  },
  methods: {
    createTodo() {
      console.log("create todo");
      const {completed, text} = this;
      console.log(text, completed)
      // console.log()
      // this.$store.actions.addToDoItem(text,completed)
      this.$store.dispatch("addToDoItem", {text, completed})
    }
  }
})
</script>

<template>
  <div>
    <form @submit.prevent="createTodo">
      <div>
        <label for="todoText">Todo text:</label>
        <div>
          <textarea id="todoText" v-model="text"></textarea>
        </div>
      </div>
      <div>
        <label>
          <input type="checkbox" v-model="completed"/> Completed
        </label>
      </div>
      <div>
        <button>Create ToDo</button>
      </div>
    </form>
  </div>
</template>

<style scoped>
</style>
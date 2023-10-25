<script>
import {defineComponent} from 'vue'

export default defineComponent({
  // type inference enabled
  props: {},
  mounted() {
    console.log(this.$store.getters["user/getUserData"]())
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
      const user = this.$store.getters["user/getUserData"]()
      this.$store.dispatch("todo/addToDoItem", {text, completed, user});
      this.$router.push({name: "home"});
    }
  }
})
</script>

<template>
  <div class="CreateTodo">
    <h2 class="CreateTodo__title">Create ToDo Item</h2>
    <form @submit.prevent="createTodo">
      <div>
        <label for="todoText">Todo text:</label>
        <div>
          <textarea class="CreateTodo__input" id="todoText" v-model="text"></textarea>
        </div>
      </div>
      <div>
        <label>
          <input type="checkbox" v-model="completed"/> Completed
        </label>
      </div>
      <div>
        <button class="CreateTodo__button">Create ToDo</button>
      </div>
    </form>
  </div>
</template>

<style scoped>
.CreateTodo {
  width: 100%;
  max-width: 480px;
  margin: 100px auto;
  /*text-align: center;*/
}

.CreateTodo__title {
  font-weight: bold;
  color: hsla(160, 100%, 37%, 1);
  margin-bottom: 1rem;
  text-align: center;
}

.CreateTodo__input {
  width: 100%;
  border: thin solid #ccc;
  margin-bottom: 0.5rem;
  border-radius: 0.2rem;
  padding: 0.4rem 0.8rem;
  outline: none;
}

.CreateTodo__button {
  width: 100%;
  padding: 0.4rem 0.8rem;
  background-color: hsla(160, 100%, 37%, 1);
  border: none;
  border-radius: 0.2rem;
  color: white;
  cursor: pointer;
}
</style>
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
      email: "",
      password: ""
    }
  },
  computed: {
  },
  methods: {
    submitHandler() {
      console.log("submit handler", this.email, this.password)
      fetch(`${import.meta.env.VITE_FIREBASE_AUTH_URL}${import.meta.env.VITE_FIREBASE_API_KEY}`, {
        method: "post",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          email: this.email,
          password: this.password
        })
      }).then(
          async res => {
            console.log(res);
            const data = await res.json();
            console.log(data);
          }
      )
    }
  }
})
</script>

<template>
  <div>sign up page</div>
  <form @submit.prevent="submitHandler">
    <div>
      <input type="text" placeholder="email" v-model="email" />
    </div>
    <div>
      <input type="text" placeholder="password" v-model="password" />
    </div>
    <button>Submit</button>
  </form>
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
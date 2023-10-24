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
      const router = this.$router;
      this.$store.dispatch("user/signUp", {
        email: this.email,
        password: this.password
      }).then(
          () => {
            router.push({name: "home"})
          }
      )
    }
  }
})
</script>

<template>
  <div class="SignUp">
    <h2 class="SignUp__title">Sign Up</h2>
    <form @submit.prevent="submitHandler">
      <div>
        <input class="SignUp__input" type="text" placeholder="E-mail" v-model="email" />
      </div>
      <div>
        <input class="SignUp__input" type="password" placeholder="Password" v-model="password" />
      </div>
      <button class="SignUp__button">Sign Up</button>
    </form>
  </div>
</template>

<style scoped>
.SignUp {
  width: 100%;
  max-width: 480px;
  margin: 100px auto;
  /*text-align: center;*/
}

.SignUp__title {
  font-weight: bold;
  color: hsla(160, 100%, 37%, 1);
  margin-bottom: 1rem;
  text-align: center;
}

.SignUp__input {
  width: 100%;
  border: thin solid #ccc;
  margin-bottom: 0.5rem;
  border-radius: 0.2rem;
  padding: 0.4rem 0.8rem;
  outline: none;
}

.SignUp__input:focus {
  border: thin solid #bbb;
  box-shadow: #eee 2px 2px 5px;
}

.SignUp__button {
  width: 100%;
  padding: 0.4rem 0.8rem;
  background-color: hsla(160, 100%, 37%, 1);
  border: none;
  border-radius: 0.2rem;
  color: white;
  cursor: pointer;
}
</style>
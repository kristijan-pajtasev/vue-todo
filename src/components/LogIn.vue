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
      this.$store.dispatch("user/logIn", {
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
  <div>log in page</div>
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
</style>
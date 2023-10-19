<script>
import {defineComponent} from 'vue'
import ToDoStatusToggle from "@/components/ToDoStatusToggle.vue";

export default defineComponent({
  components: {ToDoStatusToggle},
  // type inference enabled
  props: {},
  mounted() {
    console.log("mounted")
  },
  data() {
    const itemId = this.$route.params.id;
    const item = this.$store.getters.itemForId(itemId)
    return {
      ...item
    }
  },
  computed: {
    displayCreatedDate() {
      return new Date(this.created).toLocaleDateString()
    },
    displayUpdatedDate() {
      return new Date(this.updated).toLocaleDateString()
    }
  }
})
</script>

<template>
  <div class="ToDoItem">
    <ToDoStatusToggle ></ToDoStatusToggle>
    <div>{{ text }}</div>
    <div class="ToDoItem__dateValues">
      <div>Created: {{ displayCreatedDate }}</div>
      <div>Updated: {{ displayUpdatedDate }}</div>
    </div>
  </div>
</template>

<style scoped>
.ToDoItem {
  width: 100%;
  max-width: 600px;
  margin: auto;
}

.ToDoItem__dateValues {
  font-size: 0.8rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 1rem;
  color: #aaa;
}
</style>
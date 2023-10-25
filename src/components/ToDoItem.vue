<script>
import {defineComponent} from 'vue'
import ToDoStatusToggle from "@/components/ToDoStatusToggle.vue";

export default defineComponent({
  components: {ToDoStatusToggle},
  // type inference enabled
  props: {
  },
  mounted() {
  },
  data() {},
  computed: {
    displayCreatedDate() {
      return new Date(this.item.created).toLocaleDateString()
    },
    displayUpdatedDate() {
      return new Date(this.item.updated).toLocaleDateString()
    },
    item() {
      const itemId = this.$route.params.id;
      return this.$store.getters['todo/itemForId'](itemId)
    }
  },
  methods: {
    handleToggleCompleted() {
      this.$store.dispatch("toggleToDoItemStatus", {item: this.item});
      this.completed = this.$store.getters.itemForId(this.item.id).completed;
    }
  }
})
</script>

<template>
  <div class="ToDoItem">
    <ToDoStatusToggle :completed="item.completed" @toggle-completed="handleToggleCompleted"></ToDoStatusToggle>
    <div>{{ item.text }}</div>
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
const TodoStore = {
  namespaced: true,
  state() {
    return {
      items: undefined
    }
  },
  getters: {
    itemForId: store => id => {
      return store.items.find(item => item.id === id)
    }
  },
  mutations: {
    setAllToDoData(context, payload) {
      console.log("test", context, payload)
      context.items = payload;
      console.log(context)
    }
  },
  actions: {
    addToDoItem(context, payload) {
      console.log("addToDoItem", context, payload)
      const item = {
        ...payload,
        created: (new Date()).getTime(),
        updated: (new Date()).getTime(),
        id: `${context.state.items.length + 1}`
      }

      fetch(`${import.meta.env.VITE_FIREBASE_DB_URL}todo.json`, {
          method: "post", // put
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(item)
        }
      )
      context.dispatch("getToDoItems");
    },
    toggleToDoItemStatus(context, payload) {
      const {item} = payload
      const itemId = item.id
      context.state.items = context.state.items.map(item => {
        if (item.id === itemId) {
          item.completed = !item.completed;
        }
        return item;
      })
      fetch(`${import.meta.env.VITE_FIREBASE_DB_URL}todo/${itemId}.json`, {
          method: "put", // put
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({...item, completed: !item.completed})
        }
      )
    },
    getToDoItems(context) {
      fetch(`${import.meta.env.VITE_FIREBASE_DB_URL}todo.json`, {
          method: "get",
        }
      ).then(
        async (res) => {
          const data = await res.json();
          const todos = Object.entries(data).map(([key, value]) => {
            return {
              ...value,
              id: key
            }
          })
          context.commit("setAllToDoData", todos)
        }
      )
    }
  }
}

export default TodoStore
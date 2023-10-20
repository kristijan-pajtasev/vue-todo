import './assets/main.css'
import {createStore} from 'vuex'


const store = createStore({
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
                    method: "post",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(item)
                }
            )
            context.state.items = [...context.state.items, item]
        },
        toggleToDoItemStatus(context, payload) {
            context.state.items = context.state.items.map(item => {
                if (item.id === payload.itemId) {
                    item.completed = !item.completed;
                }
                return item;
            })
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
});

import {createApp} from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(store);
app.use(router);

app.mount('#app')

import './assets/main.css'
import {createStore} from 'vuex'


const store = createStore({
    state() {
        return {
            items: [
                {text: "1 item", id: "1", completed: true, created: (new Date()).getTime(), updated: (new Date()).getTime()},
                {text: "2 item", id: "2", completed: false, created: (new Date()).getTime(), updated: (new Date()).getTime()},
                {text: "3 item", id: "3", completed: false, created: (new Date()).getTime(), updated: (new Date()).getTime()}
            ]
        }
    },
    getters: {
        itemForId: store => id => {
            return store.items.find(item => item.id === id)
        }
    },
    mutations: {},
    actions: {
        addToDoItem(context, payload) {
            console.log("addToDoItem", context, payload)
            const item = {
                ...payload,
                created: (new Date()).getTime(),
                updated: (new Date()).getTime(),
                id: `${context.state.items.length + 1}`
            }
            context.state.items = [...context.state.items, item]
        },
        toggleToDoItemStatus(context, payload) {
            context.state.items = context.state.items.map(item => {
                if(item.id === payload.itemId) {
                    item.completed = !item.completed;
                }
                return item;
            })
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

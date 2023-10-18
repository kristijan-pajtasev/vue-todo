import './assets/main.css'
import {createStore} from 'vuex'


const store = createStore({
    state() {
        return {
            items: [
                {text: "1 item", id: "1", completed: false, created: (new Date()).getTime(), updated: (new Date()).getTime()},
                {text: "2 item", id: "2", completed: false, created: (new Date()).getTime(), updated: (new Date()).getTime()},
                {text: "3 item", id: "3", completed: false, created: (new Date()).getTime(), updated: (new Date()).getTime()}
            ]
        }
    },
    getters: {
        itemForId: store => id => {
            console.log(store.items, id)
            return store.items.find(item => item.id === id)
        }
    },
    mutations: {}
});

import {createApp} from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(store);
app.use(router);

app.mount('#app')

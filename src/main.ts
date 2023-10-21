import './assets/main.css'
import {createStore} from 'vuex'
import ToDoStore from './store/todo'
import UserStore from './store/user'

const store = createStore({
    modules: {
        todo: ToDoStore,
        user: UserStore
    }
});

import {createApp} from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(store);
app.use(router);

app.mount('#app')

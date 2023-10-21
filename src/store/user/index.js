const UserStore = {
  namespaced: true,
  state() {
    return {
    }
  },
  getters: {
  },
  mutations: {
  },
  actions: {
    signUp(context, payload) {
      console.log("signUp action", payload)
      return fetch(`${import.meta.env.VITE_FIREBASE_AUTH_URL}${import.meta.env.VITE_FIREBASE_API_KEY}`, {
        method: "post",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          email: payload.email,
          password: payload.password
        })
      }).then(
        async res => {
          const data = await res.json();
          return data;
        }
      )
    }
  }
}

export default UserStore
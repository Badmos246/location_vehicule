import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', () => {
  const count = ref(0)
  const doubleCount = computed(() => count.value * 2)
  function increment() {
    count.value++
  }

  return { count, doubleCount, increment }
})




import { createStore } from 'vuex';

const store = createStore({
  state: {
    admin: localStorage.getItem('admin') || null
  },
  mutations: {
    setAdmin(state, admin) {
      state.admin = admin;
      if (admin) {
        localStorage.setItem('admin', admin);
      } else {
        localStorage.removeItem('admin');
      }
    }
  },
  actions: {
    login({ commit }, admin) {
      // Here you can add API call for login
      commit('setAdmin', admin);
    },
    logout({ commit }) {
      commit('setAdmin', null);
    }
  },
  getters: {
    isAdmin: state => !!state.admin
  }
});

export default store;


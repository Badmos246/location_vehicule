<template>
  <div>
    <h1>Login Page</h1>
    <form @submit.prevent="login">
      <input type="text" v-model="admin" placeholder="Enter admin name" required>
      <button type="submit">Login</button>
    </form>
  </div>
  
</template>

<script>
import { mapActions } from 'vue';

export default {
  name: 'Login',
  data() {
    return {
      admin: ''
    };
  },
  methods: {
    ...mapActions(['login']),
    login() {
      this.login(this.admin);
      this.$router.push({ name: 'Dashboard' });
    }
  }
};
</script>

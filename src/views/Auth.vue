<template>
  <div class="auth">
    <form @submit.prevent="onSubmit">
      <input type="text" name="username" v-model="username">
      <input type="password" name="password" v-model="password">
      <button @click="onSubmit">Login</button>
      <p>{{ statusMessage }}</p>
    </form>
  </div>
</template>

<script>
import { dispatch, get } from 'vuex-pathify'

export default {
  data () {
    return {
      username: 'hp',
      password: 'DZ1980dz4a89aaa'
    }
  },

  computed: {
    isAuthenticated: get('auth/isAuthenticated'),
    statusMessage: get('auth/statusMessage')
  },

  watch: {
    isAuthenticated (newValue) {
      if (newValue) {
        this.$router.push({ name: 'tracks' })
      }
    }
  },

  methods: {
    onSubmit () {
      dispatch('auth/login', {
        username: this.username,
        password: this.password
      })
    }
  }
}
</script>

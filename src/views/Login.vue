<template>
  <div class="login">
    用户名：<input v-model="username" type="text" /><br />
    密码：<input v-model="password" type="text" />
    <button @click="login">登录</button>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data: () => {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    async login () {
      const { username, password } = this
      const res = await this.$axios.post('login', { username, password })
      // console.log(res)
      if (res.data.meta.status === 200) {
        console.log('登陆成功')
        window.sessionStorage.setItem('token', res.data.data.token)
        this.$router.push('/')
      } else {
        console.log('登录失败')
      }
    }
  }
}
</script>

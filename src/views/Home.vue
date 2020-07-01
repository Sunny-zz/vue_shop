<template>
  <div class="home">
    首页
  </div>
</template>

<script>
export default {
  name: 'Home',
  async created () {
    const res = await this.$axios.get('users')
    // 因为请求的时候添加了 token 验证所有可以成功请求数据
    console.log(res)
  }
}
</script>

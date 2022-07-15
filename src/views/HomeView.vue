<template>
  <el-button @click='dl'>登录</el-button>
</template>

<script setup>
import axios from '@/utils/request'

const dl = async () => {
  await axios({
    url: '/login',
    method: 'post',
    data: {
      username: 'yangmr',
      password: '123456'
    }
  })
}
</script>

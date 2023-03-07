<!--
 * @Author: Nie Chengyong
 * @Date: 2023-02-09 21:17:58
 * @LastEditors: Nie Chengyong
 * @LastEditTime: 2023-03-07 21:14:23
 * @FilePath: /uniapp-vite/src/pages/index/index.vue
 * @Description: 
 * 
-->
<template>
  <view class="content">
    <image class="logo" src="/static/logo.png"  
    v-buried:[number]="{name:'xxx'}" 
 
    @click="add"
    />
    <view class="text-area"
    v-exposure="{proxy:proxy,relativeTo:'#app',observe:'.text-area'}" 
    >
      <text class="title">{{ title }}</text>
    </view>
  </view>
</template>

<script setup lang="ts">
import { ref ,getCurrentInstance} from 'vue'
const title = ref('Hello')
const {proxy}=getCurrentInstance()
const number = ref(1)
const add=()=>{
  number.value++
}
</script>

<style>
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.logo {
  height: 200rpx;
  width: 200rpx;
  margin-top: 200rpx;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 50rpx;
}

.text-area {
  display: flex;
  justify-content: center;
}

.title {
  font-size: 36rpx;
  color: #8f8f94;
}
</style>

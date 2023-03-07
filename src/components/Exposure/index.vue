<!--
 * @Author: Nie Chengyong
 * @Date: 2022-04-27 18:00:49
 * @LastEditors: Nie Chengyong
 * @LastEditTime: 2022-04-28 15:40:38
-->
<template>
	<slot ></slot>
</template>
<script setup>
	//曝光组件
	import {onMounted,defineProps} from 'vue'
	const props =	defineProps({
		name:String,//上报名字
		proxy:Object,//父级this
		relativeTo:String, //指定区域内
		observe:String //指定区域内的DOM节点
	})
	onMounted(()=>{
		// intersectionRatio	Number	相交比例
		// intersectionRect	Object	相交区域的边界，包含 left、right、top、bottom 四项
		// boundingClientRect	Object	目标节点布局区域的边界，包含 left、right、top、bottom 四项
		// relativeRect	Object	参照区域的边界，包含 left、right、top、bottom 四项
		// time	Number	相交检测时的时间戳
		uni.createIntersectionObserver(props.proxy).relativeTo(props.relativeTo).observe(props.observe, (res) => {
		  console.log("xxxx",res);
		})
	})
	
</script>

<style>
</style>
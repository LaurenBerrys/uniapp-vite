<!--
 * @Author: Nie Chengyong
 * @Date: 2022-04-27 18:00:49
 * @LastEditors: Nie Chengyong
 * @LastEditTime: 2022-04-28 15:40:38
-->
<template>
	<slot></slot>
</template>
<script setup>
	//埋点
	import {onMounted,defineProps} from 'vue'
	const props =	defineProps({
		name:String,//上报名字
		number:Number
	})
	console.log(props.number);
	onMounted(()=>{
		
	})
</script>


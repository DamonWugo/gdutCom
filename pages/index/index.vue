<template>
	<view class="index-page">
		<view class="logined-card-container"
			style="margin-bottom: 35rpx;"
		>
			<logined-card :isLogined="isLogined"></logined-card>
		</view>
		<my-features-card style="margin-bottom: 35rpx;" ></my-features-card>
		<more-features></more-features>
	</view>
</template>

<script>
	import { onBeforeMount, onMounted, reactive, ref, watch, } from "vue"
	import store from "../../store/index.js"
	export default {
		setup() {
			let userInfo = reactive({userInfo:null});
			let isLogined = ref(false);
			onBeforeMount(()=>{				
				isLogined.value = store.state.loginAbout.isLogined
				userInfo.userInfo = JSON.parse(uni.getStorageSync('userInfo')) == null ? null : JSON.parse(uni.getStorageSync('userInfo'))
			})
			
			return {
				isLogined,
				userInfo
			}
		}
	}
</script>

<style lang="scss">
	.index-page {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		padding: 50rpx 0;
		// background-color: #f6f6f6;
		height: 100%;
	}

	
</style>

<template>
	<view class="my-info-container">
		<view class="my-info-avatar-container">
			<image :src="userInfoFromWeiXin.userInfoFromWeiXin.avatarUrl" mode="" class="my-info-avatar-icon"></image>
		</view>
		<view class="my-info-name-container">
			{{userInfoFromWeiXin.userInfoFromWeiXin.nickName}}
		</view>
		<view class="my-info-introduce-container">
			辛苦了，{{userInfoFromWeiXin.userInfoFromWeiXin.nickName}}
		</view>
		<view class="my-info-labal-container">
			<text class="my-info-labal-item">广东工业大学</text>
			<text class="my-info-labal-item">男</text>
		</view>
		<view class="my-info-edit-container">
			编辑资料
		</view>
	</view>
</template>

<script>
	import { reactive, onBeforeMount } from "vue"
	import store from '../../store/index.js'
	export default {
		setup(){
			let userInfoFromWeiXin = reactive({userInfoFromWeiXin:store.state.loginAbout.userInfo})
			// onBeforeMount(()=>{
			// 	userInfoFromWeiXin.userInfoFromWeiXin=store.state.loginAbout.userInfo
			// })
			return {
				userInfoFromWeiXin
			}
		}
		
	}
</script>

<style lang="scss">
	.my-info-container{
		box-sizing: border-box;
		background-color: #fff;
		width: 680rpx;
		border-radius: 50rpx;
		display: flex;
		flex-direction: column;
		align-items: center;
		padding: 50rpx 0 30rpx;
	}
	.my-info-avatar-container{
		width: 110rpx;
		height: 110rpx;
		margin-bottom: 20rpx;
	}
	.my-info-avatar-icon{
		width: 110rpx;
		height: 110rpx;
		border-radius: 50%;
	}
	.my-info-name-container{
		color: #96e8ba;
		margin-bottom: 20rpx;
	}
	.my-info-introduce-container{
		margin-bottom: 30rpx;
		font-size: 22rpx;
	}
	.my-info-labal-container{
		margin-bottom: 30rpx;
		font-size: 22rpx;
		color: #96e8ba;
	}
	.my-info-labal-item{
		box-sizing: border-box;
		border: 2rpx solid #96e8ba;
		border-radius: 60rpx;
		padding: 3rpx 15rpx;
		margin-right: 20rpx;
	}
	.my-info-edit-container{
		border: 1rpx solid #ccc;
		border-radius: 60rpx;
		margin-bottom: 20rpx;
		font-size: 27rpx;
		padding: 10rpx 20rpx;
	}
</style>
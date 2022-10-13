<template>
	<view class="home-container" >
		<view class="top-container">
			<view class="my-name">
				广工龙洞的游客
			</view>
			<view class="my-avatar-container">
				<image src="../../static/avatar/defultavatar.png" mode="" class="my-avatar-icon"></image>
			</view>
		</view>
		<view class="go-login">
			认证清新账号，体验完整功能 >
		</view>
	</view>
</template>

<script>
	export default {
		
	}
</script>

<style lang="scss">
	.home-container {
		box-sizing: border-box;
		display: flex;
		flex-direction: column;
		// justify-content: center;
		width: 660rpx;
		height: 190rpx;
		background-color: #fff;
		border-radius: 20rpx;
		padding: 0rpx 50rpx;
		box-shadow: 5rpx 5rpx 10rpx 3rpx #dddddd;
	}
	.top-container{
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		position: relative;
		top: -35rpx;
	}
	.my-name{
		color: #1d1d1d;
		font-weight: 700;
	}
	.my-avatar-container{
		background-color: #fff;
		border-radius: 50%;
	}
	
	.my-avatar-icon{
		width: 120rpx;
		height: 120rpx;
		border-radius: 50%;
		border: 20rpx solid #fff;
	}
	.go-login{
		position: relative;
		top: -45rpx;
		font-size: 25rpx;
		color: #4b4b4b;
	}
</style>

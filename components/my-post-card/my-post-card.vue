<template>
	<view class="my-post-card-container">
		<view class="my-post-header-container">
			<view class="my-post-time">
				<view class="time-day">
					12
				</view> 
				<text class="time-division">/</text>
				<text class="time-month">10</text>
				<text class="time-hour">19:90</text>
			</view>
			<view class="my-post-right">
				···
			</view>
		</view>
		<view class="my-post-body-container">
			我是东西我是
		</view>
		<view class="my-post-footer-container">
			<view class="my-classic-label">
				<text>二手市场</text>
			</view>
			<view class="my-post-footer-right">
				<view class="my-post-footer-comment">
					<image src="../../static/postIcon/commentd.png" mode="" class="my-comment-icon"></image>
					<text style="color: #96e8ba; font-size: 25rpx;">&nbsp;1212</text>
				</view>
				<view class="my-post-footer-like">
					<image src="../../static/postIcon/liked.png" mode="" class="my-like-icon"></image>
					<text style="color: #96e8ba; font-size: 25rpx;">&nbsp;2121212</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		setup(){
			return{
				
			}
		}
	}
</script>

<style lang="scss">
	.my-post-card-container{
		box-sizing: border-box;
		background-color: #fff;
		width: 680rpx;
		border-radius: 25rpx;
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		padding: 30rpx;
		margin: 30rpx 0 25rpx;
	}
	.my-post-header-container{
		box-sizing: border-box;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		width: 600rpx;
		margin-bottom: 30rpx;
	}
	.my-post-time{
		display: flex;
		flex-direction: row;
		align-items: center;
	}
	.time-day{
		background-color: #f6f6f6;
		border-radius: 50%;
		padding: 7rpx;
		color: #96e8ba;
		width: 45rpx;
		height: 45rpx;
		line-height: 45rpx;
		text-align: center;
	}
	.time-division{
		color: #96e8ba;
		font-size: 25rpx;
		margin: 0 10rpx;
	}
	.time-month{
		color: #96e8ba;
		font-size: 25rpx;
		
	}
	.time-hour{
		margin-left: 30rpx;
		color: #ccc;
		font-size: 25rpx;
	}
	.my-post-body-container{
		box-sizing: border-box;
		font-size: 30rpx;
		text-overflow: -o-ellipsis-lastline;
		overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;
		align-content: center;
	}
	.my-post-footer-container {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
		margin: 40rpx 0 0rpx;
		width: 590rpx;
	}
	
	.my-classic-label {
		box-sizing: border-box;
		padding: 5rpx 16rpx;
		border-radius: 10rpx;
		color: #87d0a7;
		background-color: rgba(150, 232, 186, .3);
		font-size: 25rpx;
	}
	
	.my-post-footer-right {
		display: flex;
		flex-direction: row;
		justify-content: space-around;
		align-items: center;
	}
	
	.my-post-footer-comment {
		display: flex;
		align-items: center;
	}
	
	.my-post-footer-like {
		margin-left: 30rpx;
		display: flex;
		align-items: center;
	}
	
	.my-comment-icon {
		width: 40rpx;
		height: 32rpx;
	}
	
	.my-like-icon {
		width: 45rpx;
		height: 40rpx;
	}
</style>
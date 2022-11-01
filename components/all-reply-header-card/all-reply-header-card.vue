<template>
	<view class="replay-container">
		<view class="replay-header">
			<view class="avatar-container">
				<image src="../../static/avatar/touxiang-11.png" mode="" class="avatar-icon"></image>
			</view>
			<view class="name-container">
				<view class="name-top">
					阿白
				</view>
				<view class="desc-footer">
					帅气逼人啊
				</view>
			</view>
		</view>
		<view class="replay-content">
			还是尽快恢复数据库的还反击沙发接口是否是圣诞节复活节书法课
		</view>
		<view class="replay-footer">
			<view class="time-container">
				10小时前
			</view>
			<view class="right-container">
				<view class="comment-container">
					<image src="../../static/postIcon/commentd.png" mode="" class="comment-icon"></image>
					<text style="color: #96e8ba; font-size: 25rpx;">&nbsp;11</text>
				</view>
				<view class="like-container">
					<image src="../../static/postIcon/liked.png" mode="" class="like-icon"></image>
					<text style="color: #96e8ba; font-size: 25rpx;">&nbsp;22</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		
	}
</script>

<style lang="scss">
	.replay-container{
		display: flex;
		flex-direction: column;
		padding: 20rpx 30rpx 0;
		background-color: #fff;
	}
	.replay-header{
		display: flex;
		flex-direction: row;
		align-items: center;
	}
	.avatar-container{
		margin-right: 20rpx;
	}
	.avatar-icon{
		width: 60rpx;
		height: 60rpx;
		border-radius: 50%;
	}
	.name-container{
		display: flex;
		flex-direction: column;
	}
	.name-top{
		font-size: 29rpx;
		color: #96e8ba;
		font-weight: 600;
	}
	.desc-footer{
		color: #939393;
		font-size: 23rpx;
	}
	.replay-content{
		font-size: 30rpx;
		padding: 10rpx 10rpx 20rpx 81rpx;
	}
	.replay-footer{
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		padding: 0 0 20rpx 80rpx;
	}
	.time-container{
		font-size: 23rpx;
		color: #939393;
	}
	.right-container{
		display: flex;
		flex-direction: row;
	}
	.comment-container{
		display: flex;
		flex-direction: row;
		align-items: center;
		margin-right: 20rpx;
	}
	.comment-icon{
		width: 35rpx;
		height: 30rpx;
	}
	.like-container{
		display: flex;
		flex-direction: row;
		align-items: center;
	}
	.like-icon{
		width: 42rpx;
		height: 37rpx;
	}
</style>
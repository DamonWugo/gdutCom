<template>
	<view class="comment-container">
		<view class="comment-content">
			我来评论个牛逼的评论阿哈哈哈哈哈哈怎么说啊你麻痹的
		</view>
		<view class="comment-footer">
			<view class="comment-footer-left">
				<view class="avatar-container">
					<image src="../../static/avatar/defultavatar.png" mode="" class="avatar-icon"></image>
				</view>
				<view class="user-name">
					<text>游客我去</text>
				</view>
				<view class="comment-time">
					<text>· 1小时前</text>
				</view>
			</view>
			<view class="comment-footer-right">
				<view class="like-container">
					<image src="../../static/postIcon/likel.png" mode="" class="like-icon"></image>
					<text style="color: #96e8ba; font-size: 25rpx;">&nbsp;1</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		setup(){
			
		}
	}
</script>

<style lang="scss">
	.comment-container{
		padding: 30rpx 50rpx;
		background-color: #fff;
		border-bottom: 1rpx solid #f6f6f6;
	}
	.comment-content{
		margin-bottom: 30rpx;
		color: #3d3d3d;
		font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
		line-height: 50rpx;
		font-size: 30rpx;
	}
	.comment-footer{
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
	}
	.comment-footer-left{
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: start;
	}
	.avatar-container{
		display: flex;
		flex-direction: row;
		align-items: center;
		width: 40rpx;
		height: 40rpx;
		margin-right: 15rpx;
	}
	.avatar-icon{
		width: 40rpx;
		height: 40rpx;
		border-radius: 50%;
	}
	.user-name{
		margin-right: 15rpx;
		color: #96e8ba;
		font-size: 25rpx;
	}
	.comment-time{
		color: #ccc;
		font-size: 25rpx;	
	}
	.like-container{
		display: flex;
		align-items: center;
		margin-right: 20rpx;
	}
	.like-icon{
		width: 40rpx;
		height: 40rpx;
	}
</style>
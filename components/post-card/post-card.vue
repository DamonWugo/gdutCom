<template>
	<view class="post-card-container" @click="goToPostDetailPage">
		<view class="post-header">
			<view class="post-header-left">
				<image src="../../static/avatar/defultavatar.png" mode="" class="avatar"></image>
				<text>用户名</text>
			</view>
			<text class="post-header-right">23分钟前</text>
		</view>
		<view class="post-content">
			<text>fsdfdsfs；；v</text>
		</view>
		<view class="post-footer">
			<view class="classic-label">
				<text>二手市场</text>
			</view>
			<view class="post-footer-right">
				<view class="post-footer-comment">
					<image src="../../static/postIcon/commentd.png" mode="" class="comment-icon"></image>
					<text style="color: #96e8ba; font-size: 25rpx;">&nbsp;</text>
				</view>
				<view class="post-footer-like">
					<image src="../../static/postIcon/liked.png" mode="" class="like-icon"></image>
					<text style="color: #96e8ba; font-size: 25rpx;">&nbsp;</text>
				</view>
			</view>

		</view>
		<view class="post-comment">
			<view class="post-comment-left">
				<view class="avatar-container">
					<image src="../../static/avatar/defultavatar.png" mode="" class="post-comment-avatar"></image>
				</view>
				<view class="post-comment-content">
					我还是的房价还是到付即可士大夫艰苦是否健康
				</view>
			</view>

			<view class="post-comment-like">
				<image src="../../static/postIcon/liked.png" mode="" class="post-comment-like-icon"></image>
				<text style="color: #96e8ba; font-size: 25rpx;">&nbsp;1</text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		setup() {
			function goToPostDetailPage() {
				uni.navigateTo({
					url: "/pages/post-details/post-details"
				})
			}
			return {
				goToPostDetailPage
			}
		}
	}
</script>

<style lang="scss">
	.post-card-container {
		box-sizing: border-box;
		width: 680rpx;
		background-color: #fff;
		margin-bottom: 40rpx;
		border-radius: 30rpx;
		padding: 1rpx 17rpx 30rpx 25rpx;
	}

	.post-header {
		position: relative;
		top: -23rpx;
		left: -20rpx;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;

		.avatar {
			box-sizing: border-box;
			border: 18rpx solid #fff;
			width: 115rpx;
			height: 115rpx;
			border-radius: 50%;
		}
	}

	.post-header-left {
		display: flex;
		flex-direction: row;
		align-items: center;

		text {
			color: #96e8ba;
			font-size: 35rpx;
		}
	}

	.post-header-right {
		font-size: 25rpx;
		color: #8a8a8a;
	}

	.post-content {
		width: 640rpx;
		padding: 0 10rpx;
		color: #3d3d3d;
		font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
		line-height: 50rpx;
		font-size: 30rpx;
		text-overflow: -o-ellipsis-lastline;
		overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-line-clamp: 5;
		-webkit-box-orient: vertical;
		align-content: center;

	}


	.post-footer {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
		margin: 40rpx 0 30rpx;
	}

	.classic-label {
		box-sizing: border-box;
		padding: 5rpx 16rpx;
		border-radius: 10rpx;
		color: #87d0a7;
		background-color: rgba(150, 232, 186, .3);
		font-size: 25rpx;
	}

	.post-footer-right {
		display: flex;
		flex-direction: row;
		justify-content: space-around;
		align-items: center;
	}

	.post-footer-comment {
		display: flex;
		align-items: center;
	}

	.post-footer-like {
		margin-left: 30rpx;
		display: flex;
		align-items: center;
	}

	.comment-icon {
		width: 40rpx;
		height: 33rpx;
	}

	.like-icon {
		width: 40rpx;
		height: 37rpx;
	}

	.post-comment {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
		width: 590rpx;
		height: 60rpx;
		padding: 20rpx;
		margin-top: 20rpx;
		border-radius: 20rpx;
		background-color: rgb(248, 248, 248);
	}

	.post-comment-left {
		display: flex;
		flex-direction: row;
		align-items: center;
	}

	.avatar-container {
		width: 60rpx;
		height: 60rpx;
		margin-right: 20rpx;
	}

	.post-comment-avatar {
		width: 60rpx;
		height: 60rpx;
		border-radius: 50%;
	}

	.post-comment-content {
		width: 420rpx;
		font-size: 26rpx;
		color: #4b4b4b;
		// margin-right: 10rpx;
		line-clamp: 2;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}

	.post-comment-like {
		display: flex;
		flex-direction: row;
		align-items: center;
		// margin-left: 10rpx;
	}

	.post-comment-like-icon {
		width: 40rpx;
		height: 37rpx;
	}
</style>

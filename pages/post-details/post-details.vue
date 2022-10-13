<template>
	<view class="post-details-container">
		<view class="details-index">
			<view class="post-details-header">
				<view class="post-details-header-left">
					<image src="../../static/avatar/touxiang-12.png" mode="" class="avatar"></image>
					<text>用户名</text>
				</view>
				<text class="post-details-header-right">23分钟前</text>
			</view>
			<view class="post-details-content">
				<text>想问一下我们的这个小程序的字体好看吗？如果有觉得好看的帮忙点个赞，我最后看看多少人点赞</text>
			</view>
			<view class="post-details-label">
				<view class="classic-details-label">
					<text>二手市场</text>
				</view>
			</view>
			<view class="post-details-footer">
				<view class="details-comment">
					评论点有见解的...
				</view>
				<view class="details-share">
					<image src="../../static/postIcon/shared.png" mode="" class="details-share-icon"></image>
				</view>
				<view class="details-like">
					<image src="../../static/postIcon/liked.png" mode="" class="details-like-icon"></image>
					<text>&nbsp;22</text>
				</view>
			</view>
		</view>
		<view class="details-comment-container">
			<view class="details-comment-nav">
				<view class="the-tab" v-for="tabItem in navList" :key='tabItem.id'
					@click="changeCommentChannel(tabItem.id)" :class="navIndex == tabItem.id ? 'active' :''">
					{{tabItem.tabName}}
				</view>
			</view>
			<view class="comment-container">
				<!-- <view class="no-comment-container">
					<no-comment></no-comment>
				</view> -->
				<comment-card></comment-card>
				<comment-card></comment-card>
				<comment-card></comment-card>
				<comment-card></comment-card>
				<comment-card></comment-card>
				<comment-card></comment-card>
				
			</view>
		</view>
	</view>

</template>

<script>
	import {
		reactive,
		ref
	} from "vue"
	export default {
		setup() {
			let navList = reactive([{
				id: '0',
				tabName: '最新'
			}, {
				id: '1',
				tabName: '最热'
			}]);
			let navIndex = ref("0");

			function changeCommentChannel(tabId) {
				navIndex.value = tabId
			}
			return {
				navList,
				navIndex,
				changeCommentChannel
			}
		}
	}
</script>

<style lang="scss">
	.post-details-container {
		// background-color: #f6f6f6;
	}



	.details-index {
		padding: 50rpx 30rpx;
		background-color: #fff;
		margin-bottom: 30rpx;
	}

	.post-details-header {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		margin-bottom: 30rpx;

		.avatar {
			box-sizing: border-box;
			width: 80rpx;
			height: 80rpx;
			border-radius: 50%;
			margin-right: 20rpx;
		}
	}

	.post-details-header-left {
		display: flex;
		flex-direction: row;
		align-items: center;

		text {
			color: #96e8ba;
			font-size: 33rpx;
			font-weight: 700;
		}
	}

	.post-details-header-right {
		font-size: 27rpx;
		color: #8a8a8a;
	}

	.post-details-content {
		padding: 0 10rpx;
		margin-bottom: 30rpx;
		color: #3d3d3d;
		font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
		line-height: 50rpx;
		font-size: 33rpx;
	}

	.post-details-label {
		display: flex;
		margin-top: 20rpx;
	}

	.classic-details-label {
		box-sizing: border-box;
		padding: 5rpx 16rpx;
		border-radius: 10rpx;
		color: #87d0a7;
		background-color: rgba(150, 232, 186, .3);
		font-size: 25rpx;
		box-shadow: 5rpx 5rpx 10rpx 3rpx rgba(75, 116, 93, 0.3);
	}

	

	.post-details-footer {
		display: flex;
		flex-direction: row;
		margin-top: 30rpx;
		align-items: center;
		justify-content: space-between;
	}

	.details-comment {
		width: 330rpx;
		padding: 10rpx 50rpx;
		background-color: #f6f6f6;
		border-radius: 100rpx;
		color: #ccc;
		font-size: 25rpx;
		// box-shadow: 5rpx 5rpx 1rpx 3rpx #333;
	}

	.details-share {
		width: 45rpx;
		height: 45rpx;
	}

	.details-share-icon {
		width: 45rpx;
		height: 45rpx;
	}

	.details-like {
		display: flex;
		flex-direction: row;
		align-items: center;
		color: #aaa;
		font-size: 28rpx;
	}

	.details-like-icon {
		width: 55rpx;
		height: 55rpx;
		
	}
	.comment-container{
		background-color: #fff;
	}

	.details-comment-nav {
		box-sizing: border-box;
		display: flex;
		flex-direction: row;
		align-items: center;
		height: 100rpx;
		background-color: #fff;
		border-bottom: 2rpx solid #f6f6f6;
		padding: 10rpx 40rpx 0;
		color: #333;
		font-size: 36rpx;
	}

	.the-tab {
		margin-right: 70rpx;
	}

	.active {
		color: #96e8ba;
		// font-weight: 700;
		font-size: 40rpx;
	}
	.no-comment-container{
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;
	}
</style>

<template>
	<view class="replay-container">
		<view class="replay-content">
			谢谢大家的回复啊和副驾驶副驾驶客户分级考试房价快速
		</view>
		<view class="replay-footer">
			<view class="replay-footer-left">
				<view class="avatar-container">
					<image src="../../static/avatar/touxiang-11.png" mode="" class="avatar-icon"></image>
				</view>
				<view class="user-name">
					<text>2222</text>
				</view>
				<view class="replay-time">
					<text>·&nbsp;222</text>
				</view>
			</view>
			<view class="replay-footer-right">
				<view class="comment-icon-container">
					<image src="../../static/postIcon/commentd.png" mode="" class="comment-icon"></image>
					<text style="color: #cccccc">&nbsp;{{likedNum}}</text>
				</view>
				<view class="like-container" @click="doLike">
					<image :src="isLiked ? liked :noLiked " mode="" class="like-icon"></image>
					<text :style="{color: isLiked ? '#96e8ba' : '#cccccc' }">&nbsp;{{likedNum}}</text>
				</view>
			</view>
		</view>

	</view>
</template>

<script>
	import {ref} from 'vue'
	export default {
		setup() {
			let isLiked = ref(false)
			let liked = ref('../../static/postIcon/likel.png')
			let noLiked = ref('../../static/postIcon/liked.png')
			let likedNum = ref(parseInt(Math.random() * 100))

			function doLike() {
				isLiked.value = !isLiked.value
				if (isLiked.value) {
					likedNum.value++
				} else {
					likedNum.value--
				}
			}
			return {
				isLiked,
				liked,
				noLiked,
				likedNum,
				doLike
			}
		}
	}
</script>

<style lang="scss">
	.replay-container {
		padding: 30rpx 0 10rpx 50rpx;
		background-color: #fff;
		// border-bottom: 1rpx solid #f6f6f6;
	}

	.replay-content {
		margin-bottom: 10rpx;
		color: #3d3d3d;
		font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
		line-height: 50rpx;
		font-size: 29rpx;
	}

	.replay-footer {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
	}

	.replay-footer-left {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: flex-start;
	}

	.avatar-container {
		display: flex;
		flex-direction: row;
		align-items: center;
		width: 40rpx;
		height: 40rpx;
		margin-right: 15rpx;
	}

	.avatar-icon {
		width: 40rpx;
		height: 40rpx;
		border-radius: 50%;
	}

	.user-name {
		margin-right: 15rpx;
		color: #96e8ba;
		font-size: 25rpx;
	}

	.replay-time {
		color: #ccc;
		font-size: 25rpx;
	}
	.replay-footer-right{
		display: flex;
		flex-direction: row;
		align-items: center;
	}
	
	.comment-icon-container {
		display: flex;
		flex-direction: row;
		align-items: center;
		margin-right: 20rpx;
		font-size: 25rpx;
	}
	.comment-icon{
		width: 30rpx;
		height: 27rpx;
	}

	.like-container {
		display: flex;
		align-items: center;
		margin-right: 20rpx;
		font-size: 25rpx;
	}

	.like-icon {
		width: 35rpx;
		height: 32rpx;
	}
</style>

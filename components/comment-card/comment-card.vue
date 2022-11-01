<template>
	<view class="comment-container">
		<view class="comment-content">
			{{commentItem.commentVal}}
		</view>
		<view class="comment-footer">
			<view class="comment-footer-left">
				<view class="avatar-container">
					<image :src="commentItem.avatarUrl" mode="" class="avatar-icon"></image>
				</view>
				<view class="user-name">
					<text>{{commentItem.name}}</text>
				</view>
				<view class="comment-time">
					<text>·&nbsp;{{commentTime}}</text>
				</view>
			</view>
			<view class="comment-footer-right">
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
		<view class="replies-container">
			<view class="replies-item-container">
				<reply-card v-for="i in 2"></reply-card>
			</view>
			<view class="check-more-replies" @click="checkMoreReplies">
				查看全部22条回复
			</view>
		</view>
		
	</view>
</template>

<script>
	import moment from 'moment'
	import {
		ref
	} from 'vue'
	export default {
		props: ['commentItem'],
		setup(props, context) {
			const {
				time
			} = props.commentItem
			const commentTime = moment(time).format('YYYY-MM-DD')
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
			
			function checkMoreReplies(){
				uni.navigateTo({
					url: '/pages/all-replies-page/all-replies-page',
				})
			}
			
			
			return {
				isLiked,
				liked,
				noLiked,
				likedNum,
				commentTime,
				doLike,
				checkMoreReplies
			}
		}
	}
</script>

<style lang="scss" scoped>
	.comment-container {
		padding: 30rpx 50rpx;
		background-color: #fff;
		border-bottom: 1rpx solid #f6f6f6;
	}

	.comment-content {
		margin-bottom: 30rpx;
		color: #3d3d3d;
		font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
		line-height: 50rpx;
		font-size: 30rpx;
	}

	.comment-footer {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
	}

	.comment-footer-left {
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

	.comment-time {
		color: #ccc;
		font-size: 25rpx;
	}
	.comment-footer-right{
		display: flex;
		flex-direction: row;
		align-items: center;
	}
	.comment-icon-container {
		display: flex;
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

	.check-more-replies {
		padding: 20rpx 50rpx;
		font-size: 25rpx;
		color: #96e8ba;
	}
	.popup-container{
		background-color: #fff;
	}
	.reply-page{
		background-color: #fff;
	}
</style>

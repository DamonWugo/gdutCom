<template>
	<view class="post-card-container" @click="goToPostDetailPage(postItem.id)">
		<view class="post-header">
			<view class="post-header-left">
				<image :src="postItem.picUrl" mode="" class="avatar"></image>
				<text>{{postItem.title.substring(0,3)}}</text>
				<!-- <text>用户名</text> -->
			</view>
			<text class="post-header-right">23分钟前</text>
		</view>
		<view class="post-content">
			<view class="text-content">
				<text>{{postItem.description}}</text>
				<!-- <text>啥啊这是</text> -->
			</view>
			<view class="pic-content" v-if="postItem.picUrl">
				<view class="single-pic-container" v-if="!Array.isArray(postItem.picUrl)? true : false">
					<image @click.stop="previewPic(postItem.picUrl)" :src="postItem.picUrl" mode="aspectFill" class="post-content-pic"></image>
				</view>
				<view class="multiple-pic-container" v-else>
					<view v-for="(imgItem,index) in postItem.picUrl" :key="index" class="multiple-pic-item-container" @click.stop="previewMultiple(index)">
						<image :src="imgItem.imgUrl" mode="aspectFill" class="multiple-pic-item"></image>
					</view>
				</view>
				
			</view>
		</view>
		<view class="post-footer">
			<view class="classic-label">
				<text>{{!postItem.classic ? '全部' : postItem.classic}}</text>
			</view>
			<view class="post-footer-right">
				<view class="post-footer-comment">
					<image src="../../static/postIcon/commentd.png" mode="" class="comment-icon"></image>
					<text style="color: #96e8ba; font-size: 25rpx;">&nbsp;</text>
				</view>
				<view class="post-footer-like" @click.stop="doLike">
					<image :src="isLiked ? noLiked : liked" mode="" class="like-icon"></image>
					<text :style="{color: isLiked ? '#96e8ba' : '#a0a0a0'}">&nbsp;{{likedNum == 0? '' : likedNum}}</text>
				</view>
			</view>

		</view>
		<view class="post-comment" v-if="postItem.title1">
			<view class="post-comment-left">
				<view class="avatar-container">
					<image src="../../static/avatar/defultavatar.png" mode="" class="post-comment-avatar"></image>
				</view>
				<view class="post-comment-content">
					{{postItem.title}}
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
import { onMounted, ref } from "vue"
	export default {
		props:["postItem"],
		setup(props) {
			let isLiked = ref(false)
			let liked = ref('../../static/postIcon/liked.png')
			let noLiked = ref('../../static/postIcon/likel.png')
			let likedNum = ref(parseInt(Math.random()*1000))
			onMounted(()=>{
				console.log(',2222',props.postItem);
			})
			function goToPostDetailPage(id) {
				uni.vibrateShort({
					success: function () {
						console.log('震动');
					}
				});
				uni.navigateTo({
					url: `/pages/post-details/post-details?id=${id}`
				})
			}
			function previewPic(img){
				uni.previewImage({
					urls:[img],
					current:0
				})
			}
			function previewMultiple(imgIndex){
				let imgList = []
				props.postItem.picUrl.forEach(item =>{
					imgList.push(item.imgUrl)
				})
				uni.previewImage({
					urls:imgList,
					current:imgIndex
				})
			}
			function doLike(){
				uni.vibrateShort({
					success: function () {
						console.log('震动');
					}
				});
				isLiked.value = !isLiked.value
				if(isLiked.value){
					likedNum.value++
				}else{
					likedNum.value--
				}
			}
			return {
				isLiked,
				liked,
				noLiked,
				likedNum,
				previewPic,
				goToPostDetailPage,
				doLike,
				previewMultiple
			}
		}
	}
</script>

<style lang="scss" scoped>
	

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
			color: #131313;
			font-size: 35rpx;
		}
	}

	.post-header-right {
		font-size: 25rpx;
		color: #8a8a8a;
	}

	.post-content {
		width: 630rpx;
		padding: 0 10rpx;
		

	}
	.text-content{
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
	.pic-content{
		margin: 30rpx 0 20rpx;
	}
	.post-content-pic{
		border-radius: 10rpx;
		width: 360rpx;
		height: 250rpx;
	}
	.multiple-pic-container{
		display: flex;
		align-items: center;
		justify-content: flex-start;
		flex-wrap: wrap;
	}
	.multiple-pic-item-container{
		width: 193rpx;
		height: 193rpx;
		background-color: #f6f6f6;
		margin: 10rpx 10rpx;
	}
	.multiple-pic-item{
		width: 193rpx;
		height: 193rpx;
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
		font-size: 25rpx;
	}

	.comment-icon {
		width: 50rpx;
		height: 38rpx;
	}

	.like-icon {
		width: 55rpx;
		height: 50rpx;
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

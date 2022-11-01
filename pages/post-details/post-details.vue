<template>
	<view class="post-details-container">
		<view class="details-index">
			<view class="post-details-header">
				<view class="post-details-header-left">
					<image src="../../static/avatar/touxiang-12.png" mode="" class="avatar"></image>
					<text>{{postDetail.postDetail[0].title}}</text>
				</view>
				<text class="post-details-header-right">{{postDetail.postDetail[0].ctime}}</text>
			</view>
			<view class="post-details-content">
				<view class="text-content">
					<text>{{postDetail.postDetail[0].description}}</text>
					<!-- <text>啥啊这是</text> -->
				</view>
				<view class="pic-content" @click.stop="previewPic(postDetail.postDetail[0].picUrl)">
					<image :src="postDetail.postDetail[0].picUrl" mode="widthFix" class="post-content-pic"></image>
				</view>
			</view>
			<view class="post-details-label">
				<view class="classic-details-label">
					<text>二手市场</text>
				</view>
			</view>
			<view class="post-details-footer">
				<view class="details-comment" @click="showDoComment">
					评论点有见解的...
				</view>
				<view class="details-share">
					<image src="../../static/postIcon/shared.png" mode="" class="details-share-icon"></image>
				</view>
				<view class="details-like">
					<image src="../../static/postIcon/liked.png" mode="" class="details-like-icon"></image>
					<text>&nbsp;42w+</text>
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
			<view class="details-comment-page">
				<view class="no-comment-container" v-if="!commentList.commentList.length">
					<no-comment></no-comment>
				</view>
				
				<comment-card
					v-for="commentItem in commentList.commentList"
					:key='commentItem.id'
					:commentItem='commentItem'
				></comment-card>
				
				

			</view>
		</view>
		<view class="comment-and-mask-container" v-if="isShowComment">
			<view class="mask" @click="clearMask" :style="{ height:  3000 + 'rpx'}" >
				sdsd
			</view>
			<do-commment-container class="do-commment" :isAutoFocus="isAutoFocus" @toSendComment="sendComment" ></do-commment-container>
		</view>

	</view>

</template>

<script>
	import {
		onMounted,
		reactive,
		ref,
	} from "vue"
	import { onLoad } from '@dcloudio/uni-app';

	//api
	import getPosts from '../../service/getPosts.js'
	import moment from 'moment'
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
			let isShowComment = ref(false)
			let isAutoFocus = ref(false)
			let maskHeight = ref(30)
			
			let postDetail = reactive({postDetail:{}})
			
			let commentList = reactive({commentList:[{
					id: Date.now(),
					time: Date.now(),
					commentVal: '已经有的了评论', 
					name: '孙悟空',
					avatarUrl: '../../static/logo.png',
					likeNum: 13
					}]})
			onLoad((option)=>{
				console.log('option',option.id);
				getPosts().then((res)=>{
					postDetail.postDetail = res.data.newslist.filter(item => {
						return item.id == option.id
					})
					console.log(postDetail.postDetail);
					console.log(res.data.newslist[0]);
					console.log(res.data.newslist.filter(item => {
						return item.id == option.id
					}));
				})
			})
			onMounted(()=>{
				
			})
			function previewPic(img){
				uni.previewImage({
					urls:[img],
					current:0
				})
			}

			function changeCommentChannel(tabId) {
				navIndex.value = tabId
			}

			function showDoComment() {
				isShowComment.value = true
				isAutoFocus.value = true
				// isShowComment.value = true
				uni.getSystemInfo({
					success: (res) => {
						maskHeight.value = res.screenHeight * 10
					}
				})
			}

			function sendComment(commentVal) {
				const userInfo = JSON.parse(uni.getStorageSync('userInfo'))
				commentList.commentList.unshift({
					id: Date.now(),
					time: Date.now(),
					commentVal: commentVal, 
					name: userInfo.nickName,
					avatarUrl: userInfo.avatarUrl,
					likeNum: 13
					})
					console.log('commentVal',commentVal);
				isShowComment.value = false
				isAutoFocus.value = false
			}
			function clearMask(){
				isShowComment.value = false
				isAutoFocus.value = false
			}
			return {
				navList,
				navIndex,
				changeCommentChannel,
				showDoComment,
				isShowComment,
				isAutoFocus,
				clearMask,
				maskHeight,
				postDetail,
				previewPic,
				commentList,
				sendComment
			}
		}
	}
</script>

<style lang="scss">
	.post-details-container {}



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
	.pic-content{
		margin: 30rpx 0 20rpx;
	}
	.post-content-pic{
		border-radius: 10rpx;
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

	.details-comment-page{
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
		font-size: 33rpx;
	}

	.the-tab {
		margin-right: 70rpx;
	}

	.active {
		color: #96e8ba;
		// font-weight: 700;
		font-size: 35rpx;
	}

	.no-comment-container {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;
	}

	.do-commment {
		// display: none;
		// position: fixed;
		// bottom: 0;
		// height: 900rpx;
	}

	.comment-and-mask-container {
		position: fixed;
		bottom: 0;
	}

	.mask {
		width: 750rpx;
		height: 100%;
		background-color: rgba(25, 25, 26, 0.5);
	}
</style>

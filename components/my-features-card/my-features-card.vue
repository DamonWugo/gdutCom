<template>
	<view class="features-container">
		<view 
			v-for="tabItem in myNavList"
			:key="tabItem.id"
			class="my-post-container"
			@click="goOtherPage(tabItem.id)"
		>
			<image :src="tabItem.tabIcon" mode="" class="features-img"></image>
			<text class="my-post-name">                         
				{{tabItem.tabName}}                               
			</text>                                             
		</view>                                                 
	</view>
</template>

<script>
import { reactive } from "vue";
	export default {
		setup(){
			const myNavList = reactive([
				{
					id:'001',
					tabName: '我的帖子',
					tabIcon:'../../static/iconAll/menul.png'
				},
				{
					id:'002',
					tabName: '我的评论',
					tabIcon:'../../static/iconAll/settingl.png'
				},
				{
					id:'003',
					tabName: '我的消息',
					tabIcon:'../../static/iconAll/morel.png'
				},
				{
					id:'004',
					tabName: '计算体测',
					tabIcon:'../../static/iconAll/timel.png'
					
				}
				
			])
			function goOtherPage(id){
				switch(id){
					case '001': {
						goUserCenter()
						break
					}
					case '002': {
						goUserCenter()
						break
					}
					case '003': {
						goMsgCenter()
						break
					}
					case '004': {
						goPhysicalTestPage()
						break
					}
				}
			}
			function goUserCenter(){
				uni.navigateTo({
					url:"/pages/user-center/user-center"
				})
			}
			function goMsgCenter(){
				uni.navigateTo({
					url:"/pages/msg-page/msg-page"
				})
			}
			function goPhysicalTestPage(){
				uni.navigateTo({
					url:"/pages/physical-test-page/physical-test-page"
				})
			}
			return{
				goUserCenter,
				goMsgCenter,
				myNavList,
				goOtherPage,
				goPhysicalTestPage
			}
		}
	}
</script>

<style lang="scss">
	.features-container{
		box-sizing: border-box;
		display: flex;
		flex-direction: row;
		justify-content: flex-start;
		align-items: center;
		flex-wrap: wrap;
		width: 660rpx;
		// height: 150rpx;
		padding: 30rpx 30rpx 0;
		background-color: #fff;
		border-radius: 20rpx;
		box-shadow: 5rpx 5rpx 10rpx 3rpx #dddddd;
	}
	.my-post-container{
		flex-shrink: 0;
		box-sizing: border-box;
		display: flex;
		flex-direction: column;
		align-items: center;
		margin: 0 55rpx 30rpx;
		.my-post-name{
			margin-top: 10rpx;
			color: #4b4b4b;
			font-size: 23rpx;
		}
	}
	
	
	
	
	.features-img{
		width: 60rpx;
		height: 60rpx;
	}
</style>
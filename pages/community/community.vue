<template>
	<view class="community-container">
		<view class="nav-bar">
			<scroll-view class="scroll-view-community-bar" scroll-x="true" >
				<view class="tab-bar-for-flex" >
					<view class="tab-container" v-for="tabItem in tabList" :key="tabItem.id" 
					@click="changeToChannel(tabItem.id)" >
						<image class="tab-icon" :src="tabItem.tabIcon" mode="" :class="tabIndex == tabItem.id ? 'active-tab' : ''">
						</image>
						<view class="tab-name" :class="tabIndex == tabItem.id ? 'active-tab-name' : ''">
							<text>{{tabItem.tabName}}</text>
						</view>
					</view>
				</view>
			</scroll-view>
		</view>
		<view class="post-container">
			<post-card v-for="item in 10"></post-card>
		</view>
		<view class="publish-post" @click="goPublish">
			<image src="../../static/plus.png" mode="" class="plus-icon"></image>
		</view>
	</view>

</template>

<script>
	import { reactive, ref, onMounted, onBeforeMount } from "vue"
	import store from "../../store/index.js"
	export default {
		setup() {
			let tabIndex = ref('001');
			let tabList = reactive([{
				id: '001',
				tabName: '全部',
				tabIcon: '../../static/tabBarIcon/classicl.png'
			}, {
				id: '002',
				tabName: '二手市场',
				tabIcon: '../../static/iconAll/historyl.png'
			},
			{
				id: '003',
				tabName: '组队',
				tabIcon: '../../static/iconAll/homel.png'
			},
			{
				id: '004',
				tabName: '广告',
				tabIcon: '../../static/iconAll/menul.png'
			},
			{
				id: '005',
				tabName: '热榜',
				tabIcon: '../../static/iconAll/morel.png'
			},
			{
				id: '006',
				tabName: '最新',
				tabIcon: '../../static/iconAll/photosl.png'
			},
			{
				id: '007',
				tabName: '外卖',
				tabIcon: '../../static/iconAll/settingl.png'
			},
			{
				id: '008',
				tabName: '吴总啊',
				tabIcon: '../../static/iconAll/searchl.png'
			},
			]);
			let userInfo = reactive({userInfo:{}})
			onBeforeMount(()=>{
				uni.checkSession({
					success: (res) => {
						console.log('res', res)
						if(!uni.getStorageSync('userInfo')){
							store.state.loginAbout.isLogined = false
						}else {
							store.state.loginAbout.isLogined = true
							userInfo.userInfo = JSON.parse(uni.getStorageSync('userInfo'))
							store.state.loginAbout.userInfo=userInfo.userInfo
						}
					},
					fail: (res) => {
						store.state.loginAbout.isLogined = false
					}
				})
			})

			function changeToChannel(tabItemId) {
				tabIndex.value = tabItemId
			}
			// 发布帖子
			function goPublish() {
				uni.navigateTo({
					url:'/pages/publish-page/publish-page'
				})
			}
			return {
				tabList,
				changeToChannel,
				tabIndex,
				goPublish
			}
		}
	}
</script>

<style lang="scss">
	.community-container{
		// background-color: #f6f6f6;
	}

	.scroll-view-community-bar {
		white-space: nowrap;
		width: 100%;
	}

	.tab-bar-for-flex {
		display: flex;
		flex-direction: row;
	}

	
	.tab-container {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		width: 150rpx;
		height: 200rpx;
		margin: 0 20rpx;
	}
	
	.tab-icon {
		width: 80rpx;
		height: 80rpx;
		border-radius: 50%;
		padding: 10rpx;
		background-color: #fff;
		border: 5rpx solid #fff;
	}
	
	.tab-name {
		font-size: 25rpx;
		color: #757575;
		margin-top: 10rpx;
	}
	.active-tab {
		border: 5rpx solid #96e8ba;
	}
	.active-tab-name{
		color: #96e8ba;
	}
	
	// 帖子容器
	.post-container{
		display: flex;
		flex-direction: column;
		align-items: center;
		width: 750rpx;
		margin-top: 30rpx;
	}
	.publish-post{
		position: fixed;
		bottom: 60rpx;
		right: 80rpx;
		width: 100rpx;
		height: 100rpx;
		border-radius: 50%;
		background-color: #96e8ba;
		display: flex;
		align-items: center;
		justify-content: center;
		box-shadow: 0rpx 0rpx 20rpx 5rpx rgba(97, 153, 121, 0.3);
	}
	.plus-icon{
		width: 40rpx;
		height: 40rpx;
	}
</style>

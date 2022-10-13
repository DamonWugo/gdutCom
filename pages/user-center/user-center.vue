<template>
	<view class="user-center-center">
		<my-info-card></my-info-card>
		<view class="user-center-nav-container">
			<view class="tab-container" v-for="navItem in myNavList"
					:key="navItem.id"
					@click="switchTab(navItem.id)"
					>
				<view class="nav-item"
				:class="navItem.id == navIndex ? 'active' : '' "
				>
					{{navItem.tabName}}
				</view>
				<view class="active-bottom" v-if="navItem.id == navIndex ? true : false">
				</view>
			</view>
		</view>
		<view class="my-post-page-container">
			<my-post-card v-for="item in 10"></my-post-card >
		</view>
	</view>
</template>

<script>
	import { reactive, ref } from "vue"
	// import store from '../../store/index.js'
	export default {
		setup(){
			let myNavList = reactive([
				{id:'0', tabName: '我的白板'},
				{id:'1', tabName: '我的评论'},
			])
			let navIndex = ref('0')
			function switchTab(tabid){
				navIndex.value = tabid
			}
			return {
				navIndex,
				myNavList,
				switchTab
			}
		}
	}
</script>

<style lang="scss">
	.user-center-center{
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	.user-center-nav-container{
		box-sizing: border-box;
		display: flex;
		flex-direction: row;
		align-items: flex-start;
		margin-top: 40rpx;
	}
	.tab-container{
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	.nav-item{
		box-sizing: border-box;
		margin: 0 40rpx;
		font-size: 35rpx;
		color: #333;
	}
	.active{
		color: #96e8ba;
		font-weight: 700;
	}
	.active-bottom{
		font-size: 38rpx;
		color: #96e8ba;
		width: 100rpx;
		height: 10rpx;
		background-color: #96e8ba;
		border-radius: 500rpx;
		margin-top: 6rpx;
	}
</style>

<template>
	<view class="publish-container">
		<view class="text-area-container">
			<textarea
				placeholder="你想写下..."
				class="text-area"
				:maxlength="-1"
				:cursor-spacing="20"
			></textarea>
		</view>
		<view class="classic-container">
			<view class="classic-header">
				选择分区
			</view>
			<view class="classic-footer">
				<view class="classic-item" 
					v-for="item in tabList"
					:key="item.id"
					@click="selectClaassicItem(item.id)"
					:class="item.id== navIndex? 'avtive' : ''"
				>
					{{item.tabName}}
				</view>
				
			</view>
		</view>
		<view class="btn-container">
			<button class="publish-btn">发 布</button>
			<view class="rule">
				《发布公约》
			</view>
		</view>
	</view>
</template>

<script>
	import { reactive, ref } from 'vue'
	export default {
		setup(){
			let navIndex = ref('001')
			let tabList = reactive([{
				id: '001',
				tabName: '全部',
			}, {
				id: '002',
				tabName: '二手市场',
			},
			{
				id: '003',
				tabName: '组队',
			},
			{
				id: '004',
				tabName: '广告',
			},
			{
				id: '005',
				tabName: '热榜',
			},
			{
				id: '006',
				tabName: '最新',
			},
			{
				id: '007',
				tabName: '外卖',
			},
			{
				id: '008',
				tabName: '吴总啊',
			},
			]);
			function selectClaassicItem(id){
				navIndex.value = id
			}
			return{
				tabList,
				navIndex,
				selectClaassicItem
			}
		}
	}
</script>

<style lang="scss">
	.publish-container{
		box-sizing: border-box;
		display: flex;
		flex-direction: column;
		padding: 30rpx 30rpx;
	}
	.text-area-container{
		box-sizing: border-box;
		background-color: #ffffff;
		margin-bottom: 20rpx;
	}
	.text-area{
		box-sizing: border-box;
		padding:  15rpx 30rpx 0;
		width: 100%;
		height: 950rpx;
	}
	.classic-container{
		box-sizing: border-box;
		display: flex;
		flex-direction: column;
		margin-bottom: 20rpx;
		// padding: 30rpx 30rpx;
	}
	.classic-header{
		color: #96e8ba;
		margin-bottom: 10rpx;
	}
	.classic-footer{
		box-sizing: border-box;
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
	}
	.classic-item{
		box-sizing: border-box;
		padding: 15rpx 25rpx;
		font-size: 25rpx;
		background-color: #fff;
		margin: 10rpx 20rpx 10rpx 0;
		border-radius: 15rpx;
		color: #aaa;
	}
	.publish-btn{
		background-color: #4bc99a;
		color: #fff;
		margin-bottom: 30rpx;
	}
	.rule{
		text-align: center;
		color: #96e8ba;
		font-size: 25rpx;
	}
	.avtive{
		background-color: #96e8ba;
		color: #4bc99a;
		border-bottom: 6rpx solid #4bc99a;
		border-right: 4rpx solid #4bc99a;
	}
</style>

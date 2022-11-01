<template>
	<view class="publish-container">
		<view class="text-area-container">
			<textarea placeholder="你想写下..." class="text-area" :maxlength="-1" :cursor-spacing="20" v-model="postValue"
				:auto-height="true"></textarea>
		</view>
		<view class="img-container">
				<uni-file-picker
					limit="9"
					title="请选择图片(最多9张)"
					:auto-upload="false"
					@select="select" 
					@progress="progress" 
				></uni-file-picker>
			<!-- <view class="add-img-container" @click="uploadImg">
				<image src="../../static/plus.png" mode="" class="add-img-icon"></image>
			</view> -->
		</view>
		<view class="classic-container">
			<view class="classic-header">
				选择分区
			</view>
			<view class="classic-footer">
				<view class="classic-item" v-for="item in tabList" :key="item.id"
					@click="selectClaassicItem(item.id, item.tabName)" :class="item.id== navIndex? 'avtive' : ''">
					{{item.tabName}}
				</view>

			</view>
		</view>
		<view class="btn-container">
			<button class="publish-btn" @click="publishPost">发 布</button>
			<view class="rule">
				《发布公约》
			</view>
		</view>
	</view>
</template>

<script>
	import {
		reactive,
		ref
	} from 'vue'
	import store from "../../store/index.js"
	export default {
		setup() {
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
			let postValue = ref('')
			let navName = ref('全部')
			let post = reactive({
				post: {}
			})

			function uploadImg() {
				uni.chooseImage({
					success: (chooseImageRes) => {
						const tempFilePaths = chooseImageRes.tempFilePaths;
						console.log('212', chooseImageRes);
						// uni.uploadFile({
						// 	url: 'https://www.example.com/upload', //仅为示例，非真实的接口地址
						// 	filePath: tempFilePaths[0],
						// 	name: 'file',
						// 	formData: {
						// 		'user': 'test'
						// 	},
						// 	success: (uploadFileRes) => {
						// 		console.log(uploadFileRes.data);
						// 	}
						// });
					}
				});
			}

			function selectClaassicItem(id, tabName) {
				navIndex.value = id
				navName.value = tabName
			}

			function publishPost() {
				console.log('postValue', postValue);
				post.post = {
					id: Date.now(),
					ctime: Date.now(),
					title: store.state.loginAbout.userInfo.nickName,
					description: postValue.value,
					picUrl: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fbig5.wallcoo.com%2Fsport%2FNBA_Denver_Nuggets%2Fwallpapers%2F1280x1024%2Fkleizawallpaper06.jpg&refer=http%3A%2F%2Fbig5.wallcoo.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1669725010&t=013453ad445c92b2ecb8c51f9cf21988',
					classic: navName.value,
				}
				uni.$emit('addPost', {
					post: post
				})
				uni.showToast({
					title: '发布成功',
					duration: 1000
				});
				setTimeout(() => {
					uni.navigateBack({
						url: '/pages/community/community'
					})
				}, 500)


			}
			
			function select(e){
				console.log('e',e);
			}
			
			function progress(e){
				console.log('ee',e);
			}
			
			return {
				post,
				postValue,
				tabList,
				navIndex,
				selectClaassicItem,
				publishPost,
				uploadImg,
				select,
				progress
			}
		}
	}
</script>

<style lang="scss">
	.publish-container {
		box-sizing: border-box;
		display: flex;
		flex-direction: column;
		padding: 30rpx 30rpx;
	}

	.text-area-container {
		box-sizing: border-box;
		background-color: #ffffff;
		// margin-bottom: 20rpx;
		padding: 30rpx;
	}

	.text-area {
		box-sizing: border-box;
		// padding: 15rpx 30rpx 0;
		width: 100%;
		font-size: 30rpx;
		line-height: 50rpx;
	}

	.img-container {
		padding: 30rpx;
		// height: 200rpx;
		background-color: #fff;
		margin: 0 0 30rpx 0;
	}

	.add-img-container {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 170rpx;
		height: 170rpx;
		background-color: #f6f6f6;
	}

	.add-img-icon {
		width: 100rpx;
		height: 100rpx;
	}

	.classic-container {
		box-sizing: border-box;
		display: flex;
		flex-direction: column;
		margin-bottom: 20rpx;
		// padding: 30rpx 30rpx;
	}

	.classic-header {
		color: #96e8ba;
		margin-bottom: 10rpx;
	}

	.classic-footer {
		box-sizing: border-box;
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
	}

	.classic-item {
		box-sizing: border-box;
		padding: 15rpx 25rpx;
		font-size: 25rpx;
		background-color: #fff;
		margin: 10rpx 20rpx 10rpx 0;
		border-radius: 15rpx;
		color: #aaa;
	}

	.publish-btn {
		background-color: #4bc99a;
		color: #fff;
		margin-bottom: 30rpx;
	}

	.rule {
		text-align: center;
		color: #96e8ba;
		font-size: 25rpx;
	}

	.avtive {
		background-color: #96e8ba;
		color: #4bc99a;
		border-bottom: 6rpx solid #4bc99a;
		border-right: 4rpx solid #4bc99a;
	}
</style>

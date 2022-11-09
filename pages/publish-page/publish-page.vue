<template>
	<view class="publish-container">
		<view class="text-area-container">
			<textarea placeholder="你想写下..." class="text-area" :maxlength="-1" :cursor-spacing="20" v-model="postValue"
				:auto-height="true"></textarea>
		</view>
		<view class="img-container">
			<view v-for="(imgItem,index) in imageList" class="img-list-container" @click="previewPic(index)" @longpress="deleteImg(index)">
				<image :src="imgItem.imgUrl" mode="aspectFill" class="img-list-item"></image>
			</view>
			<view class="add-img-container" @click="uploadImg" v-if="imageList.length >= 9 ? false : true">
				<image src="../../static/plus.png" mode="" class="add-img-icon"></image>
			</view>
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
	import { tablist } from '../../global/tab-list/tab-list.js'
	export default {
		setup() {
			let navIndex = ref('001')
			let tabList = reactive(tablist);
			let postValue = ref('')
			let navName = ref('全部')
			let post = reactive({
				post: {}
			})
			let imageList = reactive([])
			let imgCount = ref(9)

			function uploadImg() {
				uni.chooseImage({
					count: imgCount.value - imageList.length,
					success: (chooseImageRes) => {
						const tempFilePaths = chooseImageRes.tempFilePaths;
						console.log('212', chooseImageRes);
						for(let i = 0, len = tempFilePaths.length; i< len;i++ ){
							imageList.push({
								id: Date.now(),
								imgUrl: tempFilePaths[i]
							})
						}
						
						console.log('list', imageList);
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
				
				// console.log('postValue', nanoid());
				post.post = {
					id: Date.now(),
					ctime: Date.now(),
					title: store.state.loginAbout.userInfo.nickName,
					description: postValue.value,
					picUrl: imageList.length <= 0 ? null : imageList,
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
				}, 800)


			}
			
			function previewPic(index){
				let imgList = []
				imageList.forEach(item =>{
					imgList.push(item.imgUrl)
				})
				uni.previewImage({
					urls:imgList,
					current:index
				})
			}
			
			function deleteImg(imgIndex){
				uni.showActionSheet({
					itemList: ['删除此照片'],
					itemColor: '#ff0004',
					success: function (res) {
						imageList.splice(imgIndex,1)
						console.log('选中了第' + (res.tapIndex + 1) + '个按钮');
					},
					fail: function (res) {
						console.log(res.errMsg);
					}
				});
			}
			
			return {
				post,
				postValue,
				tabList,
				navIndex,
				selectClaassicItem,
				publishPost,
				uploadImg,
				imageList,
				previewPic,
				deleteImg,
				imgCount
			}
		}
	}
</script>

<style lang="scss" scoped>
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
		display: flex;
		flex-direction: row;
		justify-content: flex-start;
		flex-wrap: wrap;
		padding: 30rpx;
		// height: 200rpx;
		background-color: #fff;
		margin: 0 0 30rpx 0;
	}
	.img-list-container{
		display: flex;
		align-items: center;
		justify-content: center;
		width: 193rpx;
		height: 193rpx;
		background-color: #f6f6f6;
		margin: 10rpx 10rpx;
	}
	.img-list-item{
		width: 193rpx;
		height: 193rpx;
	}

	.add-img-container {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 190rpx;
		height: 190rpx;
		background-color: #f6f6f6;
		margin: 10rpx 10rpx;
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

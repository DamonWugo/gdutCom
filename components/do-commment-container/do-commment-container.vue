<template>
		<view class="do-commment-container" >
			<view class="header-container">
				<view class="avatar-container">
					<image :src="userInfo.avatarUrl" mode="" class="avatar-icon"></image>
				</view>
				<view class="name-container" >
					{{userInfo.nickName}}
				</view>
			</view>
			<view class="footer-container">
				<view class="textarea-container">
					<textarea class="text-area" 
					    :auto-height="true" 
						:auto-focus="isAutoFocus"
						:adjust-position="false"
						:show-confirm-bar="false"
						placeholder="来说点有趣的..."
						placeholder-style="font-size:30rpx;"
						fixed="true"
						v-model="commentVal" 
						:maxlength="150"
						></textarea>
				</view>
				<view class="btn-container" @click="sendComment">
					<button class="btn" size="mini" :disabled="commentVal.trim() === '' ? true : false">评论</button>
				</view>
			</view>
			<view class="key-word-container" :style="{ height:  keyWordHeight + 'rpx'}">
				
			</view>
		</view>

</template>

<script>
	import {
		computed,
		onMounted,
		ref,
		toRefs,
		watch
	} from "vue"
	import store from "../../store/index.js"
	export default {
		props: ["isAutoFocus"],
		setup(props, context) {
			let keyWordHeight = ref(500)
			let isBtnDisabled = ref(true)
			let commentVal = ref('')
			const { userInfo } = store.state.loginAbout
			
			// watch(commentVal, (p, n)=>{
			// 	console.log(p)
			// 	console.log(n)
			// })
			onMounted(()=>{
				uni.onKeyboardHeightChange(res => {
				  keyWordHeight.value = res.height * 2
				  console.log(res.height)
				})
			})
			
			//自定义事件，子传父
			function sendComment(){
				context.emit("toSendComment", commentVal.value)
				console.log('commentVal.value',commentVal.value);
			}
			return{
				keyWordHeight,
				sendComment,
				isBtnDisabled,
				commentVal,
				userInfo
			}
		}
	}
</script>

<style lang="scss">
	.do-commment-container {
		box-sizing: border-box;
		display: flex;
		flex-direction: column;
		padding: 30rpx;
		background-color: #fff;
		width: 750rpx;
	}

	.header-container {
		display: flex;
		flex-direction: row;
		align-items: center;
		margin-bottom: 20rpx;
		color: #96e8ba;
		font-size: 28rpx;
	}

	.avatar-container {
		width: 70rpx;
		height: 70rpx;
		border-radius: 50%;
		margin-right: 20rpx;
	}

	.avatar-icon {
		width: 70rpx;
		height: 70rpx;
		border-radius: 50%;
	}

	.footer-container {
		display: flex;
		flex-direction: row;
		align-items: baseline;
		justify-content: center;
	}

	.textarea-container {
		box-sizing: border-box;
		width: 540rpx;
		padding: 20rpx;
		// border: 1rpx solid #333;
		border-radius: 13rpx;
		background-color: #f6f6f6;
	}

	.text-area {
		font-size: 30rpx;
		// line-height: 50rpx;
		width: 520rpx;
	}

	.btn-container {
		width: 200rpx;
	}

	.btn {
		color: #fff;
		font-weight: 700;
		background-color: #75e89c;
		margin: 0 10rpx 0 10rpx;
		height: 70rpx;
	}
	.key-word-container{
		background-color: #fff;
		width: 100%;
	}
	
</style>

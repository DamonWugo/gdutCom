<template>
	<view class="logined-container" >
		<view class="top-container">
			<view class="my-info-container">
				<text class="nick-name" v-if="isLogined">{{userInfo.userInfo.nickName}}</text>
				<text class="nick-name" v-else @click="login">点击登录</text>
				<text class="school" v-if="isLogined">广东工业大学龙洞校区</text>
			</view>
			<view class="my-avatar-container">
				<image v-if="isLogined" :src="userInfo.userInfo.avatarUrl" mode="" class="my-avatar-icon" @click="goUserCenter"></image>
				<image v-else :src="defaultAvatar" mode="" class="my-avatar-icon"></image>
				<!-- <image :src="isLogined ? userInfo.avatarUrl : defaultAvatar" mode="" class="my-avatar-icon"></image> -->
			</view>
		</view>
		<view class="my-day-center-container" >
			<view v-if="isLogined">
				来到这里的第<text class="day-num">1</text>天
			</view>
			<view v-else @click="login">
				认证清新账号，体验完整功能 >
			</view>
			<view class="go-user-center" @click="goUserCenter" v-if="isLogined">
				个人主页 > 
			</view>
		</view>
	</view>
</template>

<script>
    import { onMounted, ref, onBeforeMount, reactive } from "vue"
	import store from "../../store/index.js"
	import { randomUserInfo } from '../../global/random-userInfo/random-userInfo.js'
	export default {
		setup() {
			let userInfo = reactive({userInfo:{}})
			let defaultAvatar = ref('../../static/avatar/defultavatar.png')
			let isLogined = ref(store.state.loginAbout.isLogined)
			let loginOrNot = ref('false')
			onMounted(()=>{
				userInfo.userInfo= store.state.loginAbout.userInfo == null ? defaultAvatar.value : store.state.loginAbout.userInfo
				loginOrNot.value = isLogined.value
			})
			function goUserCenter() {
				uni.navigateTo({
					url: "/pages/user-center/user-center"
				})
			}
			function login() {
				let randomNum = Math.ceil(Math.random()*10)
				userInfo.userInfo =  randomUserInfo[randomNum]
				store.dispatch("loginAbout/savaUserInfo", userInfo.userInfo);
				uni.setStorageSync('userInfo', JSON.stringify(userInfo.userInfo))//存储登录信息到Storage
				uni.login({
					provider : 'weixin',
					success : (res)=>{
						console.log('登录',res);
						isLogined.value=true
						store.dispatch('loginAbout/changeLoginStatus', true)
						if(res.errMsg == "login:ok"){
							let code =res.code;
						}
					}
				})
				// // 获取code 小程序专有，用户登录凭证。
				// uni.getUserInfo({
				// 	desc: "获取用户基本资料",
				// 	success: (res) => {
				// 		console.log('[]',res)
				// 		userInfo.userInfo = res.userInfo
				// 		store.dispatch("loginAbout/savaUserInfo", userInfo.userInfo);
				// 		uni.setStorageSync('userInfo', JSON.stringify(res.userInfo))//存储登录信息到Storage
				// 		uni.login({
				// 			provider : 'weixin',
				// 			success : (res)=>{
				// 				console.log('登录',res);
				// 				isLogined.value=true
				// 				store.dispatch('loginAbout/changeLoginStatus', true)
				// 				if(res.errMsg == "login:ok"){
				// 					let code =res.code;
				// 				}
				// 			}
				// 		})
				// 	},
				// 	// 用户取消登录后的提示
				// 	fail: (res) => {
				// 		uni.showModal({
				// 			title: "授权用户信息失败！",
				// 			// 是否显示取消按钮，默认为 true
				// 			showCancel: false
				// 		})
				// 	}
				// })
			}
			return {
				goUserCenter,
				userInfo,
				isLogined,
				loginOrNot,
				login,
				defaultAvatar
			}
		}
	}
</script>

<style lang="scss">
	.logined-container {
		box-sizing: border-box;
		display: flex;
		flex-direction: column;
		width: 660rpx;
		height: 190rpx;
		background-color: #fff;
		border-radius: 20rpx;
		padding: 0rpx 50rpx;
		box-shadow: 5rpx 5rpx 10rpx 3rpx #dddddd;
	}
	.top-container{
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: flex-end;
		position: relative;
		top: -35rpx;
	}
	.my-info-container{
		display: flex;
		flex-direction: column;
		position: relative;
		top: -35rpx;
	}
	.nick-name{
		color: #1d1d1d;
		font-weight: 700;
		margin-bottom: 10rpx;
	}
	.school{
		font-size: 20rpx;
		color: #303030;
	}
	.my-avatar-container{
		background-color: #fff;
		border-radius: 50%;
	}
	
	.my-avatar-icon{
		width: 120rpx;
		height: 120rpx;
		border-radius: 50%;
		border: 20rpx solid #fff;
	}
	.my-day-center-container{
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
		position: relative;
		top: -45rpx;
		font-size: 25rpx;
		color: #4b4b4b;
	}
	.day-num{
		margin: 0 10rpx;
		font-size: 30rpx;
		font-weight: 700;
	}
	.go-user-center{
		margin-right: 15rpx;
	}
	
</style>

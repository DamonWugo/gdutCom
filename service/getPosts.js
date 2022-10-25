import store from "../store/index.js"

function getPosts() {
	return uni.request({
		url: 'https://api.tianapi.com/startup/index',
		data: {
			key: 'ce110e048b4fcf9f199f532058960a94',
			num: 10,
		},
		
	})
}
export default getPosts

<template>
	<view class="page-container">
		<image src="../../static/quexingpage/nocomments.png" mode="" class="no-comment"></image>
		<view class="text">
			<text style="color: #a9edd3;">评论区开荒，我辈义不容辞</text>
		</view>
	</view>
</template>

<script>
	export default {
	}
</script>

<style lang="scss">
	.page-container{
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		// padding: 150rpx 0 200rpx;
		height: 900rpx;
	}
	.no-comment{
		width: 300rpx;
		height: 300rpx;
	}
</style>
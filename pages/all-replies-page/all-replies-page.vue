<template>
	<view class="replay-page">
		<view class="replay-header">
			<all-reply-header-card></all-reply-header-card>
		</view>
		<view class="replay-body">
			<view class="body-header">
				全部回复&nbsp;(22条)
			</view>
			<view class="body-footer">
				<all-reply-header-card v-for=' i in 21'></all-reply-header-card>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		
	}
</script>

<style lang="scss" scoped>
	.replay-header{
		margin-bottom: 25rpx;
	}
	.replay-body{
		background-color: #fff;
	}
	.body-header{
		font-size: 30rpx;
		padding: 20rpx 35rpx;
	}
</style>

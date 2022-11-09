<template>
	<view class="grade-container">
		<view class="body-grade">
			<view class="body-grade-title">
				身体质量指数
			</view>
			<view class="body-grade-content">
				<text class="grade-number">{{isNaN(bmiScore) ? 0 : bmiScore.toFixed(1)}}</text>
				<text class="grade-text">{{bmiText}}</text>
			</view>
		</view>
		<view class="test-grade">
			<view class="test-grade-title">
				体测成绩
			</view>
			<view class="test-grade-content">
				<text class="grade-number">{{testScore.toFixed(1)}}</text>
				<!-- <text class="grade-text">{{}}</text> -->
			</view>
		</view>
	</view>
</template>

<script>
import { computed, reactive } from "vue"
	export default {
		props: ["bmiScore", "testScore"],
		setup(props) {
			const bmiText = computed(()=>{
				if(props.bmiScore < 23.9){
					return '正常'
				}else if(props.bmiScore <28){
					return '超重'
				}else {
					return '肥胖'
				}
			})
			return {
				bmiText
			}
		}
	}
</script>

<style lang="scss" scoped>
	.grade-container {
		display: flex;
		flex-direction: row;
		background-color: #6ee6a3;
		justify-content: space-around;
		padding: 50rpx 0;
		width: 750rpx;
	}

	.body-grade {
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.body-grade-title {
		font-size: 32rpx;
		font-weight: 600;
		color: rgba(255, 255, 255);
	}

	.body-grade-content {
		margin-top: 10rpx;

		.grade-number {
			color: #fff;
			font-size: 55rpx;
			font-weight: 700;
			margin-right: 5rpx;
		}

		.grade-text {
			color: #fff;
			font-size: 28rpx;
		}
	}

	.test-grade {
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.test-grade-title {
		font-size: 32rpx;
		font-weight: 700;
		color: rgba(255, 255, 255);
	}

	.test-grade-content {
		margin-top: 10rpx;

		.grade-number {
			color: #fff;
			font-size: 55rpx;
			font-weight: 700;
			margin-right: 5rpx;
		}

		.grade-text {
			color: #fff;
			font-size: 28rpx;
		}
	}
</style>

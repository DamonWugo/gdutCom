<template>
	<view class="phy-container">
		<!-- <view class="ad-container" v-if="isShowAd">
			<ad unit-id="adunit-41156f2999eeab5c"></ad>
		</view> -->
		<view class="phy-header">
			<phy-grade-card :bmiScore="bmiScore" :testScore="testScore"></phy-grade-card>
		</view>
		
		<view class="tips-container">
			<text>重要说明：男生体测计算出来会偏高3-5分，请男生们要自行减去3-5分</text>
		</view>
		<view class="phy-body">
			<view class="phy-data-container">
				<view class="sex-Item">
					<view class="title">
						性别
					</view>
					<view class="sex-option">
						<view class="male" v-for="sexItem in sexArr" :key="sexItem.id"
							:class="sexIndex == sexItem.id ? 'active' : ''" @click="selectSex(sexItem.id)">
							{{sexItem.sexText}}
						</view>
					</view>
				</view>
				<view class="grade-Item">
					<view class="title">
						年级
					</view>
					<view class="grade-option">
						<view class="male" v-for="gradeItem in gradeArr" :key="gradeItem.id"
							:class="gradeIndex == gradeItem.id ? 'active' : ''" @click="selectGrade(gradeItem.id)">
							{{gradeItem.gradeText}}
						</view>
					</view>
				</view>
				<view class="height-Item">
					<view class="title">
						身高
					</view>
					<view class="height-data-container">
						<view class="input-container">
							<input type="digit" class="ipt" placeholder="请输入" v-model="height">
						</view>
						<view class="unit">
							厘米
						</view>
					</view>
				</view>
				<view class="height-Item">
					<view class="title">
						体重
					</view>
					<view class="height-data-container">
						<view class="input-container">
							<input type="digit" class="ipt" placeholder="请输入" v-model="weight">
						</view>
						<view class="unit">
							千克
						</view>
					</view>
				</view>
				<view class="height-Item">
					<view class="title">
						肺活量
					</view>
					<view class="height-data-container">
						<view class="input-container">
							<input type="digit" class="ipt" placeholder="请输入" v-model="vitalCapacity">
						</view>
						<view class="unit">
							毫升
						</view>
					</view>
				</view>
				<view class="height-Item">
					<view class="title">
						坐位体前屈
					</view>
					<view class="height-data-container">
						<view class="input-container">
							<input type="digit" class="ipt" placeholder="请输入" v-model="sittingForwardFlexion">
						</view>
						<view class="unit">
							厘米
						</view>
					</view>
				</view>
				<view class="height-Item">
					<view class="title">
						立定跳远
					</view>
					<view class="height-data-container">
						<view class="input-container">
							<input type="digit" class="ipt" placeholder="请输入" v-model="standingLongJump">
						</view>
						<view class="unit">
							厘米
						</view>
					</view>
				</view>
				<view class="height-Item">
					<view class="title">
						50米跑
					</view>
					<view class="height-data-container">
						<view class="input-container">
							<input type="digit" class="ipt" placeholder="请输入" v-model="fiftyMetersRun">
						</view>
						<view class="unit">
							秒数
						</view>
					</view>
				</view>
				<view class="height-Item">
					<view class="title">
						{{ sexIndex === 0 ? '1000米跑' : '800米跑'}}
					</view>
					<view class="height-data-container">
						<view class="input-container">
							<input type="digit" class="ipt" placeholder="请输入" v-model="thouSandMetersRun">
						</view>
						<view class="unit">
							秒数
						</view>
					</view>
				</view>
				<view class="pull-up-Item">
					<view class="title">
						{{ sexIndex === 0 ? '引体向上' : '仰卧起坐'}}
					</view>
					<view class="height-data-container">
						<view class="input-container">
							<input type="digit" class="ipt" placeholder="请输入" v-model="pullUp">
						</view>
						<view class="unit">
							次数
						</view>
					</view>
				</view>
			</view>
		</view>
		<view class="tips-container">
			注：此处成绩仅供参考，不作为真实有效成绩 <br/>
		</view>
		
	</view>
</template>

<script>
	import {
		computed,
		onMounted,
		reactive,
		ref
	} from "vue"
	// 引入体测计算函数
	import cal from '../../utils/cal-phy-test/cal-phy-test.js'
	export default {
		setup() {
		
			const sexArr = reactive([{
				id: 0,
				sexText: '男生'
			}, {
				id: 1,
				sexText: '女生'
			}])
			const gradeArr = reactive([{
					id: 0,
					gradeText: '大一'
				}, {
					id: 1,
					gradeText: '大二'
				},
				{
					id: 2,
					gradeText: '大三'
				},
				{
					id: 3,
					gradeText: '大四'
				},
			])
			let sexIndex = ref(0)
			let gradeIndex = ref(0)
			let height = ref('')
			let weight = ref('')
			let vitalCapacity = ref('') // 肺活量
			let sittingForwardFlexion = ref('')
			let standingLongJump = ref('')
			let fiftyMetersRun = ref('')
			let thouSandMetersRun = ref('')
			let eightHundredMetersRun = ref('')
			let pullUp = ref('')
			let abdominalCurl = ref('')
			let testScore = computed(() => {
				return new cal(sexIndex.value,
					gradeIndex.value, 
					Number(height.value),
					Number(weight.value),
					Number(vitalCapacity.value),
					Number(sittingForwardFlexion.value),
					Number(standingLongJump.value),
					Number(fiftyMetersRun.value),
					Number(pullUp.value),
					Number(thouSandMetersRun.value)
				).getCalGrade().calGrade
			})
			let bmiScore = computed(() => {
				if (weight.value === '' || height.value === '') {
					return 0
				}
				return (Number(weight.value) / (Number(height.value) * 0.01 * 0.01 * Number(height.value)))
			})
			
			

			function selectSex(id) {
				sexIndex.value = id
			}

			function selectGrade(id) {
				gradeIndex.value = id
			}
			return {
				sexArr,
				sexIndex,
				selectSex,
				gradeArr,
				selectGrade,
				gradeIndex,
				height,
				weight,
				vitalCapacity,
				sittingForwardFlexion,
				standingLongJump,
				fiftyMetersRun,
				thouSandMetersRun,
				eightHundredMetersRun,
				pullUp,
				abdominalCurl,
				testScore,
				bmiScore,
			}
		}
	}
</script>

<style lang="scss" scoped>
	.phy-container{
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	.phy-header {
		margin-bottom: 5rpx;
	}

	.phy-body {
		display: flex;
		flex-direction: column;
		align-items: center;

	}

	.phy-data-container {
		width: 650rpx;
		padding: 0 0 0 30rpx;
		border: 1px solid #ccc;
		background-color: #fff;
	}

	// 性别
	.sex-Item {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
		border-bottom: 1px solid #ccc;
		height: 90rpx;
		padding-right: 30rpx;
	}

	.sex-option {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
	}

	.male {
		color: #969696;
		padding: 5rpx 15rpx;
		border: 1rpx solid #969696;
		margin-left: 20rpx;
		font-size: 28rpx;
		border-radius: 8rpx;
	}

	.active {
		color: #fff;
		border: 1rpx solid #6ee6a3;
		background-color: #6ee6a3;
	}

	// 年级
	.grade-Item {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
		border-bottom: 1px solid #ccc;
		height: 90rpx;
		padding-right: 30rpx;
	}

	.grade-option {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
	}

	// 身高
	.height-Item {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
		border-bottom: 1px solid #ccc;
		height: 90rpx;
		padding-right: 30rpx;
	}

	.height-data-container {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: flex-start;
	}

	.ipt {
		width: 100rpx;
	}

	.unit {
		margin-left: 10rpx;
	}
	.pull-up-Item{
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
		border:0;
		height: 90rpx;
		padding-right: 30rpx;
	}
	.tips-container{
		width: 680rpx;
		color: #8a8a8a;
		font-size: 25rpx;
		margin: 20rpx 0 20rpx  0;
	}
	.ad-container{
		width: 750rpx;
	}
</style>

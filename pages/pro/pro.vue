<template>
	<view class="container">
		<scroll-view scroll-y @scroll="scroll" style="height: 100vh;">
			<swiper :indicator-dots="indicatorDots" :autoplay="autoplay" :interval="interval" :duration="duration">
				<swiper-item v-for="item in bannerList" :key="item">
					<image :src="item.banner_url" mode="scaleToFill" style="width: 100%;"></image>
				</swiper-item>
			</swiper>
			
			<view class="type uni-flex" :class="{'type-fixed': typeFixed}">
				<view class="left uni-flex">
					<image src="../../static/image/tab_pro.png"></image>
					<text class="fs-head">产品</text>
				</view>
				<view class="right uni-flex">
					<picker class="picker-item" 
						mode="selector" 
						:value="typeIndex"
						:range="typeList" 
						@change="typeChange">
						<view class="fs-head pciker-text">{{typeList[typeIndex]}}<image src="../../static/image/icon_list.png"></image></view>
					</picker>
				</view> 
			</view>
			
			<view class="uni-list">
				<view class="uni-list-cell" hover-class="uni-list-cell-hover" 
					v-for="(item,index) in proList" :key="index">
					<view class="uni-media-list">
						<image class="uni-media-list-logo" :src="item.product_url"></image>
						<view class="uni-media-list-body">
							<view class="uni-media-list-text-top fs-head">{{item.product_title}}</view>
							<view class="uni-media-list-text-bottom fs-part">{{item.product_brief}}</view>
						</view>
					</view>
				</view>
				<view class="none" v-if="proList.length == 0">
					暂无产品信息...
				</view>
			</view>
		</scroll-view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				bannerList: [],
				indicatorDots: true,
				autoplay: true,
				interval: 5000,
				duration: 1000,
				
				typeFixed: false,
				typeList: [
					'全部'
				],
				typeIndex: 0,
				
				proList: []
			}
		},
		onLoad(e) {
			uni.request({
				url: this.$requestUrl+'get_pro_info',
				method: 'GET',
				success: res => {
					this.typeList = res.data.data.type;
                    this.bannerList = res.data.data.banner;
				},
				fail: () => {}
			});
			this.getListInfo();
		},
		methods: {
			getListInfo(type='') {
				uni.showLoading();
				uni.request({
					url: this.$requestUrl+'get_pro_list',
					method: 'GET',
					data: {
						type: type
					},
					success: res => {
						this.proList = res.data.data;
					},
					fail: () => {},
					complete: () => {
						uni.hideLoading();
					}
				});
			},
			toDetail(e) {
				var proId = e.currentTarget.dataset.id;
				uni.navigateTo({
					url: '../pro_detail/pro_detail?proid='+proId
				});
			},
			typeChange(e) {
				this.typeIndex = e.detail.value;
				let type = this.typeList[e.detail.value];
				this.getListInfo(type);
			},
			scroll: function(e) {
				let scrollTop = e.detail.scrollTop;
				if (scrollTop >= 150) {
					this.typeFixed = true;
				} else {
					this.typeFixed = false;
				}
			}
		},
		onShareAppMessage() {
			return {
				title: '鼎盛润泽--产品展示',
				path: '/pages/pro/pro'
			}
		}
	}
</script>

<style>
	page{
		color: #666;
	}
	
	.type-fixed{
		width: 100%;
		box-sizing: border-box;
		position: fixed;
		z-index: 9999;
		top: 0;
	}
	.type{
		height: 100upx;
		padding: 0 30upx;
		background-color: #F3F3F3;
		justify-content: space-between;
	}
	.type .left,
	.type .right{
		align-items: center;
	}
	.type .left image{
		width: 40upx;
		height: 40upx;
		margin-right: 10px;
	}
	.type .right image{
		width: 40upx;
		height: 30upx;
		margin-left: 10px;
	}
	.pciker-text{
		display: flex;
		align-items: center;
	}
	
	.uni-list:after{
		height: 0;
	}
	.uni-list-cell:after{
		left: 256upx;
	}
	.uni-media-list{
		padding: 60upx 40upx;
	}
	.uni-media-list-logo{
		width: 180upx;
		height: 180upx;
		margin-right: 36upx;
		-webkit-box-shadow: 0 0 30upx rgba(0, 0, 0, .1);
		box-shadow: 0 0 30upx rgba(0, 0, 0, .1);
	}
	.uni-media-list-body{
		height: auto;
		overflow: auto;
		justify-content: flex-start;
	}
	.uni-media-list-text-top{
		margin-bottom: 10px;
	}
	.uni-media-list-text-bottom{
		line-height: 2em;
	}
	
	.none{
		text-align: center;
		padding: 20px;
	}
</style>

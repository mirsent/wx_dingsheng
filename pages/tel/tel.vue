<template>
	<view class="container">
		<view class="top">
			<image :src="logo" class="logo"></image>
			<text class="name fs-minor">{{contact}}</text>
			<image :src="wx" class="code" @tap="showTelImg"></image>
		</view>
		<view class="tel fs-head">
			<view class="tel-item">
				<image src="../../static/image/icon_tel.png"></image>
			</view>
			<view class="tel-item">
				<text>联系方式</text>
				<text @tap="makePhoneCall">{{tel}}</text>
			</view>
			<view class="tel-item">
				<text>传真</text>
				<text>{{fax}}</text>
			</view>
		</view>
		<view class="map">
			<view class="location fs-head">
				{{location}}
			</view>
			<view class="img">
				<image src="../../static/image/map.png" mode="widthFix"></image>
			</view>
		</view>
		
		<view class="img-box" v-if="isShow" @tap="closeTelImg">
			<image  :src="wx"></image>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				logo: '../../static/image/logo_s.png',
				name: '鼎盛润泽',
				contact: '',
				wx: '',
				tel: '',
				fax: '',
				location: '',
				isShow: false
			}
		},
		onLoad(e) {
			uni.showLoading();
			uni.request({
				url: this.$requestUrl + 'get_company_info',
				method: 'GET',
				success: res => {
					let info = res.data.data;
					this.contact = info.company_contact;
					this.wx = info.company_wx_code;
					this.tel = info.company_tel;
					this.fax = info.company_fax;
					this.location = info.company_location;
				},
				fail: () => {},
				complete: () => {
					uni.hideLoading();
				}
			});
		},
		methods: {
			makePhoneCall: function() {
				uni.makePhoneCall({
					phoneNumber: this.tel,
				})
			},
			showTelImg: function(){
				this.isShow = true;
			},
			closeTelImg: function(){
				this.isShow = false;
			}
		},
		onShareAppMessage() {
			return {
				title: '鼎盛润泽--联系方式',
				path: '/pages/tel/tel'
			}
		}
	}
</script>

<style>
	.top {
		height: 480upx;
		display: flex;
		flex-direction: column;
		align-items: center;
		background-color: #E8E8E8;
	}

	.logo {
		width: 180upx;
		height: 180upx;
		margin-top: 50upx;
		margin-bottom: 20upx;
	}

	.name {
		color: #0C5182;
		margin-bottom: 10px;
	}

	.code {
		width: 100upx;
		height: 100upx;
		margin-bottom: 20px;
	}

	.tel {
		height: 150upx;
		padding: 0 10px;
		color: #666;
		background-color: #F3F3F3;
		display: flex;
		justify-content: space-around;
		align-items: center;
	}

	.tel-item {
		display: flex;
		flex-direction: column;
	}

	.tel-item image {
		width: 30px;
		height: 30px;
		margin-right: 10px;
	}

	.tel-item text {
		line-height: 50upx;
	}

	.location {
		text-align: center;
		line-height: 130upx;
	}

	.img {
		display: flex;
		justify-content: center;
		align-items: center;
	}
	
	/* 模态框 */
	.img-box{
		width: 460upx;
		height: 460upx;
		padding: 20upx;
		position: fixed;
		left: 50%;
		top: 50%;
		margin-left: -250upx;
		margin-top: -230upx;
		background: #FFF;
		-webkit-box-shadow: 0 0 30upx rgba(0, 0, 0, .1);
		box-shadow: 0 0 30upx rgba(0, 0, 0, .1);
		border-radius: 10upx;
	}
	.img-box image{
		width: 460upx;
		height: 460upx;
	}
</style>

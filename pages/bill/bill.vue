<template>
	<view class="container">
		<view class="top">
			<image :src="logo" class="logo"></image>
			<text class="name fs-minor">{{name}}</text>
			<image :src="wx" class="code" @tap="showBillImg"></image>
		</view>
		<view class="uni-list fs-head">
			<view class="uni-list-cell">
				<view class="uni-list-cell-navigate">
					公司名称：{{company}}
				</view>
			</view>
			<view class="uni-list-cell">
				<view class="uni-list-cell-navigate location">
					<text style="flex-shrink: 0;">地址：</text>
					<text>{{location}}</text>
				</view>
			</view>
			<view class="uni-list-cell">
				<view class="uni-list-cell-navigate" @tap="makePhoneCall">
					电话：{{tel}}
				</view>
			</view>
			<view class="uni-list-cell">
				<view class="uni-list-cell-navigate">
					开户行：{{bank}}
				</view>
			</view>
			<view class="uni-list-cell">
				<view class="uni-list-cell-navigate">
					账号：{{account}}
				</view>
			</view>
			<view class="uni-list-cell">
				<view class="uni-list-cell-navigate">
					税号：{{tax}}
				</view>
			</view>
		</view>
		
		<view class="img-box" v-if="isShow" @tap="closeBillImg">
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
				wx: '',
				company: '',
				location: '',
				tel: '',
				bank: '',
				account: '',
				tax: '',
				isShow: false
			}
		},
		onLoad(e) {
			uni.showLoading();
			uni.request({
				url: this.$requestUrl+'get_bill_info',
				method: 'GET',
				success: res => {
					let info = res.data.data;
					this.wx = info.wx_code;
					this.company = info.company_name;
					this.location = info.location;
					this.tel = info.tel;
					this.bank = info.bank;
					this.account = info.account;
					this.tax = info.tax;
				},
				fail: () => {},
				complete: () => {
					uni.hideLoading();
				}
			});
		},
		onShareAppMessage() {
			return {
				title: '鼎盛润泽--开票资料',
				path: '/pages/bill/bill'
			}
		},
		methods: {
			makePhoneCall: function(){
				uni.makePhoneCall({
					phoneNumber: this.tel,
				})
			},
			showBillImg: function(){
				this.isShow = true;
			},
			closeBillImg: function(){
				this.isShow = false;
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
	
	.location{
		align-items: flex-start;
	}
	
	/* 模态框 */
	.img-box{
		width: 460upx;
		height: 460upx;
		padding: 20upx;
		position: fixed;
		left: 50%;
		top: 50%;
		z-index: 999;
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

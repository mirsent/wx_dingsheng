<template>
	<view class="container">
		<view class="logo">
			<image src="../../static/image/logo.png" mode="aspectFit" @tap="toOrder"></image>
		</view>
		<view class="info fs-part">
			<text class="name fs-head">{{name}}</text>
			<text class="name-en">{{nameEN}}</text>
			<text class="location">{{location}}</text>
			<view class="tel">电话: <text @tap="makePhoneCall">{{tel}}</text> 传真: {{fax}}</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				name: '',
				nameEN: '',
				location: '',
				tel: '',
				fax: '',
                hasOrder: false
			}
		},
		onLoad(e) {
			uni.showLoading();
			uni.request({
				url: this.$requestUrl+'get_company_info',
				method: 'GET',
				success: res => {
					let info = res.data.data;
					this.name = info.company_name;
					this.nameEN = info.company_name_en;
					this.location = info.company_location;
					this.tel = info.company_tel;
					this.fax = info.company_fax;
				},
				fail: () => {},
				complete: () => {
					uni.hideLoading();
				}
			});
            uni.login({
            	provider: 'weixin',
            	success: res => {
                    uni.request({
                    	url: this.$requestUrl+'code_2_session',
                    	method: 'GET',
                    	data: {
                            js_code: res.code
                        },
                    	success: res => {
                            if (res.data.status == 1) {
                            	this.hasOrder = true;
                            }
                        }
                    });
                }
            });
		},
		onShareAppMessage() {
			return {
				title: '天津鼎盛润泽商贸有限公司',
				path: '/pages/index/index'
			}
		},
		methods: {
			makePhoneCall: function(){
				uni.makePhoneCall({
					phoneNumber: this.tel,
				})
			},
            toOrder() {
                if (this.hasOrder) {
                	uni.navigateTo({
                		url: '../order/order'
                	});
                }
            }
		}
	}
</script>

<style>
	.logo{
		height: 60%;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.logo image{
		width: 220upx;
	}
	
	.info{
		flex: 1;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}
	.info-box{
		width: 74%;
	}
	.name,
	.name-en{
		color: #0C5182;
	}
	
	text{
		line-height: 2em;
	}
</style>

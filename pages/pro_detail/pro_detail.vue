<template>
	<view class="container">
		<view class="img">
			<image :src="product_url" mode="aspectFill"></image>
		</view>
		<view class="content">
			<view class="name fs-head">
				{{product_title}}
			</view>
			<view class="type fs-part">
				产品类型: {{product_type_name}}
			</view>
			<view class="detail">
				<view class="title">商品详情</view>
				<rich-text type="node" :nodes="product_detail"></rich-text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				product_url: '',
				product_title: '',
				product_type_name: '',
				product_detail: ''
			};
		},
		onLoad:function(e){
			console.log(e)
			uni.showLoading();
			uni.request({
				url: this.$requestUrl+'get_pro_detail/pro_id/'+e.proid,
				method: 'GET',
				success: res => {
					let info = res.data.data;
					this.product_url = info.product_url;
					this.product_title = info.product_title;
					this.product_type_name = info.product_type_name;
					this.product_detail = info.product_detail;
				},
				fail: () => {},
				complete: () => {
					uni.hideLoading();
				}
			});
		}
	}
</script>

<style>
	.img{
		height: 400upx;
		overflow: hidden;
	}
	.content{
		padding: 0 40upx;
	}
	.name{
		font-weight: bold;
		text-align: center;
		margin: 10px 0;
	}
	.type{
		margin-bottom: 10px;
	}
	
	.title{
		border-top: 1px solid #CCC;
		padding: 10px 0;
		display: flex;
		align-items: center;
	}
	.title:before{
		content: '';
		display: inline-block;
		width: 2px;
		height: 15px;
		background-color: #007AFF;
		margin-right: 10px;
	}
	.detail{
		line-height: 2em;
	}
</style>

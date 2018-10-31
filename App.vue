<script>
	export default {
		onLaunch: function () {
			console.log('App Launch')
		},
		onShow: function () {
			console.log('App Show')
		},
		onHide: function () {
			console.log('App Hide')
		}
	}
</script>

<style>
	@import "./common/uni.css";
	
	page {
		min-height: 100%;
		font-size: 32upx;
		line-height: 1.6;
		font-family: -apple-system-font, Helvetica Neue, Helvetica, sans-serif;
		display: flex;
	}
	
	.container {
		flex: 1;
		display: flex;
		flex-direction: column;
		min-height: 100%;
	}
	
	.fs-major{
		font-size: 48upx;
	}
	.fs-minor{
		font-size: 42upx;
	}
	.fs-head{
		font-size: 35upx;
	}
	.fs-part{
		font-size: 26upx;
	}
</style>

<template>
	<view>
        <uni-drawer :visible="rightDrawerVisible" mode="right" @close="closeRightDrawer">
        	<view class="drawer-content">
        		<view class="title">{{drawerTitle}}</view>
                
                <view v-if="drawerDemandVisible">
                    <input type="text" placeholder="需方" @blur="addDemandChange"/>
                    <input type="text" placeholder="需方电话"  @blur="addDemandTelChange"/>
                    <input type="text" placeholder="需方地址"  @blur="addDemandLocationChange"/>
                	<view class="btn-group">
                		<button type="primary" size="mini" @tap="confirmDemand">确定</button>
                		<button type="warn" size="mini" @tap="cancleDemand">取消</button>
                	</view>
                </view>
                
                <view v-if="drawerStandardVisible">
                    <input type="text" placeholder="规格" @blur="addStandardChange"/>
                	<view class="btn-group">
                		<button type="primary" size="mini" @tap="confirmStandard">确定</button>
                		<button type="warn" size="mini" @tap="cancleStandard">取消</button>
                	</view>
                </view>
        	</view>
        </uni-drawer>
        
		<view class="uni-list">
			<view class="uni-list-cell">
				<view class="uni-list-cell-navigate">
					<view class="input-group">
						<text>需方</text>
						<input type="text" :value="demand" placeholder="请输入需方" />
					</view>
                    <!-- #ifdef MP-WEIXIN -->
                    <view @tap="addDemand">
                    	<image src="../../static/image/add.png" class="icon" mode=""></image>
                    </view>
                    <!-- #endif -->
					<picker class="picker-item" mode="selector" :range="demandList" @change="demandChange">
						<image src="../../static/image/select.png" class="icon" mode=""></image>
					</picker>
				</view>
			</view>
			<view class="uni-list-cell">
				<view class="uni-list-cell-navigate">
					<view class="input-group">
						<text>需方电话</text>
						<input type="text" :value="dTel" placeholder="请输入需方电话" />
					</view>
				</view>
			</view>
			<view class="uni-list-cell">
				<view class="uni-list-cell-navigate">
					<view class="input-group">
						<text>需方地址</text>
						<input type="text" :value="dLocation" placeholder="请输入需方地址" />
					</view>
				</view>
			</view>
			<view class="uni-list-cell">
				<view class="uni-list-cell-navigate">
					<view class="input-group">
						<text>产品名称</text>
						<input type="text" :value="proName" placeholder="请输入产品名称" />
					</view>
					<picker class="picker-item" mode="selector" :range="proList" @change="proChange">
						<image src="../../static/image/select.png" class="icon" mode=""></image>
					</picker>
				</view>
			</view>
			<view class="uni-list-cell">
				<view class="uni-list-cell-navigate">
					<view class="input-group">
						<text>规格</text>
						<input type="text" :value="proStandard" placeholder="请输入规格" />
					</view>
                    <!-- #ifdef MP-WEIXIN -->
                    <view @tap="addStandard">
                    	<image src="../../static/image/add.png" class="icon" mode=""></image>
                    </view>
                    <!-- #endif -->
					<picker class="picker-item" mode="selector" :range="standardList" @change="standardChange">
						<image src="../../static/image/select.png" class="icon" mode=""></image>
					</picker>
				</view>
			</view>
			<view class="uni-list-cell">
				<view class="uni-list-cell-navigate">
					<view class="input-group">
						<text>产地</text>
						<input type="text" :value="proOrigin" placeholder="请输入产地" />
					</view>
					<picker class="picker-item" mode="selector" :range="originList" @change="originChange">
						<image src="../../static/image/select.png" class="icon" mode=""></image>
					</picker>
				</view>
			</view>
			<view class="uni-list-cell">
				<view class="uni-list-cell-navigate">
					<view class="input-group">
						<text>单位</text>
						<input type="text" :value="proUnit" placeholder="请输入单位" />
					</view>
					<picker class="picker-item" mode="selector" :range="unitList" @change="unitChange">
						<image src="../../static/image/select.png" class="icon" mode=""></image>
					</picker>
				</view>
			</view>
			<view class="uni-list-cell">
				<view class="uni-list-cell-navigate">
					<view class="input-group">
						<text>包装</text>
						<input type="text" value="" placeholder="请输入包装" @blur="packageChange" />
					</view>
				</view>
			</view>
			<view class="uni-list-cell">
				<view class="uni-list-cell-navigate">
					<view class="input-group">
						<text>数量</text>
						<input type="number" value="" placeholder="请输入数量" @blur="numberChange" />
					</view>
				</view>
			</view>
			<view class="uni-list-cell">
				<view class="uni-list-cell-navigate">
					<view class="input-group">
						<text>单价</text>
						<input type="digit" value="" placeholder="请输入单价" @blur="unitPriceChange" />
					</view>
				</view>
			</view>
			<view class="uni-list-cell">
				<view class="uni-list-cell-navigate">
					<view class="input-group">
						<text>合同有效期</text>
					</view>
					<view class="picker-box">
						<picker class="picker-item picker-time" mode="date" 
                            :end="proContractSMax"
                            @change="contractExpSChange">
							<input type="text" :value="proContractExpS" placeholder="请选择日期" disabled />
						</picker>
						<text style="margin-right: 8px;">-</text>
						<picker class="picker-item picker-time" mode="date" 
                            :start="proContractEMin"
                            @change="contractExpEChange">
							<input type="text" :value="proContractExpE" placeholder="请选择日期" disabled />
						</picker>
					</view>
				</view>
			</view>
			<view class="uni-list-cell">
				<view class="uni-list-cell-navigate">
					<view class="input-group">
						<text>价格有限期</text>
					</view>
                    <view class="picker-box">
                    	<picker class="picker-item picker-time" mode="date" 
                            :end="proPriceExpSMax"
                            @change="priceExpSChange">
                    		<input type="text" :value="proPriceExpS" placeholder="请选择日期" disabled />
                    	</picker>
                    	<text style="margin-right: 8px;">-</text>
                    	<picker class="picker-item picker-time" mode="date" 
                            :start="proPriceExpEMin"
                            @change="priceExpEChange">
                    		<input type="text" :value="proPriceExpE" placeholder="请选择日期" disabled />
                    	</picker>
                    </view>
				</view>
			</view>
			<view class="uni-list-cell">
				<view class="uni-list-cell-navigate">
					<view class="input-group">
						<text>合同日期</text>
					</view>
					<picker class="picker-item picker-time" mode="date" @change="dateChange">
						<view class="picker-box">
							<input type="text" :value="sDate" placeholder="请选择日期" disabled />
							<image src="../../static/image/select.png" class="icon" mode=""></image>
						</view>
					</picker>
				</view>
			</view>

		</view>

		<button type="button" class="btn-create" @tap="createTable">制作</button>

		<canvas class="canvas-element" canvas-id="canvas"></canvas>
		<view class="mask" v-show="previewShow">
			<view class="preview">
				<image :src="previewUrl" mode="widthFix"></image>
				<view>
					<button type="default" size="mini" class="btn-save" @tap="saveImg">保存</button>
					<button type="default" size="mini" @tap="cancleImg">取消</button>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
    import uniDrawer from '../../components/uni-drawer.vue';
    
	let ctx = null;
	let windowWidth = 800;
	export default {
        components: {
        	uniDrawer
        },
		data() {
			return {
                rightDrawerVisible: false,
                drawerTitle: '',
                drawerDemandVisible: false,
                drawerStandardVisible: false,
                
                aDemand: '',
                aDemandTel: '',
                aDemandLocation: '',
                aStandard: '',
                
				previewShow: false,
				previewUrl: '',
                
				demandList: [],
				proList: [],
				standardList: [],
				originList: [],
				unitList: [],
				supply: '',
				sLocation: '',
				sFax: '',
				sTel: '',
				sBank: '',
				sAccount: '',
				sDate: '',
				demand: '',
				dFax: '',
				dTel: '',
				dLocation: '',
				proName: '',
				proStandard: '',
				proOrigin: '',
				proUnit: '',
				proNumber: '',
				proUnitPrice: '',
				proAmount: '',
				proCapitalAmount: '',
				proPackage: '',
                
				proContractExpS: '',
                proContractSMax: '',
				proContractExpE: '',
                proContractEMin: '',
				proPriceExpS: '',
                proPriceExpSMax: '',
				proPriceExpE: '',
                proPriceExpEMin: ''
			};
		},
		onLoad: function() {
			uni.showLoading();
			ctx = uni.createCanvasContext('canvas')
            // get base info
			uni.request({
				url: this.$requestUrl + 'get_order_info',
				method: 'GET',
				success: res => {
					let info = res.data.data;
					this.sFax = info.company.company_fax;
					this.supply = info.bill.company_name;
					this.sLocation = info.bill.location;
					this.sTel = info.bill.tel;
					this.sBank = info.bill.bank;
					this.sAccount = info.bill.account;
					this.sDate = info.today;
					this.demandList = info.demand;
					this.proList = info.product;
					this.standardList = info.standard;
					this.originList = info.origin;
					this.unitList = info.unit;
				},
				fail: () => {},
				complete: () => {
					uni.hideLoading();
				}
			});
		},
		methods: {
			createTable: function() {
				uni.showLoading();
				let _this = this;

				uni.request({
					url: _this.$requestUrl + 'convertUp',
					method: 'POST',
                    header: {
                        'content-type': 'application/x-www-form-urlencoded'
                    },
					data: {
                        demand: _this.demand,
                        tel: _this.dTel,
                        location: _this.dLocation,
                        product: _this.proName,
                        standard: _this.proStandard,
                        origin: _this.proOrigin,
                        unit: _this.proUnit,
                        package: _this.proPackage,
						number: _this.proNumber,
                        unit_price: _this.proUnitPrice
					},
					success: res => {
						uni.hideLoading();
                        let info = res.data.data;
						_this.proAmount = info.amount;
						_this.proCapitalAmount = info.capital_amount;


						let padding = 30;
						let space = 40;
						let lineheight = 30;
						let firstline = 100;
						let table1 = 160;
						let table2 = 220;
						let tableAvg = (windowWidth - padding * 2 - table1 - table2) / 5;
						let footerRight = windowWidth / 2 + 100;

						ctx.setStrokeStyle('#ff0000')

						ctx.setFontSize(20)
						ctx.setTextAlign('center')
						ctx.fillText('购销合同', windowWidth / 2, 50)

						ctx.setFontSize(16)
						ctx.setTextAlign('left')
						ctx.fillText('供方：' + this.supply, padding, firstline)
						ctx.setTextAlign('right')
						ctx.fillText('需方：' + this.demand, windowWidth - padding, firstline)

						ctx.setTextAlign('left')
						ctx.fillText('签字双方同意就以下条款达成交易：', padding, firstline + lineheight)

						ctx.fillText('一、', padding, firstline + lineheight * 2)
						ctx.fillText('名称、数量、金额：', padding + space, firstline + lineheight * 2)

						ctx.fillText('二、', padding, firstline + lineheight * 7)
						ctx.fillText('质量标准：', padding + space, firstline + lineheight * 7)
						ctx.fillText('按国家标准质量指标。', padding + space, firstline + lineheight * 8)

						ctx.fillText('三、', padding, firstline + lineheight * 9)
						ctx.fillText('交货地点：', padding + space, firstline + lineheight * 9)
						ctx.fillText('供方仓库，供方待办运输，经协商运费由供方承担。', padding + space, firstline + lineheight * 10)

						ctx.fillText('四、', padding, firstline + lineheight * 11)
						ctx.fillText('交货时间：', padding + space, firstline + lineheight * 11)
						ctx.fillText('需方办好电汇并传真给供方，电汇到账户后安排发货。', padding + space, firstline + lineheight * 12)

						ctx.fillText('五、', padding, firstline + lineheight * 13)
						ctx.fillText('包装：', padding + space, firstline + lineheight * 13)
						ctx.fillText(this.proPackage + '，包装不回收。', padding + space, firstline + lineheight * 14)


						ctx.fillText('六、', padding, firstline + lineheight * 15)
						ctx.fillText('结算方式：', padding + space, firstline + lineheight * 15)
						ctx.fillText('电汇结算。', padding + space, firstline + lineheight * 16)


						ctx.fillText('七、', padding, firstline + lineheight * 17)
						ctx.fillText('解决合同纠纷的方式：', padding + space, firstline + lineheight * 17)
						ctx.fillText('友好协商，如协商不成，一方可向法院申请裁决。', padding + space, firstline + lineheight * 18)


						ctx.fillText('八、', padding, firstline + lineheight * 19)
						ctx.fillText('验收：', padding + space, firstline + lineheight * 19)
						ctx.fillText('货至需方，需方检验货物合格后收货。', padding + space, firstline + lineheight * 20)


						ctx.fillText('九、', padding, firstline + lineheight * 21)
						ctx.fillText('有效期：', padding + space, firstline + lineheight * 21)
						ctx.fillText('合同经双方盖章后生效，合同有效期：' + this.proContractExpS + '至' + this.proContractExpE + '; ', padding + space, firstline + lineheight * 22)
						ctx.fillText('价格有效期：' + this.proPriceExpS + '至' + this.proPriceExpE + '。', padding + space, firstline + lineheight * 23)

						ctx.fillText('十、', padding, firstline + lineheight * 24)
						ctx.fillText('其他约定事项：', padding + space, firstline + lineheight * 24)
						ctx.fillText('如确认无误，请于一个工作日内盖章回传。', padding + space, firstline + lineheight * 25)

						ctx.fillText('供方：' + this.supply, padding, firstline + lineheight * 27)
						ctx.fillText('需方：' + this.demand, footerRight, firstline + lineheight * 27)

						ctx.fillText('地址：' + this.sLocation, padding, firstline + lineheight * 28)
						ctx.fillText('传真：' + this.dFax, footerRight, firstline + lineheight * 28)

						ctx.fillText('传真：' + this.sFax, padding, firstline + lineheight * 29)
						ctx.fillText('电话：' + this.dTel, footerRight, firstline + lineheight * 29)

						ctx.fillText('电话：' + this.sTel, padding, firstline + lineheight * 30)

						ctx.fillText('开户行：' + this.sBank, padding, firstline + lineheight * 31)

						ctx.fillText('账号：' + this.sAccount, padding, firstline + lineheight * 32)

						ctx.fillText('日期：' + this.sDate, padding, firstline + lineheight * 33)
						ctx.fillText('日期：' + this.sDate, footerRight, firstline + lineheight * 33)


						// date underline
						ctx.moveTo(342, firstline + lineheight * 22 + 5)
						ctx.lineTo(585, firstline + lineheight * 22 + 5)
						ctx.stroke()

						ctx.moveTo(165, firstline + lineheight * 23 + 5)
						ctx.lineTo(408, firstline + lineheight * 23 + 5)
						ctx.stroke()


						// table
						ctx.setStrokeStyle('Black')
						ctx.setLineWidth(1)
						ctx.strokeRect(padding, firstline + lineheight * 3, windowWidth - 2 * padding, lineheight * 3)

						// row
						ctx.moveTo(padding, firstline + lineheight * 4)
						ctx.lineTo(windowWidth - padding, firstline + lineheight * 4)
						ctx.stroke()

						ctx.moveTo(padding, firstline + lineheight * 5)
						ctx.lineTo(windowWidth - padding, firstline + lineheight * 5)
						ctx.stroke()

						// column
						ctx.moveTo(padding + table1, firstline + lineheight * 3)
						ctx.lineTo(padding + table1, firstline + lineheight * 6)
						ctx.stroke()

						ctx.moveTo(padding + table1 + table2, firstline + lineheight * 3)
						ctx.lineTo(padding + table1 + table2, firstline + lineheight * 5)
						ctx.stroke()

						ctx.moveTo(padding + table1 + table2 + tableAvg, firstline + lineheight * 3)
						ctx.lineTo(padding + table1 + table2 + tableAvg, firstline + lineheight * 5)
						ctx.stroke()

						ctx.moveTo(padding + table1 + table2 + tableAvg * 2, firstline + lineheight * 3)
						ctx.lineTo(padding + table1 + table2 + tableAvg * 2, firstline + lineheight * 5)
						ctx.stroke()

						ctx.moveTo(padding + table1 + table2 + tableAvg * 3, firstline + lineheight * 3)
						ctx.lineTo(padding + table1 + table2 + tableAvg * 3, firstline + lineheight * 5)
						ctx.stroke()

						ctx.moveTo(padding + table1 + table2 + tableAvg * 4, firstline + lineheight * 3)
						ctx.lineTo(padding + table1 + table2 + tableAvg * 4, firstline + lineheight * 5)
						ctx.stroke()

						// first line
						ctx.setTextAlign('center')
						ctx.setTextBaseline('middle')
						ctx.fillText('产品名称', padding + table1 / 2, firstline + lineheight * 3 + lineheight / 2)

						ctx.setTextAlign('center')
						ctx.setTextBaseline('middle')
						ctx.fillText('规格', padding + table1 + table2 / 2, firstline + lineheight * 3 + lineheight / 2)

						ctx.setTextAlign('center')
						ctx.setTextBaseline('middle')
						ctx.fillText('产地', padding + table1 + table2 + tableAvg / 2, firstline + lineheight * 3 + lineheight / 2)

						ctx.setTextAlign('center')
						ctx.setTextBaseline('middle')
						ctx.fillText('单位', padding + table1 + table2 + tableAvg + tableAvg / 2, firstline + lineheight * 3 +
							lineheight /
							2)

						ctx.setTextAlign('center')
						ctx.setTextBaseline('middle')
						ctx.fillText('数量', padding + table1 + table2 + tableAvg * 2 + tableAvg / 2, firstline + lineheight * 3 +
							lineheight / 2)

						ctx.setTextAlign('center')
						ctx.setTextBaseline('middle')
						ctx.fillText('单价', padding + table1 + table2 + tableAvg * 3 + tableAvg / 2, firstline + lineheight * 3 +
							lineheight / 2)

						ctx.setTextAlign('center')
						ctx.setTextBaseline('middle')
						ctx.fillText('金额', padding + table1 + table2 + tableAvg * 4 + tableAvg / 2, firstline + lineheight * 3 +
							lineheight / 2)

						// second line
						ctx.setTextAlign('center')
						ctx.setTextBaseline('middle')
						ctx.fillText(this.proName, padding + table1 / 2, firstline + lineheight * 4 + lineheight / 2)

						ctx.setTextAlign('center')
						ctx.setTextBaseline('middle')
						ctx.fillText(this.proStandard, padding + table1 + table2 / 2, firstline + lineheight * 4 + lineheight / 2)

						ctx.setTextAlign('center')
						ctx.setTextBaseline('middle')
						ctx.fillText(this.proOrigin, padding + table1 + table2 + tableAvg / 2, firstline + lineheight * 4 +
							lineheight / 2)

						ctx.setTextAlign('center')
						ctx.setTextBaseline('middle')
						ctx.fillText(this.proUnit, padding + table1 + table2 + tableAvg + tableAvg / 2, firstline + lineheight * 4 +
							lineheight / 2)

						ctx.setTextAlign('center')
						ctx.setTextBaseline('middle')
						ctx.fillText(this.proNumber, padding + table1 + table2 + tableAvg * 2 + tableAvg / 2, firstline + lineheight *
							4 +
							lineheight / 2)

						ctx.setTextAlign('center')
						ctx.setTextBaseline('middle')
						ctx.fillText(this.proUnitPrice, padding + table1 + table2 + tableAvg * 3 + tableAvg / 2, firstline +
							lineheight *
							4 + lineheight / 2)

						ctx.setTextAlign('center')
						ctx.setTextBaseline('middle')
						ctx.fillText(this.proAmount, padding + table1 + table2 + tableAvg * 4 + tableAvg / 2, firstline + lineheight *
							4 +
							lineheight / 2)

						// third line
						ctx.setTextAlign('center')
						ctx.setTextBaseline('middle')
						ctx.fillText('合计金额(大写)', padding + table1 / 2, firstline + lineheight * 5 + lineheight / 2)

                        ctx.setTextAlign('left')
						ctx.setTextBaseline('middle')
						ctx.fillText(this.proCapitalAmount, padding + table1 + 30, firstline + lineheight * 5 + lineheight / 2)

						ctx.draw()

						uni.canvasToTempFilePath({
							canvasId: 'canvas',
							fileType: 'jpg',
							success: function(res) {
								console.log(res.tempFilePath)
								_this.previewUrl = res.tempFilePath;
								_this.previewShow = true;
							}
						})
					},
					fail: () => {}
				});
			},
            addDemand() {
                this.drawerTitle = '添加需方信息';
                this.drawerDemandVisible = true;
            	this.rightDrawerVisible = true;
            },
            addDemandChange(e) {
                this.aDemand = e.detail.value;
            },
            addDemandTelChange(e) {
                this.aDemandTel = e.detail.value;
            },
            addDemandLocationChange(e) {
                this.aDemandLocation = e.detail.value;
            },
            confirmDemand() {
                uni.showLoading();
                uni.request({
                	url: this.$requestUrl+'add_demand',
                	method: 'POST',
                    header: {
                    	'content-type': 'application/x-www-form-urlencoded'
                    },
                	data: {
                        name: this.aDemand,
                        tel: this.aDemandTel,
                        location: this.aDemandLocation
                    },
                	success: res => {
                        this.demandList = res.data.data;
                        uni.showToast({
                        	title: '添加成功',
                        	mask: false,
                        	duration: 1500
                        });
                    },
                	fail: () => {
                        uni.showToast({
                        	title: '请求出错，稍后重试',
                        	mask: false,
                        	duration: 1500
                        });
                    },
                	complete: () => {
                        this.drawerDemandVisible = false;
                        this.rightDrawerVisible = false;
                        uni.hideLoading();
                    }
                });
            },
            cancleDemand() {
                this.drawerDemandVisible = false;
                this.rightDrawerVisible = false;
            },
            addStandard() {
                this.drawerTitle = '添加规格';
                this.drawerStandardVisible = true;
                this.rightDrawerVisible = true;
            },
            addStandardChange(e) {
            	this.aStandard = e.detail.value;
            },
            confirmStandard() {
                uni.showLoading();
                uni.request({
                	url: this.$requestUrl+'add_standard',
                	method: 'POST',
                	header: {
                		'content-type': 'application/x-www-form-urlencoded'
                	},
                	data: {
                		standard_name: this.aStandard,
                	},
                	success: res => {
                		this.standardList = res.data.data;
                		uni.showToast({
                			title: '添加成功',
                			mask: false,
                			duration: 1500
                		});
                	},
                	fail: () => {
                		uni.showToast({
                			title: '请求出错，稍后重试',
                			mask: false,
                			duration: 1500
                		});
                	},
                	complete: () => {
                        this.drawerStandardVisible = false;
                		this.rightDrawerVisible = false;
                		uni.hideLoading();
                	}
                });
            },
            cancleStandard() {
            	this.drawerStandardVisible = false;
            	this.rightDrawerVisible = false;
            },
			saveImg() {
				let _this = this;
				uni.saveImageToPhotosAlbum({
					filePath: _this.previewUrl,
					success: function() {
						_this.previewShow = false;
						console.log('save success');
						uni.showToast({
							title: '保存成功！',
							mask: false,
							duration: 1500
						});
					}
				});
			},
            cancleImg() {
                this.previewShow = false;
            },
			demandChange(e) {
				this.demand = this.demandList[e.detail.value];
				uni.request({
					url: this.$requestUrl + 'get_demand_by_name',
					method: 'GET',
					data: {
						demand_name: this.demandList[e.detail.value]
					},
					success: res => {
						let info = res.data.data;
						this.dFax = info.fax;
						this.dLocation = info.location;
						this.dTel = info.tel;
					},
					fail: () => {},
					complete: () => {}
				});
			},
			proChange(e) {
				this.proName = this.proList[e.detail.value];
			},
			standardChange(e) {
				this.proStandard = this.standardList[e.detail.value];
			},
			originChange(e) {
				this.proOrigin = this.originList[e.detail.value];
			},
			unitChange(e) {
				this.proUnit = this.unitList[e.detail.value];
			},
			packageChange(e) {
				this.proPackage = e.detail.value;
			},
			numberChange(e) {
				this.proNumber = e.detail.value;
			},
			unitPriceChange(e) {
				this.proUnitPrice = e.detail.value;
			},
			dateChange(e) {
				let date = e.detail.value;
				let dateArr = date.split('-');
				this.sDate = parseInt(dateArr[0]) + '年' + parseInt(dateArr[1]) + '月' + parseInt(dateArr[2]) + '日';
			},
            contractExpSChange(e) {
                let date = e.detail.value;
                let dateArr = date.split('-');
                this.proContractExpS = parseInt(dateArr[0]) + '年' + parseInt(dateArr[1]) + '月' + parseInt(dateArr[2]) + '日';
                this.proContractEMin = date;
            },
            contractExpEChange(e) {
                let date = e.detail.value;
                let dateArr = date.split('-');
                this.proContractExpE = parseInt(dateArr[0]) + '年' + parseInt(dateArr[1]) + '月' + parseInt(dateArr[2]) + '日';
                this.proContractSMax = date;
            },
            priceExpSChange(e) {
                let date = e.detail.value;
                let dateArr = date.split('-');
            	this.proPriceExpS = parseInt(dateArr[0]) + '年' + parseInt(dateArr[1]) + '月' + parseInt(dateArr[2]) + '日';
            	this.proPriceExpEMin = date;
            },
            priceExpEChange(e) {
                let date = e.detail.value;
                let dateArr = date.split('-');
            	this.proPriceExpE = parseInt(dateArr[0]) + '年' + parseInt(dateArr[1]) + '月' + parseInt(dateArr[2]) + '日';
            	this.proPriceExpSMax = date;
            }
		}
	}
</script>

<style>
	page {
		display: inherit;
	}

	.input-group {
		display: flex;
	}

	.input-group text {
		width: 6em;
	}

	.icon {
		width: 20px;
		height: 20px;
	}

	.picker-time {
		flex: 1;
	}

	.picker-box {
		display: flex;
		justify-content: space-between;
	}

	.canvas-element {
		position: fixed;
		right: 999px;
		width: 800px;
		height: 1130px;
		background-color: #ffffff;
	}

	.mask {
		width: 100%;
		position: fixed;
		top: 0;
		bottom: 0;
		z-index: 999;
		background: rgba(0, 0, 0, .8);
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.preview {
		width: 96%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}

	.preview image {
		width: 100%;
		height: auto;
	}

	.btn-save{
		margin-top: 30upx;
        margin-right: 20upx;
	}
    .btn-create{
        color: #FFF;
        background-color: #0C5182;
        border-radius: 0;
    }
    
    .drawer-content{
        padding: 20px;
    }
    .drawer-content .title{
        margin-bottom: 30upx;
    }
    .drawer-content input{
        border-bottom: 1px solid #0C5182;
        margin-bottom: 5upx;
    }
    .btn-group{
        display: flex;
        margin-top: 30upx;
    }
    .btn-group button{
        margin-left: 0;
        margin-right: 30upx;
    }
</style>

<template>
	<section class="ez-home">
		<!-- 待办列表块 -->
		<div class="card-list row-10 clearfix">
			<div class="col-ez-3">
				<div class="card-item red">
					<div class="title">待办任务数</div>
					<div class="num">12</div>
					<div class="text">HR待办</div>
				</div>
			</div>
			<div class="col-ez-3">
				<div class="card-item orange">
					<div class="title">待办任务数</div>
					<div class="num">121</div>
					<div class="text">财务待办</div>
				</div>
			</div>
			<div class="col-ez-3">
				<div class="card-item blue1">
					<div class="title">待办任务数</div>
					<div class="num">8</div>
					<div class="text">审核老师待办</div>
				</div>
			</div>
			<div class="col-ez-3">
				<div class="card-item blue2">
					<div class="title">待办任务数</div>
					<div class="num">4</div>
					<div class="text">写手老师待办</div>
				</div>
			</div>
			<div class="col-ez-3">
				<div class="card-item blue3">
					<div class="title">待办任务数</div>
					<div class="num">32</div>
					<div class="text">检查员待办</div>
				</div> 
			</div>
			<div class="col-ez-3">
				<div class="card-item green1">
					<div class="title">待办人数</div>
					<div class="num">230</div>
					<div class="text">售前客服待办</div>
				</div>
			</div>
			<div class="col-ez-3">
				<div class="card-item green2">
					<div class="title">推广订单</div>
					<div class="num">12</div>
					<div class="text">推广人员待办</div>
				</div>
			</div>
			<div class="col-ez-3">
				<div class="card-item green3">
					<div class="title">加盟订单</div>
					<div class="num">6</div>
					<div class="text">客服人员待办</div>
				</div>
			</div>
		</div>

		<div class="container">
			<div class="main-con">
				<full-calendar :events="fcEvents" lang="zh" @eventClick="eventClick"></full-calendar>
			</div>

			<div class="tab-list">
				<template>
					<el-tabs v-model="activeName" @tab-click="handleClick">
						<el-tab-pane label="待办事项" name="first">
							<!-- <div class="tab-con-block">
								<div class="item">
									<h5>订单<span>E01525600</span>的老师<span>Jany</span>没有提交作业</h5>
									<el-button type="primary">提醒一下</el-button>
								</div>
								<div class="item">
									<h5>订单<span>E01525600</span>的老师<span>Jany</span>没有提交作业</h5>
									<el-button type="primary">立即分配</el-button>
								</div>
								<div class="item">
									<h5>订单<span>E01525600</span>的老师<span>Jany</span>没有提交作业</h5>
									<el-button type="primary">提醒一下</el-button>
								</div>
								<div class="item">
									<h5>订单<span>E01525600</span>的老师<span>Jany</span>没有提交作业</h5>
									<el-button type="primary">立即分配</el-button>
								</div>
							</div> -->
							<!-- <div class="tab-con-block">
								<div class="item">
									<h5>订单<span>E01525600</span>的老师<span>Jany</span>没有提交作业</h5>
									<el-button type="primary">提醒一下</el-button>
								</div>
								<div class="item">
									<h5>订单<span>E01525600</span>的老师<span>Jany</span>没有提交作业</h5>
									<el-button type="primary">立即分配</el-button>
								</div>
							</div> -->
							<ul class="tab-con-block ul-nostyle">
								<li class="item">
									<h5>订单<span>E01525600</span>的老师<span>Jany</span>没有提交作业</h5>
									<el-button type="primary" class="btn ez-bgcolor-blue">提醒一下</el-button>
								</li>
								<li class="item">
									<h5>订单<span>E01525600</span>的老师<span>Jany</span>没有提交作业</h5>
									<el-button type="primary" class="btn ez-bgcolor-blue">立即分配</el-button>
								</li>
							</ul>
						</el-tab-pane>
						<el-tab-pane label="我的提醒" name="second">
							<ul class="tab-con-block ul-nostyle">
								<li class="item">
									<input value="0" type="checkbox" checked="" disabled="">
                                    <h5 class="text">
                                    	<a href="http://admin.huanghaiping.com/order/index/orderId/2359.html">订单<span>0449484998</span>,在<span>2018-04-24 14:53:28</span>截止，请立即审核</a>
                                	</h5>
									<div class="tools clearfix">
										<div class="pull-left">已过期：10天5时45分47秒</div>
										<div class="pull-right">
											<a href="javascript:void(0);" class="delete_row" link="http://admin.huanghaiping.com/order/delete_back_log/backLogId/17.html">删除</a>
										</div>
									</div>
                        		</li>
								<li class="item">
									<input value="0" type="checkbox" checked="" disabled="">
                                    <h5 class="text">
                                    	<a href="http://admin.huanghaiping.com/order/index/orderId/2359.html">订单<span>0449484998</span>,在<span>2018-04-24 14:53:28</span>截止，请立即审核</a>
                                	</h5>
									<div class="tools clearfix">
										<div class="pull-left">已过期：10天5时45分47秒</div>
										<div class="pull-right">
											<a href="javascript:void(0);" class="delete_row" link="http://admin.huanghaiping.com/order/delete_back_log/backLogId/17.html">删除</a>
										</div>
									</div>
                        		</li>
							</ul>
						</el-tab-pane>
					</el-tabs>
				</template>
			</div>
		</div>

		<el-dialog
			:title="selectDate"
			:visible.sync="dialogVisible"
			width="70%" 
			:before-close="handleClose">
			<span slot="footer" class="dialog-footer">
				<el-button @click="dialogVisible = false">取 消</el-button>
				<el-button type="primary" @click="dialogVisible = false">确 定</el-button>
			</span>

			<el-row class="dialog-header">
				<!--工具条-->
				<el-col :span="24" class="toolbar" style="padding-bottom: 0px;">
					<el-form :inline="true">
						<el-form-item>
							<el-input placeholder="订单号"></el-input>
						</el-form-item>
						<el-form-item>
							<el-button type="primary">查询</el-button>
						</el-form-item>
						<el-form-item>
							<el-button type="danger">全部订单</el-button>
						</el-form-item>
						<el-form-item>
							<el-button>未审核</el-button>
						</el-form-item>
						<el-form-item>
							<el-button>审核通过</el-button>
						</el-form-item>
						<el-form-item>
							<el-button>未支付</el-button>
						</el-form-item>
						<el-form-item>
							<el-button>已支付</el-button>
						</el-form-item>
						<el-form-item>
							<el-button>未分配</el-button>
						</el-form-item>
						<el-form-item>
							<el-button>已分配</el-button>
						</el-form-item>
						<el-form-item>
							<el-button>未检查</el-button>
						</el-form-item>
						<el-form-item>
							<el-button>审核通过</el-button>
						</el-form-item>
						<el-form-item>
							<el-button>已接单</el-button>
						</el-form-item>
						<el-form-item>
							<el-button>待分配</el-button>
						</el-form-item>
						<el-form-item>
							<el-button>留言板消息</el-button>
						</el-form-item>
					</el-form>
				</el-col>

				<!-- 表格 -->
				<el-table :data="tableData" highlight-current-row v-loading="listLoading">
					<el-table-column prop="nid" label="订单号" min-width="100">
					</el-table-column>
					<el-table-column prop="theme" label="订单主题" min-width="120">
					</el-table-column>
					<el-table-column prop="user" label="用户名" min-width="80">
					</el-table-column>
					<el-table-column prop="price" label="订单价格" min-width="80">
					</el-table-column>
					<el-table-column prop="forprice" label="预估价格" min-width="80">
					</el-table-column>
					<el-table-column prop="state" label="订单状态" min-width="100" :formatter="formatState">
					</el-table-column>
					<el-table-column prop="paystate" label="支付状态" min-width="100" :formatter="formatState">
					</el-table-column>
					<el-table-column prop="allotstate" label="分配状态" min-width="100" :formatter="formatState">
					</el-table-column>
					<el-table-column prop="enddate" label="截止日期" min-width="120">
					</el-table-column>
					<el-table-column prop="startdate" label="写手接单日期" min-width="120">
					</el-table-column>
				</el-table>
            </el-row>
		</el-dialog>
	</section>
</template>

<script>
import axios from 'axios';
let demoEvents = [
    {
      title : '写手截止订单',
      start : '2018-04-29',
	  end : '2018-05-01',
	  cssClass : ['bg-red']
	},
	{
      title : '待办事项',
      start : '2018-04-29',
	  cssClass : ['bg-blue']
	},
	{
      title : '待办事项',
      start : '2018-04-29',
	  cssClass : ['bg-green']
	},
	{
      title : '待办事项',
      start : '2018-05-03',
	  cssClass : ['bg-orange']
	}
];
let label_list = [
	{
		title : '待办事项',
		backgroundColor: '#dc4826', //red
		type  : 'red'
	},
	{
		title : '客户截止订单',
		backgroundColor: '#3192f0', //blue
		type  : 'blue'
	},
	{
		title : '客户下单',
		backgroundColor: '#83cf13', //green
		type  : 'green'
	},
	{
		title : '写手截止订单',
		backgroundColor: '#ff7f1a', //orange
		type  : 'orange'
	}
]
export default {
    data(){
        return{
			listLoading: false,
			activeName: 'first',	//右侧tab
			fcEvents : demoEvents,
			dialogVisible: false,
			selectDate: '',	//选中日期
			tableData: [],	//弹框列表数据
        }
	},
	components : {
		'full-calendar': require('vue-fullcalendar')
	},
    methods: {
		//状态显示转换
        formatState: function (row, column) {
            return row.state == 1 ? '启用' : '未启用';
        },
        //显示编辑界面
        handleEdit: function (index, row) {
        },
        //删除
        handleDel: function (index, row) {
		},
		handleClick(tab, event) {
			console.log(tab, event);
		},
		//日历
		eventClick(event, jsEvent, pos) {
			console.log('eventClick', event, jsEvent, pos)
			console.log(event.title)
			this.selectDate = "日期："+event.start;
			this.dialogVisible = true;
		},
		handleClose(done) {
			this.$confirm('确认关闭？')
			.then(_ => {
				done();
			})
			.catch(_ => {});
		}
	},
	mounted: function(){
		//日历添加上4个按钮
		// header-center
		console.log($(".header-center").width())
		$('<div/>').addClass('fc-type-btn').appendTo($('.header-center'));
		for (let i=0;i<label_list.length;i++){
			let color_block = $('<div/>').css({
				'background': label_list[i].backgroundColor,
			}).addClass('cl-block');
			let _block = $('<div/>').addClass('fc-label-btn active').attr('type',label_list[i].type).html(label_list[i].title).prepend(color_block).appendTo($('.fc-type-btn'));
		}
		// axios.get('/api/user').then(function(res){
		// 	console.log(res);
		// 	// console.log(res.data);
		// 	// console.log(res.status);
		// 	// console.log(res.statusText);
		// 	// console.log(res.headers);
		// 	// console.log(res.config);
		// })
		// axios.get('/api/getHomeEvent').then(function(res){
		// 	console.log(res.data.datas);
		// 	_this.tableData = res.data.datas;
		// })
		axios.get('/api/getHomeEvent').then((res)=>{
			// console.log(res.data.datas);
			this.tableData = res.data.datas;
		})
	}
}
</script>

<style lang="less">
.ez-home{
	padding: 20px;
	// 待办列表块
	.card-list{
		.card-item{
			float: left;
			position: relative;
			margin-right: 20px;
			margin-bottom: 20px;
			// width: 188px;
			width: 100%;
			height: 128px;
			background: #fff;
			border: 1px solid #e6eaee;
			border-radius: 4px;
			&:last-child{
				margin-right: 0;
			}
			.title{
				padding: 20px 0 0 25px;
				font-size: 12px;
				color: #333;
				line-height: 1;
			}
			.num{
				padding: 15px 0 0 25px;
				font-size: 32px;
				font-weight: bold;
				line-height: 1;
			}
			.text{
				position: absolute;
				bottom: 0;
				padding: 10px 0 10px 25px;
				width: 100%;
				font-size: 12px;
				color: #fff;
				box-sizing: border-box;
				border-bottom-left-radius: 4px;
				border-bottom-right-radius: 4px;
			}

			&.red{
				.num{color: #dc4826;}
				.text{background: #dc4826;}
			}
			&.orange{
				.num{color: #ff7f1a;}
				.text{background: #ff7f1a;}
			}
			&.blue1{
				.num{color: #3192f0;}
				.text{background: #3192f0;}
			}
			&.blue2{
				.num{color: #42bddf;}
				.text{background: #42bddf;}
			}
			&.blue3{
				.num{color: #1da6da;}
				.text{background: #1da6da;}
			}
			&.green1{
				.num{color: #83cf13;}
				.text{background: #83cf13;}
			}    
			&.green2{
				.num{color: #47c989;}
				.text{background: #47c989;}
			}
			&.green3{
				.num{color: #33bec3;}
				.text{background: #33bec3;}
			}
		}
	}

	.container{
		display: flex;
		.main-con{
			width: 1265px;
			height: 823px;
			background-color: #ffffff;
			border-radius: 4px;
			border: solid 1px #e6eaee;
		}
		.tab-list{
			// flex: 1;
			margin-left: 20px;
			width: 375px;
			height: 823px;
			background-color: #ffffff;
			border-radius: 4px;
			border: solid 1px #e6eaee;
			
			.tab-con-block{
				.item{
					padding-top: 20px;
					border-bottom: 1px solid #e6e6e6;
					font-size: 12px;
					&:first-child{
						padding-top: 0;
					}
					&:last-child{
						border-bottom: none;
					}
					h5{
						display: inline;
						margin: 0;
						line-height: 20px;
						color: #333;
						font-weight: normal;
						a{
							color: #444;
							text-decoration: line-through;
							&:visited{
								color: #444;
							}
						}
						span{
							color: #3192f0;
						}
					}
					.tools{
						padding: 10px 0;
						color: #dd4b39;
						a{
							color: #38a0f4;
						}
					}
					.btn{
						margin: 20px 0;
						padding: 0;
						width: 80px;
						height: 30px;
					}
				}
			}
		}
	}

	// 日历样式
	@fc-color-red: #ef1c25;
	.comp-full-calendar{
		max-width: 100%;
		.full-calendar-header{
			.header-left{
				flex: none;
			}
			.header-center{
				text-align: left;
				.prev-month,.next-month{
					display: inline-block;
					width: 30px;
					height: 38px;
					line-height: 38px;
					border-radius: 4px;
					border: solid 1px #dfe3e9;
					background-color: #f2f4f7;
					color: #8a9099;
					text-align: center;
				}
				.title{
					font-size: 18px;
				}
				.fc-type-btn{
					display: inline-block;
					// 新增的4个接钮
					.fc-label-btn{
						display: inline-block;
						margin: 0 0 0 15px;
						padding: 8px;
						color: #ddd;
						border: 1px solid #ddd;
						border-radius: 4px;
						cursor: pointer;
						&.active{
							color: #333;
							border: 1px solid #3192f0;
						}
						.cl-block{
							float: left;
							margin-right: 8px;
							width: 20px;
							height: 20px;
							border-radius: 4px;
						}
					}
				}
			}
		}
		.full-calendar-body{
			//设置日历左右二边为红色
			.weeks{
				height: 40px;
				line-height: 40px;
				background: #fafafa;
				.week{
					&:first-child,
					&:last-child{
						color: @fc-color-red;
					}
				}
			}
			.dates{
				.dates-bg{
					.day-cell{
						min-height: 120px;
						.day-number{
							padding: 16px 0 0 16px;
							text-align: left;
							line-height: 1;
							font-size: 20px;
						}
						&:first-child,
						&:last-child{
							color: @fc-color-red;
						}
					}
				}
				.dates-events{
					.events-week{
						.events-day{
							.day-number{
								padding: 20px 0 0 20px;
							}
							.event-box{
								.event-item{
									color: #fff;
									padding: 4px;
									height: auto;
									line-height: 1;
								}
							}
						}
					}
				}
			}
		}
	}
}
</style>


<template>
	<section>
		<!-- 待办列表块 -->
		<div class="card-list clearfix">
			<div class="card-item red">
				<div class="title">待办任务数</div>
				<div class="num">12</div>
				<div class="text">HR待办</div>
			</div>
			<div class="card-item orange">
				<div class="title">待办任务数</div>
				<div class="num">121</div>
				<div class="text">财务待办</div>
			</div>
			<div class="card-item blue1">
				<div class="title">待办任务数</div>
				<div class="num">8</div>
				<div class="text">审核老师待办</div>
			</div>
			<div class="card-item blue2">
				<div class="title">待办任务数</div>
				<div class="num">4</div>
				<div class="text">写手老师待办</div>
			</div>
			<div class="card-item blue3">
				<div class="title">待办任务数</div>
				<div class="num">32</div>
				<div class="text">检查员待办</div>
			</div> 
			<div class="card-item green1">
				<div class="title">待办人数</div>
				<div class="num">230</div>
				<div class="text">售前客服待办</div>
			</div>
			<div class="card-item green2">
				<div class="title">推广订单</div>
				<div class="num">12</div>
				<div class="text">推广人员待办</div>
			</div>
			<div class="card-item green3">
				<div class="title">加盟订单</div>
				<div class="num">6</div>
				<div class="text">客服人员待办</div>
			</div>
		</div>

		<div class="container">
			<div class="main-con">
				
			</div>

			<div class="tab-list">
				<template>
					<el-tabs v-model="activeName" @tab-click="handleClick">
						<el-tab-pane label="待办事项" name="first">
							<div class="tab-con-block">
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
							</div>
						</el-tab-pane>
						<el-tab-pane label="我的提醒" name="second">
							<div class="tab-con-block">
								<div class="item">
									<h5>订单<span>E01525600</span>的老师<span>Jany</span>没有提交作业</h5>
									<el-button type="primary">提醒一下</el-button>
								</div>
								<div class="item">
									<h5>订单<span>E01525600</span>的老师<span>Jany</span>没有提交作业</h5>
									<el-button type="primary">立即分配</el-button>
								</div>
							</div>
						</el-tab-pane>
					</el-tabs>
				</template>
			</div>
		</div>
	</section>
</template>

<script>
export default {
    data(){
        return{
			activeName: 'first'
        }
    },
    methods: {
        //显示编辑界面
        handleEdit: function (index, row) {
        },
        //删除
        handleDel: function (index, row) {
		},
		handleClick(tab, event) {
			console.log(tab, event);
		}
    }
}
</script>

<style lang="less" scoped>
section{
	padding: 20px;
	width: 1700px;
	// 待办列表块
	.card-list{
		.card-item{
			float: left;
			position: relative;
			margin-right: 20px;
			width: 188px;
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
		margin-top: 20px; 
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
					&:first-child{
						padding-top: 0;
					}
					&:last-child{
						border-bottom: none;
					}
					h5{
						margin: 0;
						line-height: 20px;
						color: #333;
						font-size: 14px;
						font-weight: normal;
						span{
							color: #3192f0;
						}
					}
					.btn-blue{
						margin: 20px 0;
						padding: 0;
						width: 80px;
						height: 30px;
					}
				}
			}
		}
	}
}
</style>


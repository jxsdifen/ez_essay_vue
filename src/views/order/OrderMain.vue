<template>
    <!-- <el-container class="order"> -->
        <!-- 菜单列表 -->
        <!-- <el-aside class="aside" width="400px">
            <div class="ez-btnlist">
                <div class="row1">
                    <el-button type="primary" plain class="btn-add">新增订单</el-button><el-button class="btn-draft"><i class="iconfont icon-caogaoxiang"></i>订单草稿箱</el-button>
                </div>
                <div class="row2">
                    <el-input placeholder="输入订单,订单主题,学生" suffix-icon="el-icon-search" class="search-input"></el-input><el-select v-model="ordertype" placeholder="全部订单" class="search-select">
                        <el-option label="全部订单" value="1"></el-option>
                        <el-option label="写手订单" value="2"></el-option>
                    </el-select>
                </div>
            </div>
            <div class="ez-list">
				<div class="ez-item warn">
					<div class="ez-item-con">
						<h5 class="order-no">订单号：E015256001<span class="label">新留言</span></h5>
						<h6 class="order-theme">主题：Writer's choice</h6>
						<h6 class="order-price">最终价格：$1.00</h6>
						<h6 class="order-stname">学生名称：Jack</h6>
					</div>
					<span class="info">
                        <i class="iconfont icon-dingdanzhuangtai"></i><span class="text"><span>审校通过</span>（<span class="state">待付款</span>）</span>
                    </span>
				</div>

                <div class="ez-item">
					<div class="ez-item-con">
						<h5 class="order-no">订单号：E015256001<span class="label">新留言</span></h5>
						<h6 class="order-theme">主题：Writer's choice</h6>
						<h6 class="order-price">最终价格：$1.00</h6>
						<h6 class="order-stname">学生名称：Jack</h6>
					</div>
					<span class="info">
                        <i class="iconfont icon-dingdanzhuangtai"></i><span class="text"><span>审校通过</span>（<span class="state">待付款</span>）</span>
                    </span>
				</div>

                <div class="ez-item">
					<div class="ez-item-con">
						<h5 class="order-no">订单号：E015256001<span class="label">新留言</span></h5>
						<h6 class="order-theme">主题：Writer's choice</h6>
						<h6 class="order-price">最终价格：$1.00</h6>
						<h6 class="order-stname">学生名称：Jack</h6>
					</div>
					<span class="info">
                        <i class="iconfont icon-dingdanzhuangtai"></i><span class="text"><span>审校通过</span>（<span class="state">待付款</span>）</span>
                    </span>
				</div>
            </div>
        </el-aside> -->

        <!-- 内容 -->
        <!-- <el-container>
            <el-main>Main
                <router-view/>
            </el-main>
        </el-container>
    </el-container> -->

    <el-col :span="24" class="order">
        <!-- 左侧导航栏 -->
        <aside class="order-aside" width="400px">
            <div class="ez-btnlist">
                <div class="row1">
                    <el-button type="primary" plain class="btn-add" @click.native.prevent="addOrder">新增订单</el-button><el-button class="common-icon-btn btn-draft"><i class="iconfont icon-caogaoxiang"></i>订单草稿箱</el-button>
                </div>
                <div class="row2">
                    <el-input placeholder="输入订单,订单主题,学生" suffix-icon="el-icon-search" class="search-input"></el-input><el-select v-model="ordertype" placeholder="全部订单" class="search-select">
                        <el-option label="全部订单" value="1"></el-option>
                        <el-option label="写手订单" value="2"></el-option>
                    </el-select>
                </div>
            </div>
            <div class="ez-list">
                <div class="ez-item warn">
                    <div class="ez-item-con">
                        <h5 class="order-no">订单号：E015256001<span class="label">新留言</span></h5>
                        <h6 class="order-theme">主题：Writer's choice</h6>
                        <h6 class="order-price">最终价格：$1.00</h6>
                        <h6 class="order-stname">学生名称：Jack</h6>
                    </div>
                    <span class="info">
                        <i class="iconfont icon-dingdanzhuangtai"></i><span class="text"><span>审校通过</span>（<span class="state">待付款</span>）</span>
                    </span>
                </div>

                <div class="ez-item">
                    <div class="ez-item-con">
                        <h5 class="order-no">订单号：E015256001<span class="label">新留言</span></h5>
                        <h6 class="order-theme">主题：Writer's choice</h6>
                        <h6 class="order-price">最终价格：$1.00</h6>
                        <h6 class="order-stname">学生名称：Jack</h6>
                    </div>
                    <span class="info">
                        <i class="iconfont icon-dingdanzhuangtai"></i><span class="text"><span>审校通过</span>（<span class="state">待付款</span>）</span>
                    </span>
                </div>

                <div class="ez-item">
                    <div class="ez-item-con">
                        <h5 class="order-no">订单号：E015256001<span class="label">新留言</span></h5>
                        <h6 class="order-theme">主题：Writer's choice</h6>
                        <h6 class="order-price">最终价格：$1.00</h6>
                        <h6 class="order-stname">学生名称：Jack</h6>
                    </div>
                    <span class="info">
                        <i class="iconfont icon-dingdanzhuangtai"></i><span class="text"><span>审校通过</span>（<span class="state">待付款</span>）</span>
                    </span>
                </div>

                <div class="ez-item">
                    <div class="ez-item-con">
                        <h5 class="order-no">订单号：E015256001<span class="label">新留言</span></h5>
                        <h6 class="order-theme">主题：Writer's choice</h6>
                        <h6 class="order-price">最终价格：$1.00</h6>
                        <h6 class="order-stname">学生名称：Jack</h6>
                    </div>
                    <span class="info">
                        <i class="iconfont icon-dingdanzhuangtai"></i><span class="text"><span>审校通过</span>（<span class="state">待付款</span>）</span>
                    </span>
                </div>

                <div class="ez-item">
                    <div class="ez-item-con">
                        <h5 class="order-no">订单号：E015256001<span class="label">新留言</span></h5>
                        <h6 class="order-theme">主题：Writer's choice</h6>
                        <h6 class="order-price">最终价格：$1.00</h6>
                        <h6 class="order-stname">学生名称：Jack</h6>
                    </div>
                    <span class="info">
                        <i class="iconfont icon-dingdanzhuangtai"></i><span class="text"><span>审校通过</span>（<span class="state">待付款</span>）</span>
                    </span>
                </div>

                <div class="ez-item">
                    <div class="ez-item-con">
                        <h5 class="order-no">订单号：E015256001<span class="label">新留言</span></h5>
                        <h6 class="order-theme">主题：Writer's choice</h6>
                        <h6 class="order-price">最终价格：$1.00</h6>
                        <h6 class="order-stname">学生名称：Jack</h6>
                    </div>
                    <span class="info">
                        <i class="iconfont icon-dingdanzhuangtai"></i><span class="text"><span>审校通过</span>（<span class="state">待付款</span>）</span>
                    </span>
                </div>

                <div class="ez-item">
                    <div class="ez-item-con">
                        <h5 class="order-no">订单号：E015256001<span class="label">新留言</span></h5>
                        <h6 class="order-theme">主题：Writer's choice</h6>
                        <h6 class="order-price">最终价格：$1.00</h6>
                        <h6 class="order-stname">学生名称：Jack</h6>
                    </div>
                    <span class="info">
                        <i class="iconfont icon-dingdanzhuangtai"></i><span class="text"><span>审校通过</span>（<span class="state">待付款</span>）</span>
                    </span>
                </div>
            </div>
        </aside>
        
        <section class="order-main">
            <router-view/>
        </section>
    </el-col>

</template>

<script>
export default {
    data(){
        return{
            ordertype: '',
        }
    },
    methods: {
        //新增菜单
        addOrder: function() {
            this.$router.push({name: 'addOrder'});
        }
    }
}
</script>

<style lang="less" scoped>
.ez-btnlist{
    padding: 20px;
    border-bottom: 1px solid #e6eaee;
    .row1{
        .btn-add{
            width: 100px;
        }
        .btn-draft{
            width: 130px;
        }
    }
    .row2{
        margin-top: 20px;
        .search-input{
            width: 220px;
        }
        .search-select{
            margin-left: 8px;
            width: 130px;
        }
    }
}
.ez-list{
    .ez-item{
        position: relative;
        padding: 20px;
        background: #fff;
        border-bottom: 1px solid #e6eaee;
        &.warn:before{
            content: '';
            position: absolute;
            top: 27px;
            left: 6px;
            width: 8px;
            height: 8px;
            border-radius: 50%;
            background: #ef1c25;
        }
        .ez-item-con{
            h5,h6{
                margin: 0 0 10px 0;
                font-weight: normal;
                &:last-child{
                    margin: 0;
                }
            }
            .order-no{
                font-size: 16px;
                color: #333;
                vertical-align: middle;
                .label{
                    margin-left: 20px;
                    display: inline-block;
                    width: 60px;
                    height: 20px;
                    line-height: 20px;
                    font-size: 12px;
                    color: #fff;
                    background-color: #ef1c25;
                    text-align: center;
                    border-radius: 10px;
                }
            }
            h6{
                font-size: 14px;
                color: #8a9099;
            }
        }
        .info{
            position: absolute;
            left: 190px;
            bottom: 20px;
            .text{
                margin-left: 9px;
                font-size: 14px;
                color: #8a9099;
                .state{
                    color: #fe3323;
                }
            }
        }
    }
}
.order{
    display: flex;
    position: absolute;
    top: 0;
    bottom: 0;
    overflow: hidden;
    .order-aside{
        flex: 0 0 400px;
        width: 400px;
        border-right: 1px solid #e6eaee;
        background-color: #fff;
    }
    .order-main{
        flex: 1;
        overflow-y: auto;
        margin-left: 20px;
    }
}
</style>


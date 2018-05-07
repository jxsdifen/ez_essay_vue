<template>
    <el-col :span="24" class="order">
        <!-- 左侧导航栏 -->
        <aside class="order-aside" width="400px">
            <div class="ez-btnlist" ref="orderBtnList">
                <div class="row1">
                    <el-button type="primary" plain class="common-btn btn-add pull-left" @click.native.prevent="addOrder">新增订单</el-button><el-button class="common-btn btn-draft gray"><i class="iconfont icon-caogaoxiang"></i>订单草稿箱</el-button>
                </div>
                <div class="row2">
                    <el-input placeholder="输入订单,订单主题,学生" suffix-icon="el-icon-search" class="search-input"></el-input><el-select v-model="ordertype" placeholder="全部订单" class="search-select">
                        <el-option label="全部订单" value="1"></el-option>
                        <el-option label="写手订单" value="2"></el-option>
                    </el-select>
                </div>
            </div>
            <div class="ez-list" ref="orderListContent" id="orderListContent" :style="{'height':orderList_h+'px'}">
                <div class="ez-item warn">
                    <div class="ez-item-con">
                        <h5 class="order-no">订单号：E015256001<span class="label">新留言</span></h5>
                        <h6 class="order-theme">主题：Writer's choice</h6>
                        <h6 class="order-price">最终价格：$1.00</h6>
                        <h6 class="order-stname">学生名称：Jack</h6>
                    </div>
                    <span class="info">
                        <i class="iconfont icon-dingdanzhuangtai"></i><span class="text"><span>审校通过</span><span class="state">（待付款）</span></span>
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
                        <i class="iconfont icon-dingdanzhuangtai"></i><span class="text"><span>审校通过</span><span class="state">（待付款）</span></span>
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
                        <i class="iconfont icon-dingdanzhuangtai"></i><span class="text"><span>审校通过</span><span class="state">（待付款）</span></span>
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
                        <i class="iconfont icon-dingdanzhuangtai"></i><span class="text"><span>审校通过</span><span class="state">（待付款）</span></span>
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
                        <i class="iconfont icon-dingdanzhuangtai"></i><span class="text"><span>审校通过</span><span class="state">（待付款）</span></span>
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
                        <i class="iconfont icon-dingdanzhuangtai"></i><span class="text"><span>审校通过</span><span class="state">（待付款）</span></span>
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
                        <i class="iconfont icon-dingdanzhuangtai"></i><span class="text"><span>审校通过</span><span class="state">（待付款）</span></span>
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
            orderList_h: 0, //订单列表高度
        }
    },
    methods: {
        //新增菜单
        addOrder: function() {
            this.$router.push({name: 'addOrder'});
        }
    },
    mounted:function(){
        window.onresize = _.debounce(() => { 
            let h = document.documentElement.clientHeight || document.body.clientHeight;
            // 左侧订单列表的高
            let list_top = 60 + this.$refs.orderBtnList.offsetHeight;
            this.orderList_h = h-list_top;
            
        }, 400)
        window.onresize();

        $("#orderListContent").mCustomScrollbar({
            theme:"minimal-dark"
        })
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
            width: 110px;
        }
    }
}
.ez-list{
    // overflow-y: auto;
    .ez-item{
        position: relative;
        padding: 20px;
        background: #fff;
        border-bottom: 1px solid #e6eaee;
        &.warn:before{
            content: '';
            position: absolute;
            top: 25px;
            left: 6px;
            width: 8px;
            height: 8px;
            border-radius: 50%;
            background: #ef1c25;
        }
        .ez-item-con{
            h5,h6{
                margin: 0 0 10px 0;
                line-height: 1;
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
                    position: absolute;
                    display: inline-block;
                    left: 190px;
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
        overflow: hidden;
    }
    .order-main{
        flex: 1;
        overflow-y: auto;
        margin-left: 20px;
    }
}
// 小于1800
@media screen and (max-width: 1800px) {
    // =================订单
    .ez-btnlist{
        padding: 10px;
        .row2{
            margin-top: 10px;
            .search-input{
                width: 155px;
            }
            .search-select{
                width: 100px;
            }
        }
    }
    .ez-list{
        .ez-item{
            padding: 15px;
            &.warn:before{
                top: 18px;
                left: 4px;
            }
            .ez-item-con{
                h5,h6{
                    margin: 0 0 8px 0;
                }
                .order-no{
                    font-size: 14px;
                    .label{
                        left: 60%;
                        top: 12px;
                    }
                }
                h6{
                    font-size: 13px;
                }
            }
            .info{
                left: 60%;
                bottom: 12px;
                .text{
                    margin-left: 2px;
                    font-size: 13px;
                }
            }
        }
    }
    .order{
        .order-aside{
            flex: 0 0 300px;
            width: 300px;
        }
    }
}
</style>


<template>
    <el-row class="container">
        <!-- 导航 -->
        <el-col :span="24" class="header">
            <el-col :span="10" class="login-width" >
                <img class="logo-img" src="@/assets/images/logo.png" alt="">
                <span class="ez-font-b">EzEssay</span>
            </el-col>
            <el-col :span="14" class="nav-right">
                <div class="ez-badge">
                    <i class="iconfont icon-icon--"></i>
                    <span class="badge">1</span>
                </div>
                <div class="ez-badge">
                    <i class="iconfont icon-xiaoxitixing"></i>
                    <span class="badge">12</span>
                </div>
                <span>欢迎，Admin</span>
                <span class="login-head">
                    <img class="head-img" src="@/assets/images/user.png" alt="">
                </span>
            </el-col>
        </el-col>

        <!-- 内容 -->
        <el-col :span="24" class="main">
            <!-- 左侧导航栏 -->
            <aside>
                <!--导航菜单-->
                <el-menu default-active="2" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" 
                    background-color="#222c3c" text-color="#b7c0cd" active-text-color="#fff" router>

                    <li class="group-title">工作台</li>
                    <el-menu-item index="/home">
                        <i class="iconfont icon-shouye"></i>
                        <span slot="title">首页</span>
                    </el-menu-item>
                    <el-menu-item index="/order/list">
                        <i class="iconfont icon-fenlei"></i>
                        <span slot="title">全部订单</span>
                    </el-menu-item>
                    <el-menu-item index="/member/list">
                        <i class="iconfont icon-huiyuan"></i>
                        <span slot="title">会员管理</span>
                    </el-menu-item>
                    
                    <el-submenu index="0">
                        <template slot="title">
                            <i class="iconfont icon-xieshouguanli"></i>
                            <span slot="title">写手管理</span>
                        </template>
                        <el-menu-item-group>
                            <el-menu-item index="/writer/list"><i class="iconfont"></i>写手列表</el-menu-item>
                            <el-menu-item index="/writer/eval"><i class="iconfont"></i>写手评价</el-menu-item>
                            <el-menu-item index="/writer/level"><i class="iconfont"></i>写手等级</el-menu-item>
                            <el-menu-item index="/writer/star"><i class="iconfont"></i>写手星级</el-menu-item>
                            <el-menu-item index="/writer/label"><i class="iconfont"></i>写手标签</el-menu-item>
                        </el-menu-item-group>
                    </el-submenu>

                     <el-menu-item index="/role/list">
                        <i class="iconfont icon-jiaoseguanli"></i>
                        <span slot="title">角色管理</span>
                    </el-menu-item>

                    <el-menu-item index="6">
                        <i class="iconfont icon-baobiao"></i>
                        <span slot="title">数据报表</span>
                    </el-menu-item>

                    <li class="group-title">工具箱</li>
                    <el-submenu index="1">
                        <template slot="title">
                            <i class="iconfont icon-yingxiaotuiguang"></i>
                            <span slot="title">营销推广</span>
                        </template>
                        <el-menu-item-group>
                            <el-menu-item index="/sale/push"><i class="iconfont"></i>Push</el-menu-item>
                            <el-menu-item index="/sale/bulkmail"><i class="iconfont"></i>邮件群发</el-menu-item>
                            <el-menu-item index="/sale/unsubscribe"><i class="iconfont"></i>邮件退订</el-menu-item>
                        </el-menu-item-group>
                    </el-submenu>
                    <!-- <el-menu-item index="8">
                        <i class="iconfont icon-guanggao"></i>
                        <span slot="title">广告发布</span>
                    </el-menu-item> -->
                    <el-submenu index="2">
                        <template slot="title">
                            <i class="iconfont icon-guanggao"></i>
                            <span slot="title">广告发布</span>
                        </template>
                        <el-menu-item-group>
                            <el-menu-item index="/ad/block"><i class="iconfont"></i>碎片广告管理</el-menu-item>
                            <el-menu-item index="/ad/common"><i class="iconfont"></i>常用广告管理</el-menu-item>
                            <el-menu-item index="/ad/banner"><i class="iconfont"></i>Banner列表</el-menu-item>
                        </el-menu-item-group>
                    </el-submenu>
                    <!-- <el-menu-item index="9">
                        <i class="iconfont icon-dingdanyaoqiuguanli"></i>
                        <span slot="title">订单要求管理</span>
                    </el-menu-item> -->
                    <el-submenu index="3">
                        <template slot="title">
                            <i class="iconfont icon-dingdanyaoqiuguanli"></i>
                            <span slot="title">订单要求管理</span>
                        </template>
                        <el-menu-item-group>
                            <el-menu-item index="/require/draft"><i class="iconfont"></i>订单草稿箱</el-menu-item>
                            <el-menu-item index="/require/type"><i class="iconfont"></i>订单类型管理</el-menu-item>
                            <el-menu-item index="/require/learning"><i class="iconfont"></i>订单学术水平</el-menu-item>
                            <el-menu-item index="/require/subject"><i class="iconfont"></i>订单科目管理</el-menu-item>

                            <el-menu-item index="/require/page"><i class="iconfont"></i>订单页数管理</el-menu-item>
                            <el-menu-item index="/require/format"><i class="iconfont"></i>订单格式管理</el-menu-item>
                            <el-menu-item index="/require/row"><i class="iconfont"></i>订单行距管理</el-menu-item>
                            <el-menu-item index="/require/resource"><i class="iconfont"></i>订单资源数</el-menu-item>
                        </el-menu-item-group>
                    </el-submenu>
                    <el-menu-item index="10">
                        <i class="iconfont icon-gongjuxiang"></i>
                        <span slot="title">辅助工具</span>
                    </el-menu-item>

                </el-menu>
            </aside>
            
            <section class="content-container">
                <router-view></router-view>
            </section>
        </el-col>
    </el-row>
</template>

<script>
export default {
    name: '',
    data(){
        return{

        }
    },
    methods: {
        handleOpen(key, keyPath) {
            // console.log(key, keyPath);
        },
        handleClose(key, keyPath) {
            // console.log(key, keyPath);
        }
    }
}
</script>

<style lang="less" scoped>
    .container{
        position: absolute;
		top: 0px;
		bottom: 0px;
        width: 100%;
        // min-width: 1920px;
        .header{
            height: 60px;
            line-height: 60px;
            background: #3192f0;
            color: #fff;
            .login-width{
                width: 220px;
                font-size: 16px;
                .logo-img{
                    float: left;
                    margin: 11px 10px 11px 30px;
                }
            }
            .nav-right{
                text-align: right;
                padding-right: 25px;
                float: right;
                .login-head{
                    float: right;
                    display: inline-block;
                    padding: 14px 0 14px 20px;
                    width: 32px;
                    height: 32px;
                    line-height: 1;
                    .head-img{
                        margin: 0;
                        padding: 0;
                        width: 100%;
                        height: 100%;
                        border-radius: 50%;
                        line-height: 1;
                    }
                }
                .ez-badge{
                    display: inline-block;
                    position: relative;
                    margin: 0 20px 0 0;
                    vertical-align: middle;
                    i{
                        font-size: 24px;
                    }
                    .badge{
                        display: inline-block;
                        position: absolute;
                        top: 12px;
                        left: 12px;
                        padding: 0 6px;
                        height: 18px;
                        line-height: 18px;
                        color: #0078d7;
                        background: #fff;
                        font-size: 12px;
                        border-radius: 8px;
                    }
                }
            }
        }
        .el-menu-item-group__title{
            padding: 0;
        }
        .main {
            display: flex;
            position: absolute;
            top: 60px;
            bottom: 0;
            overflow: hidden;
            // 导航栏
			aside {
                flex: 0 0 220px;
                width: 220px;
                overflow-y: auto;
                .el-menu{
                    height: 100%;
                    .el-menu-item{
                        // padding-left: 90px;
                        height: 45px;
                        line-height: 45px;
                        & [class^=el-icon-],
                        & .iconfont{
                            margin: 0 16px 0 10px;
                            width: auto;
                            font-size: 18px;
                        }
                        &.is-active{
                            background-color: #1d2531!important;
                            border-left: 2px solid #3192f0;
                            & [class^=el-icon-],
                            & .iconfont{
                                margin-left: 8px;
                            }
                        }
                        a{
                            display: block;
                        }
                    }
                    .el-submenu__title{
                        // height: 45px!important;
                        // line-height: 45px;
                        & .iconfont{
                            margin: 0 16px 0 10px;
                            width: auto;
                            font-size: 18px;
                        }
                    }
                    .group-title{
                        padding: 20px 0 20px 30px; 
                        line-height: 1;
                        border-bottom: 1px solid #575d67;
                        color: #fff;
                    }
                }
            }
            // 右侧内容
            .content-container {
                flex: 1;
                overflow-y: auto;
            }
        }
    }
</style>

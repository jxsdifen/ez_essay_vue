<template>
    <el-row class="ez-container">
        <!-- 导航 -->
        <el-col :span="24" id="ez_header" class="header">
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
                    <img class="head-img" src="@/assets/images/avatar.png" alt="">
                </span>
            </el-col>
        </el-col>

        <!-- 内容 -->
        <el-col :span="24" class="main">
            <!-- 左侧导航栏 -->
            <aside id="ez_sidebar" ref="ez_sidebar">
                <!--导航菜单-->
                <el-menu default-active="2" class="el-menu-vertical-demo menu" @open="handleOpen" @close="handleClose" 
                    background-color="#222c3c" text-color="#b7c0cd" active-text-color="#fff" router>

                    <li class="group-title">工作台</li>
                    <el-menu-item index="/home">
                        <i class="iconfont icon-shouye"></i>
                        <span slot="title">首页</span>
                    </el-menu-item>
                    <el-menu-item index="/order/detail">
                        <i class="iconfont icon-fenlei"></i>
                        <span slot="title">全部订单</span>
                    </el-menu-item>

                    <el-submenu index="0">
                        <template slot="title">
                            <i class="iconfont icon-huiyuan"></i>
                            <span slot="title">会员管理</span>
                        </template>
                        <el-menu-item-group>
                            <el-menu-item index="/writer/list"><i class="iconfont"></i>会员列表</el-menu-item>
                            <el-menu-item index="/writer/eval"><i class="iconfont"></i>国家地区</el-menu-item>
                            <el-menu-item index="/writer/level"><i class="iconfont"></i>用户注册协议</el-menu-item>
                        </el-menu-item-group>
                    </el-submenu>
                    
                    <el-submenu index="1">
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

                    <el-submenu index="2">
                        <template slot="title">
                            <i class="iconfont icon-jiaoseguanli"></i>
                            <span slot="title">角色管理</span>
                        </template>
                        <el-menu-item-group>
                            <el-menu-item index="/writer/list"><i class="iconfont"></i>角色类型</el-menu-item>
                            <el-menu-item index="/writer/eval"><i class="iconfont"></i>角色列表</el-menu-item>
                            <el-menu-item index="/writer/level"><i class="iconfont"></i>角色权限规则</el-menu-item>
                        </el-menu-item-group>
                    </el-submenu>

                    <el-menu-item index="99">
                        <i class="iconfont icon-baobiao"></i>
                        <span slot="title">数据报表</span>
                    </el-menu-item>

                    <li class="group-title">工具箱</li>
                    <el-submenu index="3">
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
                    
                    <el-submenu index="4">
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
                    
                    <el-submenu index="5">
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

                    <el-submenu index="6">
                        <template slot="title">
                            <i class="iconfont icon-gongjuxiang"></i>
                            <span slot="title">辅助工具</span>
                        </template>
                        <el-menu-item-group>
                            <el-menu-item index="/require/draft"><i class="iconfont"></i>常用提示语</el-menu-item>
                            <el-menu-item index="/require/type"><i class="iconfont"></i>客服欢迎语</el-menu-item>
                            <el-menu-item index="/require/learning"><i class="iconfont"></i>客服会话收藏</el-menu-item>
                        </el-menu-item-group>
                    </el-submenu>

                    <el-submenu index="7">
                        <template slot="title">
                            <i class="iconfont icon-shezhi"></i>
                            <span slot="title">系统设置</span>
                        </template>
                        <el-menu-item-group>
                            <el-menu-item index="/require/draft"><i class="iconfont"></i>登录接口</el-menu-item>
                            <el-menu-item index="/require/type"><i class="iconfont"></i>支付接口</el-menu-item>
                            <el-menu-item index="/require/learning"><i class="iconfont"></i>系统参数</el-menu-item>
                            <el-menu-item index="/require/type"><i class="iconfont"></i>语言列表</el-menu-item>
                            <el-menu-item index="/require/learning"><i class="iconfont"></i>备份数据库</el-menu-item>
                        </el-menu-item-group>
                    </el-submenu>

                </el-menu>
                <!-- 语言下拉菜单 -->
                <el-select v-model="lang" placeholder="请选择" class="sl-language">
                    <el-option v-for="item in lanuages"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                    </el-option>
                </el-select>
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
            lanuages: [{
                value: 'cn',
                label: '简体中文'
            }, {
                value: 'en',
                label: 'English'
            }],
            lang: ''
        }
    },
    mounted: function(){
        // console.log($);
        // 左侧竖排导航
        $("#ez_sidebar .menu").mCustomScrollbar({
            theme:"minimal-dark"
        })

        let h = document.documentElement.clientHeight || document.body.clientHeight;
        let header_h = $('#ez_header').height();
        // menu 左侧菜单高度
        $("#ez_sidebar .menu").height(h-header_h-52);


    },
    methods: {
        handleOpen(key, keyPath) {
            // console.log(key, keyPath);
            // console.log(this.$refs.ez_sidebar)
            console.log(this.lang)
        },
        handleClose(key, keyPath) {
            // console.log(key, keyPath);
        }
    }
}
</script>

<style lang="less">
    .ez-container{
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
                    margin: 14px 0 14px 20px;
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
                position: relative;
                flex: 0 0 220px;
                width: 220px;
                overflow-y: auto;
                background-color: #222c3c;
                .menu{
                    height: 100%;
                    border-right: none;
                    .el-menu-item{
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
                        & .iconfont{
                            margin: 0 16px 0 10px;
                            width: auto;
                            font-size: 18px;
                        }
                    }
                    .group-title{
                        padding-left: 30px; 
                        height: 60px;
                        line-height: 60px;
                        border-bottom: 1px solid #575d67;
                        color: #fff;
                    }
                }
                .sl-language{
                    position: fixed;
                    bottom: 10px;
                    left: 25px;
                    width: 166px;
                    .el-input__inner{
                        height: 32px;
                        color: #fff;
                        background-color: #222c3c;
                        border: 1px solid #575d67;
                    }
                }
            }
            // 右侧内容
            .content-container {
                flex: 1;
                overflow: auto;
            }
        }
    }
</style>

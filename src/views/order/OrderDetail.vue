<template>
    <section>
        <!-- 内容左侧 -->
        <div class="container-left" ref="con_Left">
            <div class="control-list" ref="con_LeftCtrlList">
                <el-button class="common-btn btn-edit">修改</el-button>
                <el-button class="common-btn btn-copy"><i class="iconfont icon-caogaoxiang"></i>复制</el-button>
                <el-button class="common-btn btn-download gray" icon="el-icon-download">所有文件下载</el-button>
                <el-button class="common-btn btn-add">添加一个事件</el-button>
            </div>

            <div class="container-left-main mt-20" ref="con_LeftMain" id="con_LeftMain" :style="{'height': con_LeftMain_h+'px'}">
                <!-- 流程进度 -->
                <div class="card-info no-margin-top">
                    <div class="common-title bottom-line"><i></i>流程进度</div>
                    <div class="process clearfix">
                        <div class="process-item focus">
                            <div class="point"><span></span><i></i></div>
                            <h5>写手接单11</h5>
                            <h6 class="state">已接单</h6>
                            <h6 class="name">等待财务支付写手等待财务支付写手等待财务支付写手</h6>
                            <h6 class="date">2018-3-2 12:41:43</h6>
                        </div>
                        <div class="process-item focus">
                            <div class="point"><span></span><i></i></div>
                            <h5>提交作业2</h5>
                            <h6 class="state">已接单</h6>
                            <h6 class="name">派单员jack</h6>
                            <h6 class="date">2018-3-2 12:41:43</h6>
                        </div>
                        <div class="process-item focus">
                            <div class="point"><span></span><i></i></div>
                            <h5>作业检查3</h5>
                            <h6 class="state">已接单</h6>
                            <h6 class="name">派单员jack</h6>
                            <h6 class="date">2018-3-2 12:41:43</h6>
                        </div>
                        <div class="process-item focus">
                            <div class="point"><span></span><i></i></div>
                            <h5>订单完成4</h5>
                            <h6 class="state">已接单</h6>
                            <h6 class="name">派单员jack</h6>
                            <h6 class="date">2018-3-2 12:41:43</h6>
                        </div>
                        <div class="process-item focus">
                            <div class="point"><span></span><i></i></div>
                            <h5>支付尾款5</h5>
                            <h6 class="state">等待财务支付写手</h6>
                            <h6 class="date">2018-3-2 12:41:43</h6>
                        </div>

                        <div class="process-item focus">
                            <div class="point"><span></span><i></i></div>
                            <h5>写手接单6</h5>
                            <h6 class="state">已接单</h6>
                            <h6 class="name">派单员jack</h6>
                            <h6 class="date">2018-3-2 12:41:43</h6>
                        </div>
                        <div class="process-item">
                            <div class="point"><span></span><i></i></div>
                            <h5>提交作业7</h5>
                            <h6 class="state">已接单</h6>
                            <h6 class="name">派单员jack</h6>
                            <h6 class="date">2018-3-2 12:41:43</h6>
                        </div>
                        <div class="process-item">
                            <div class="point"><span></span><i></i></div>
                            <h5>作业检查8</h5>
                            <h6 class="state">已接单</h6>
                            <h6 class="name">审核老师:yangrenjie</h6>
                            <h6 class="date">2018-3-2 12:41:43</h6>
                        </div>
                        <div class="process-item">
                            <div class="point"><span></span><i></i></div>
                            <h5>订单完成9</h5>
                            <h6 class="state">已接单</h6>
                            <h6 class="name">派单员jack</h6>
                            <h6 class="date">2018-3-2 12:41:43</h6>
                        </div>
                        <div class="process-item">
                            <div class="point"><span></span><i></i></div>
                            <h5>支付尾款10</h5>
                            <h6 class="state">等待财务支付写手</h6>
                            <h6 class="date">2018-3-2 12:41:43</h6>
                        </div>
                    </div>
                </div>

                <!-- 信息 -->
                <div class="card-info">
                    <div class="common-title bottom-line"><i/>学生订单信息</div>
                    <div class="common-table col-50 student-card clearfix">
                        <div class="item">
                            <div class="col">订单主题：<span>writer's choice</span></div>
                            <div class="col">国家时区：<span>北美太平洋标准时间（America/Los_Angeles）</span></div>
                        </div>
                        <div class="item">
                            <div class="col">截止日期：<span>2018-01-26 23:13:00<br/><span class="blue">（客户所在时区日期：2018-01-26 07:13:00）</span></span></div>
                            <div class="col">写手等级要求：<span>金牌老师</span></div>
                        </div>
                        <div class="item">
                            <div class="col">订单类型：<span>讨论</span></div>
                            <div class="col">订单类型等级：</div>
                        </div>
                        <div class="item">
                            <div class="col">订单学术水平：</div>
                            <div class="col">订单科目 ：<span>会计</span></div>
                        </div>
                        <div class="item">
                            <div class="col">订单页数：<span>1</span></div>
                            <div class="col">订单格式：<span>Harvard</span></div>
                        </div>
                        <div class="item">
                            <div class="col">订单行距：<span>Single spaced</span></div>
                            <div class="col">订单订单资源数：<span>5</span></div>
                        </div>
                    </div>

                    <div class="common-title bottom-line"><i/>文件内容</div>
                    <div class="file-card">
                        <div class="common-file-block">
                            <div class="file-title">论文命题</div>
                            <div class="file-list clearfix">
                                <div class="file-item">
                                    <a href="javascript:;">
                                        <div class="file-img">
                                            <i class="iconfont icon-DOCX file-icon"></i>
                                        </div>
                                    </a>
                                    <!-- <img class="file-img" src="@/assets/images/pdf.png" alt=""> -->
                                    <div class="file-text-con">
                                        <h5>命题_1.doc</h5>
                                        <h6>这是给文件备注描述这是给文件备注描述这是给文件备注描述</h6>
                                    </div>
                                </div>
                                <div class="file-item">
                                    <a href="javascript:;">
                                        <div class="file-img">
                                            <i class="iconfont icon-PDF file-icon"></i>
                                        </div>
                                    </a>
                                    <!-- <img class="file-img" src="@/assets/images/pdf.png" alt=""> -->
                                    <div class="file-text-con">
                                        <h5>命题_1.doc</h5>
                                        <h6>这是给文件备注描述这是给文件备注描述这是给文件备注描述</h6>
                                    </div>
                                </div>
                                <div class="file-item">
                                    <a href="javascript:;">
                                        <div class="file-img">
                                            <i class="iconfont icon-PDF file-icon"></i>
                                        </div>
                                    </a>
                                    <!-- <img class="file-img" src="@/assets/images/pdf.png" alt=""> -->
                                    <div class="file-text-con">
                                        <h5>命题_1.doc</h5>
                                        <h6>这是给文件备注描述这是给文件备注描述这是给文件备注描述</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="common-file-block">
                            <div class="file-title">课堂笔记</div>
                            <div class="file-list clearfix">
                                <div class="file-item">
                                    <a href="javascript:;">
                                        <div class="file-img">
                                            <i class="iconfont icon-PDF file-icon"></i>
                                        </div>
                                    </a>
                                    <div class="file-text-con">
                                        <h5>命题_1.doc</h5>
                                        <h6>这是给文件备注描述这是给文件备注描述这是给文件备注描述</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="common-file-block">
                            <div class="file-title">相关资料</div>
                            <div class="common-table data-card clearfix">
                                <div class="item">   
                                    <div class="col">订单备注：<span>一定要在截止日期之前完成，赶时间！</span></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="common-title bottom-line"><i/>订单价格</div>
                    <div class="common-table price-card col-50 clearfix">
                        <div class="item">
                            <div class="col">预估价格：<span>$25.0</span></div>
                            <div class="col">学生应付价格：<span>$23.0</span></div>
                        </div>
                    </div>
                </div>

                <!-- 留言板 -->
                <div class="card-info">
                    <div class="common-title bottom-line"><i/>留言板</div>
                    <div class="message">
                        <div class="message-textarea clearfix">
                            <div class="row">
                                <el-input placeholder="按时完成了订单，内容很棒，速度快，点赞！"></el-input>
                            </div>
                            <div class="row">
                                <el-button type="primary" class="common-btn green-bg"><i class="iconfont icon-fujian"></i>附件</el-button>
                                <el-button type="primary" class="common-btn blue-bg">评论一下</el-button>
                            </div>
                        </div>
                        <div class="message-list">
                            <div class="message-title"><span>12</span>条评论</div>
                            <div class="message-item bottom-line">
                                <img class="message-img" src="@/assets/images/temp/temp-head.jpg" alt="">
                                <div class="message-con">
                                    <h5 class="text"><span class="name">Aaron</span><span class="job">写手老师</span></h5>
                                    <h6 class="desc">按时完成了订单，内容很棒，速度快，点赞！</h6>
                                    <div class="desc-con">
                                        <img class="file-img" src="@/assets/images/pdf.png" alt="">
                                    </div>
                                    <span class="time">12分钟前</span>
                                </div>
                            </div>
                            <div class="message-item bottom-line">
                                <img class="message-img" src="@/assets/images/temp/temp-head.jpg" alt="">
                                <div class="message-con">
                                    <h5 class="text"><span class="name">Aaron</span><span class="job">写手老师</span></h5>
                                    <h6 class="desc">按时完成了订单，内容很棒，速度快，点赞！</h6>
                                    <div class="desc-con">
                                         
                                    </div>
                                    <span class="time">2018-2-28 18:21:39</span>
                                </div>
                            </div>
                            <div class="message-item bottom-line">
                                <img class="message-img" src="@/assets/images/temp/temp-head.jpg" alt="">
                                <div class="message-con">
                                    <h5 class="text"><span class="name">Aaron</span><span class="job">写手老师</span></h5>
                                    <h6 class="desc">按时完成了订单，内容很棒，速度快，点赞！</h6>
                                    <div class="desc-con">
                                        
                                    </div>
                                    <span class="time">2018-2-28 18:21:39</span>
                                </div>
                            </div>
                            <div class="message-item bottom-line">
                                <img class="message-img" src="@/assets/images/temp/temp-head.jpg" alt="">
                                <div class="message-con">
                                    <h5 class="text"><span class="name">Aaron</span><span class="job">写手老师</span></h5>
                                    <h6 class="desc">按时完成了订单，内容很棒，速度快，点赞！</h6>
                                    <div class="desc-con">
                                        <img class="file-img" src="@/assets/images/pdf.png" alt="">
                                    </div>
                                    <span class="time">2018-2-28 18:21:39</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- 内容右侧 -->
        <div class="container-right" ref="con_Right">
            <div class="common-title"><i/>参与人员</div>
            <!-- 参与人员列表 -->
            <div id="participate" class="icon-list clearfix">
                <div class="item">
                    <div class="item-img">
                        <img src="@/assets/images/temp/temp-head.jpg" alt="">
                        <span class="point right"></span>
                    </div>
                    <h5>Aaron111</h5>
                    <h6>售前客服111</h6>
                </div>
                <div class="item">
                    <div class="item-img">
                        <img src="@/assets/images/temp/temp-head.jpg" alt="">
                        <span class="point"></span>
                    </div>
                    <h5>AaronAaronAaronAaron</h5>
                    <h6>售前客服222</h6>
                </div>
                <div class="item">
                    <div class="item-img">
                        <img src="@/assets/images/m_avatar.png" alt="">
                        <span class="point"></span>
                    </div>
                    <h5>默认头像</h5>
                    <h6>售前客服</h6>
                </div>
                <div class="item">
                    <div class="item-img">
                        <img src="@/assets/images/m_avatar.png" alt="">
                        <span class="point"></span>
                    </div>
                    <h5>默认头像</h5>
                    <h6>售前客服</h6>
                </div>
                <div class="item">
                    <div class="item-img">
                        <img src="@/assets/images/m_avatar.png" alt="">
                        <span class="point"></span>
                    </div>
                    <h5>默认头像</h5>
                    <h6>售前客服</h6>
                </div>
                <div class="item blue add">
                    <div class="item-img">
                        <img src="@/assets/images/add.png" alt="">
                    </div>
                    <h6>添加</h6>
                </div>
            </div>

            <div class="top-line">
                <div class="common-title"><i/>派单信息</div>
                <div class="common-table table-info clearfix">
                    <div class="item">
                        <div class="col">写手价格：<span>$25.0</span>
                            <el-button type="text" class="btn-noframe">修改</el-button>
                        </div>
                    </div>
                    <div class="item">
                        <div class="col">写手截止日期：<span>2018年3月4日15:32:11</span>
                            <el-button type="text" class="btn-noframe">修改</el-button>
                        </div>
                    </div>
                </div>
                <div class="common-title"><i/>写手信息</div>
                <div class="common-table table-info clearfix">
                    <div class="item">
                        <div class="col">写手真实姓名：<span>黄先生</span></div>
                    </div>
                    <div class="item">
                        <div class="col">联系方式：<span>180-xxx-xxx</span></div>
                    </div>
                    <div class="item">
                        <div class="col">支付账号：<span class="blue">180-xxx-xxx@163.com</span></div>
                    </div>
                    <div class="item">
                        <div class="col">提交的作业：<br/><el-button type="primary" class="btn-blue">催单</el-button></div>
                    </div>
                </div>
                <div class="common-title"><i/>检查员信息</div>
                <div class="common-table table-info clearfix">
                    <div class="item">
                        <div class="col">检查员真实姓名：<span>黄先生</span></div>
                    </div>
                    <div class="item">
                        <div class="col">联系方式：<span>180-xxx-xxx</span></div>
                    </div>
                    <div class="item">
                        <div class="col">支付账号：<span class="blue">180-xxx-xxx@163.com</span></div>
                    </div>
                    <div class="item">
                        <div class="col">检查结果：</div>
                    </div>
                    <div class="item">
                        <div class="col">反馈文件<br/><el-button type="primary" class="btn-blue">催单</el-button></div>
                    </div>
                </div>
                <div class="common-title"><i/>提交内容</div>
                <div class="common-table table-info clearfix">
                    <div class="item">
                        <div class="col">作业检查状态：<span>审核不通，请重新提交</span></div>
                    </div>
                    <div class="item">
                        <div class="col">作业文件：<br/><el-button type="primary" class="btn-blue">重新上传</el-button></div>
                    </div>
                </div>
            </div>
        </div>

        <!-- 操作记录 -->
        <div class="float-record">
            <div class="icon"><i class="iconfont icon-caozuojilu"/></div>
            <div class="text">操作记录</div>
        </div>
	</section>
</template>

<script>
// import './assets/plugins/mCustomScrollbar/jquery.mCustomScrollbar.min.css'
// import $ from 'jquery'
// import './assets/plugins/mCustomScrollbar/jquery.mCustomScrollbar.concat.min.js'
export default {
    data(){
        return{
            con_LeftMain_h: 0,  //左侧主内容块高度
        }
    },
    mounted: function(){
        // console.log($);
        window.onresize = _.debounce(() => {
            let w = document.documentElement.clientWidth || document.body.clientWidth;
            let h = document.documentElement.clientHeight || document.body.clientHeight;
            // 左侧主内容块高度
            let LeftCtrlList_h = this.$refs.con_LeftCtrlList.offsetHeight;
            let LeftMain_mt = $('#con_LeftMain').css('marginTop');
            LeftMain_mt = LeftMain_mt.substr(0,LeftMain_mt.length-2);
            this.con_LeftMain_h = h-60-LeftCtrlList_h-LeftMain_mt;

            // 左右侧宽度
            let container_r_w = 330;
            if (w>1800){
                container_r_w = 450;
            }
            if (w<1400){
                container_r_w = 250;
            }
            
            // $('.container-left').width(w-sidebar_w-order_aside_w-container_r_w-20);
            // $('.container-right').width(container_r_w);
        }, 400)
        window.onresize();

        $("#con_LeftMain").mCustomScrollbar({
            theme:"minimal-dark"
        })
    },
    methods: {
        
    }
}
</script>

<style lang="less">
.clearfix() {
    &:before,
    &:after {
      content: " ";
      display: table;
    }
    &:after {
      clear: both;
    }
}
//通用文件块（文件内容）
.common-file-block{
    .file-title{
        margin-bottom: 20px;
        font-size: 14px;
        color: #8a9099;
    }
    .file-list{
        .file-item{
            float: left;
            margin: 0 20px 20px 0;
            padding: 8px;
            width: 364px;
            height: 84px;
            background-color: #f7f7fa;
            border-radius: 4px;
            border: solid 1px #e5e5e5;
            box-sizing: border-box;
            &:nth-child(2n){
                margin-right: 0;
            }
            .file-img{
                float: left;
                margin-right: 8px;
                width: 50px;
                height: 68px;
            }
            &>a{
                float: left;
                display: block;
                .clearfix();
                width: 50px;
                height: 68px;
                margin-right: 8px;
                .file-img{
                    width: 50px;
                    height: 68px;
                }
            }
            .file-icon{
                float: left;
                margin-left: -13px;
                margin-right: -5px;
                line-height: 68px;
                text-align: center;
                font-size: 76px!important;
            }
            .file-text-con{
                // position: relative;
                height: 68px;
                h5{
                    margin: 5px 0 0 0;
                    color: #333;
                    font-weight: normal;
                    font-size: 14px;
                }
                h6{
                    margin: 5px 0 0 0;
                    color: #999;
                    font-weight: normal; 
                    font-size: 12px;                   
                }
            }
        }
    }
}
//通用表格
.common-table{
    padding: 20px 20px 0 20px;
    .item{
        display: block;
        position: relative;
        // line-height: 1;
        font-size: 14px;
        margin-bottom: 15px;
        color: #8a9099;
        span{
            color: #333;
            &.blue{
                color: #2790f5;
            }
            &.red{
                color: #ef1c25;
            }
        }
        
        &:before,
        &:after {
            display: table;
            content: "";
        }
        &:after {
            clear: both
        }
        &:last-child{
            margin-bottom: 0;
        }
        .col{
            float: left;
            width: 100%;
            box-sizing: border-box;
        }
    }
    &.col-50{
        .col{
            width: 50%;
        }
    }

    // 派单信息（表）
    &.table-info{
        padding-top: 0;
        .btn-noframe{
            margin-left: 10px; 
            padding: 0;
            height: auto;
        }
        .btn-blue{
            margin-top: 10px;
            padding: 0;
            width: 120px;
            height: 38px;
        }
    }
}
//操作记录
.float-record{
    position: fixed;
    display: block;
    right: 15px;
    bottom: 15px;
	width: 60px;
	height: 48px;
	background-color: #3291ee;
	box-shadow: 0px 2px 10px 0px 
		rgba(49, 146, 240, 0.2);
	border-radius: 4px;
    border: solid 1px #3192f0;
    text-align: center;
    .icon{
        padding: 6px 0;
        width: 60px;
        height: 48px;
        color: #fff;
    }
    .text{
        position: absolute;
        bottom: 0;
        width: 100%;
        height: 20px;
        line-height: 20px;
        font-size: 12px;
        color: #299ff6;
        background: #fff;
        border-bottom-left-radius: 4px;
        border-bottom-right-radius: 4px;
    }
}

section{
    display: flex;
    // width: 1280px;  //这个为什么要加200?
    height: 100%;

    // 左侧内容
    .container-left{
        // position: relative;
        // flex: 0 0 805px;
        // display: flex;
        // flex: 1;
        // flex-direction: column;
        width: 805px;
        height: 100%;
        
        // 顶部控制
        .control-list{
            padding: 20px;
            width: 805px;
            background-color: #fff;
            border: 1px solid #e6eaee;

            box-sizing: border-box;
            -moz-box-sizing: border-box;
            -webkit-box-sizing: border-box;
            -o-box-sizing: border-box;
            -ms-box-sizing: border-box;
            // .btn-edit{
            //     width: 100px;
            // }
            // .btn-copy{
            //     width: 100px;
            // }
            // .btn-download{
            //     width: 166px;
            // }
            // .btn-add{
            //     width: 100px;
            // }
        }
        .container-left-main{
            overflow-y: auto;
        }
        // 信息块
        .card-info{
            margin-top: 20px;
            border: 1px solid #e6eaee;
            border-radius: 4px;
            background-color: #fff;
            .student-card{}
            .file-card{
                padding: 20px 20px 0 20px;
                // 相关资料
                .data-card{
                    padding: 0;
                }
            }
            // 订单价格
            .price-card{
                padding: 20px;
            }
        }
        // 流程进度
        @point-color: #abbac3;
        @point-color-focus: #3291ee;
        .process{
            padding: 20px;
            max-width: 780px;
            .process-item{
                float: left;
                position: relative;
                width: 148px;
                width: 20%;
                height: 110px;
                padding-bottom: 15px;
                // background: #2790f5;
                h5,h6{
                    margin: 0;
                    font-size: 14px;
                }
                h5{
                    margin: 16px 0 0 0;
                    color: #333;
                }
                h6{
                    font-size: 12px;
                    color: #999;
                }
                // 圆点和线
                .point{
                    // 圆点
                    &>span{
                        display: block;
                        position: absolute;
                        left: 10%;
                        top: -4px;
                        width: 10px;
                        height: 10px;
                        border-radius: 50%;
                        background-color: @point-color;
                        z-index: 2;
                    }
                    // 线
                    &>i{
                        position: absolute;
                        left: -90%;
                        width: 100%;
                        height: 2px;
                        background-color: @point-color;
                    }
                }
                // 第1个
                &:first-child{
                    .point{
                        &>i{
                            height: 0;
                        }
                    }
                }
                // 第5个后反过来
                &:nth-child(n+6){
                    float: right;
                    .point{
                        &>i{
                            left: 10%;
                        }
                    }
                }
                &:nth-child(6){
                    .point{
                        // 线
                        &>i{
                            top: -110px;
                            width: 100%;
                            height: 112px;
                            border: 2px solid @point-color;
                            border-left: none;
                            border-top-right-radius: 4px;
                            border-bottom-right-radius: 4px;
                            background: none;
                        }
                    }
                    &.focus{
                        .point{
                            &>i{
                                background: none;
                            }
                        }
                    }
                }
                // 触发
                &.focus{
                    .point{
                        span,i{
                            background-color: @point-color-focus;
                        }
                        &>i{
                            border-color: @point-color-focus;
                        }
                        
                    }
                }
            }
        }

        // 留言板
        .message{
            padding: 20px;
            background: #fff;
            .message-textarea{
                .row{
                    margin-bottom: 15px;
                }
            }
            .message-list{
                .message-item{
                    position: relative;
                    padding: 15px 0;
                    display: flex;
                    &:last-child{
                        border-bottom: none;
                    }
                    .message-img{
                        margin-right: 10px;
                        width: 32px;
                        height: 32px;
                        border-radius: 50%;
                    }
                    .message-con{
                        .text{
                            margin: 0 0 10px 0;
                            padding: 0;
                            line-height: 1;
                            .name{
                                color: #333;
                                font-size: 14px;
                            }
                            .job{
                                margin-left: 10px;
                                color: #7f8fa4;
                                font-weight: normal;
                            }
                        }
                        .desc{
                            margin: 0 0 10px 0;
                            padding: 0;
                            line-height: 1;
                            color: #4c4c4c;
                            font-weight: normal;
                        }
                        .time{
                            position: absolute;
                            right: 0;
                            top: 20px;
                            color: #999;
                            font-weight: bold;
                        }
                    }
                }
            }
        }
    }

    // 右侧内容
    .container-right{
        flex: 1;
        margin-left: 20px;
        // flex: 0 0 0 456px;
        width: 456px;
        background: #fff;
        border-left: 1px solid #e6eaee;
        overflow-y: auto;
    }

    // 参与人员列表
    .icon-list{
        padding: 0 0 0 20px;
        .item{
            float: left;
            margin: 0 20px 20px 0;
            width: 50px;
            height: 80px;
            text-align: center;
            .item-img{
                display: inline-block;
                position: relative;
                width: 40px;
                height: 40px;
                img{
                    width: 100%;
                    height: 100%;
                    border-radius: 50%;
                }
                .point{
                    display: block;
                    position: absolute;
                    right: 0;
                    bottom: 0;
                    width: 12px;
                    height: 12px;
                    border-radius: 50%;
                    border: 1px solid #fff;
                    background-color: #bbb;
                    &.right{
                        background: #70ed3a;
                        &:before{
                            content: '✔';
                            display: block;
                            color: #fff;
                            position: absolute;
                            top: -2px;
                            width: 8px;
                        }
                    }
                }
            }
            h5{
                margin: 0;
                color: #4d4d4d;
                line-height: 1.2;
                font-size: 14px;
                font-weight: normal;
            }
            h6{
                margin: 0;
                color: #8a98aa;
                line-height: 1.4;
                font-size: 12px;
                font-weight: normal;
            }
            &.blue{
                h5,h6{ color: #2b94f9 }
            }
        }
    }
}
</style>


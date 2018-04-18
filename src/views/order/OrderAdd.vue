<template>
    <section>
        <div class="control-list">
            <el-button type="primary" class="btn-save">保存</el-button>
            <el-button type="info" class="btn-draft">保存为草稿</el-button>
            <el-button class="common-icon-btn btn-return">返回</el-button>
        </div>
        <!-- 基础信息 -->
        <div class="basic-info">
            <div class="common-title bottom-line"><i/>基础信息</div>
            <div class="form clearfix">
                <div class="item">
                    <div class="col">
                        <div class="label">用户</div>
                        <div class="con">
                            <el-button type="success">添加用户</el-button>
                            <el-button class="common-icon-btn">草稿箱恢复</el-button>
                        </div>
                    </div>
                </div>
                <div class="item">
                    <div class="col">
                        <div class="label">订单主题</div>
                        <div class="con">
                            <el-input></el-input>
                        </div>
                    </div>
                </div>
                <div class="item">
                    <div class="col col-50">
                        <div class="label">用户</div>
                        <div class="con">
                            <el-select v-model="country" placeholder="请选择国家" style="width: 100%;">
                                <el-option label="中国" value="1"></el-option>
                                <el-option label="美国" value="2"></el-option>
                            </el-select>
                        </div>
                        <div class="prompt">修改国家对应也会修改订单时区</div>
                    </div>
                    <div class="col col-50">
                        <div class="label">用户</div>
                        <div class="con">
                            <el-date-picker type="date" placeholder="选择日期" style="width: 100%;"></el-date-picker>
                        </div>
                        <div class="prompt">当前时区: 2018-03-01 12:55:14Asia/Hong_Kong</div>
                    </div>
                </div>
                <div class="item">
                    <div class="col col-50">
                        <div class="label">内容类型</div>
                        <div class="con">
                            <el-select v-model="type" placeholder="请选择内容类型" style="width: 100%;">
                                <el-option label="中国" value="1"></el-option>
                                <el-option label="美国" value="2"></el-option>
                            </el-select>
                        </div>
                    </div>
                    <div class="col col-50">
                        <div class="label">内容专业</div>
                        <div class="con">
                            <el-select v-model="major" placeholder="请选择内容专业" style="width: 100%;">
                                <el-option label="中国" value="1"></el-option>
                                <el-option label="美国" value="2"></el-option>
                            </el-select>
                        </div>
                    </div>
                </div>
                <div class="item">
                    <div class="col col-50">
                        <div class="label">科目</div>
                        <div class="con">
                            <el-select v-model="type" placeholder="" style="width: 100%;">
                                <el-option label="中国" value="1"></el-option>
                                <el-option label="美国" value="2"></el-option>
                            </el-select>
                        </div>
                    </div>
                    <div class="col col-50">
                        <div class="label">页数</div>
                        <div class="con">
                            <el-select v-model="major" placeholder="" style="width: 100%;">
                                <el-option label="中国" value="1"></el-option>
                                <el-option label="美国" value="2"></el-option>
                            </el-select>
                        </div>
                    </div>
                </div>
                <div class="item">
                    <div class="col col-50">
                        <div class="label">格式</div>
                        <div class="con">
                            <el-select v-model="type" placeholder="" style="width: 100%;">
                                <el-option label="中国" value="1"></el-option>
                                <el-option label="美国" value="2"></el-option>
                            </el-select>
                        </div>
                    </div>
                    <div class="col col-50">
                        <div class="label">行距</div>
                        <div class="con">
                            <el-select v-model="major" placeholder="" style="width: 100%;">
                                <el-option label="中国" value="1"></el-option>
                                <el-option label="美国" value="2"></el-option>
                            </el-select>
                        </div>
                    </div>
                </div>
                <div class="item">
                    <div class="col col-50">
                        <div class="label">资源数据</div>
                        <div class="con">
                            <el-select v-model="type" placeholder="" style="width: 100%;">
                                <el-option label="中国" value="1"></el-option>
                                <el-option label="美国" value="2"></el-option>
                            </el-select>
                        </div>
                    </div>
                    <div class="col col-50">
                        <div class="label">写手等级</div>
                        <div class="con">
                            <el-select v-model="major" placeholder="" style="width: 100%;">
                                <el-option label="中国" value="1"></el-option>
                                <el-option label="美国" value="2"></el-option>
                            </el-select>
                        </div>
                    </div>
                </div>
            </div>
            <div class="common-title bottom-line"><i/>订单附件</div>
            <div class="form clearfix">
                <div class="item">
                    <div class="col">
                        <div class="label">论文命题</div>
                        <div class="con">
                            <el-button type="success">上传文件</el-button>
                        </div>
                    </div>
                </div>
                <div class="item">
                    <div class="col">
                        <div class="label">数学大纲</div>
                        <div class="con">
                            <el-button type="success">上传文件</el-button>
                        </div>
                    </div>
                </div>
                <div class="item">
                    <div class="col">
                        <div class="label">课堂笔记</div>
                        <div class="con">
                            <el-button type="success">上传文件</el-button>
                        </div>
                    </div>
                </div>
                <div class="item">
                    <div class="col">
                        <div class="label">想关资科</div>
                        <div class="con">
                            <el-button type="success">上传文件</el-button>
                        </div>
                    </div>
                </div>
                <div class="item">
                    <div class="col">
                        <div class="label">订单备注</div>
                        <div class="con">
                            <el-input></el-input>
                        </div>
                    </div>
                </div>
            </div>
            <div class="common-title bottom-line"><i/>费用信息</div>
            <div class="form clearfix">
                <div class="item">
                    <div class="col col-50">
                        <div class="label">预估价格</div>
                        <div class="con">
                            <el-row>
                                <el-col :span="18">
                                    <el-input value="50"></el-input>
                                </el-col>
                                <el-col :span="6" style="padding-left:20px;">
                                    <el-button type="primary">重新估价</el-button>
                                </el-col>
                                
                            </el-row>
                            
                            
                        </div>
                        <div class="prompt">修改国家对应也会修改订单时区</div>
                    </div>
                    <div class="col col-50">
                        <div class="label">订单价格</div>
                        <div class="con">
                            <el-input></el-input>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    data(){
        return{
            country: [],
            type: [],
            major: [],
        }
    },
    mounted(){
        
    },
    methods: {
        
    }
}
</script>

<style lang="less" scoped>
section{
    display: flex;
    flex-direction: column;
    width: 1280px;
    height: 100%;
    // 顶部控制
    .control-list{
        padding: 20px;
        background-color: #fff;
        border: 1px solid #e6eaee;

        box-sizing: border-box;
        -moz-box-sizing: border-box;
        -webkit-box-sizing: border-box;
        -o-box-sizing: border-box;
        -ms-box-sizing: border-box;
        .btn-save{
            width: 100px;
        }
        .btn-draft{
            width: 120px;
        }
        .btn-return{
            width: 100px;
        }
    }
    // 基础信息
    .basic-info{
        // flex: 1;
        margin-top: 20px;
        padding-bottom: 20px;
        background-color: #fff;
        border: 1px solid #e6eaee;
        overflow-y: auto;
        .form{
            padding: 0 20px;
            background-color: #fff;
            .item{
                .col{
                    &.col-50{
                        float: left;
                        padding-right: 20px;
                        width: 50%;
                        box-sizing: border-box;
                        &:nth-child(2n){
                            padding-right: 0;
                        }
                    }
                    .label{
                        margin: 15px 0 5px 0;
                    }
                    .prompt{
                        margin-top: 5px;
                        font-size: 12px;
                    }
                }
            }
        }
    }
}
</style>


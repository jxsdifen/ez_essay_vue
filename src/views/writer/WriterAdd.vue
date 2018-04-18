<template>
    <section class="ez-writer">
        <!--导航-->
        <el-breadcrumb separator="/">
            <el-breadcrumb-item :to="{ name: 'Home' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>添加写手</el-breadcrumb-item>
        </el-breadcrumb>

        <div class="container">
            <el-form class="form" label-width="80px" label-position="top">
                <div class="title">
                    <span><i/>基本信息</span>
                </div>
                <div class="content">
                    <el-form-item :span="8" label="用户名" class="row">
                        <el-input placeholder=""></el-input>
                    </el-form-item>
                    <el-form-item :span="8" label="登录密码" class="row">
                        <el-input placeholder=""></el-input>
                    </el-form-item>
                    <el-form-item :span="8" label="角色" class="row">
                        <el-select v-model="role" placeholder="超级管理员">
                            <el-option label="超级管理员" value="1"></el-option>
                            <el-option label="超级管理员" value="2"></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item :span="8" label="邮箱" class="row">
                        <el-input placeholder=""></el-input>
                    </el-form-item>
                    <el-form-item :span="8" label="真实姓名" class="row">
                        <el-input placeholder=""></el-input>
                    </el-form-item>
                    <el-form-item :span="8" label="在线客服" class="row">
                        <el-select v-model="service" placeholder="启用">
                            <el-option label="启用" value="1"></el-option>
                            <el-option label="不启用" value="2"></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="头像">
                        <el-upload class="avatar-uploader" action="https://jsonplaceholder.typicode.com/posts/"
                        :show-file-list="false"
                        :on-success="handleAvatarSuccess"
                        :before-upload="beforeAvatarUpload">
                        <img v-if="imageUrl" :src="imageUrl" class="avatar">
                            <i v-else class="el-icon-plus avatar-uploader-icon">
                                <div class="el-dragger__text">添加头像</div>
                            </i>
                        </el-upload>
                        <!-- <el-dialog :visible.sync="dialogVisible">
                            <img width="100%" :src="dialogImageUrl" alt="">
                        </el-dialog> -->
                    </el-form-item>
                </div>
                <div class="title">
                    <span><i/>更多资料</span>
                </div>
                <div class="content">
                    <el-form-item :span="8" label="擅长科目">
                        <div class="select-block">
                            <el-button>会计</el-button>
                            <el-button type="primary">生物化学</el-button>
                            <el-button>会计</el-button>
                            <el-button>会计</el-button>
                        </div>
                    </el-form-item>
                    <el-form-item :span="8" label="擅长类型">
                        <div class="select-block">
                            <el-button>会计</el-button>
                            <el-button type="primary">生物化学</el-button>
                            <el-button>会计</el-button>
                            <el-button>会计</el-button>
                        </div>
                    </el-form-item>
                    <el-form-item :span="8" label="状态" class="row">
                        <el-select v-model="state" placeholder="启用">
                            <el-option label="启用" value="1"></el-option>
                            <el-option label="不启用" value="2"></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item :span="8" label="支付账号" class="row">
                        <el-input placeholder=""></el-input>
                    </el-form-item>
                    <el-form-item :span="8" label="描述" class="row">
                        <el-input placeholder=""></el-input>
                    </el-form-item>

                    <el-form-item>
                        <el-button type="primary">保存</el-button>
                        <el-button>返回</el-button>
                    </el-form-item>
                </div>
            </el-form>
        </div>

	</section>
</template>

<script>
export default {
    data(){
        return{
            imageUrl: '',
            role: '',
            service: '',
            state: ''
        }
    },
    methods: {
        handleAvatarSuccess(res, file) {
            this.imageUrl = URL.createObjectURL(file.raw);
        },
        beforeAvatarUpload(file) {
            const isJPG = file.type === 'image/jpeg';
            const isLt2M = file.size / 1024 / 1024 < 2;

            if (!isJPG) {
                this.$message.error('上传头像图片只能是 JPG 格式!');
            }
            if (!isLt2M) {
                this.$message.error('上传头像图片大小不能超过 2MB!');
            }
            return isJPG && isLt2M;
        }
    }
}
</script>

<style lang="less" scoped>
.ez-writer{
    flex: 1;
    padding: 20px;
    background-color: #eff3f6;
    .container{
        margin-top: 20px;
        background-color: #fff;
        .form{
            padding: 20px 0;
            .title{
                padding: 0 0 20px 20px;
                border-bottom: 1px solid #ddd;
                i{
                    display: inline-block;
                    margin-right: 10px;
                    width: 4px;
                    height: 16px;
                    background-color: #3192f0;
                    vertical-align: middle;
                }
            }
            .content{
                padding: 0 20px;
            }
            .el-input{
                width: 370px;
            }
            .row{
                display: inline-block;
            }
            .select-block{
                padding: 10px;
                border: 1px solid #ddd;
                border-radius: 3px;
                background: #fafafa;
                .el-button{
                    margin-right: 50px;
                    padding: 0;
                    width: 90px;
                    height: 30px;
                    line-height: 30px;
                }
            }
        }
    }
}
</style>


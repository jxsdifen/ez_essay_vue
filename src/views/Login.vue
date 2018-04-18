<template>
    <el-form ref="form" :model="form" label-width="0px" class="login-container">
        <h3 class="title">系统登录</h3>
        <el-form-item>
            <el-input type="text" v-model="form.account" auto-complete="off" placeholder="账号"></el-input>
        </el-form-item>
        <el-form-item>
            <el-input type="password" v-model="form.pwd" auto-complete="off" placeholder="密码"></el-input>
        </el-form-item>
        <el-form-item>
            <el-checkbox label="记住密码" name="type" class="remember" v-model="checked"></el-checkbox>
        </el-form-item>
        <el-form-item>
            <el-button type="primary" style="width:100%;" @click.native.prevent="onSubmit">登录</el-button>
        </el-form-item>
    </el-form>
</template>

<script>
    import { requestLogin } from '../api/api'; 
    export default {
        data() {
            return {
                logining: false,
                checked: true,
                form: {
                    account: 'admin',
                    pwd: '123456'
                }
            }
        },
        methods: {
            onSubmit() {
                // this.$router.push({ path: '/home' });
                
            }
        }
    }
</script>

<style lang="less" scoped>
  .login-container {
    /*box-shadow: 0 0px 8px 0 rgba(0, 0, 0, 0.06), 0 1px 0px 0 rgba(0, 0, 0, 0.02);*/
    -webkit-border-radius: 5px;
    border-radius: 5px;
    -moz-border-radius: 5px;
    background-clip: padding-box;
    margin: 180px auto;
    width: 350px;
    padding: 35px 35px 15px 35px;
    background: #fff;
    border: 1px solid #eaeaea;
    box-shadow: 0 0 25px #cac6c6;

    .title {
      margin: 0px auto 40px auto;
      text-align: center;
      color: #505458;
    }
    .remember {
      margin: 0px 0px 35px 0px;
    }
  }
</style>
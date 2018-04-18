<template>
    <section class="ez-writer">
        <!--导航-->
        <el-breadcrumb separator="/">
            <el-breadcrumb-item>写手管理</el-breadcrumb-item>
            <el-breadcrumb-item>写手评价</el-breadcrumb-item>
        </el-breadcrumb>

        <div class="container">
            <!--工具条-->
            <el-col :span="24" class="toolbar" style="padding-bottom: 0px;">
                <el-form :inline="true">
                    <el-form-item>
                        <el-input placeholder="订单号"></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" icon="el-icon-search">查询</el-button>
                    </el-form-item>
                </el-form>
            </el-col>

            <!-- 列表 -->
            <el-table :data="writerData" highlight-current-row v-loading="listLoading" style="width: 100%;">
                <el-table-column prop="id" label="ID" width="60">
                </el-table-column>
                <el-table-column prop="name" label="用户名" width="200" sortable>
                </el-table-column>
                <el-table-column prop="writer" label="写手" width="200" sortable>
                </el-table-column>
                <el-table-column prop="ordernum" label="订单号" width="150" sortable>
                </el-table-column>
                <el-table-column prop="score" label="评分" width="100" sortable>
                </el-table-column>
                <el-table-column prop="label" label="标签" min-width="200" sortable>
                </el-table-column>
                <el-table-column prop="letter" label="感谢信" width="200" sortable>
                </el-table-column>
                <el-table-column prop="date" label="添加时间" width="200" sortable>
                </el-table-column>
            </el-table>

            <!--工具条-->
            <el-col :span="24" class="pagination">
                <el-pagination background layout="prev, pager, next" :page-size="20" :total="1000" style="float:right;"></el-pagination>
            </el-col>
        </div>
	</section>
</template>

<script>
export default {
    data(){
        return{
            state: '',  //状态
            listLoading: false,
            total: 0,
            page: 1,
            listLoading: false,
            writerData: [{
                id: 1,
                name: 'zengxianhua (超级管理员)',
                writer: 'king (离线)',
                ordernum: '0310256569',
                score: '5.0 星',
                label: '',
                letter: '谢谢',
                date: '2016-05-02 16:37:55',
                state: 1
            },{
                id: 2,
                name: 'zengxianhua (超级管理员)',
                writer: 'king (离线)',
                ordernum: '0310256569',
                score: '4.0 星',
                label: '',
                letter: '谢谢了',
                date: '2016-05-02 16:37:55',
                state: 0
            }]
        }
    },
    methods: {
        //状态显示转换
        formatState: function (row, column) {
            return row.state == 1 ? '启用' : '禁用';
        },
        handleCurrentChange(val) {
            this.page = val;
            // this.getUsers();
        },
        //获取列表
        getList(){
            this.listLoading = true;
            
            this.total = 11;
            this.listLoading = false;
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
        padding: 20px;
        background-color: #fff;
    }
}
</style>


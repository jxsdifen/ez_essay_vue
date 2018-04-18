<template>
    <section class="ez-writer">
        <!--导航-->
        <el-breadcrumb separator="/">
            <el-breadcrumb-item>写手管理</el-breadcrumb-item>
            <el-breadcrumb-item>写手列表</el-breadcrumb-item>
        </el-breadcrumb>

        <div class="container">
            <!--工具条-->
            <el-col :span="24" class="toolbar" style="padding-bottom: 0px;">
                <el-form :inline="true">
                    <el-form-item>
                        <el-input placeholder="管理员"></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" icon="el-icon-search">查询</el-button>
                        <el-button type="success" icon="el-icon-plus">添加</el-button>
                    </el-form-item>
                </el-form>
            </el-col>

            <!-- 列表 -->
            <el-table :data="writerData" highlight-current-row v-loading="listLoading" style="width: 100%;">
                <el-table-column prop="id" label="ID" width="60">
                </el-table-column>
                <el-table-column prop="name" label="真实姓名" width="120" sortable>
                </el-table-column>
                <el-table-column prop="score" label="评分" width="160" sortable>
                </el-table-column>
                <el-table-column prop="email" label="邮箱" min-width="200" sortable>
                </el-table-column>
                <el-table-column prop="level" label="等级" width="160" sortable>
                </el-table-column>
                <el-table-column prop="user" label="操作者" width="200" sortable>
                </el-table-column>
                <el-table-column prop="date" label="添加时间" width="200" sortable>
                </el-table-column>
                <el-table-column prop="state" label="状态" width="100" :formatter="formatState" sortable>
                </el-table-column>
                <el-table-column label="操作" width="100">
                    <template scope="scope">
                        <el-button type="text" @click="handleEdit(scope.$index, scope.row)">订单</el-button>
                    </template>
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
                name: 'renjie_xieshou',
                score: '0.0 星',
                email: 'renjie_xieshou@qq.com',
                level: '专业老师',
                user: 'zengxianhua',
                date: '2016-05-02 16:37:55',
                state: 1
            },{
                id: 2,
                name: 'huang1709',
                score: '4.33 星',
                email: 'willem.huang@myezessay.com',
                level: '专业老师',
                user: 'powerover1709',
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


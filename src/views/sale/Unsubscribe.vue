<template>
    <section class="ez-sale">

        <div class="container">
            <!--工具条-->
            <el-col :span="24" class="toolbar" style="padding-bottom: 0px;">
                <el-form :inline="true">
                    <el-form-item>
                        <el-input placeholder="邮件标题/用户名/邮箱"></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" icon="el-icon-search">查询</el-button>
                        <el-button type="danger" icon="el-icon-delete">批量删除</el-button>
                    </el-form-item>
                </el-form>
            </el-col>

            <!-- 列表 -->
            <el-table :data="pushData" highlight-current-row v-loading="listLoading" style="width: 100%;">
                <el-table-column type="selection" prop="id" width="50">
                </el-table-column>
                <el-table-column prop="id" label="UID" width="60">
                </el-table-column>
                <el-table-column prop="name" label="用户名" width="120">
                </el-table-column>
                <el-table-column prop="email" label="邮箱" width="160">
                </el-table-column>
                <el-table-column prop="type" label="群发类型" width="120" sortable>
                </el-table-column>
                <el-table-column prop="title" label="邮件标题" min-width="200" sortable>
                </el-table-column>
                <el-table-column prop="date" label="退订时间" width="180" sortable>
                </el-table-column>
                <el-table-column label="操作" width="100">
                    <template slot-scope="scope">
                        <el-button type="text" @click="handleEdit(scope.$index, scope.row)">删除</el-button><i class="gap"/><el-button type="text">日志</el-button>
                    </template>
                </el-table-column>
            </el-table>

            <!--工具条-->
            <el-col :span="24" class="pagination">
                <el-pagination background layout="prev, pager, next" @current-change="handleCurrentChange" :page-size="10" :total="30" style="float:right;"></el-pagination>
            </el-col>
        </div>
	</section>
</template>

<script>
export default {
    data(){
        return{
            state: '',  //状态
            total: 0,
            page: 1,
            listLoading: false,
            pushData: [{
                id: 3,
                name: '王小虎',
                email: '128xxxxxxxx@qq.com',
                type: '按用户发送',
                title: 'EzEssay欢乐大放送',
                date: '2016-05-02 16:37:55'
            },{
                id: 2,
                name: '王小虎',
                email: '128xxxxxxxx@qq.com',
                type: '按用户发送',
                title: 'EzEssay欢乐大放送',
                date: '2016-05-02 16:37:55'
            },{
                id: 1,
                name: '王小虎',
                email: '128xxxxxxxx@qq.com',
                type: '按用户发送',
                title: 'EzEssay欢乐大放送',
                date: '2016-05-02 16:37:55'
            }]
        }
    },
    methods: {
        //状态显示转换
        formatState: function (row, column) {
            return row.state == 1 ? '发送完成' : '发送失败';
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
.ez-sale{
    flex: 1;
    padding: 20px;
    background-color: #eff3f6;
    .container{
        padding: 20px;
        background-color: #fff;
    }
}
</style>


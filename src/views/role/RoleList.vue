<template>
    <section class="ez-writer">

        <div class="container">
            <!--工具条-->
            <el-col :span="24" class="toolbar" style="padding-bottom: 0px;">
                <el-form :inline="true">
                    <el-form-item>
                        <el-input placeholder="角色名称"></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" icon="el-icon-search">查询</el-button>
                        <el-button type="success" icon="el-icon-plus">添加</el-button>
                    </el-form-item>
                </el-form>
            </el-col>

            <!-- 列表 -->
            <el-table :data="RoleData" highlight-current-row v-loading="listLoading" style="width: 100%;">
                <el-table-column prop="id" label="ID" width="60">
                </el-table-column>
                <el-table-column prop="cname" label="中文角色名称" width="150" sortable>
                </el-table-column>
                <el-table-column prop="ename" label="英文角色名称" width="150" sortable>
                </el-table-column>
                <el-table-column prop="remark" label="备注" min-width="300" sortable>
                </el-table-column>
                <el-table-column prop="state" label="状态" width="100" :formatter="formatState" sortable>
                </el-table-column>
                <el-table-column label="操作" width="200">
                    <template slot-scope="scope">
                        <el-button type="text" @click="handleEdit(scope.$index, scope.row)">修改</el-button><i class="gap"/><el-button type="text">权限授权</el-button><i class="gap"/><el-button type="text">成员</el-button>
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
            RoleData: [{
                id: 1,
                cname: '超级管理员',
                ename: 'Administrator',
                remark: '如果禁用',
                state: 1
            },{
                id: 2,
                cname: '审核老师',
                ename: 'Audit',
                remark: '修改，取消订单，增加，删除写手老师，分配订单给写手老师',
                state: 1
            },{
                id: 3,
                cname: '写手老师',
                ename: 'Writer',
                remark: '查看分配给自己的订单，提交文档（word,pdf），可以选择接受/拒绝任务',
                state: 1
            },{
                id: 4,
                cname: '销售A',
                ename: 'Sales A',
                remark: '主要功能：新增订单，修改订单，查看通知，查看用户，查看订单，查看推广码',
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
        padding: 20px;
        background-color: #fff;
    }
}
</style>


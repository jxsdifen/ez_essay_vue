<template>
    <section class="ez-require">

        <div class="container">
            <!--工具条-->
            <el-col :span="24" class="toolbar" style="padding-bottom: 0px;">
                <el-form :inline="true">
                    <el-form-item>
                        <el-button type="danger" icon="el-icon-delete">批量删除</el-button>
                    </el-form-item>
                </el-form>
            </el-col>

            <!-- 列表 -->
            <el-table :data="RequireData" highlight-current-row v-loading="listLoading" style="width: 100%;">
                <el-table-column type="selection" prop="id" width="50">
                </el-table-column>
                <el-table-column prop="theme" label="订单主题" min-width="300" sortable>
                </el-table-column>
                <el-table-column prop="name" label="用户名" width="200" sortable>
                </el-table-column>
                <el-table-column prop="user" label="操作者" width="200" sortable>
                </el-table-column>
                <el-table-column prop="enddate" label="截止日期" width="200" sortable>
                </el-table-column>
                <el-table-column prop="startdate" label="写手接单日期" width="200" sortable>
                </el-table-column>
                <el-table-column label="操作" width="160">
                    <template slot-scope="scope">
                        <el-button type="text" @click="handleEdit(scope.$index, scope.row)">恢复</el-button><i class="gap"/><el-button type="text">删除</el-button>
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
            RequireData: [{
                id: 1,
                theme: 'business collaboration email',
                name: 'Tina',
                user: 'ez_carrie',
                enddate: '2017-10-13 23:59:01',
                startdate: '2017-10-13 23:59:01'
            },{
                id: 2,
                theme: 'business collaboration email',
                name: 'Tina',
                user: 'ez_carrie',
                enddate: '2017-10-13 23:59:01',
                startdate: '2017-10-13 23:59:01'
            },{
                id: 3,
                theme: 'business collaboration email',
                name: 'Tina',
                user: 'ez_carrie',
                enddate: '2017-10-13 23:59:01',
                startdate: '2017-10-13 23:59:01'
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
.ez-require{
    flex: 1;
    padding: 20px;
    background-color: #eff3f6;
    .container{
        padding: 20px;
        background-color: #fff;
    }
}
</style>


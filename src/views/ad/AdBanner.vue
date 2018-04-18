<template slot-scope>
    <section class="ez-writer">

        <div class="container">
            <!--工具条-->
            <el-col :span="24" class="toolbar" style="padding-bottom: 0px;">
                <el-form :inline="true">
                    <el-form-item>
                        <el-button type="success" icon="el-icon-plus">添加</el-button>
                    </el-form-item>
                </el-form>
            </el-col>

            <!-- 列表 -->
            <el-table :data="AdData" highlight-current-row v-loading="listLoading" style="width: 100%;">
                <el-table-column type="selection" prop="id" width="50">
                </el-table-column>
                <el-table-column prop="id" label="ID" width="100">
                </el-table-column>
                <el-table-column prop="title" label="广告的标题" min-width="300" sortable>
                </el-table-column>
                <el-table-column prop="sort" label="排序" width="200" sortable>
                </el-table-column>
                <el-table-column prop="date" label="添加时间" width="200" sortable>
                </el-table-column>
                <el-table-column prop="state" label="状态" width="100" :formatter="formatState" sortable>
                </el-table-column>
                <el-table-column label="操作" width="200">
                    <template scope="scope">
                        <el-button type="text" @click="handleEdit(scope.$index, scope.row)">修改</el-button><i class="gap"/><el-button type="text">删除</el-button>
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
            AdData: [{
                id: 10,
                title: '我们的服务',
                sort: 10,
                date: '2018-03-15 09:23:31',
                state: 1
            },{
                id: 7,
                title: 'cover 2 test 2',
                sort: 0,
                date: '2018-03-15 09:23:31',
                state: 1
            },{
                id: 5,
                title: '我们的服务',
                sort: 0,
                date: '2018-03-15 09:23:31',
                state: 0
            },{
                id: 3,
                title: '我们的服务',
                sort: 0,
                date: '2018-03-15 09:23:31',
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


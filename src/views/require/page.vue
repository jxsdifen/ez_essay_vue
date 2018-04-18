<template>
    <section class="ez-require">

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
            <el-table :data="RequireData" highlight-current-row v-loading="listLoading" style="width: 100%;">
                <el-table-column prop="id" label="ID" width="50">
                </el-table-column>
                <el-table-column prop="cname" label="中文名称" min-width="200" sortable>
                </el-table-column>
                <el-table-column prop="ename" label="英文名称" min-width="200" sortable>
                </el-table-column>
                <el-table-column prop="cremark" label="备注" width="200" sortable>
                </el-table-column>
                <el-table-column prop="eremark" label="English备注" width="200" sortable>
                </el-table-column>
                <el-table-column prop="state" label="状态" width="100" :formatter="formatState" sortable>
                </el-table-column>
                <el-table-column prop="sort" label="排序" width="100" sortable>
                </el-table-column>
                <el-table-column label="操作" width="100">
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
            RequireData: [{
                id: 1,
                cname: '18',
                ename: '18',
                cremark: '大约4950个词',
                eremark: '',
                state: 1,
                sort: 0
            },{
                id: 2,
                cname: '19',
                ename: '19',
                cremark: '大概5225个词',
                eremark: '',
                state: 1,
                sort: 0
            },{
                id: 3,
                cname: '20',
                ename: '20',
                cremark: '大概5500个词',
                eremark: '',
                state: 1,
                sort: 0
            },{
                id: 4,
                cname: '>20 页 （在note里面表明页数）',
                ename: 'More than 20 pages (please check the note for details)',
                cremark: '',
                eremark: '',
                state: 1,
                sort: 0
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


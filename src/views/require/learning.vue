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
                <el-table-column prop="id" label="ID" width="80">
                </el-table-column>
                <el-table-column prop="cname" label="中文名称" min-width="300" sortable>
                </el-table-column>
                <el-table-column prop="ename" label="英文名称" min-width="300" sortable>
                </el-table-column>
                <el-table-column prop="state" label="状态" width="100" :formatter="formatState" sortable>
                </el-table-column>
                <el-table-column prop="sort" label="排序" width="100" sortable>
                </el-table-column>
                <el-table-column label="操作" width="160">
                    <template slot-scope="scope">
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
                cname: '高中',
                ename: 'High School',
                state: 1,
                sort: 0
            },{
                id: 2,
                cname: '语言学习',
                ename: 'ESL',
                state: 1,
                sort: 0
            },{
                id: 3,
                cname: '社区大学',
                ename: 'College',
                state: 1,
                sort: 0
            },{
                id: 4,
                cname: '本科大一或大二',
                ename: 'Undergraduate (1st and 2nd year)',
                state: 1,
                sort: 0
            },{
                id: 5,
                cname: '本科大三或大四',
                ename: 'Undergraduate (3rd and 4th year)',
                state: 1,
                sort: 0
            },{
                id: 6,
                cname: '研究生',
                ename: 'Master’s',
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


<template>
    <section class="ez-writer">
        <!--导航-->
        <el-breadcrumb separator="/">
            <el-breadcrumb-item>写手管理</el-breadcrumb-item>
            <el-breadcrumb-item>写手等级</el-breadcrumb-item>
        </el-breadcrumb>

        <div class="container">
            <!-- 列表 -->
            <el-table :data="writerData" highlight-current-row v-loading="listLoading" style="width: 100%;">
                <!-- <el-table-column prop="id" label="ID" width="60">
                </el-table-column> -->
                <el-table-column prop="level" label="等级" width="200" sortable>
                </el-table-column>
                <el-table-column prop="cname" label="中文名称" width="300" sortable>
                </el-table-column>
                <el-table-column prop="ename" label="英文名称" width="300" sortable>
                </el-table-column>
                <el-table-column prop="badge" label="徽章" min-width="300" sortable>
                </el-table-column>
                <el-table-column label="操作" width="100">
                    <template slot-scope="scope">
                        <el-button type="text" @click="handleEdit(scope.$index, scope.row)">修改</el-button>
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
                level: '10',
                cname: '专业老师',
                ename: 'Professional teacher',
                badge: ''
            },{
                id: 2,
                level: '20',
                cname: '金牌老师',
                ename: 'Gold medal teacher',
                badge: ''
            },{
                id: 3,
                level: '30',
                cname: '王牌老师',
                ename: 'A trump teacher',
                badge: ''
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


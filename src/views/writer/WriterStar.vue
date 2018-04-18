<template>
    <section class="ez-writer">
        <!--导航-->
        <el-breadcrumb separator="/">
            <el-breadcrumb-item>写手管理</el-breadcrumb-item>
            <el-breadcrumb-item>写手星级</el-breadcrumb-item>
        </el-breadcrumb>

        <div class="container">
            <!-- 列表 -->
            <el-table :data="writerData" highlight-current-row v-loading="listLoading" style="width: 100%;">
                <!-- <el-table-column prop="id" label="ID" width="60">
                </el-table-column> -->
                <el-table-column prop="star" label="星级" width="200" sortable>
                </el-table-column>
                <el-table-column prop="cname" label="中文名称" width="300" sortable>
                </el-table-column>
                <el-table-column prop="ename" label="英文名称" width="300" sortable>
                </el-table-column>
                <el-table-column label="操作" min-width="200">
                    <template slot-scope="scope">
                        <el-button type="text" @click="handleEdit(scope.$index, scope.row)">修改</el-button><i class="gap"/><el-button type="text">标签</el-button>
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
                star: '1',
                cname: '1星',
                ename: '1 Star'
            },{
                id: 2,
                star: '2',
                cname: '2星',
                ename: '2 Star'
            },{
                id: 3,
                star: '3',
                cname: '3星',
                ename: '3 Star'
            },{
                id: 4,
                star: '4',
                cname: '4星',
                ename: '4 Star'
            },{
                id: 5,
                star: '5',
                cname: '5星',
                ename: '5 Star'
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


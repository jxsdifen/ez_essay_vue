<template>
    <section class="ez-writer">
        <!--导航-->
        <el-breadcrumb separator="/">
            <el-breadcrumb-item>写手管理</el-breadcrumb-item>
            <el-breadcrumb-item>写手标签</el-breadcrumb-item>
        </el-breadcrumb>

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
            <el-table :data="writerData" highlight-current-row v-loading="listLoading" style="width: 100%;">
                <el-table-column prop="id" label="ID" width="60">
                </el-table-column>
                <el-table-column prop="cname" label="中文名称" width="200" sortable>
                </el-table-column>
                <el-table-column prop="ename" label="英文名称" width="160" sortable>
                </el-table-column>
                <el-table-column prop="star" label="星级" width="250" sortable>
                </el-table-column>
                <el-table-column prop="icon" label="图标" min-width="200" sortable>
                </el-table-column>
                <el-table-column prop="state" label="状态" width="100" :formatter="formatState" sortable>
                </el-table-column>
                <el-table-column prop="sort" label="排序" width="100" sortable>
                </el-table-column>
                <el-table-column label="操作" width="120">
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
            writerData: [{
                id: 15,
                cname: '作业下载不方便',
                ename: 'renjie_xieshou',
                star: '2星,1星',
                icon: '',
                state: 1,
                sort: 0
            },{
                id: 14,
                cname: '作业下载不方便',
                ename: 'renjie_xieshou',
                star: '2星,1星',
                icon: '',
                state: 1,
                sort: 0
            },{
                id: 13,
                cname: '作业下载不方便',
                ename: 'renjie_xieshou',
                star: '2星',
                icon: '',
                state: 1,
                sort: 0
            },{
                id: 12,
                cname: '作业下载不方便',
                ename: 'renjie_xieshou',
                star: '1星',
                icon: '',
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


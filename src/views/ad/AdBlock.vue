<template>
    <section class="ez-writer">

        <div class="container">
            <!--工具条-->
            <el-col :span="24" class="toolbar" style="padding-bottom: 0px;">
                <el-form :inline="true">
                    <el-form-item>
                        <el-input placeholder=""></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" icon="el-icon-search">查询</el-button>
                        <el-button type="success" icon="el-icon-plus">添加</el-button>
                        <el-button type="danger" icon="el-icon-delete">批量删除</el-button>
                    </el-form-item>
                </el-form>
            </el-col>

            <!-- 列表 -->
            <el-table :data="AdData" highlight-current-row v-loading="listLoading" style="width: 100%;">
                <el-table-column type="selection" prop="id" width="50">
                </el-table-column>
                <el-table-column prop="id" label="ID" width="80">
                </el-table-column>
                <el-table-column prop="postion" label="广告位置" width="200" sortable>
                </el-table-column>
                <el-table-column prop="mark" label="广告位标识" width="200" sortable>
                </el-table-column>
                <el-table-column prop="title" label="广告的标题" min-width="300" sortable>
                </el-table-column>
                <el-table-column label="操作" width="200">
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
            AdData: [{
                id: 1,
                postion: '用户注册协议',
                mark: 'agreement',
                title: ''
            },{
                id: 2,
                postion: '网站底部内容',
                mark: 'footer',
                title: ''
            },{
                id: 3,
                postion: '我们的服务',
                mark: 'my_service',
                title: '我们是您的学术辅导专家让易己辅导来搞定一切学术难题'
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


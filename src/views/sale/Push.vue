<template>
    <section class="ez-sale">

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
            <el-table :data="pushData" highlight-current-row v-loading="listLoading" style="width: 100%;">
                <el-table-column prop="id" label="ID" width="60">
                </el-table-column>
                <el-table-column prop="type" label="消息类型" width="100" sortable>
                </el-table-column>
                <el-table-column prop="state" label="发送状态" width="300" :formatter="formatState" sortable>
                </el-table-column>
                <el-table-column prop="content" label="发送内容" min-width="200" sortable>
                </el-table-column>
                <el-table-column prop="date" label="发送时间" width="180" sortable>
                </el-table-column>
                <el-table-column prop="Success" label="成功数" width="100" sortable>
                </el-table-column>
                <el-table-column prop="fail" label="失败数" width="100" sortable>
                </el-table-column>
                <el-table-column label="操作" width="100">
                    <template scope="scope">
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
                id: 1,
                type: '网页',
                state: 1,
                content: '小伙伴们Final Week我们来与你一起度过！现在开放下学期网课辅导预定，名额不多报名要快喔！',
                date: '2016-05-02 16:37:55',
                Success: 1,
                fail: 352
            },{
                id: 2,
                type: '网页',
                state: 1,
                content: '周末作业写不完怎么办？当然是找我们咯～现在下单折扣惊喜不断哟！',
                date: '2016-05-02 16:37:55',
                Success: 300,
                fail: 2
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


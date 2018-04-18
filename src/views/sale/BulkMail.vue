<template>
    <section class="ez-sale">

        <div class="container">
            <!--工具条-->
            <el-col :span="24" class="toolbar" style="padding-bottom: 0px;">
                <el-form :inline="true">
                    <el-form-item>
                        <el-input placeholder="邮件标题"></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-select v-model="state" placeholder="状态">
                            <el-option label="未发送" value="1"></el-option>
                            <el-option label="发送完成" value="2"></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" icon="el-icon-search">查询</el-button>
                        <el-button type="success" icon="el-icon-plus">添加</el-button>
                    </el-form-item>
                </el-form>
            </el-col>

            <!-- 列表 -->
            <el-table :data="pushData" highlight-current-row v-loading="listLoading" style="width: 100%;">
                <el-table-column type="selection" prop="id" width="50">
                </el-table-column>
                <el-table-column prop="id" width="30">
                </el-table-column>
                <el-table-column prop="title" label="邮件标题" min-width="200" sortable>
                </el-table-column>
                <el-table-column prop="type" label="群发类型" width="160" sortable>
                </el-table-column>
                <el-table-column prop="state" label="状态" width="100" :formatter="formatState" sortable>
                </el-table-column>
                <el-table-column prop="Success" label="成功数" width="100" sortable>
                </el-table-column>
                <el-table-column prop="fail" label="失败数" width="100" sortable>
                </el-table-column>
                <el-table-column prop="unsubscribe" label="退订数" width="100" sortable>
                </el-table-column>
                <el-table-column prop="date" label="添加时间" width="180" sortable>
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
                id: 3,
                title: 'EzEssay欢乐大放送',
                type: '按用户发送',
                state: 1,
                Success: 4,
                fail: 1,
                unsubscribe: 0,
                date: '2016-05-02 16:37:55'
            },{
                id: 2,
                title: '测试群发邮件',
                type: '按用户发送',
                state: 1,
                Success: 4,
                fail: 1,
                unsubscribe: 0,
                date: '2016-05-02 16:37:55'
            },{
                id: 1,
                title: '海平邮件群发测试（测试服务器）',
                type: '按用户发送',
                state: 1,
                Success: 4,
                fail: 1,
                unsubscribe: 0,
                date: '2016-05-02 16:37:55'
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


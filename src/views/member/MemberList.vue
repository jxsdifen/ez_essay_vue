<template>
    <section class="ez-member">
        <!--导航-->
        <el-breadcrumb separator="/">
            <el-breadcrumb-item :to="{ name: 'MemberList' }">会员管理</el-breadcrumb-item>
            <el-breadcrumb-item>会员列表</el-breadcrumb-item>
        </el-breadcrumb>

        <div class="container">
            <!--工具条-->
            <el-col :span="24" class="toolbar" style="padding-bottom: 0px;">
                <el-form :inline="true">
                    <el-form-item>
                        <el-input placeholder="邮箱/用户名/电话"></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-select v-model="state" placeholder="状态">
                            <el-option label="状态一" value="1"></el-option>
                            <el-option label="状态二" value="2"></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary">查询</el-button>
                    </el-form-item>
                </el-form>
            </el-col>

            <!-- 列表 -->
            <el-table :data="memberData" highlight-current-row v-loading="listLoading" style="width: 100%;">
                <el-table-column type="selection" width="55">
                </el-table-column>
                <el-table-column prop="id" label="ID" width="60">
                </el-table-column>
                <el-table-column prop="name" label="用户名" width="120" sortable>
                </el-table-column>
                <el-table-column prop="email" label="邮箱" width="160" sortable>
                </el-table-column>
                <el-table-column prop="tel" label="电话" width="160" sortable>
                </el-table-column>
                <el-table-column prop="country" label="所在国家" min-width="160" sortable>
                </el-table-column>
                <el-table-column prop="type" label="用户类型" width="100" sortable>
                </el-table-column>
                <el-table-column prop="state" label="状态" width="100" :formatter="formatState" sortable>
                    <!-- <template slot-scope="scope">
                        <span >{{scope.row.state}}</span>
                    </template> -->
                </el-table-column>
                <el-table-column prop="date" label="日期" width="200" sortable>
                </el-table-column>
                <el-table-column label="操作" width="200">
                    <template slot-scope="scope">
                        <el-button type="text" @click="handleEdit(scope.$index, scope.row)">修改</el-button><i class="gap"/><el-button type="text">添加订单</el-button><i class="gap"/><el-button type="text">订单</el-button>
                    </template>
                </el-table-column>
            </el-table>

            <!--工具条-->
            <el-col :span="24" class="pagination">
                <el-pagination background layout="prev, pager, next" @current-change="handleCurrentChange" :page-size="10" :total="total" style="float:right;"></el-pagination>
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
            memberData: [{
                id: 1,
                name: '王小虎',
                email: '180xxxxxx@qq.com',
                tel: '180xxxxxxxx',
                country: '中国',
                type: '微信',
                state: 1,
                date: '2016-05-02 16:37:55'
            }, {
                id: 2,
                name: 'Jack_1',
                email: '180xxxxxx@qq.com',
                tel: '136xxxxxxxx',
                country: '中国',
                type: '微信',
                state: 1,
                date: '2016-05-02 16:37:55'
            }, {
                id: 3,
                name: 'Jack_2',
                email: '180xxxxxx@qq.com',
                tel: '180xxxxxxxx',
                country: '中国',
                type: 'QQ',
                state: 0,
                date: '2016-05-02 16:37:55'
            }, {
                id: 4,
                name: 'Jack_3',
                email: '180xxxxxx@qq.com',
                tel: '180xxxxxxxx',
                country: '中国',
                type: '微信',
                state: 1,
                date: '2016-05-02 16:37:55'
            }, {
                id: 5,
                name: 'Jack_123',
                email: '180xxxxxx@qq.com',
                tel: '180xxxxxxxx',
                country: '中国',
                type: '微信',
                state: 0,
                date: '2016-05-02 16:37:55'
            }, {
                id: 6,
                name: '王小虎',
                email: '180xxxxxx@qq.com',
                tel: '180xxxxxxxx',
                country: '中国',
                type: '微信',
                state: 1,
                date: '2016-05-02 16:37:55'
            }, {
                id: 7,
                name: 'Jack_1',
                email: '180xxxxxx@qq.com',
                tel: '136xxxxxxxx',
                country: '中国',
                type: '微信',
                state: 1,
                date: '2016-05-02 16:37:55'
            }, {
                id: 8,
                name: 'Jack_2',
                email: '180xxxxxx@qq.com',
                tel: '180xxxxxxxx',
                country: '中国',
                type: 'QQ',
                state: 0,
                date: '2016-05-02 16:37:55'
            }, {
                id: 9,
                name: 'Jack_3',
                email: '180xxxxxx@qq.com',
                tel: '180xxxxxxxx',
                country: '中国',
                type: '微信',
                state: 1,
                date: '2016-05-02 16:37:55'
            }, {
                id: 10,
                name: 'Jack_123',
                email: '180xxxxxx@qq.com',
                tel: '180xxxxxxxx',
                country: '中国',
                type: '微信',
                state: 0,
                date: '2016-05-02 16:37:55'
            }, {
                id: 15,
                name: 'Jack_123',
                email: '180xxxxxx@qq.com',
                tel: '180xxxxxxxx',
                country: '中国',
                type: '微信',
                state: 0,
                date: '2016-05-02 16:37:55'
            }]
        }
    },
    methods: {
        //状态显示转换
        formatState: function (row, column) {
            return row.state == 1 ? '启用' : '未启用';
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
.ez-member{
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



<template>
    <section class="ez-ad">

        <div class="container">
            <!--工具条-->
            <el-col :span="24" class="toolbar" style="padding-bottom: 0px;">
                <el-form :inline="true">
                    <el-form-item>
                        <el-input placeholder="广告位置"></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" icon="el-icon-search">查询</el-button>
                        <el-button type="success" icon="el-icon-plus">添加</el-button>
                    </el-form-item>
                </el-form>
            </el-col>

            <!-- 列表 -->
            <el-table :data="AdData" highlight-current-row v-loading="listLoading" style="width: 100%;">
                <el-table-column prop="id" label="ID" width="80">
                </el-table-column>
                <el-table-column prop="postion" label="广告位置" width="200" sortable>
                </el-table-column>
                <el-table-column prop="mark" label="广告位标识" width="200" sortable>
                </el-table-column>
                <el-table-column prop="type" label="广告的类型" width="160" :formatter="formatState" sortable>
                </el-table-column>
                <el-table-column prop="date" label="添加时间" min-width="200" sortable>
                </el-table-column>
                <el-table-column label="操作" width="200">
                    <template slot-scope="scope">
                        <el-button type="text" @click="handleEdit(scope.$index, scope.row)">修改</el-button><i class="gap"/><el-button type="text">删除</el-button>
                    </template>
                </el-table-column>
            </el-table>
            <div class="footer-title">* 广告的类型: 1 代码,2 文字,3 单张图片, 4 Flash，5 幻灯片</div>

            <!--工具条-->
            <!-- <el-col :span="24" class="pagination">
                <el-pagination background layout="prev, pager, next" :page-size="20" :total="1000" style="float:right;"></el-pagination>
            </el-col> -->
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
                id: 6,
                postion: 'App上个的Banner广告',
                mark: 'agreement',
                type: 1,
                date: '2016-05-02 16:37:55'
            },{
                id: 5,
                postion: '网站首页顶部的文字',
                mark: 'home_top_ad',
                type: 1,
                date: '2016-05-02 16:37:55'
            },{
                id: 4,
                postion: '首页顶部四个广告位置',
                mark: 'home_top_slide',
                type: 5,
                date: '2016-05-02 16:37:55'
            },{
                id: 3,
                postion: '首页网站底部合作平台',
                mark: 'home_footer_partner',
                type: 5,
                date: '2016-05-02 16:37:55'
            }]
        }
    },
    methods: {
        //状态显示转换
        formatState: function (row, column) {
            let type = '';
            switch(row.type){
                case 1:type = '代码';break;
                case 2:type = '文字';break;
                case 3:type = '单张图片';break;
                case 4:type = 'Flash';break;
                case 5:type = '幻灯片';break;
                default:type = '未知';
            }
            return type;
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
.ez-ad{
    flex: 1;
    padding: 20px;
    background-color: #eff3f6;
    .container{
        padding: 20px;
        background-color: #fff;
    }
    .footer-title{
        margin-top: 20px;
    }
}
</style>


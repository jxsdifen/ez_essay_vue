<template>
    <!-- <el-container style="height:500px;border: 1px solid #eee">
        <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
            <el-menu :default-openeds="['1', '3']">
            <el-submenu index="1">
                <template slot="title"><i class="el-icon-message"></i>导航一</template>
                <el-menu-item-group>
                <template slot="title">分组一</template>
                <el-menu-item index="1-1">选项1</el-menu-item>
                <el-menu-item index="1-2">选项2</el-menu-item>
                </el-menu-item-group>
                <el-menu-item-group title="分组2">
                <el-menu-item index="1-3">选项3</el-menu-item>
                </el-menu-item-group>
                <el-submenu index="1-4">
                <template slot="title">选项4</template>
                <el-menu-item index="1-4-1">选项4-1</el-menu-item>
                </el-submenu>
            </el-submenu>
            <el-submenu index="2">
                <template slot="title"><i class="el-icon-menu"></i>导航二</template>
                <el-menu-item-group>
                <template slot="title">分组一</template>
                <el-menu-item index="2-1">选项1</el-menu-item>
                <el-menu-item index="2-2">选项2</el-menu-item>
                </el-menu-item-group>
                <el-menu-item-group title="分组2">
                <el-menu-item index="2-3">选项3</el-menu-item>
                </el-menu-item-group>
                <el-submenu index="2-4">
                <template slot="title">选项4</template>
                <el-menu-item index="2-4-1">选项4-1</el-menu-item>
                </el-submenu>
            </el-submenu>
            <el-submenu index="3">
                <template slot="title"><i class="el-icon-setting"></i>导航三</template>
                <el-menu-item-group>
                <template slot="title">分组一</template>
                <el-menu-item index="3-1">选项1</el-menu-item>
                <el-menu-item index="3-2">选项2</el-menu-item>
                </el-menu-item-group>
                <el-menu-item-group title="分组2">
                <el-menu-item index="3-3">选项3</el-menu-item>
                </el-menu-item-group>
                <el-submenu index="3-4">
                <template slot="title">选项4</template>
                <el-menu-item index="3-4-1">选项4-1</el-menu-item>
                </el-submenu>
            </el-submenu>
            </el-menu>
        </el-aside>
    
        <el-container>
            <el-header style="text-align: right; font-size: 12px">
                <span>王小虎</span>
            </el-header>
            
            <el-main>
                <el-table :data="tableData">
                    <el-table-column prop="date" label="日期" width="140">
                    </el-table-column>
                    <el-table-column prop="name" label="姓名" width="120">
                    </el-table-column>
                    <el-table-column prop="address" label="地址">
                    </el-table-column>
                </el-table>
                <div style="height:400px;">asdf</div>
                <div style="height:400px;">asdf</div>
            </el-main>
        </el-container>
    </el-container> -->
    <div class="tt-con">
        <div ref="tt" class="con-left">
            <div class="header">
                <span>王小虎</span>
            </div>

            <div class="main">
                <el-table :data="tableData">
                    <el-table-column prop="date" label="日期" width="140">
                    </el-table-column>
                    <el-table-column prop="name" label="姓名" width="120">
                    </el-table-column>
                    <el-table-column prop="address" label="地址">
                    </el-table-column>
                </el-table>
                <div style="height:400px;">asdf</div>
                <div style="height:400px;">asdf</div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            tableData: [],
        }
    },
    mounted(){
        // let win_h = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
        // let top = this.$refs.tt.getBoundingClientRect().top;
        // console.log(top)
        // console.log(win_h)
        // this.$refs.tt.style.height = (win_h-top-10) +'px';
    },
    methods: {
        
    }
}
</script>

<style lang="less" scoped>
.tt-con{
    // display: flex;
    // flex: 1;
    // overflow-y: auto;
    height: 100%;
}
.con-left{
    display: flex;
    flex: 1;
    flex-direction: column;
    width: 800px;
    height: 100%;
    .header{
        display: block;
        height: 100px;
        background: forestgreen;
        // padding: 0 20px;
    }
    .main{
        overflow: auto;
    }
}
</style>


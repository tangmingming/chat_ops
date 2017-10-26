<template>
    <div>
        <div class="head">top</div>
        <div class="below">
            <!--<div class="left">-->
                <!--<el-menu default-active="2" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose">-->
                  <!--<el-submenu index="1">-->
                    <!--<template slot="title"><i class="el-icon-message"></i>导航一</template>-->
                    <!--<el-menu-item-group>-->
                      <!--<template slot="title">分组一</template>-->
                      <!--<el-menu-item index="1-1">选项1</el-menu-item>-->
                      <!--<el-menu-item index="1-2">选项2</el-menu-item>-->
                    <!--</el-menu-item-group>-->
                    <!--<el-menu-item-group title="分组2">-->
                      <!--<el-menu-item index="1-3">选项3</el-menu-item>-->
                    <!--</el-menu-item-group>-->
                    <!--<el-submenu index="1-4">-->
                      <!--<template slot="title">选项4</template>-->
                      <!--<el-menu-item index="1-4-1">选项1</el-menu-item>-->
                    <!--</el-submenu>-->
                  <!--</el-submenu>-->
                  <!--<el-menu-item index="2"><i class="el-icon-menu"></i>导航二</el-menu-item>-->
                  <!--<el-menu-item index="3"><i class="el-icon-setting"></i>导航三</el-menu-item>-->
                <!--</el-menu>-->
            <!--</div>-->
            <div class="right">
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>

<style type="text/css">
    .head{
        height: 50px;
        background: red;
    }
    .below{
        width: 100%;
        position: absolute;
        top: 50px;
        bottom: 0px;
        left: 0px;
    }
    .left{
        float: left;
        width: 200px;
        background: #eef1f6;
        height: 100%;
    }
    .right{
        margin-left: 200px;
        height: 100%;
    }
</style>
<template>
  <el-container class="home-container">
    <!-- 头部区域 -->
    <el-header>
      <div>
        <img src="../assets/zty.jpg" alt style="width:58px; height:55px; padding-top:2px;" />
        <span>前端接口测试平台V1.0</span>
      </div>
    </el-header>
    <!-- 页面主体区域 -->
    <el-container>
      <!-- 侧边栏 -->
      <el-aside :width="isCollapse ? '64px' : '200px'">
        <div class="toggle-button" @click="toggleCollapse">|||</div>
        <!-- 侧边栏菜单区域 -->
        <el-menu background-color="#333744" text-color="#fff" active-text-color="#ffd04b" :collapse=isCollapse :collapse-transition="false" :router="true">
          <!-- 一级菜单 -->
          <el-submenu :index="item.id + ''" v-for="item in menulist" :key="item.id">
            <!-- 一级菜单的模板区域 -->
            <template slot="title">
              <!-- 图标 -->
              <i :class="iconsObj[item.id]"></i>
              <!-- 文本 -->
              <span>{{item.name}}</span>
            </template>

            <!-- 二级菜单 -->
            <el-menu-item :index="subitem.path" v-for="subitem in item.children" :key="subitem.id">
              <!-- 二级菜单的模板区域 -->
              <template slot="title">
                <!-- 图标 -->
                <i class="el-icon-menu"></i>
                <!-- 文本 -->
                <span>{{subitem.name}}</span>
              </template>
            </el-menu-item>
          </el-submenu>
        </el-menu>
      </el-aside>
      <!-- 右侧内容主体 -->
      <el-main>
        <!-- 路由占位符 -->
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>


<script>
export default {
  data() {
    return {
      //左侧菜单数据
      menulist: [
      { id: 1, name: "前端布局", children: [{ id: 101, name: "流式布局", path: '/percent'},{ id: 102, name: "rem布局", path: '/rem'},{ id: 103, name: "flex布局", path:'/flex'},{ id: 104, name: "响应式布局" ,path:'/responsive'}] }, 
      { id: 2, name: "接口测试", children: [{ id: 201, name: "Restful",path:'/restful'},{id: 202, name: "删",path:'/delete'},{id: 203, name:"改",path:'/modify'},{id:204,name:"查",path:'/view'}]}
      ],
      iconsObj: {
        '1' : 'el-icon-s-cooperation',
        '2' : 'el-icon-s-promotion'
      },
      //是否折叠
      isCollapse: false
    };
  },
  methods:{
    //点击按钮，切换菜单的折叠与展开
    toggleCollapse() {
      this.isCollapse = !this.isCollapse
    },
  }
};
</script>

<style lang="less" scoped>
.home-container {
  height: 100%;
}
.el-header {
  background-color: #373d41;
  display: flex;
  justify-content: space-between;
  padding-left: 2px;
  color: #fff;
  font-size: 20px;
  > div {
    display: flex;
    align-items: center;
    span {
      margin-left: 15px;
    }
  }
}
.el-aside {
  background-color: #333744;
  .el-menu {
    border-right: none;
  }
}
.el-main {
  background-color: #eaedf1;
}
.toggle-button {
  background-color: #4A5064;
  font-size: 10px;
  line-height: 24px;
  color: #fff;
  text-align: center;
  letter-spacing: 0.2em;
  cursor: pointer;
}
</style>
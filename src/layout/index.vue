<template>
  <div>
    <el-container>
      <el-header>
        <!-- 头部 -->
        <heads
          @collapse="isCollapse"
          @newhtml="newhtml"
          @changeScreen="changeScreen"
        ></heads>
      </el-header>
      <el-container>
        <!-- 左侧导航栏 -->
        <el-aside :width="!iscollapses ? '250px' : ''">
          <leftaside :iscollapse="iscollapses"></leftaside>
        </el-aside>
        <el-main>
          <tagsView></tagsView>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import screenfull from "screenfull";
import leftaside from "./leftAside.vue";
import tagsView from "./tagsView.vue";
import heads from "./head.vue";
export default {
  name: "VueIndex",
  components: { leftaside, heads, tagsView },
  data() {
    return {
      iscollapses: false,
    };
  },

  mounted() {
    this.$store.dispatch("user/setUserInfo");
  },

  methods: {
    // 侧边栏
    isCollapse(item) {
      console.log(item);
      this.iscollapses = item;
    },
    // 刷新
    newhtml() {
      location.reload([true]);
    },
    // 全屏切换
    changeScreen() {
      screenfull.toggle();
    },
  },
  watch: {
    $route: {
      handler(val) {
        this.$store.dispatch("user/setTags", val.meta);
      },
      immediate: true,
      deep: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.el-container {
  height: calc(100vh - 64px);
}
.el-header {
  height: 64px !important;
  padding: 0;
  background-color: rgb(66, 58, 187);
  color: white;
}

.el-aside {
  background-color: #d3dce6;
  color: #000;
}

.el-main {
  width: auto;
  padding: 0 20px;
  background-color: #e9eef3;
  color: #000;
}
</style>
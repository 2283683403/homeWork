<template>
  <div class="app">
    <!-- 左侧内容 -->
    <div class="left">
      <span class="head-name">
        <i class="el-icon-platform-eleme"></i>积云编程
      </span>
    </div>

    <!-- 右侧内容 -->
    <div class="right">
      <!-- 左 -->
      <div class="isclose">
        <!-- 侧边栏开关 -->
        <span @click="iscollapse">
          <i v-if="!isCollapse" class="el-icon-s-fold"></i>
          <i v-else class="el-icon-s-unfold"></i>
        </span>
        <!-- 刷新 -->
        <i
          style="margin-left: 1.4rem"
          class="el-icon-refresh-left"
          @click="newhtml"
        ></i>
      </div>
      <!-- 右 -->
      <div class="userInfo">
        <div class="users">
          <i class="el-icon-full-screen" @click="changeScreen"></i>
          <el-avatar :size="25" style="font-size: 6px">user</el-avatar>
          <el-dropdown @command="rightBtn">
            <span class="el-dropdown-link">
              {{ $store.getters.username
              }}<i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item command="1">修改密码</el-dropdown-item>
              <el-dropdown-item command="2">退出登录</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
      </div>

      <!-- 修改密码 -->
      <el-drawer
        title="修改密码"
        :visible.sync="table"
        direction="rtl"
        size="35%"
      >
      </el-drawer>
    </div>
  </div>
</template>

<script>
export default {
  name: "MyvueHead",

  data() {
    return {
      isCollapse: false,
      table: false,
    };
  },

  mounted() {},

  methods: {
    //  控制侧边栏
    iscollapse() {
      this.isCollapse = !this.isCollapse;
      this.$emit("collapse", this.isCollapse);
    },
    // 刷新页面
    newhtml() {
      this.$emit("newhtml");
    },
    // 全屏切换
    changeScreen() {
      this.$emit("changeScreen");
    },
    // 下拉框
    rightBtn(item) {
      if (item == 2) {
        this.handleGoOut();
      } else {
        this.handleModify();
      }
    },
    //退出登录
    async handleGoOut() {
      const res = await this.$store.dispatch("user/loginOut");
      console.log(res);
      if (res.status == 200) {
        this.$notify({
          title: "提示",
          message: res.data.data,
          type: "success",
        });
        this.$router.push("/login");
        return false;
      }
    },
    // 修改密码
    handleModify() {
      this.table = true;
    },
  },
};
</script>

<style lang="scss" scoped>
span {
  line-height: 0;
}
.app {
  display: flex;
  justify-content: space-between;
}
.left {
  width: 22%;
  .head-name {
    margin-left: 3.8rem;
    line-height: 4rem;
    color: white;
    font-size: 1.25rem;
    font-weight: 100;
  }
}
.right {
  width: 100%;
  line-height: 4rem;
  display: flex;
  justify-content: space-between;
  .isclose {
    cursor: pointer;
  }
  .userInfo {
    cursor: pointer;
    align-items: center;
    margin-right: 1.25rem;
    .users {
      height: 100%;
      .el-avatar {
        margin-left: 2.4rem;
        margin-right: 0.625rem;
        vertical-align: middle;
      }
      .el-dropdown {
        color: white;
      }
    }
  }
}
</style>
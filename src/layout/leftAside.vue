<template>
  <div class="app">
    <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      background-color="#fff"
      text-color="#000"
      :unique-opened="true"
      active-text-color="#87CEFA"
      :collapse="iscollapse"
      :collapse-transition="false"
      router
    >
      <leftAsideTwo
        v-for="(item, index) in $store.getters.menus"
        :key="index"
        :item="item"
      ></leftAsideTwo>
    </el-menu>
  </div>
</template>

<script>
import leftAsideTwo from "./leftAsideTwo.vue";
export default {
  name: "VueLeftAside",
  components: { leftAsideTwo },
  props: {
    iscollapse: {
      default: false,
    },
  },
  data() {
    return {};
  },

  mounted() {},

  methods: {},
};
</script>

<style lang="scss" scoped>
.el-menu {
  width: auto;
  height: 100vh;
  :deep(.el-submenu__title:hover) {
    background: #d5e7f3 !important;
  }
}
</style>
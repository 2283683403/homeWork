<template>
  <div>
    <template v-if="item && !item.child">
      <el-menu-item :index="item.desc">
        <i class="el-icon-menu"></i>
        <span slot="title">{{ item.name }}</span>
      </el-menu-item>
    </template>

    <template v-if="item && item.child">
      <el-submenu :index="item.icon">
        <template slot="title">
          <span>{{ item.name }}</span>
        </template>

        <el-menu-item
          :index="items.frontpath"
          v-for="(items, index) in item.child"
          :key="index"
        >
          {{ items.name }}
        </el-menu-item>
      </el-submenu>
    </template>
  </div>
</template>

<script>
export default {
  name: "MyvueLeftAsideTwo",
  props: {
    item: {
      type: Object,
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
</style>
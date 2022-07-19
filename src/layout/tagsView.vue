<template>
  <div>
    <!-- <el-tabs v-model="editableTabsValue" type="card" editable @tab-click="aa">
      <el-tab-pane
        :key="item.name"
        v-for="item in $store.getters.tags"
        :label="item.title"
        :name="item.path"
      >
      </el-tab-pane>
    </el-tabs> -->
  </div>
</template>

<script>
export default {
  name: "MyvueTagsView",

  data() {
    return {
      editableTabsValue: "",
    };
  },

  mounted() {},

  methods: {
    aa(item) {
      // console.log(item);
      // const paths = this.$store.getters.tags[item];
      // this.$router.push(paths.path);
    },
  },
};
</script>

<style lang="scss" scoped>
:deep(.is-top) {
  border: 1px solid transparent;
}
:deep(.el-tabs--card) {
  border: 1px solid transparent;
}
:deep(.el-tabs__item) {
  border-radius: 20px;
  background-color: white;
  margin-left: 10px;
}
</style>
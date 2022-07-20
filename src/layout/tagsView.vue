<template>
  <div class="app">
    <a
      class="tags"
      :class="$route.path == item.path ? 'active' : ''"
      v-for="(item, index) in tagsView"
      :key="index"
      @click="goTags(item.path)"
    >
      {{ item.title }}
      <i class="closeTags el-icon-close" @click.stop="delTags(index)"></i>
    </a>
  </div>
</template>

<script>
export default {
  name: "MyvueTagsView",

  data() {
    return {
      tagsView: [],
    };
  },

  mounted() {
    this.tagsView = this.$store.getters.tags;
  },

  methods: {
    goTags(item) {
      this.$router.push(item);
    },
    delTags(index) {
      this.$store.dispatch("user/delTag", index);
    },
  },
};
</script>

<style lang="scss" scoped>
.app {
  margin-bottom: 10px;
}
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

.tags {
  display: inline-block;
  height: 34px;
  line-height: 34px;
  background: #fff;
  margin-right: 10px;
  font-size: 14px;
  cursor: pointer;
  padding: 0 16px;
  border-radius: 6px;
  position: relative;
  .closeTags {
    position: absolute;
    right: 2px;
    top: 10px;
    display: none;
  }
  &.active {
    color: rgb(45, 102, 216);
    padding: 0 22px 0 16px;
    i {
      display: block;
    }
  }
}
.tags:hover {
  color: rgb(45, 102, 216);
  padding: 0 22px 0 16px;
  i {
    display: block;
  }
}
</style>
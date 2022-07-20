<template>
  <div>
    <div class="box1">
      <el-card
        class="box-card"
        shadow="hover"
        v-for="(item, index) in $store.getters.data1"
        :key="index"
      >
        <div slot="header" class="clearfix">
          <div class="headers">
            <span>{{ item.title }}</span>
            <el-tag :type="item.unitColor">{{ item.unit }}</el-tag>
          </div>
        </div>
        <animate-number
          class="s1"
          from="0"
          :to="item.subValue"
          :key="item.subValue"
        ></animate-number>
        <el-divider></el-divider>
        <div class="bottoms">
          <span style="font-size: 14px">{{ item.subTitle }}</span>
          <span style="font-size: 14px; float: right">{{ item.subValue }}</span>
        </div>
      </el-card>
    </div>
    <div class="box2">
      <el-card shadow="hover" v-for="(item, index) in anniu" :key="index">
        <div class="data">
          <i :class="item.icon" :style="{ color: item.color }"></i>
          <span>{{ item.title }}</span>
        </div>
      </el-card>
    </div>
    <div class="box3">
      <el-row :gutter="24">
        <!-- 左 -->
        <el-col :span="12">
          <el-card class="box-card" shadow="hover">
            <div slot="header" class="clearfix">
              <div class="headers">
                <span>订单统计</span>
                <div>
                  <span class="ss1">近一个月</span
                  ><span class="ss1">近一周</span
                  ><span class="ss1">近24小时</span>
                </div>
              </div>
            </div>
          </el-card>
        </el-col>
        <!-- 右 -->
        <el-col :span="12">
          <el-card shadow="hover"> 鼠标悬浮时显示 </el-card>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  name: "MyvueIndex",

  data() {
    return {
      anniu: [
        {
          title: "用户",
          icon: "el-icon-user",
          color: "green",
        },
        {
          title: "商品",
          icon: "el-icon-shopping-cart-2",
          color: "red",
        },
        {
          title: "订单",
          icon: "el-icon-tickets",
          color: "blue",
        },
        {
          title: "评价",
          icon: "el-icon-chat-dot-square",
          color: "orangered",
        },
        {
          title: "图库",
          icon: "el-icon-picture-outline",
          color: "blueviolet",
        },
        {
          title: "公告",
          icon: "el-icon-bell",
          color: "goldenrod",
        },
        {
          title: "配置",
          icon: "el-icon-set-up",
          color: "teal",
        },
        {
          title: "优惠券",
          icon: "el-icon-files",
          color: "lightseagreen",
        },
      ],
    };
  },

  mounted() {
    //获取数据
    this.$store.dispatch("home/setStatistics1");
  },

  methods: {},
};
</script>

<style lang="scss" scoped>
.box1 {
  width: 100%;
  display: flex;
  justify-content: space-between;
  .el-card {
    width: 23%;
    :deep(.el-card__header) {
      padding: 0.5rem !important;
      background-color: rgba(249, 250, 251);
      font-size: 14px;
      .headers {
        display: flex;
        justify-content: space-between;
        .el-tag {
          height: 24px;
          line-height: 24px;
          padding: 0 9px;
        }
      }
    }
    .s1 {
      font-size: 1.8rem;
      font-weight: 700;
      color: rgba(107, 114, 128);
    }
  }
}
.box2 {
  width: 100%;
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
  .el-card {
    width: 10%;
    .data {
      font-size: 0.875rem;
      text-align: center;
      span {
        display: block;
      }
    }
  }
}
.box3 {
  margin-top: 20px;
  .el-card {
    :deep(.el-card__header) {
      padding: 0.5rem !important;
      background-color: rgba(249, 250, 251);
      font-size: 14px;
      .headers {
        display: flex;
        justify-content: space-between;
        .ss1 {
          margin-left: 10px;
          display: inline-block;
          padding: 5px 10px;
          background-color: #e9e9eb;
          border-radius: 4px;
        }
      }
    }
  }
}
</style>
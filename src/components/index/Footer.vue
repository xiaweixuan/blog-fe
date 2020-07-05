<template>
  <div class="footer">
    <section class="title">
      <p>sanwix</p>
    </section>
    <section class="about">
      <div class="icon-contain">
        <i v-for="item in iconList" :key="item.name" :class="item.className"></i>
      </div>
    </section>
    <section class="record">
      <p>
        Copyright ©2020
        <a target="_blank" href="http://icp.chinaz.com/xiawx.top">冀ICP备19035413号</a>
      </p>
    </section>
  </div>
</template>

<script>
export default {
  name: "Footer",
  data() {
    return {
      iconList: [
        { name: "qq", className: "fa-3x fa fa-qq icon" },
        { name: "weixin", className: "fa-3x fa fa-weixin icon" },
        { name: "email", className: "fa-3x fa fa-twitter-square icon" },
        { name: "github", className: "fa-3x fa fa-github icon" }
      ]
    };
  },
  components: {}
};
</script>
<style lang="less" scoped>
@font-face {
  font-family: din-bold; //自定义字体名称
  src: url("../../assets/font/Spartwell.otf"); //注意引入正确位置
}
.footer {
  width: 85%;
  margin: auto;
  text-align: center;
  position: relative;
  padding: 65px 0 25px 0;
  .title {
    padding: 35px 0;
    p {
      font-family: din-bold;
      font-size: 55px;
      text-align: center;
    }
  }
  .about {
    padding: 15px 0 15px 0;
    .icon-contain {
      display: grid;
      grid-auto-flow: column;
      justify-content: center;
      grid-gap: 35px;
      cursor: pointer;
      color: rgb(153, 153, 153);
    }
  }
  .record {
    padding: 5px 0;
    color: rgb(73, 73, 73);
    p{
      text-align: center;
    }
    a {
      color: rgb(255, 71, 71);
    }
  }
}
</style>

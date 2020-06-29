<template>
  <div class="life">
    <section class="slogan">
      <p class="title">IT'S MY LIFE</p>
      <p class="content">I want to fill my life with a ray of sunshine</p>
    </section>
    <section class="main">
      <div class="contain">
        <div class="main-left">
          <div class="usr">介绍</div>
        </div>
        <div class="main-center">
          <ArticleCard synopsis="" title="" imgPath="" handle=""/>
          <ArticleCard synopsis="" title="" imgPath="" handle=""/>
        </div>
        <div class="main-right">
          <div class="usr">设置</div>
          <div class="usr">设置</div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import ArticleCard from '@/components/life/ArticleCard'
export default {
  name: "Life",
  data() {
    return {};
  },
  components: {ArticleCard},
  created() {},
  methods: {}
};
</script>

<style lang="less" scoped>
@font-face {
  font-family: rosell;
  src: url("../../assets/font/GoodMorning.ttf");
}
@font-face {
  font-family: ne;
  src: url("../../assets/font/SundayMorning.otf");
}
.life {
  overflow: hidden;
  .slogan {
    text-align: center;
    width: 85%;
    margin: auto;
    font-weight: bolder;

    .title {
      font-size: 40px;
      font-family: rosell;
      letter-spacing: 3pt;
      margin-bottom: 45px;
    }
    .content {
      font-family: ne;
      font-size: 34px;
      color: rgb(78, 78, 78);
    }
  }
  .main {
    margin-top: 35px;
    box-shadow: 0 0 50px 5px #cfcfcf;
    overflow: hidden;
    .contain {
      width: 85%;
      margin: auto;
      box-sizing: border-box;
      display: grid;
      grid-template-columns: 300px 1fr 300px;
      padding-top: 60px;
      grid-gap: 25px;
      div{
        padding: 5px;
        text-align: center;
      }
    }
  }
}
@media screen and (max-width: 425px) {
  //手机
  .life{
      .slogan{
    height: 380px;
      }
  }
}
@media screen and (min-width: 426px) {
  //pc
  .life{
      .slogan{
    height: 276px;
      }
  }
}
</style>
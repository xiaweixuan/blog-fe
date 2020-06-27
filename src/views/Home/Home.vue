<template>
  <div class="home">
    <section class="wel-bg">
      <BoxMoveAnimate height="500px" width='100%'/>
    </section>
    <section class="wel">
      <div class="contain">
        <p class="greet">Welcome</p>
        <p class="master">blog of <span class="name">sanwix</span></p>
        <p class="symbol">&lt;/&gt;</p>
        <p class="occupation">web 前端开发 工程师</p>
      </div>
    </section>
    <section class="blog-introduce">
      <!-- haha -->
    </section>
    <section></section>
    <section></section>
  </div>
</template>

<script>
import BoxMoveAnimate from "@/components/common/boxMoveAnimate";
export default {
  name: "Home",
  components: { BoxMoveAnimate }
};
</script>

<style lang="less" scoped>
.home {
  .wel-bg {
    height: 400px;
    width: 100%;
    position: absolute;
    top: 0;
    z-index: -1;
  }
  .wel {
    .contain {
      width: 55%;
      margin: auto;
      text-align: center;
      .greet {
        font-size: 50px;
        margin: 40px 0 35px 0;
        font-weight: bold;
      }
      .master {
        font-size: 30px;
        .name{
          color: #90acd1;
          cursor: pointer;
        }
      }
      .symbol,.occupation{
        color: rgb(150, 150, 150);
        font-size: 30px;
        margin-top: 30px;
      }
      .occupation{
        
      }
    }
  }
  .blog-introduce{
    margin-top: 35px;
    // box-shadow: 0 0 25px 5px grey;
    // height: 100px;
  }
}
</style>





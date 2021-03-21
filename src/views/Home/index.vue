<template>
  <div class="home">
    <section class="wel-bg">
      <BoxMoveAnimate height="500px" width="100%" />
    </section>
    <section class="wel">
      <div class="contain">
        <p class="greet">Welcome</p>
        <p class="master">
          blog of
          <span class="name">sanwix</span>
        </p>
        <p class="symbol">&lt;/&gt;</p>
        <p class="occupation">web 前端开发 工程师</p>
      </div>
    </section>
    <section class="blog-introduce">
      <p class="header">
        I’m delighted to make your acquaintance
      </p>
      <div class="contain">
        <TwoManAnimate width="400px" height="400px" />
        <div class="Copywriting">
          <p class="font-weight">Hi! Predestined You</p>
          <p>很高兴，你能来到我的主页</p>
          <p>
            <span class="identification">I'am xiaweixuan</span>
            前端开发工程师，热爱运动、音乐、绘画，喜欢尝试新鲜的事情，同时也是一名电影迷
          </p>
          <p>
            在这里，记录着我的生活、学习、工作中的点滴。卑辞俚语，不揣浅陋，博一笑尔
          </p>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import BoxMoveAnimate from "@/components/BoxMoveAnimate";
import TwoManAnimate from "@/components/TwoManAnimate";
import { mapState } from "vuex";
export default {
  name: "Home",
  components: { BoxMoveAnimate, TwoManAnimate },
  computed: {
    ...mapState(["adapter"])
  },
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
        .name {
          color: #90acd1;
          cursor: pointer;
        }
      }
      .symbol,
      .occupation {
        color: rgb(150, 150, 150);
        font-size: 30px;
        margin-top: 30px;
      }
      .occupation {
      }
    }
  }
  .blog-introduce {
    margin-top: 35px;
    box-shadow: 0 0 50px 5px rgb(207, 207, 207);
    overflow: hidden;
    .header {
      margin-top: 30px;
      text-align: center;
      font-size: 30px;
      color: #90acd1;
    }
    .contain {
      width: 75%;
      margin: 50px auto;
      text-align: center;
      .Copywriting {
        text-align: left;
        font-size: 24px;
        p {
          margin-bottom: 24px;
          line-height: 44px;
          .identification {
            color: #90acd1;
          }
        }
        .font-weight {
          font-size: 30px;
          font-weight: bold;
        }
      }
    }
  }
}
@media screen and (max-width: 425px) {
  //手机
  .wel {
    height: 347px;
  }
  .blog-introduce {
    p {
      text-align: center;
    }
  }
}
@media screen and (min-width: 426px) {
  //pc
  .wel {
    height: 276px;
  }
  .blog-introduce {
    .contain {
      display: grid;
      grid-template-columns: 40% 40%;
      grid-gap: 200px;
      align-items: center;
    }
  }
}
</style>

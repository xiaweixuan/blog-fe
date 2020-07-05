<template>
  <div class="articleDetail">
    <section class="slogan">
      <p class="title">IT'S MY LIFE</p>
      <p class="content">I want to fill my life with a ray of sunshine</p>
    </section>
    <section class="main">
      <div class="contain">
        <div class="main-center">
          <div v-html="content" class="article"></div>
        </div>
        <div v-if="type==='pc'" class="main-right">
          <MPlayer/>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import MPlayer from "@/components/life/MPlayer";
import { mapState } from "vuex";
import {getArticleDetail} from '@/api'


export default {
  name: "ArticleDetail",
  data() {
    return {
      content:`<h2>一篇文章</h2><p>他的世界沒有她，她的世界只有他。世界就是這樣，從來沒有公平可言。這是一場没有时限的角力战，誰在乎的越多，就輸的越慘。你会不会忽然的出现，在街角的咖啡店，我会带着笑脸，和你寒暄，不去说从前，只是寒暄，对你说一句，只是说一句，好久不见</p>`
    };
  },
    computed: {
    ...mapState(["type"]),
    showArticleList(){
      return this.searchCharacter?this.articleList.filter(item=>item.title.includes(this.searchCharacter)):this.articleList
    }
  },
  props: [],
  components: {MPlayer},
  created() {
    // console.log(this.$route.query.id)
     getArticleDetail(this.$route.query.id).then(res=>{
      console.log(res.result)
      this.content=res.result.data
    })
  },
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
.articleDetail {
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
  }
}
@media screen and (max-width: 425px) {
  //手机
  .articleDetail {
    .slogan {
      height: 380px;
    }
    .main {
      overflow: hidden;
      .contain {
        padding-top: 35px;
        width: 85%;
        margin: auto;
        box-sizing: border-box;
        .main-center {
          width: 100%;
        }
      }
    }
  }
}
@media screen and (min-width: 426px) {
  //pc
  .articleDetail {
    .slogan {
      height: 276px;
    }
    .main {
      .contain {
        width: 85%;
        margin: auto;
        box-sizing: border-box;
        display: grid;
        grid-template-columns: 1fr 300px;
        padding-top: 60px;
        grid-gap: 25px;
        div {
          padding: 5px;
          text-align: center;
        }
        // .main-right {
        //   .inside-contain {
        //     display: grid;
        //     grid-auto-flow: row;
        //     grid-gap: 35px;
        //   }
        // }
      }
    }
  }
}
</style>
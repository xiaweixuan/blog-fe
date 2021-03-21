<template>
  <div class="articleDetail">
    <section class="slogan">
      <p class="title">IT'S MY LIFE</p>
      <p class="content">I want to fill my life with a ray of sunshine</p>
    </section>
    <section class="main">
      <div class="contain">
        <div class="main-center">
          <img class="cover" :src="currentArticle && currentArticle.cover" />
          <div class="title">{{ currentArticle && currentArticle.title }}</div>
          <div class="synopsis">
            {{ currentArticle && currentArticle.synopsis }}
          </div>
          <div class="article">
            <Editor
              :config="{
                data:
                  currentArticle &&
                  this.convertToJson(currentArticle.json_content)
              }"
            />
          </div>
        </div>
        <div class="main-right">
          <MPlayer />
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Vue from "vue";
import { mapState, mapActions } from "vuex";
import Editor from "@/components/Editor";
import MPlayer from "@/components/MPlayer";
import { getArticleDetail } from "@/api";

export default {
  name: "ArticleDetail",
  data() {
    return {
      articleMsg: {
        title: "",
        data: "",
        imgPath: "",
        synopsis: ""
      },
      article_id: this.$router.currentRoute.params.id
    };
  },
  computed: {
    currentArticle() {
      return this.$store.state.article.byId[this.article_id];
    },
    showArticleList() {
      return this.searchCharacter
        ? this.articleList.filter(item =>
            item.title.includes(this.searchCharacter)
          )
        : this.articleList;
    }
  },
  components: { MPlayer, Editor },
  methods: {
    ...mapActions(["getArticles"]),
    convertToJson(str) {
      try {
        const json = JSON.parse(str);
        return json;
      } catch (error) {
        return { blocks: [] };
      }
    }
  },
  mounted() {
    this.getArticles();
  }
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
    .main-center {
      .cover {
        border-radius: 15px;
        width: 80%;
        margin-bottom: 25px;
      }
      .title {
        font-size: 24pt;
        font-weight: bold;
        margin-bottom: 5px;
      }

      .synopsis {
        font-size: 10pt;
        color: rgb(156, 156, 156);
        text-align: left;
      }
      .synopsis::before {
        content: "-- --";
      }
    }
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
      }
    }
  }
}
</style>

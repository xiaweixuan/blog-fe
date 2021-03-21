<template>
  <div class="life">
    <section class="slogan">
      <p class="title">IT'S MY life</p>
      <p class="content">I want to fill my life with a ray of sunshine</p>
    </section>
    <section class="main">
      <div class="contain">
        <div class="main-left">
          <UsrCard :usrMsg="user" />
        </div>
        <div class="main-center">
          <div v-if="showArticleList.length === 0" class="tips">
            什么也没有搜到欸~
          </div>
          <ArticleCard
            v-for="item in showArticleList"
            :key="item.id"
            :article="item"
            :handle="toArticleDetail"
          />
        </div>
        <div class="main-right">
          <div class="inside-contain">
            <SearchBox :handle="searchHandle" />
            <MPlayer :playList="audioList"/>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Vue from "vue";
import ArticleCard from "@/components/ArticleCard";
import SearchBox from "@/components/common/SearchBox";
import MPlayer from "@/components/MPlayer";
import UsrCard from "@/components/UsrCard";
import { mapState, mapGetters, mapActions } from "vuex";

export default {
  name: "life",
  data() {
    return {
      searchCharacter: ""
    };
  },
  computed: {
    ...mapState(["user"]),
    ...mapGetters(["lifeArticles", "audioList"]),
    showArticleList() {
      return this.searchCharacter
        ? this.lifeArticles.filter(item =>
            item.title.includes(this.searchCharacter)
          )
        : this.lifeArticles;
    }
  },
  components: { ArticleCard, SearchBox, MPlayer, UsrCard },
  methods: {
    ...mapActions(["getArticles", "getAudios"]),
    searchHandle(val) {
      this.searchCharacter = val;
    },
    toArticleDetail(id, e) {
      this.$router.push(`/articleDetail/${id}`);
    }
  },
  mounted() {
    this.getArticles();
    this.getAudios();
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
    .tips {
      color: rgb(104, 104, 104);
      font-size: 24px;
    }
  }
}
@media screen and (max-width: 425px) {
  //手机
  .life {
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
  .life {
    .slogan {
      height: 276px;
    }
    .main {
      .contain {
        width: 85%;
        margin: auto;
        box-sizing: border-box;
        display: grid;
        grid-template-columns: 20% 50% 20%;
        justify-content: space-between;
        padding-top: 60px;
        div {
          padding: 5px;
          text-align: center;
        }
        .main-right {
          .inside-contain {
            display: grid;
            grid-auto-flow: row;
            grid-gap: 35px;
          }
        }
      }
    }
  }
}
</style>

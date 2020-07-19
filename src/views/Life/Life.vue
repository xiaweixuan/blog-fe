<template>
  <div class="life">
    <section class="slogan">
      <p class="title">IT'S MY LIFE</p>
      <p class="content">I want to fill my life with a ray of sunshine</p>
    </section>
    <section class="main">
      <div class="contain">
        <div v-if="type==='pc'" class="main-left">
          <UsrCard :usrMsg="usrMsg" />
        </div>
        <div class="main-center">
          <div v-if="showArticleList.length===0" class="tips">
            什么也没有搜到欸~
          </div>
          <ArticleCard v-for="item in showArticleList" :key="item.open_id" :article="item" :handle="toArticleDetail" />
        </div>
        <div v-if="type==='pc'" class="main-right">
          <div class="inside-contain">
            <SearchBox :handle="searchHandle" />
            <MPlayer />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Vue from 'vue'
import ArticleCard from "@/components/life/ArticleCard";
import SearchBox from "@/components/life/SearchBox";
import MPlayer from "@/components/life/MPlayer";
import UsrCard from "@/components/life/UsrCard";
import { mapState } from "vuex";
import {getAllLifeArticle} from '@/api'
export default {
  name: "Life",
  data() {
    return {
      usrMsg: {
        imgPath: require("../../assets/test-img/2.jpg"),
        bName: "过时游戏",
        dName: ""
      },
      searchCard: {},
      articleList:[
        {
          id:1,
          imgPath:require("../../assets/test-img/2.jpg"),
          title:"一篇文章", 
          synopsis:"青春，如同一场盛大而华丽的戏，我们有着不同的假面，扮演着不同的角色，演绎着不同的经历，却有着相同的悲哀。"
        },
      ],
      searchCharacter:""
    };
  },
  computed: {
    ...mapState(["type"]),
    showArticleList(){
      return this.searchCharacter?this.articleList.filter(item=>item.title.includes(this.searchCharacter)):this.articleList
    }
  },
  components: { ArticleCard, SearchBox, MPlayer, UsrCard },
  created() {
    console.log(1)
    getAllLifeArticle().then(res=>{
      console.log(2)
      res.code===200 && (this.articleList=res.result.filter(item=>{
        item.imgPath=Vue.baseURL+'/'+item.imgPath
        return true
      }))
      
    })
   
  },
  methods: {
    searchHandle(val) {
      // console.log(val);
      this.searchCharacter=val
    },
    toArticleDetail(id,e){
      this.$router.push({name:'ArticleDetail',query: {id:id}})
    }
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
    .tips{
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
        grid-template-columns: 300px 1fr 300px;
        padding-top: 60px;
        grid-gap: 25px;
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
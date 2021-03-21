<template>
  <div class="articleCard">
    <img class="usr-img" :src="article.cover" @click="handle(article.id,$event)"/>
    <p class="usr-title" @click="handle(article.id,$event)">{{article.title}}</p>
    <p class="usr-synopsis">{{article.synopsis}}</p>
  </div>
</template>

<script>
export default {
  name: "ArticleCard",
  data() {
    return {};
  },

  props: ["article","handle"],
  computed: {
    // imgSrc() {
    //   return require("../../assets/test-img/2.jpg");
    // }
  },
  components: {},
  created() {
  },
  methods: {}
};
</script>

<style lang="less" scoped>
.articleCard {
  width: 100%;
  .usr-img {
    width: 100%;
    border-radius: 8px;
    margin-bottom: 15px;
    transition: all 0.5s ease-out;
    cursor: pointer;
  }
  .usr-img:hover {
    transform: scale(1.05);
  }
  .usr-title {
    font-size: 24px;
    text-align: left;
    color: black;
    font-weight: bolder;
    margin-bottom: 11px;
    cursor: pointer;
  }
  .usr-synopsis {
    font-size: 16px;
    text-align: left;
    color: rgb(151, 151, 151);
    margin-bottom: 45px;
  }
}
</style>
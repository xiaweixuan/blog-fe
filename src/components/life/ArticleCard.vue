<template>
  <div class="articleCard">
    <img class="usr-img" :src="imgSrc" />
    <p class="usr-title">一篇文章</p>
    <p class="usr-synopsis">青春，如同一场盛大而华丽的戏，我们有着不同的假面，扮演着不同的角色，演绎着不同的经历，却有着相同的悲哀。</p>
  </div>
</template>

<script>
export default {
  name: "ArticleCard",
  data() {
    return {};
  },

  props: ["imgPath", "title", "synopsis","handle"],
  computed: {
    imgSrc() {
      return require("../../assets/test-img/2.jpg");
    }
  },
  components: {},
  created() {},
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
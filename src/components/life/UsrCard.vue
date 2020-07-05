<template>
  <div class="usrCard">
    <img :src="usrMsg.imgPath" />
    <p>b站：{{usrMsg.bName}}</p>
    <p>抖音：{{usrMsg.dName}}</p>
  </div>
</template>

<script>
export default {
  name: "UsrCard",
  data() {
    return {};
  },

  props: ["usrMsg"],
  computed: {},
  components: {},
  created() {},
  methods: {}
};
</script>

<style lang="less" scoped>
.usrCard {
  transition: all 0.5s;
  img {
    margin-bottom: 15px;
    width: 80px;
    height: 80px;
    border-radius: 40px;
  }
  p {
    margin-bottom: 15px;
  }
}
.usrCard:hover {
  border: 2px solid #90acd1;
  transform: scale(1.05);
  border-radius: 12px;
}
</style>
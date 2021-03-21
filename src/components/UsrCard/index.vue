<template>
  <div class="usrCard">
    <img :src="usrMsg.imgPath || require('../../assets/test-img/2.jpg')" />
    <p><span class="blod">qq：</span>{{ usrMsg.qq }}</p>
    <p><span class="blod">weixin：</span>{{ usrMsg.weixin }}</p>
    <p><span class="blod">email：</span>{{ usrMsg.email }}</p>
  </div>
</template>

<script>
export default {
  name: "UsrCard",
  props: ["usrMsg"]
};
</script>

<style lang="less" scoped>
.blod {
  font-weight: bold;
}
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

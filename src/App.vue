<template>
  <div id="app">
    <Maske v-show="maske.show" />
    <Index />
  </div>
</template>
<script>
import Index from "@/views/index.vue";
import { mapActions, mapState } from "vuex";
import Maske from "@/components/index/Maske";
export default {
  name: "App",
  components: {
    Index,
    Maske
  },
  computed: {
    ...mapState(["maske"])
  },
  methods: {
    ...mapActions(["getEquipmentType"])
  },
  created() {
    this.getEquipmentType();
  }
};
</script>
<style lang='less'>
[v-cloak] {
  display: none;
}
/*清除样式*/

body,
ol,
ul,
dl,
li,
dt,
dd,
th,
td,
dl,
dd,
form,
fieldset,
legend,
input,
textarea,
select {
  margin: 0;
  padding: 0;
}
article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
menu,
nav,
section {
  display: block;
}

html,
body {
  height: 100%;
}

body {
  position: relative;
  font-size: 14px;
  font-family: Helvetica, Tahoma, Arial, "PingFang SC", "Hiragino Sans GB",
    "Heiti SC", "Microsoft YaHei", "WenQuanYi Micro Hei", sans-serif;
  background: #fff;
  color: #282828;
  -webkit-text-size-adjust: 100%;
  -webkit-tap-highlight-color: transparent;
}

a {
  color: #333;
  text-decoration: none;
  transition: color 0.2s ease-out;
}

a:hover {
  text-decoration: none;
}

em,
i {
  font-style: normal;
}

ol,
ul,
dl,
li,
dt,
dd {
  list-style: none;
}

img {
  border: 0;
  vertical-align: middle;
}

.boxShadow {
  box-shadow: 0 0 0.18rem 0 rgba(0, 0, 0, 0.1);
}

a img {
  border: 0;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}
input,
textarea {
  font-family: Helvetica, Tahoma, Arial, "PingFang SC", "Hiragino Sans GB",
    "Heiti SC", "Microsoft YaHei", "WenQuanYi Micro Hei", sans-serif;
  outline: none;
}

input,
textarea {
  -webkit-appearance: none;
  border-radius: 0;
  -webkit-border-radius: 0;
  -moz-border-radius: 0;
  outline: none;
  padding: 0px;
  margin: 0;
}
//文章样式
// p{
//   font-size: 18px;
//   line-height: 30px;
//   letter-spacing:5px;
//   // text-align: left;
//   text-indent: 46px;
// }
</style>

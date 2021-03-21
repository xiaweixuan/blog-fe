<template>
  <div id="app">
    <MaskBG v-show="isMaskShow" />
    <BasicLayout />
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import MaskBG from "@/components/Mask";
import BasicLayout from "@/layout/BasicLayout";
import { debounce } from "@/utils/utils";

export default {
  name: "App",
  components: {
    BasicLayout,
    MaskBG
  },
  computed: {
    ...mapState(["isMaskShow"])
  },
  methods: {
    ...mapActions(["getShowMode", "getUserMsg"])
  },
  mounted() {
    const { getShowMode, getUserMsg } = this;
    getShowMode();
    getUserMsg();
    window.onresize = debounce(getShowMode, 1000);
  }
};
const a = {
  markeds: [
    {
      seg: "home",
      start: 17,
      end: 21,
      grammar: ["superlative", "comparative"],
      article_id: "001",
      sen_orig: "The earth is our home",
      range: "17:21"
    }
  ]
};
</script>

<style lang="less">
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
</style>

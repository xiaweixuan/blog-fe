<template>
  <div class="searchBox">
    <input class="ipt" v-model="value" type="text" />
    <i class="fa-2x fa fa-search icon" @click="handle(value)"></i>
  </div>
</template>

<script>
export default {
  name: "SearchBox",
  data() {
    return {
      value:""
    };
  },

  props: [ "handle"],
  computed: {},
  components: {},
  created() {},
  methods: {}
};
</script>

<style lang="less" scoped>
.searchBox {
  overflow: hidden;
  position: relative;
  .ipt {
    border: 0;
    width: 10px;
    height: 2em;
    transition: all 0.5s;
    color: #ffffff;
  }
  .icon {
    color: #90acd1;
    position: relative;
    top: 3px;
    cursor: pointer;
  }
}
.searchBox:hover .ipt {
  color: grey;
  width: 150px;
  border: 2px solid #90acd1;
  border-radius: 8px;
  margin-right: 15px;
  padding-left: 5px;
}
</style>
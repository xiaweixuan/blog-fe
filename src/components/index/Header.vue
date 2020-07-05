<template>
  <div>
    <div v-if="type==='pc'" class="header-pc">
      <div class="logo">sanwix</div>
      <ul class="catalog">
        <li
          v-for="item in tabList"
          :key="item.name"
          :class="item.name===index.currentPage?'item item-active':'item'"
          @click="changePage($event,item)"
        >{{item.name}}</li>
      </ul>
    </div>
    <div v-if="type==='phone'" class="header-phone">
      <div class="logo">sanwix</div>
      <i class="fa-x fa fa-bars icon" @click="showTab"></i>
      <div class="catalog" :style="{
        'display':phone.showTab?'block':'none'
      }">
        <div class="tabs-contain">
          <ul class="tabs">
            <li
              v-for="item in tabList"
              :key="item.name"
              :class="item.name===index.currentPage?'item item-active':'item'"
              @click="changePage($event,item)"
            >{{item.name}}</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
export default {
  name: "Header",
  data() {
    return {
      tabList: [
        { name: "home", path: "/home" },
        {
          name: "blogs",
          path: "https://segmentfault.com/u/guoshiyouxi/articles"
        },
        { name: "life", path: "/life" },
        { name: "note", path: "https://note.xiawx.top" },
        { name: "photos", path: "/photos" },
        {
          name: "resume",
          path: "https://xiaweixuan.github.io/resume/index.pdf"
        },
        { name: "setting", path: "/setting" }
      ],
      phone: {
        showTab: false
      }
    };
  },
  computed: {
    ...mapState(["index", "type"])
  },
  components: {},
  methods: {
    ...mapMutations(["changeStatue"]),
    showTab() {
      this.phone.showTab = !this.phone.showTab;
    },
    changePage(e, pageName) {
      if (this.type === "phone") {
        this.phone.showTab = false;
      }
      console.log(pageName)
      switch (pageName.name) {
        case "blogs":
          window.open(pageName.path);
          return;
        case "note":
          window.open(pageName.path);
          return;
        case "resume":
          window.open(pageName.path);
          return;
        default:
          break;
      }
      // console.log(this)
      var pageState = this.index;
      pageState.currentPage = pageName.name;
      this.changeStatue({ name: "index", value: pageState });
      this.$router.push(pageName.path);
    }
  }
};
</script>
<style lang="less" scoped>
@font-face {
  font-family: din-bold; //自定义字体名称
  src: url("../../assets/font/Spartwell.otf"); //注意引入正确位置
}
.header-pc {
  width: 100%;
  box-sizing: border-box;
  display: grid;
  height: 150px;
  padding: 15px 35px;
  grid-template-columns: 260px 1fr 1fr;
  align-content: stretch;
  align-items: center;
  .logo {
    cursor: pointer;
    font-family: din-bold;
    font-size: 54px;
  }
  .catalog {
    display: grid;
    grid-auto-flow: column;
    cursor: pointer;
    align-content: stretch;
    align-items: center;
    grid-gap: 35px;
    font-size: 24px;
    color: rgb(70, 70, 70);
    .item-active {
      color: #90acd1;
    }
    .item:hover {
      color: #90acd1;
    }
  }
}
.header-phone {
  display: grid;
  grid-template-columns: 1fr 50px;
  padding: 5pt 15pt;
  align-items: center;
  justify-items: center;
  .logo {
    cursor: pointer;
    font-family: din-bold;
    font-size: 44px;
  }
  .catalog {
    display: none;
    position: fixed;
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    background-color: rgba(73, 73, 73, 0.9);
    z-index: 99;
    left: 0;
    top: 0;
    .tabs-contain {
      background-color: rgb(37, 37, 37);
      height: 100%;
      width: 80%;
      overflow: hidden;
      .tabs {
        display: grid;
        grid-auto-flow: row;
        color: rgb(255, 253, 247);
        font-size: 20px;
        align-items: center;
        .item {
          box-sizing: border-box;
          padding: 15px 25px;
        }
        .item:hover {
          background-color: rgb(59, 59, 59);
        }
        .item-active {
          background-color: rgb(59, 59, 59);
        }
      }
    }
  }
}
</style>

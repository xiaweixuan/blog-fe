<template>
  <div id="about">
    <div id="container">
      <div class="card-contain" v-for="(item, index) in talkdata"  :key="index">
        <div class="card">
          <img :src="item.imgsrc" />
          <p>{{item.content}}</p>
          <p>{{item.datetime}}</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Photos",
  data() {
    return {
      talkdata: [
        {
          imgsrc: require("../../assets/test-img/1.jpg"),
          content: "like sun",
          datetime: "2020.6.29"
        },
        {
          imgsrc: require("../../assets/test-img/2.jpg"),
          content: "It was clear yesterday",
          datetime: "2020.6.29"
        },
        {
          imgsrc: require("../../assets/test-img/3.png"),
          content: "balloon",
          datetime: "2020.6.29"
        },
        {
          imgsrc: require("../../assets/test-img/4.png"),
          content: "感到鸭力",
          datetime: "2020.6.29"
        },
        {
          imgsrc: require("../../assets/test-img/5.png"),
          content: "I like to be broad and traceless",
          datetime: "2020.6.29"
        },
        {
          imgsrc: require("../../assets/test-img/6.png"),
          content: "joker",
          datetime: "2020.6.29"
        },
        {
          imgsrc: require("../../assets/test-img/7.png"),
          content: "萤火之森",
          datetime: "2020.6.29"
        },
        {
          imgsrc: require("../../assets/test-img/8.png"),
          content: "Farewell to high school",
          datetime: "2020.6.29"
        },
        {
          imgsrc: require("../../assets/test-img/9.png"),
          content: "I think,I like you",
          datetime: "2020.6.29"
        }
        
      ]
    };
  },
  computed: {
    // Color() {
    //   return this.$store.state.Color
    // }
  },
  mounted() {}
};
</script>
<style lang="less" scoped>
#about {
  width: 90%;
  margin: 2rem auto;
  position: relative;
  transition: all 1s;
  #container {
    width: 100%;
    columns: 5;
    column-gap: 5px;
    .card-contain {
      padding: 15px;
      transition:all 0.5s ease-out;
      overflow: auto;
      height: 100%;
      .card {
        box-sizing: content-box;
        margin-bottom: 15px;
        width: 90%;
        background: #f2f2f2;
        position: relative;
        break-inside: avoid;
        padding: 0.6rem;
        border-radius: 15px;
        box-shadow: 0 0 10px 2px rgb(199, 199, 199);
        img {
          width: 100%;
          border-radius: 15px;
          margin-bottom: 5px;
        }
        p:nth-child(2) {
          color: orange;
          margin-bottom: 5px;
        }
        p:nth-child(3) {
          text-align: right;
          color: lightgreen;
        }
        p:nth-child(3)::before {
          content: "From--";
        }
      }
    }
    .card-contain:hover{
      transform:scale(1.1);
    }
  }
  @media screen and (max-width: 1500px) {
    #container {
      columns: 4;
    }
  }
  @media screen and (max-width: 1200px) {
    #container {
      columns: 3;
    }
  }
  @media screen and (max-width: 900px) {
    #container {
      columns: 2;
    }
  }
  header {
    padding-bottom: 2rem;
    position: relative;
    span:hover {
      color: lightblue;
    }
  }
}
</style>
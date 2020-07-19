<template>
  <div id="about">
    <div id="container">
      <div class="card-contain" v-for="(item, index) in talkdata" :key="index">
        <div class="card">
          <img :src="item.imgPath" @click="showImg(item)"/>
          <p>{{item.describe}}</p>
          <p>{{item.date}}</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Vue from 'vue'
import { getPhotos } from "@/api";
export default {
  name: "Photos",
  data() {
    return {
      talkdata: [
        {
          open_id:"",
          imgPath: "",
          describe: "",
          date: ""
        }
      ]
    };
  },
  created() {
    getPhotos().then(res => {
      res.code === 200 &&
        (this.talkdata = res.result.filter(item => {
          item.imgPath = Vue.baseURL + item.imgPath;
          return true;
        }));
    });
  },
  computed: {
    // Color() {
    //   return this.$store.state.Color
    // }
  },
  mounted() { 
  },
  methods: {
    showImg(item){
      // console.log(item.imgPath)
      window.open(item.imgPath);
    }
  },
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
      transition: all 0.5s ease-out;
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
    .card-contain:hover {
      transform: scale(1.1);
    }
  }
  // @media screen and (max-width: 1500px) {
  //   #container {
  //     columns: 4;
  //   }
  // }
  @media screen and (max-width: 1200px) {
    #container {
      columns: 3;
    }
  }
  @media screen and (max-width: 1000px) {
    #container {
      columns: 2;
    }
  }
  // @media screen and (max-width: 500px) {
  //   #container {
  //     columns: 1;
  //   }
  // }
  header {
    padding-bottom: 2rem;
    position: relative;
    span:hover {
      color: lightblue;
    }
  }
}
</style>
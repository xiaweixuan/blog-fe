<template>
  <div class="mPlay">
      <audio src="../../assets/video/onetwo.mp3" ref="audio" class="video" controls="controls" ></audio>
      <div class="title">onetwo</div>
      <div class="contain">
          <i @click="previous" class="fa-2x fa fa-backward icon"></i>
          <i @click="play"  :class="playing?'fa-2x fa fa-stop icon':'fa-2x fa fa-play icon'"></i>
          <i @click="next" class="fa-2x fa fa-forward icon"></i>
      </div>
  </div>
</template>

<script>
export default {
  name: "MPlayer",
  data() {
    return {
        playing:false
    };
  },

  props: [],
  computed: {},
  components: {},
  created() {},
  methods: {
      play(){
          let audio=this.$refs.audio
          this.playing=!this.playing
          this.playing?audio.play():audio.pause()
          
      },
      previous(){
          alert("目前只有一首哦~")
      },
      next(){
          alert("目前只有一首哦~")
      }
  },
  beforeDestroy() {
    this.playing=false  
  },

};
</script>

<style lang="less" scoped>
    .mPlay{
        border: 0;
        margin:10px;
        box-sizing: border-box;
        transition: all 0.5s;
        .video{
            display: none;
            // height: 0;
        }
        .title{
            color: rgb(133, 133, 133);
            font-weight: bolder;
            font-size: 24px;
            margin: 15px 0;
        }
        .contain{
            display: grid;
            grid-template-columns: 2em 1fr 2em;
            padding: 15px 25px;
            i{
                cursor: pointer;
            }
        }
    }
    .mPlay:hover{
        border: 2px solid #90acd1;
        border-radius: 12px;
        transform: scale(1.05);
    }
</style>
<template>
  <div class="button" @click="handle">
    <span class="word">{{title}}</span>
  </div>
</template>

<script>

export default {
  name: 'Button',
  data() {
      return {
          
      }
  },
  
  props:['title','handle'],
  components: {
  },
  created() {  
  },
  methods: {
  },
}
</script>

<style lang="less" scoped>
.button {
  transition: 0.5s all;
  display: inline-block;
  border-radius: 15px;
  border: 1px solid rgba(0, 0, 0, 0);
  cursor: pointer;
  padding: 5px 20px;
  color: rgb(255, 255, 255);
  .word {
    font-size: 20px;
  }
}
.button:hover {
  transform: translate(5px) scale(1.2);
}
</style>
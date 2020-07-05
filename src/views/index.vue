<template>
  <div class="index">
    
    <Header/>
    <keep-alive exclude="detail,profile">
      <router-view/>
    </keep-alive>
    <Footer/>
  </div>
</template>

<script>

import Header from '@/components/index/Header'
import Footer from '@/components/index/Footer'


export default {
  name: "Index",
  components: { Header,Footer},
  computed:{
    
  },
};
</script>

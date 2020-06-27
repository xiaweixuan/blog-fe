<template>
  <div class="index">
    <Maske v-show="maske.show"/>
    <Header/>
    <keep-alive exclude="detail,profile">
      <router-view/>
    </keep-alive>
    <Footer/>
  </div>
</template>

<script>
import Maske from "@/components/index/Maske";
import Header from '@/components/index/Header'
import Footer from '@/components/index/Footer'
import {mapState} from 'vuex'

export default {
  name: "Index",
  components: { Maske ,Header,Footer},
  computed:{
    ...mapState(['maske'])
  },
};
</script>

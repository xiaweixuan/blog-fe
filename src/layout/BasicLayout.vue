<template>
  <div>
    <Header />
    <keep-alive exclude="detail,profile">
      <router-view />
    </keep-alive>
    <Footer />
  </div>
</template>

<script>
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default {
  name: "BasicLayout",
  components: { Header, Footer }
};
</script>

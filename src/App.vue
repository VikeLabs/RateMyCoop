<template>
  <Navbar />
  <router-view />
  <Footer />
</template>

<script>
import Footer from "@/components/Footer.vue";
import Navbar from "@/components/Navbar.vue";

export default {
  name: "app",
  components: {
    Footer,
    Navbar,
  },
};
</script>

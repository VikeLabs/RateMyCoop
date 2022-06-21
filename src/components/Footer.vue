<template>
  <footer class="bg-dark fixed-bottom main-footer">
    <!-- Does not wrap -->
    <p>
      <router-link class="footer-link" :to="{ name: '', params: {} }"
        >About Us</router-link
      >
      <span class="spacer"></span>
      <router-link class="footer-link" :to="{ name: '', params: {} }"
        >Vikelabs</router-link
      >
      <span class="spacer"></span>
      <router-link class="footer-link" :to="{ name: '', params: {} }"
        >Github</router-link
      >
      <span class="spacer"></span>
      <router-link class="footer-link" to="/help"
        >Help</router-link
      >
    </p>
  </footer>
</template>

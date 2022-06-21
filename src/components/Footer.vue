<template>
  <footer class="bg-dark fixed-bottom main-footer">
    <!-- Does not wrap -->
    <p>
      <router-link class="footer-link" :to="{ name: '', params: {} }">About Us</router-link>
      <span class="spacer"></span>
      <router-link class="footer-link" :to="{ name: '', params: {} }">Vikelabs</router-link>
      <span class="spacer"></span>
      <router-link class="footer-link" :to="{ name: '', params: {} }">Github</router-link>
      <span class="spacer"></span>
      <router-link class="footer-link" to="/help">Help</router-link>
    </p>
  </footer>
</template>

<style scoped>
.main-footer {
  padding: 0.5em;
  padding-left: 1em;
  padding-right: 1em;
}
.spacer {
  color: #40484f;
  margin: 1.5em;
}
a.footer-link {
  color: #40484f;
  text-decoration: none;
  font-family: "Noto Sans";
  font-weight: 100;
}
a.footer-link:hover {
  color: white;
}
</style>

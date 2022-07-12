<template>
  <footer class="bg-dark fixed-bottom main-footer">
    <!-- Does not wrap -->
    <p>
      <router-link class="footer-link" :to="{ name: 'about' }">About Us</router-link>
      <span class="spacer"></span>
      <a class="footer-link" href="https://vikelabs.ca/">Vikelabs</a>
      <span class="spacer"></span>
      <a class="footer-link" href="https://github.com/VikeLabs/RateMyCoop">Github</a>
      <span class="spacer"></span>
      <router-link class="footer-link" :to="{ name: 'help' }">Help</router-link>
    </p>
  </footer>
</template>

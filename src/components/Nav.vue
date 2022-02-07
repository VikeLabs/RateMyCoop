<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container-fluid">
      <router-link class="navbar-brand" :to="{ name: '', params: {} }"
        >RateMyCoop</router-link
      >
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#nav-links"
        aria-controls="nav-links"
        aria-expanded="false"
        aria-label="Toggle the Navbar in mobile"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="nav-links">
        <ul>
          <li><router-link :to="{ name: '', params: {} }"></router-link></li>
          <li><router-link :to="{ name: '', params: {} }"></router-link></li>
          <li><router-link :to="{ name: '', params: {} }"></router-link></li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<!-- router-link is an <a> tag in disguise-->
<style scoped>
a.navbar-brand {
  color: white;
  text-decoration: none;
  font-weight: 500;
  font-size: 2em;
}
</style>

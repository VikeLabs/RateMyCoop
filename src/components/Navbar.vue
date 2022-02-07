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
        <ul class="navbar-nav ms-auto">
          <li class="nav-item ms-auto" id="search-item">
            <span class="tt">
              <router-link class="nav-link" :to="{ name: '', params: {} }"
                ><img
                  class="nav-btn"
                  src="@/assets/nav_assets/search.svg"
                  alt="Search"
                />
              </router-link>
            </span>
          </li>
          <li class="nav-item ms-auto" id="add-review-item">
            <span class="tt">
              <router-link class="nav-link" :to="{ name: '', params: {} }"
                ><img
                  class="nav-btn"
                  src="@/assets/nav_assets/add_review.svg"
                  alt="Add Review"
              /></router-link>
            </span>
          </li>
          <li class="nav-item ms-auto" id="profile-item">
            <span class="tt" data-bs-placement="bottom" title="Profile">
              <router-link class="nav-link" :to="{ name: '', params: {} }"
                ><img
                  class="nav-btn"
                  src="@/assets/nav_assets/profile.svg"
                  alt="Profile"
              /></router-link>
            </span>
          </li>
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
img.nav-btn {
  width: 4em;
}
ul.navbar-nav {
  align: right;
}
li.nav-item {
  margin-left: 0.5em;
  margin-right: 0.5em;
}
</style>

<script>
/*
import "bootstrap";
const tooltips = document.querySelectorAll(".tt");
tooltips.forEach((t) => {
  new bootstrap.Tooltip(t);
});
*/
</script>

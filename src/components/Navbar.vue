<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container-fluid">
      <router-link class="navbar-brand" to="/">RateMyCoop</router-link>
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
            <span>
              <router-link
                class="nav-link darken"
                :to="{ name: '', params: {} }"
                title="Search"
                ><p class="display-on-small nav-text" id="tooltip">Search</p>
                <img
                  class="nav-btn"
                  src="@/assets/nav_assets/search.svg"
                  alt="Search"
                />
              </router-link>
            </span>
          </li>
          <li class="nav-item ms-auto" id="add-review-item">
            <span>
              <router-link class="nav-link darken" to="/CreateReview" title="Add Review">
                <p class="display-on-small nav-text">Add Review</p>
                <img
                  class="nav-btn"
                  src="@/assets/nav_assets/add_review.svg"
                  alt="Add Review"
                />
              </router-link>
            </span>
          </li>
          <li class="nav-item ms-auto" id="profile-item">
            <span>
              <router-link
                class="nav-link darken"
                :to="{ name: '', params: {} }"
                title="Profile"
                ><p class="display-on-small nav-text">Profile</p>
                <img
                  class="nav-btn"
                  src="@/assets/nav_assets/profile.svg"
                  alt="Profile"
                />
              </router-link>
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
ul.navbar-nav {
  align: right;
}
p.nav-text {
  margin-right: 0.5em;
  font-size: 1.5em;
}
li.nav-item {
  margin-left: 0.5em;
  margin-right: 0.5em;
}
img.nav-btn {
  width: 4em;
  display: inline-block;
}
.darken:hover {
  opacity: 60%;
}
.darken:active {
  opacity: 55%;
}
@media (min-width: 992px) {
  .display-on-small {
    display: none;
  }
}
@media (max-width: 991px) {
  .display-on-small {
    display: inline-block;
  }
}
</style>

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

<template>
  <div id="app">
    <nav class="navbar" role="navigation" aria-label="main navigation">
        <div class="navbar-brand">
            <router-link to="/" class="navbar-item">
            <img src="./assets/img/logo@2x.png" class="logo"></router-link>

            <a role="button" class="navbar-burger burger" aria-label="manu" aria-expanded="false" v-on:click="showNav = !showNav" v-bind:class="{ 'is-active' : showNav }" data-target="navbarmenu">
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
            </a>
        </div>
        <div id="navbarmenu" class="navbar-menu" v-bind:class="{ 'is-active' : showNav }">
            <div class="navbar middle">
                <router-link to="/work" class="navbar-item">WORK </router-link>
                <router-link to="/about" class="navbar-item">ABOUT</router-link>
                <router-link to="/contact" class="navbar-item">CONTACT</router-link>
                <router-link to="/services" class="navbar-item">SERVICES</router-link>
            </div>

        </div>
    </nav>

    <router-view/>
 
  </div>
</template>

<script>

  export default{
  components : {
  
    }
  }

  document.addEventListener('DOMContentLoaded', () => {

  // Get all "navbar-burger" elements
  const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

  // Check if there are any navbar burgers
  if ($navbarBurgers.length > 0) {

    // Add a click event on each of them
    $navbarBurgers.forEach( el => {
      el.addEventListener('click', () => {

        // Get the target from the "data-target" attribute
        const target = el.dataset.target;
        const $target = document.getElementById(target);

        // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
        el.classList.toggle('is-active');
        $target.classList.toggle('is-active');

      });
    });
  }

});
</script>

<style scoped>
@import "./assets/scss/bulma.scss";
/* Header */

.middle {
    margin-left: 30%;
}

.navbar-item img {
    max-height: 3.75rem;
    margin-left: 9%;
}

.navbar-item{
  font-size: 16px;
  font-weight: 500;
}


</style>

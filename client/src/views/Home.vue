<template>
<div>
  <div class="square">
    <h1 class="title is-1">Quality Photography</h1>
     <router-link to="/contact"><div class="button is-large">HIRE US</div></router-link>
  </div>
  <section class="hero is-fullheight has-carousel">
      <div class="hero-carousel">
     <div class='has-background is-active'>
        <img class="is-background" src="https://res.cloudinary.com/drsayrtmp/image/upload/v1559057105/tejiri/landscape/clouds-cloudy-conifers-247478.jpg" alt="" />
      </div>
    <div class='has-background'>
      <img class="is-background" src="https://res.cloudinary.com/drsayrtmp/image/upload/v1559057100/tejiri/landscape/beach-bench-boardwalk-462024.jpg" alt="" />
    </div>
    <div class='has-background'>
      <img class="is-background" src="https://res.cloudinary.com/drsayrtmp/image/upload/v1559057100/tejiri/landscape/astronomy-beautiful-clouds-355465.jpg" alt="" />
    </div>
    <div class='has-background'>
      <img class="is-background" src="https://res.cloudinary.com/drsayrtmp/image/upload/v1559601684/tejiri/landscape/clouds-daylight-environment-811164.jpg" alt="" />
    </div>
  </div>
    </section>

    <div class="album">
    <h2 class="title">This is where the images will go</h2>
    <div class="images">


      
    </div>
    </div>
</div>
</template>

<script>
import bulmaCarousel from '../../node_modules/bulma-carousel/dist/js/bulma-carousel';
 export default {
    name: "home",
    components: {
   
    }
  }



//first set for the burger and click
function ready(handler) {
  if (/complete|loaded|interactive/.test(document.readyState) && document.body) {
    handler();
  } else {
    document.addEventListener('DOMContentLoaded', handler, false);
  }
}

var _clickEvents = ['click', 'touch'];

ready(function () {
  const burgers = document.querySelectorAll('.burger');
  [].forEach.call(burgers, burger => {
    _clickEvents.forEach(clickEvent => {
      burger.addEventListener(clickEvent, e => {
        e.preventDefault();

        const node = e.currentTarget;
        if (node) {
          node.classList.toggle('is-active');
          // Get the target from the "data-target" attribute
          let target = node.dataset.target;
          if (target) {
            const targetNode = document.querySelector(node.dataset.target);
            if (targetNode) {
              targetNode.classList.toggle('is-active');
            }
          }
        }
      });
    });
  });

  const menus = document.querySelectorAll('.menu');
  [].forEach.call(menus, menu => {
    // Open menu which contains the current active item
    let activeMenus = menu.querySelectorAll('.menu-item:not(.has-dropdown).is-active');
    [].forEach.call(activeMenus, (activeMenu) => {
      activeMenu = activeMenu.closest('.menu-item.has-dropdown');
      if (activeMenu) {
        activeMenu.classList.add('is-active');
      }
    });

    let dropdownMenus = menu.querySelectorAll('.menu-item.has-dropdown > .menu-title');
    [].forEach.call(dropdownMenus, (dropdownMenu) => {
      dropdownMenu.addEventListener('click', e => {
        e.preventDefault();
        let currentMenu = e.currentTarget;

        // Toggle current menu
        currentMenu.closest('.menu-item.has-dropdown').classList.toggle('is-active');

        // Close all other active menus
        let otherActiveMenus = menu.querySelectorAll('.menu-item.has-dropdown.is-active');
        [].forEach.call(otherActiveMenus, otherActiveMenu => {
          if (!currentMenu.isEqualNode(otherActiveMenu.querySelector('.menu-title'))) {
            otherActiveMenu.classList.remove('is-active');
          }
        });
      });
    });
  });

  let tabs = document.querySelectorAll('.tabs li a');
  [].forEach.call(tabs, tab => {
    if (window.location.hash) {
      let tabToShow = tab.closest('.tabs').querySelector('[href="' + window.location.hash + '"]');
      let tabContentToShow = document.querySelector(window.location.hash);
      if (tabToShow && tabContentToShow) {
        let tabToHide = tab.closest('.tabs').querySelector('li.is-active');
        if (tabToHide) {
          let tabToHideLink = tabToHide.querySelector('a');
          let tabContentToHide = document.querySelector(tabToHideLink.getAttribute('href'));
          if (tabContentToHide) {
            tabContentToHide.classList.remove('is-active');
          }
          tabToHideLink.classList.remove('is-active');
          tabToHide.classList.remove('is-active');
        }
        tabToShow.closest('li').classList.add('is-active');
        tabContentToShow.classList.add('is-active');
      }
    }

    _clickEvents.forEach(clickEvent => {
      tab.addEventListener(clickEvent, event => {
        event.preventDefault();
        const tab = event.currentTarget;

        let tabToHide = tab.closest('.tabs').querySelector('li.is-active');
        if (tabToHide) {
          let tabToHideLink = tabToHide.querySelector('a');
          let tabContentToHide = document.querySelector(tabToHideLink.getAttribute('href'));
          if (tabContentToHide) {
            tabContentToHide.classList.remove('is-active');
          }
          tabToHideLink.classList.remove('is-active');

          tabToHide.classList.remove('is-active');
        }
        tab.closest('li').classList.add('is-active');

        let tabContentToShow = document.querySelector(tab.getAttribute('href'));
        if (tabContentToShow) {
          tabContentToShow.classList.add('is-active');
        }
      });
    });
  });
});

/* Initialize all elements with carousel class. */
 ready(function () {
   bulmaCarousel.attach('.hero-carousel', {
    slidesToScroll: 1,
    slidesToShow: 1,
     pagination: false,
    effect: 'fade',
    loop: true
  });
 });
</script>

<style scoped>
@import '../assets/scss/bulma-carousel.min.css';

.square {
  display: flex; 
  position: absolute;
  border: 2px solid white;
  border-radius: 14px;
  margin-top: 4.5%;

  margin-left: 7%;
  height: 80%;
  width: 85%;
  z-index: 1;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  align-items: center;

 
}


.button, h1{
  color: white;
  background: none;
}

.album {
  display: flex;
  position: relative;
  top: 60px;
}
</style>
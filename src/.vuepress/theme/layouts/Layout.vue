<template>
  <div
    class="theme-container"
    :class="pageClasses"
    @touchstart="onTouchStart"
    @touchend="onTouchEnd"
  >
    <!-- <Navbar
      v-if="shouldShowNavbar"
      @toggle-sidebar="toggleSidebar"
    /> -->

    <div
      class="sidebar-mask"
      @click="toggleSidebar(false)"
    ></div>

    <!-- <Sidebar
      :items="sidebarItems"
      @toggle-sidebar="toggleSidebar"
    >
      <slot
        name="sidebar-top"
        slot="top"
      />
      <slot
        name="sidebar-bottom"
        slot="bottom"
      />
    </Sidebar> -->

    <Home v-if="$page.frontmatter.home"/>

    <Page
      v-else
      :sidebar-items="sidebarItems"
    >
      <slot
        name="page-top"
        slot="top"
      />
      <slot
        name="page-bottom"
        slot="bottom"
      />
    </Page>

    <div
      v-show="$page.frontmatter.particles"
      id="particles-js"
    ></div>

    <gamepad-api ref="gamepad"></gamepad-api>
  </div>
</template>

<script>
import Home from '@theme/components/Home.vue'
import Page from '@theme/components/Page.vue'
import { resolveSidebarItems } from '../util'

import { fromEvent } from 'rxjs';
import { debounceTime, map } from 'rxjs/operators';

import('./../util/gamepad');

const navigate = (direction) => {
  const btn = document.querySelector(`.${direction} a`);
  btn ? btn.click() : null;
};

const keyToDir = (keyCode) => {
  const prev = keyCode === 37 ? 'prev' : null;
  const next = keyCode === 39 ? 'next' : null;
  return prev || next;
}

export default {
  // components: { Home, Page, Sidebar, Navbar },
  components: { Home, Page },

  data () {
    return {
      isSidebarOpen: false
    }
  },

  computed: {
    shouldShowNavbar () {
      const { themeConfig } = this.$site
      const { frontmatter } = this.$page
      if (
        frontmatter.navbar === false
        || themeConfig.navbar === false) {
        return false
      }
      return (
        this.$title
        || themeConfig.logo
        || themeConfig.repo
        || themeConfig.nav
        || this.$themeLocaleConfig.nav
      )
    },

    shouldShowSidebar () {
      const { frontmatter } = this.$page
      return (
        !frontmatter.home
        && frontmatter.sidebar !== false
        && this.sidebarItems.length
      )
    },

    sidebarItems () {
      return resolveSidebarItems(
        this.$page,
        this.$page.regularPath,
        this.$site,
        this.$localePath
      )
    },

    pageClasses () {
      const userPageClass = this.$page.frontmatter.pageClass
      return [
        {
          'no-navbar': !this.shouldShowNavbar,
          'sidebar-open': this.isSidebarOpen,
          'no-sidebar': !this.shouldShowSidebar
        },
        userPageClass
      ]
    }
  },

  mounted () {
    this.$router.afterEach(() => {
      this.isSidebarOpen = false
    });

    // Navigate from gamepad (Nvidia Shield TV Remote)
    fromEvent(this.$refs.gamepad, 'button')
      .pipe(
        debounceTime(100),
        map(evt => evt.detail.button)
      )
      .subscribe(dir => navigate(dir));

    // Navigate from keyobard left/right
    fromEvent(document.body, 'keyup')
      .pipe(
        map(evt => evt.keyCode),
        map(key => keyToDir(key))
      )
      .subscribe(dir => navigate(dir));
    
    particlesJS.load('particles-js', '/particles/config.json', () => {
      console.log('callback - particles.js config loaded');
      document.querySelector('canvas')
        .addEventListener('click', evt => navigate('next'));
    });

    document.addEventListener('keyup', evt => {
      evt.keyCode === 80 ? this.loadParticles() : null;
    });
  },

  methods: {
    loadParticles () {
      particlesJS.load('particles-js', '/particles/config.json', () => {
        console.log('callback - particles.js config loaded');
      });
    },

    toggleSidebar (to) {
      this.isSidebarOpen = typeof to === 'boolean' ? to : !this.isSidebarOpen
    },

    // side swipe
    onTouchStart (e) {
      this.touchStart = {
        x: e.changedTouches[0].clientX,
        y: e.changedTouches[0].clientY
      }
    },

    onTouchEnd (e) {
      const dx = e.changedTouches[0].clientX - this.touchStart.x
      const dy = e.changedTouches[0].clientY - this.touchStart.y
      if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > 40) {
        if (dx > 0 && this.touchStart.x <= 80) {
          this.toggleSidebar(true)
        } else {
          this.toggleSidebar(false)
        }
      }
    }
  }
}
</script>

<style src="prismjs/themes/prism-tomorrow.css"></style>

<style lang="scss">
h1, p, ul {
  font-family: 'Avenir Next';
}
h1 {
  font-weight: 700;
  text-transform: uppercase;
}
p, ul {
  font-size: 1.3em;
}

iframe {
  border: 0;
}

#particles-js {
  position: fixed;
  z-index: 998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.cover,
.closing {
  text-align: center;
  position: relative;
  z-index: 999;
}

.cover {
  margin-top: 7.0em !important;

  h1 {
    font-size: 3.9em;
  }

  p {
    font-size: 1.3em;
  }
}

.closing {
  h1 {
    font-size: 6.0em;
  }

  li {
    font-size: 1.4em;
    list-style: none;
  }
}
</style>

<template>
    <div class="d-flex justify-content-between fixed-top header-wrapper">
      <div class="logo">
        <h1>
          <nuxt-link to="/">
            <img src="/logo.png" alt="uranus" class="u-logo">
          </nuxt-link>
        </h1>
      </div>
      <div class="">
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
          <button
            class="navbar-toggler"
            type="button"
            @click="toggleMenu"
            :aria-expanded="isExpanded"
            aria-controls="navbarNav"
            aria-label="Toggle navigation"
          >
            <span v-if="!isExpanded" class="navbar-toggler-icon"></span>
            <span v-else class="close-icon">&times;</span>
          </button>
          <div class="collapse navbar-collapse" :class="{ show: isExpanded }" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a href="#home" class="nav-link" @click.prevent="scrollTo('home')">Home</a>
              </li>
              <li class="nav-item">
                <a href="#experience" class="nav-link" @click.prevent="scrollTo('experience')">Experience</a>
              </li>
              <li class="nav-item">
                <a href="#project" class="nav-link" @click.prevent="scrollTo('project')">Project</a>
              </li>
              <li class="nav-item">
                <a href="#contact" class="nav-link" @click.prevent="scrollTo('contact')">Contact</a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
</template>

<script>
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  data() {
      return {
      isExpanded: false
      }
  },
  methods: {
      toggleMenu() {
      this.isExpanded = !this.isExpanded;
      },
      scrollTo: async function (sectionId) {
      const section = document.getElementById(sectionId);
        if (section) {
          section.scrollIntoView({ behavior: 'smooth' });
        } else {
          try {
            await this.$router.push({ path: '/', hash: `#${sectionId}` });
            this.$nextTick(() => {
              const el = document.getElementById(sectionId);
              if (el) {
                el.scrollIntoView({ behavior: 'smooth' });
              }
            });
          } catch (error) {
            console.error('Navigation error:', error);
          }
        }
      }

  }
})
</script>

<style scoped>
/* Custum Navigation
======================================================================= */
.navbar {
    padding: 10px 0 0 0;
    z-index: 1030;
    width: 100%;
}
.navbar-collapse.show {
    position: fixed;
    top: 64px;
    left: 0;
    right: 0;
    background-color: #343a40;
    height: calc(100% - 56px);
    overflow-y: auto;
}
.navbar-toggler {
    border: none;
    background-color: transparent;
    padding: 0.25rem 0.75rem;
    position: absolute;
    top: 10px;
    right: 22px;
    z-index: 1040;
}
.navbar-toggler:focus,
.navbar-toggler:active {
    outline: none;
    box-shadow: none;
}
.navbar-toggler-icon {
    background-image: url("data:image/svg+xml;charset=utf8,%3Csvg viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='rgba%28255, 255, 255, 0.5%29' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 7h22M4 15h22M4 23h22'/%3E%3C/svg%3E");
}
.navbar-nav .nav-link {
    padding-left: 1.35rem;
}
.nav-link {
    padding: 1.2rem 1rem;
}

@media (min-width: 1200px) {
    .navbar {
        margin-right: 20px;
    }

    .bg-dark {
        background-color: #00000000 !important;
    }
}

</style>

<template>
  <div>
    <header>
      <nav class="navbar navbar-expand-lg justify-content-between c-navbar-blue">
        <nuxt-link to="/" class="navbar-brand">
          <img src="https://avatars0.githubusercontent.com/u/22681157?v=4&size=30">
          &nbsp;
          Contributte
        </nuxt-link>
        <div>
          <ul class="navbar-nav">
            <nuxt-link tag="li" class="nav-item" :to="{path: '/packages'}" activeClass="active">
              <a class="nav-link">All packages</a>
            </nuxt-link>
            <nuxt-link tag="li" class="nav-item" :to="{path: '/team'}" activeClass="active">
              <a class="nav-link">About us</a>
            </nuxt-link>
          </ul>
        </div>
      </nav>
    </header>

    <main role="main">
      <div class="container d-flex">
        <div id="sidebar">
          <sidebar/>
        </div>
        <div id="content" class="flex-grow-1">
          <nuxt/>
        </div>
      </div>
    </main>

    <footer class="text-muted">
      <div class="container">
        <p class="float-right">
          <a href="#">Back to top</a>
        </p>
        <p>&copy; Made by Contributte folks. Powered by <a href="https://nuxtjs.org">Nuxt.js</a>.</p>
      </div>
    </footer>
  </div>
</template>

<script>
  import Sidebar from './../components/Sidebar';

  export default {
    components: {
      Sidebar
    }
  }
</script>

<style lang="scss">
  html {
    font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
    font-size: 16px;
    word-spacing: 1px;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    box-sizing: border-box;
  }

  *, *:before, *:after {
    box-sizing: border-box;
    margin: 0;
  }

  h1, h2, h3, h4, h5, h6 {
    color: #3765af;
    font-weight: 400;
  }

  h1 {
    font-size: 150%;
  }

  h2 {
    font-size: 140%;
  }

  h3 {
    font-size: 130%;
  }

  h4 {
    font-size: 120%;
  }

  h5 {
    font-size: 110%;
  }

  h6 {
    font-size: 100%;
  }

  p {
    line-height: 1.7;
    max-width: 50rem;
    padding: .8em 0 0;

  }

  .navbar {
    &.c-navbar-blue {
      background-color: #3765af;
    }

    a {
      color: #fff;
    }

    .navbar-nav {
      li {
        a {
          color: #cdcdcd;
        }
      }
      li.active {
        a {
          color: #fff;
        }
      }
    }

  }

  main {
    background-color: #f9f9f9;
    display: flex;
    align-items: stretch;

    #sidebar {
      min-width: 200px;
      max-width: 200px;
      margin: 20px 0 0 20px;

      h3 {
        font-size: 18px;
      }
    }

    #content {
      padding: 20px;
      width: 100%;
      background-color: #fff;
    }
  }

  footer {
    margin: 30px 0;
  }
</style>

<template>
  <nav>
    <div class="sidebar-group">
      <h3>Getting started</h3>
      <ul class="list-unstyled components">
        <li class="active">
          <nuxt-link to="/about">About</nuxt-link>
        </li>
      </ul>
    </div>
    <div class="sidebar-group">
      <h3>Packages</h3>
      <ul class="list-unstyled components">
        <li
          v-for="(repository) of repositories"
          :key="repository.name"
        >
          <nuxt-link :to="{name: 'packages-'+repository.name}" activeClass="active">{{ repository.name }}</nuxt-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
  import {getEnabledRepositories} from "../model/repositories";

  export default {
    data() {
      return {
        repositories: getEnabledRepositories()
      };
    }
  }
</script>

<style lang="scss">
  .sidebar-group {
    margin-bottom: 20px;

    ul {
      padding-left: 8px;
      li {
        a {
          border: none;
          color: #717171;
          display: block;
          font-size: 14px;
          padding: 4px 0;
          transition: color .3s;
        }

        a.active {
          color: #3765af;
        }
      }
    }
  }
</style>

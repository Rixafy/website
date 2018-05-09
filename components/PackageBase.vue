<template>
  <div class="package">
    <div v-html="$md.render(readme)"></div>
  </div>
</template>

<script>
  import highlightjs from 'highlight.js';

  export default {
    data: () => ({
      repository: null,
      readme: null,
    }),
    mounted() {
      this.$el.querySelectorAll('pre code').forEach(b => {
        highlightjs.highlightBlock(b);
      });
      this.$el.querySelectorAll('a').forEach(ahref => {
        ahref.onclick = (e) => {
          if (!e.target.hash) return;
          const hash = e.target.hash.substring(1);

          const anchor = document.getElementById('user-content-' + hash);
          if (anchor) {
            window.scrollTo(window.scrollX, anchor.getBoundingClientRect().top + window.scrollY)
          }
        };
      });
    }
  }
</script>

<style lang="scss">
  @import "highlight.js/styles/agate.css";

  table {
    padding: 0;
    tr {
      border-top: 1px solid #cccccc;
      background-color: white;
      margin: 0;
      padding: 0;
      th :first-child, td :first-child {
        margin-top: 0;
      }
      th :last-child, td :last-child {
        margin-bottom: 0;
      }
      th {
        font-weight: bold;
        border: 1px solid #cccccc;
        text-align: left;
        margin: 0;
        padding: 6px 13px;
      }
      td {
        border: 1px solid #cccccc;
        text-align: left;
        margin: 0;
        padding: 6px 13px;
      }
    }
    tr:nth-child(2n) {
      background-color: #f8f8f8;
    }
  }

  pre code {
    display: block;
    overflow-x: auto;
    padding: 0.5em;
    background: #cdcdcd;
    color: #000;
  }
</style>

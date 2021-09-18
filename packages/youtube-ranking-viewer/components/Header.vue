<template>
  <v-app-bar
    color="primary"
    class="app-bar"
    :height="height"
    fixed
    app>
    <v-toolbar-title>
      Youtube Ranking Viewer
    </v-toolbar-title>
  </v-app-bar>
</template>

<script>
  export default {
    name: 'Header',
    data () {
      return {
        height: this.HEADER_HEIGHT
      }
    }
  }
</script>
<template>
    <v-toolbar fixed app :clipped-left="clipped">
      <v-toolbar-side-icon @click.stop="drawer = !drawer" light></v-toolbar-side-icon>
      <v-toolbar-title v-text="AppTitle"></v-toolbar-title>
      <v-spacer></v-spacer>
    </v-toolbar>
</template>

<script>
  export default {
    name: 'top-bar',
    data: () => ({
      AppTitle: 'App Title',
      clipped: true,
      drawer: true
    })
  }
</script>
<template>
  <v-toolbar dense fixed clipped-left app height="100px" color="red">
    <h2>
      <router-link to="/">{{AppTitle}}</router-link>
    </h2>
  </v-toolbar>
</template>

<script>
  export default {
    name: 'top-bar',
    data: () => ({
      AppTitle: 'App Title'
    })
  }
</script>
<template>
    <v-footer :fixed="fixed" app>
      <span>&copy; 2017</span>
    </v-footer>
</template>

<script>
  export default {
    name: 'appFooter',
    data: () => ({
      fixed: true
    })
  }
</script>
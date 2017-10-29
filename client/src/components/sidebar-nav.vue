<template>
  <v-navigation-drawer permanent clipped-left app clipped enable-resize-watcher>
    <v-list dense>
      <v-layout row align-center>
            <v-flex xs6>
              <v-subheader>
                Clients
              </v-subheader>
            </v-flex>
            <v-flex xs6 class="text-xs-center">
              <router-link to="/clients">Clients</router-link>
            </v-flex>
          </v-layout>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
  export default {
    name: 'sidebar-nav',
    data: () => ({
    })
  }
</script>

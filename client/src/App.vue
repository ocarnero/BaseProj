<template>
    <v-app dark>
      <sidebarNav/>
      <topBar/>
      <main>
        <v-content>
          <v-container fluid>
            <v-layout row wrap>
              <v-flex xs12>
                <v-card dark >
                  <v-card-title class="px-0">Page Title</v-card-title>
                  <v-card-text class="px-0">Subtitle</v-card-text>
                </v-card>
              </v-flex>
            </v-layout>
            <router-view/>
          </v-container>
        </v-content>
      </main>
      <appFooter/>
  </v-app>
</template>

<script>
  import topBar from './components/top-bar.vue'
  import sidebarNav from './components/sidebar-nav.vue'
  import appFooter from './components/footer.vue'

  export default {
    name: 'app',
    components: {
      topBar, sidebarNav, appFooter
    },
    data: () => ({

    })
  }
</script>

<style>

</style>

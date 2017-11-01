<template>
  <v-app dark>
    <sidebarNav/>
    <topBar/>
    <main>
      <v-content>
        <v-container fluid>
          <v-slide-y-transition mode="out-in">
            <v-layout column align-center >
              <router-view/>
            </v-layout>
          </v-slide-y-transition>
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
    data () {
      return {
      }
    }
  }
</script>
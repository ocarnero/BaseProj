<template>
    <v-navigation-drawer
      persistent
      :mini-variant="miniVariant"
      :clipped="clipped"
      v-model="drawer"
      enable-resize-watcher
      app>
      <v-list>
        <v-list-tile>
          <v-list-tile-content>
            <v-list-tile-title>Menu</v-list-tile-title>
            <router-link
              value="true"
              v-for="(item, i) in items"
              :key="i"
              :to="item.route">{{item.title}}</router-link>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
</template>

<script>
  export default {
    name: 'sidebar-nav',
    data: () => ({
      clipped: true,
      miniVariant: false,
      drawer: true,
      items: [
          { icon: 'bubble_chart', title: 'Home', route: '/' },
          { icon: 'bubble_chart', title: 'Clients', route: '/clients' }
      ]
    })
  }
</script>

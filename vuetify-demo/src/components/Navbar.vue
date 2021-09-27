<template>
  <nav>
    <v-app-bar text app>
      <v-app-bar-nav-icon
        class="grey--text"
        @click="drawer = !drawer"
      ></v-app-bar-nav-icon>
      <v-toolbar-title class="text-uppercase grey--text">
        <span class="font-weight-light">Todo</span>
        <span>Ninjaagit</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn text color="grey">
        <span>Sign Out</span>
        <v-icon right>idm-email</v-icon>
      </v-btn>
    </v-app-bar>

    <v-navigation-drawer app v-model="drawer" class="indigo">
      <v-row justify="center">
        <v-col class="mt-5 text-center"  >
          <v-avatar size="100" class="ma-5">
            <img src="/pic.jpg" />
          </v-avatar>
        </v-col>
        <popup/>
      </v-row>

      <v-list>
        <v-list-item
          v-for="link in links"
          :key="link.text"
          router
          :to="link.route"
        >
          <v-list-item-action>
            <v-icon>{{ link.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>{{ link.text }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </nav>
</template>

<script>

import Popup from './Popup.vue';
export default {
  components:{
    Popup
  
  },
  data() {
    return {
      drawer: false,
      links: [
        { icon: "idm-email", text: "Dashboard", route: "/" },
        { icon: "idm-email", text: "Projects", route: "/projects" },
        { icon: "idm-email", text: "Team", route: "/team" },
         { icon: "idm-email", text: "My project ", route: "/myprojects" },
      ],
    };
  },
};
</script>

<style></style>

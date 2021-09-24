<template>
  <v-app>
    <navbar></navbar>
    <v-content class="mx-4">
      
      <router-view></router-view>
    </v-content>


  </v-app>
</template>

<script>
import Navbar from './components/Navbar.vue';
// import HelloWorld from './components/HelloWorld';

export default {
  name: 'App',

  components: {
    Navbar
   
  },

  data: () => ({
    //
  }),
};
</script>

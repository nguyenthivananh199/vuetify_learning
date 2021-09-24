<template>
  <div>
    <h1>Team</h1>
    <v-container>
      <v-row>
        <v-col
          cols="12"
          sm="6"
          md="4"
          lg="3"
          v-for="person in team"
          :key="person.name"
        >
          <v-card class="text-center ma-3">
            <v-responsive class="pt-4">
              <v-avatar size="100">
                <img src="/pic.jpg" />
              </v-avatar>
            </v-responsive>
            <v-card-text>
              <div class=" text-subtitle-1 ">{{ person.name }}</div>
              <div class="grey--text">{{ person.role }}</div>
            </v-card-text>
            <v-card-actions class="justify-center">
              <v-btn depressed class="grey--text">
                <v-icon small left> mdi-message </v-icon>
                <span>Message</span>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      team: [
        { name: "The Net Ninja", role: "Web developer" },
        { name: "Ryu", role: "Graphic designer" },
        { name: "Chun Li", role: "Web developer" },
        { name: "Gouken", role: "Social media maverick" },
        { name: "Yoshi", role: "Sales guru" },
      ],
    };
  },
};
</script>

<style></style>

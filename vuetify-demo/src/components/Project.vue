<template>
  <div>
    <v-subheader class=" grey--text">Project</v-subheader>
    <v-container class="my-5">
      <v-row>
        <v-col sm="12" md="6">
          <v-btn block color="red"></v-btn>
        </v-col>
        <v-col sm="12" md="6">
          <v-btn block color="red"></v-btn>
        </v-col>
      </v-row>
      <v-row class="justify-end">
        <v-col sm="12" md="3">
          <v-btn block color="red"></v-btn>
        </v-col>
        <v-col sm="12" md="3">
          <v-btn block color="red"></v-btn>
        </v-col>
        <v-col sm="12" md="3">
          <v-btn block color="red"></v-btn>
        </v-col>
      </v-row>
    </v-container>
    <v-container class="my-5">
      <v-tooltip top>
        <template v-slot:activator="{on}">
          <v-btn class="my-5" flat small color="gray" @click="sortBy('title')" v-on="on"
            >Sort by title</v-btn
          >
        </template>
        <span>Sorts projects by name</span>
      </v-tooltip>

      <v-card flat v-for="item in projects" :key="item.title">
        <v-row :class="`pl-3 project ${item.status}`">
          <v-col cols="12" md="6">
            <div class="caption grey--text">Project Title</div>
            <div>{{ item.title }}</div>
          </v-col>
          <v-col>
            <div class="caption grey--text">Person</div>
            <div>{{ item.person }}</div>
          </v-col>
          <v-col>
            <div class="caption grey--text">Due Date</div>
            <div>{{ item.due }}</div>
          </v-col>
          <v-col>
            <div class="caption grey--text">Status</div>
            <div>
              <v-chip :class="` ${item.status} white--text`">
                {{ item.status }}
              </v-chip>
            </div>
          </v-col>
        </v-row>
      </v-card>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      projects: [
        {
          title: "Design a new website",
          person: "The Net Ninja",
          due: "1st Jan 2019",
          status: "ongoing",
          content:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!",
        },
        {
          title: "Code up the homepage",
          person: "Chun Li",
          due: "10th Jan 2019",
          status: "complete",
          content:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!",
        },
        {
          title: "Design video thumbnails",
          person: "Ryu",
          due: "20th Dec 2018",
          status: "complete",
          content:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!",
        },
        {
          title: "Create a community forum",
          person: "Gouken",
          due: "20th Oct 2018",
          status: "overdue",
          content:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!",
        },
      ],
    };
  },
  methods: {
    sortBy(prop) {
      this.projects.sort((a, b) => (a[prop] < b[prop] ? -1 : 1));
    },
  },
};
</script>

<style>
.project.ongoing {
  border-left: 4px solid red;
}
.project.overdue {
  border-left: 4px solid forestgreen;
}
.project.complete {
  border-left: 4px solid orange;
}
.v-chip.complete {
  background: #26de81 !important;
}
</style>

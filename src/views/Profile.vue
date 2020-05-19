<template>
  <div class="profile">
    <h1>{{ message }}</h1>
    <p>{{ user.first_name }} {{ user.last_name }}</p>
    <p>Your Rooms</p>
    <div v-for="room in user.rooms">
      <!-- <p>{{ room.id }}</p> -->
      <h4>
        <a v-bind:href="`/rooms/${room.id}`">{{ room.name }}</a>
      </h4>
    </div>
  </div>
</template>

<style></style>

<script>
import axios from "axios";

export default {
  data: function() {
    return {
      message: "Welcome to your profile",
      user: {},
      rooms: [],
    };
  },

  created: function() {
    this.showUser();
  },

  // this.$route.params.id

  methods: {
    showUser: function() {
      axios.get("/api/users/" + 1).then(response => {
        console.log("Get one user: ", response);
        this.user = response.data;
      });
    },
  },
};
</script>

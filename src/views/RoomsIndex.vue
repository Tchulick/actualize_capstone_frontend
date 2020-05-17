<template>
  <div class="roomsIndex">
    <h1>{{ message }}</h1>
    <div v-for="room in rooms">
      <h1>{{ room.name }}</h1>
      <button>Go to room</button>
    </div>
    <!-- <form v-on:submit.prevent="submit()"> -->
    <!-- <a v-bind:href="`/posts/${this.post.id}/edit`">Edit Blog</a> -->

    <!-- <button v-on:click>Create New Room</button> -->
    <!-- <a v-bind:href="`/api/room/${this.room.id}`">Join Room</a> -->
  </div>
</template>

<style></style>

<script>
import axios from "axios";

export default {
  data: function() {
    return {
      message: "All Rooms",
      rooms: [],
    };
  },
  created: function() {
    axios.get("/api/rooms").then(response => {
      this.rooms = response.data;
      console.log(response);
    });
  },
  methods: {},
};
</script>

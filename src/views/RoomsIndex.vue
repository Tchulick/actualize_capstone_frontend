<template>
  <div class="roomsIndex">
    <h1>{{ message }}</h1>
    <div v-for="room in rooms">
      <h1>{{ room.name }}</h1>
      <button>Go to room</button>
    </div>
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

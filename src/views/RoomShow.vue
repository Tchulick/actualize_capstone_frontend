<template>
  <div>
    <h1>{{ room.name }}</h1>
    <div>Video Goes Here</div>
    <div v-for="user in room.room_users">
      <h6>{{ user }}</h6>
    </div>
    <a v-bind:href="`/rooms/${this.$route.params.id}/edit`">Edit Room</a>
  </div>
</template>

<style></style>

<script>
import axios from "axios";

export default {
  data: function() {
    return {
      room: {},
      users: [],
    };
  },
  created: function() {
    this.showRoom();
  },
  methods: {
    showRoom: function() {
      axios.get("/api/rooms/" + this.$route.params.id).then(response => {
        console.log("Room: ", response);
        this.room = response.data;
      });
    },
  },
};
</script>

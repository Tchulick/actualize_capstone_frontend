<template>
  <div>
    <h1>{{ room.name }}</h1>
    <!-- <div>Video Goes Here</div> -->
    <div
      id="videos-container"
      style="margin: 20px 0; -webkit-transform: scaleX(-1);
  transform: scaleX(-1);"
    ></div>
    <div v-for="room in room.room_users">
      <h6>{{ room.user_id }}</h6>
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
    this.showUsers();
  },
  mounted: function() {
    var connection = new RTCMultiConnection();

    // this line is VERY_important
    connection.socketURL = "https://rtcmulticonnection.herokuapp.com:443/";

    // if you want audio+video conferencing
    connection.session = {
      audio: true,
      video: true,
    };
    connection.videosContainer = document.getElementById("videos-container");
    connection.openOrJoin("your-room-id");
  },
  methods: {
    showUsers: function() {
      axios.get("/api/users").then(response => {
        console.log("User: ", response);
        this.users = response.data;
      });
    },
    showRoom: function() {
      axios.get("/api/rooms/" + this.$route.params.id).then(response => {
        console.log("Room: ", response);
        this.room = response.data;
      });
    },
  },
};
</script>

<template>
  <div class="roomsIndex">
    <h1>{{ message }}</h1>
    <div v-for="room in rooms">
      <p>-------</p>
      <h1>{{ room.name }}</h1>
      <p>{{ room.room_id }}</p>
      <div>
        <h4><a v-bind:href="`/rooms/${room.room_id}`">Go to room</a></h4>
      </div>
      <div>
        <h4><a v-on:click="joinUserRoom()">Join Room</a></h4>
      </div>
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
      currentRoom: {},
      user: {},
      userId: "",
      room_id: "",
      room: "",
    };
  },
  created: function() {
    axios.get("/api/rooms").then(response => {
      this.rooms = response.data;
      console.log("Rooms: ", response);
    });
  },
  methods: {
    joinUserRoom: function() {
      var params = {
        user_id: this.current_user,
        room_id: this.room.room_id,
      };
      axios.post("/api/user_rooms", params).then(response => {
        this.$router.push("/rooms");
        console.log(response);
      });
    },
  },
};
</script>

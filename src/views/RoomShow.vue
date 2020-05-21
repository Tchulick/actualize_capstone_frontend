<template>
  <div class="room">
    <div>
      <div
        id="videos-container"
        style="margin: 20px 0; -webkit-transform: scaleX(-1);
  transform: scaleX(-1);"
      ></div>
      <!-- <iframe src="192.168.0.124:9001/demos/" title="RTC Multi Connection"></iframe> -->
    </div>
    <div style="text-align: center;">
      <h1 style="font-size: 3em; ">{{ room.name }}</h1>

      <!-- <div v-for="room in room.room_users">
        <h6>{{ room.user_id }}</h6>
      </div> -->
      <div v-for="person in peopleInRoom">
        {{ person }}
      </div>
      <div>
        <input type="text" v-model="newMessage" />
        <button v-on:click="addMessage()">SEND</button>
      </div>
      <div style="text-align:">
        <h2>Chat Log</h2>
        <div v-for="message in messages">
          <h1>{{ message }}</h1>
        </div>
      </div>
      <a v-bind:href="`/rooms/${this.$route.params.id}/edit`">Edit Room</a>
    </div>
  </div>
</template>

<style></style>

<script>
import axios from "axios";

export default {
  data: function() {
    return {
      messages: [
        "Hey!",
        "How's it going? You excited for the game tonight?",
        "Yeah man, we left off on such a cliffhanger last time",
        "Agreed! Can't wait for everyone else to get here",
      ],
      newMessage: "",
      connection: null,
      room: {},
      peopleInRoom: [
        "Sam Freund",
        "Jack Egeling",
        "Henry Beggs",
        "Mike Neu",
        "Andrew Meyer",
        "Dante Yokley",
        "James Turner",
        "Tom Chulick",
      ],
      users: [],
    };
  },

  created: function() {
    this.showRoom();
    this.showUsers();
  },

  methods: {
    addMessage: function() {
      this.messages.push(this.newMessage);
      this.connection.send(this.newMessage);
      this.newMessage = "";
      console.log("Created new message");
    },
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

  mounted: function() {
    var connection = new RTCMultiConnection();
    this.connection = connection;

    // this line is VERY_important
    connection.socketURL = "https://rtcmulticonnection.herokuapp.com:443/";

    // if you want audio+video conferencing
    connection.session = {
      audio: true,
      video: true,
      // data is for messages component
      data: true,
    };

    connection.onopen = function(event) {
      connection.send("hello everyone");
    };

    connection.onmessage = event => {
      alert(event.userid + " said: " + event.data);
      this.message.push(event.userid + " said: " + event.data);
    };

    connection.videosContainer = document.getElementById("videos-container");
    connection.openOrJoin("your-room-id");
  },
};

// var connection = new RTCMultiConnection();

// connection.socketURL = "/https://rtcmulticonnection.herokuapp.com:443/";

// connection.session = {
//   audio: true,
//   video: true,
// };

// connection.openOrJoin("room");

// import HelloWorld from "@/components/HelloWorld.vue";

// connection.onopen = function(event) {
//   connection.send("hello everyone");
// };

// connection.onmessage = function(event) {
//   alert(event.userid + " said: " + event.data);
// };

// connection.openOrJoin("room");
// export default {
//   name: "Home",
//   components: {
//     HelloWorld,
//   },

//   data: function() {
//     return {
//       message: "Room",
//     };
//   },
//   methods: {},
// };
</script>

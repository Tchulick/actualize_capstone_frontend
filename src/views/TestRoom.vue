<template>
  <div class="room">
    <div>
      <!-- <button id="btn-open-or-join-room">
        open or join room
      </button> -->
      <div
        id="videos-container"
        style="margin: 20px 0; -webkit-transform: scaleX(-1);
  transform: scaleX(-1);"
      ></div>
      <!-- <iframe src="192.168.0.124:9001/demos/" title="RTC Multi Connection"></iframe> -->
    </div>
    <div style="width: 25em;">
      <input type="text" v-model="newMessage" />
      <button v-on:click="addMessage()">SEND</button>
    </div>
    <div>
      <h2>Chat Log</h2>
      <div v-for="message in messages">
        <h1>{{ message }}</h1>
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
      messages: [
        "Yo cool",
        "I know dude, sooo dope",
        "Who would have guessed so much was possible",
        "never in my wildest dreams",
      ],
      newMessage: "",
      connection: null,
    };
  },
  methods: {
    addMessage: function() {
      this.messages.push(this.newMessage);
      this.connection.send(this.newMessage);
      this.newMessage = "";
      console.log("Created new message");
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

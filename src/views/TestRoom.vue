<template>
  <div class="room">
    <div>
      <h1>{{ message }}</h1>
      <div
        id="videos-container"
        style="margin: 20px 0; -webkit-transform: scaleX(-1);
  transform: scaleX(-1);"
      ></div>
      <!-- <iframe src="192.168.0.124:9001/demos/" title="RTC Multi Connection"></iframe> -->
    </div>
  </div>
</template>

<style></style>

<script>
import axios from "axios";

export default {
  data: function() {
    return {
      message: "Room Page",
    };
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

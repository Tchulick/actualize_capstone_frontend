<template>
  <div class="room">
    <div>
      <h1>{{ message }}</h1>
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

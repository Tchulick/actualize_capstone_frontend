<template>
  <div>
    <input id="txt-roomid" placeholder="Unique Room ID" />

    <button id="btn-open-or-join-room">
      Open or Join Room
    </button>
    <div
      id="videos-container"
      style="margin: 20px 0; -webkit-transform: scaleX(-1);
      transform: scaleX(-1);"
    ></div>

    <hr />
  </div>
</template>

<style>
video {
  width: 40%;
  border-radius: 15px;
}
</style>

<script>
export default {
  data: function() {
    return {
      message: "",
    };
  },

  mounted: function() {
    var connection = new RTCMultiConnection();

    connection.socketURL = "https://rtcmulticonnection.herokuapp.com:443/";

    connection.session = {
      audio: true,
      video: true,
    };

    connection.sdpConstraints.manditory = {
      OfferToReceiveAudio: true,
      OfferToReceiveVideo: true,
    };

    var videosContainer = document.getElementById("videos-container");
    connection.onstream = function(event) {
      var video = event.mediaElement;

      videosContainer.appendChild(video);
    };

    var roomid = document.getElementById("txt-roomid");

    roomid.value = connection.token();

    document.getElementById("btn-open-or-join-room").onclick = function() {
      this.disabled = true;
      connection.openOrJoin(roomid.value || "predefiend-roomid");
    };
  },
};
</script>

<template>
  <div>
    <div id="control_panel" class="control_panel">
      <!-- <h6><img src="../favicon.ico" style="vertical-align: middle"></img> <a href="..">teal</a> dice</h6> -->
      <p id="loading_text">Loading libraries, please wait a bit...</p>
      <!-- <p id="info_text"><a href="http://www.teall.info/2014/01/online-3d-dice-roller.html">More info and help</a></p>
      <p id="info_text"><a href="/mdice">Multiplayer version</a></p> -->
    </div>
    <div id="info_div" style="display: none">
      <div class="center_field">
        <span id="label"></span>
      </div>
      <div class="center_field">
        <div class="bottom_field">
          <span id="labelhelp">click to continue or tap and drag again</span>
        </div>
      </div>
    </div>
    <div id="selector_div" style="display: none">
      <div class="center_field">
        <div id="sethelp">
          choose your dice set by clicking the dices or by direct input of notation,
          <br />
          tap and drag on free space of screen or hit throw button to roll
        </div>
      </div>
      <div class="center_field">
        <!-- <input type="text" id="set" value="4d6"></input><br/> -->
        <button id="clear">clear</button>
        <button style="margin-left: 0.6em" id="throw">throw</button>
      </div>
    </div>
    <div id="canvas"></div>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      message: "",
    };
  },
};
</script>

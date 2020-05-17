<template>
  <div>
    <h1>{{ join }}</h1>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data: function() {
    return {
      join: "hello",

    };
  }
};
</script>

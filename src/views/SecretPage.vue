<template>
  <div>
    <div>
      {{ message }}
    </div>
    {{ welcome }}
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      message: "YOU FOUND IT!!!",
      welcome: "WELCOME THE SECRET PAGE",
    };
  },
};
</script>

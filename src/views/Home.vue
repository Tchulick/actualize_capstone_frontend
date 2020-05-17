<template>
  <div class="home">
    <h1>{{ message }}</h1>
    <P>{{ about }}</P>
  </div>
</template>

<style></style>

<script>
import axios from "axios";
export default {
  data: function() {
    return {
      message: "Welcome to the Capstone App",
      about:
        "Lorem ipsum dolor sit amet, cu essent malorum ornatus has, populo virtute lucilius an sed, duo nibh ipsum graeci ea. Ei pro quas dissentiet eloquentiam, debitis verterem praesent no cum, sit ea quis bonorum nusquam. Vel mentitum explicari ex, audire referrentur mei id. Feugiat referrentur ea vel, consetetur persequeris duo id. Duo ut veri adipisci iracundia. Qui in adhuc causae. Eu duo movet corpora praesent, eos vidisse apeirian id. Et graece quaeque voluptatum duo. Aeque sonet ex mei. Et quis lobortis deseruisse sea. No sed ferri adversarium. Pro novum nonumy equidem ea, tation audiam inermis pro eu.",
    };
  },
  methods: {},
};
</script>

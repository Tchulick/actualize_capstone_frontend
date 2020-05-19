<template>
  <div class="edit">
    <div class="container">
      <form v-on:submit.prevent="submit()">
        <h1>Edit Room</h1>
        <ul>
          <li class="text-danger" v-for="error in errors">{{ error }}</li>
        </ul>
        <div class="form-group">
          <label>Name:</label>
          <input type="text" class="form-control" v-model="room.name" />
        </div>
        <div class="form-group">
          <label>Password:</label>
          <input type="text" class="form-control" v-model="room.password" />
        </div>
        <div class="form-group">
          <label>Require Password:</label>
          <input type="boolean" class="form-control" v-model="room.password_status" />
        </div>
        <input type="submit" class="btn btn-primary" value="Submit" />
      </form>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data: function() {
    return {
      room: {},
      errors: [],
    };
  },
  created: function() {
    axios.get("/api/rooms/" + this.$route.params.id).then(response => {
      this.room = response.data;
    });
  },
  methods: {
    submit: function() {
      var params = {
        name: this.room.name,
        password: this.room.password,
        password_status: this.room.password_status,
      };
      axios
        .patch("/api/rooms/" + this.$route.params.id, params)
        .then(response => {
          this.$router.push("/rooms");
        })
        .catch(error => {
          this.errors = error.response.data.errors;
        });
    },
  },
};
</script>

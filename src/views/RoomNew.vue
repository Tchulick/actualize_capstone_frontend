<template>
  <div class="roomNew">
    <img v-if="status" v-bind:src="`https://http.cat/${status}`" alt="" />
    <div class="container">
      <form v-on:submit.prevent="submit()">
        <h1>New Room</h1>
        <ul>
          <li class="text-danger" v-for="error in errors">{{ error }}</li>
        </ul>
        <div class="form-group">
          <label>Name:</label>
          <input type="text" class="form-control" v-model="name" />
        </div>
        <div class="form-group">
          <label>Password:</label>
          <input type="text" class="form-control" v-model="password" />
        </div>
        <div class="form-group">
          <label>Password Confirmation:</label>
          <input type="text" class="form-control" v-model="passwordConfirmation" />
        </div>
        <!-- <div class="form-group">
          <label>Password Status:</label>
          <input type="text" class="form-control" v-model="passwordStatus" />
        </div> -->
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
      name: "",
      password: "",
      passwordConfirmation: "",
      userId: "",
      errors: [],
      status: "",
    };
  },
  methods: {
    submit: function() {
      var params = {
        name: this.name,
        password: this.password,
        password_status: this.passwordStatus,
        user_id: this.current_user,
      };
      axios
        .post("/api/rooms", params)
        .then(response => {
          this.$router.push("/rooms");
        })
        .catch(error => {
          this.errors = error.response.data.errors;
          this.status = error.response.status;
        });
    },
  },
};
</script>

<template>
  <div class="edit">
    <div class="container">
      <form v-on:submit.prevent="submit()">
        <h1>Edit Profile</h1>
        <ul>
          <li class="text-danger" v-for="error in errors">{{ error }}</li>
        </ul>
        <div class="form-group">
          <label>First Name:</label>
          <input type="text" class="form-control" v-model="user.firstName" />
        </div>
        <div class="form-group">
          <label>Last Name:</label>
          <input type="text" class="form-control" v-model="user.lastName" />
        </div>
        <div class="form-group">
          <label>Password:</label>
          <input type="password" class="form-control" v-model="user.password" />
        </div>
        <div class="form-group">
          <label>Password Confirmation:</label>
          <input type="password" class="form-control" v-model="user.passwordConfirmation" />
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
      user: {},
      errors: [],
    };
  },
  created: function() {
    axios.get("/api/users/" + 1).then(response => {
      this.user = response.data;
    });
  },
  methods: {
    submit: function() {
      var params = {
        id: this.current_user,
        firstName: this.user.first_name,
        lastName: this.user.first_name,
        password: this.user.password,
        passwordConfirmation: this.user.password_confirmation,
      };

      // this.$route.params.id
      axios
        .patch("/api/users/" + this.$route.params.id, params)
        .then(response => {
          this.$router.push("/profile/" + this.$route.params.id);
        })
        .catch(error => {
          this.errors = error.response.data.errors;
        });
    },
  },
};
</script>

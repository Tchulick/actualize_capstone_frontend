<template>
  <div id="app">
    <!-- Header -->
    <header id="header">
      <h1 id="logo"><a href="/">Dope RPG APP</a></h1>
      <nav id="nav">
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/rooms">All Rooms</a></li>
          <li><a href="/profile">Profile Page</a></li>
          <li><a href="/rooms/new">Create New Room</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/logout">Logout</a></li>
          <li><a href="/test_room">Test Room</a></li>
          <!-- <li>
            <a href="#">Layouts</a>
            <ul>
              <li><a href="left-sidebar.html">Left Sidebar</a></li>
              <li><a href="right-sidebar.html">Right Sidebar</a></li>
              <li><a href="no-sidebar.html">No Sidebar</a></li>
              <li>
                <a href="#">Submenu</a>
                <ul>
                  <li><a href="#">Option 1</a></li>
                  <li><a href="#">Option 2</a></li>
                  <li><a href="#">Option 3</a></li>
                  <li><a href="#">Option 4</a></li>
                </ul>
              </li>
            </ul>
          </li> -->
          <!-- <li><a href="elements.html">Elements</a></li> -->
          <li><a href="/signup" class="button primary">Sign Up</a></li>
          <li><a href="/login" class="button primary">Login</a></li>
        </ul>
      </nav>
    </header>

    <!-- Banner -->
    <section id="banner">
      <div class="content">
        <header>
          <h2>Dis the place to play those tabletop games</h2>
          <p>
            Seriously it's wack how dope this place is.
            <br />
            Tell your people, becasue this is hot.
          </p>
        </header>
        <span class="image"><img src="images/d&d_red_box.jpg" alt="" /></span>
      </div>
      <a href="#one" class="goto-next scrolly">Next</a>
    </section>

    <!-- One -->
    <!-- <section id="one" class="spotlight style1 bottom">
      <span class="image fit main"><img src="images/pic02.jpg" alt="" /></span>
      <div class="content">
        <div class="container">
          <div class="row">
            <div class="col-4 col-12-medium">
              <header>
                <h2>Odio faucibus ipsum integer consequat</h2>
                <p>Nascetur eu nibh vestibulum amet gravida nascetur praesent</p>
              </header>
            </div>
            <div class="col-4 col-12-medium">
              <p>
                Feugiat accumsan lorem eu ac lorem amet sed accumsan donec. Blandit orci porttitor semper. Arcu
                phasellus tortor enim mi nisi praesent dolor adipiscing. Integer mi sed nascetur cep aliquet augue
                varius tempus lobortis porttitor accumsan consequat adipiscing lorem dolor.
              </p>
            </div>
            <div class="col-4 col-12-medium">
              <p>
                Morbi enim nascetur et placerat lorem sed iaculis neque ante adipiscing adipiscing metus massa. Blandit
                orci porttitor semper. Arcu phasellus tortor enim mi mi nisi praesent adipiscing. Integer mi sed
                nascetur cep aliquet augue varius tempus. Feugiat lorem ipsum dolor nullam.
              </p>
            </div>
          </div>
        </div>
      </div>
      <a href="#two" class="goto-next scrolly">Next</a>
    </section> -->

    <router-view />

    <!-- Footer -->
    <footer id="footer">
      <ul class="icons">
        <li>
          <a href="#" class="icon brands alt fa-twitter"><span class="label">Twitter</span></a>
        </li>
        <li>
          <a href="#" class="icon brands alt fa-facebook-f"><span class="label">Facebook</span></a>
        </li>
        <li>
          <a href="#" class="icon brands alt fa-linkedin-in"><span class="label">LinkedIn</span></a>
        </li>
        <li>
          <a href="#" class="icon brands alt fa-instagram"><span class="label">Instagram</span></a>
        </li>
        <li>
          <a href="#" class="icon brands alt fa-github"><span class="label">GitHub</span></a>
        </li>
        <li>
          <a href="#" class="icon solid alt fa-envelope"><span class="label">Email</span></a>
        </li>
      </ul>
      <ul class="copyright">
        <li>&copy; Untitled. All rights reserved.</li>
        <li>
          Design:
          <a href="http://html5up.net">HTML5 UP</a>
        </li>
      </ul>
    </footer>
  </div>
</template>

<style></style>

<script>
export default {
  data: function() {
    return {
      jwt: null,
      userId: null,
    };
  },
  created: function() {
    this.setJwt();
    this.setUserId();
  },
  methods: {
    setJwt: function() {
      this.jwt = localStorage.jwt;
      console.log(localStorage.jwt);
    },
    setUserId: function() {
      this.userId = parseInt(localStorage.user_id);
    },
  },
};
</script>

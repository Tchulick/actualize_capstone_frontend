<template>
  <div id="app">
    <!-- Header -->
    <header id="header">
      <h1 id="logo" style="font-size: 2.4em;"><a href="/">Conjurr</a></h1>
      <nav id="nav">
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/rooms">All Rooms</a></li>
          <li><a href="/profile">Profile Page</a></li>
          <li><a href="/rooms/new">New Room</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/logout">Logout</a></li>
          <li><a href="/dice/dice/index.html">3D Dice</a></li>
          <!-- <li><a href="/test_room">Test Room</a></li> -->
          <!-- <li><a href="/test_multi_room">Test Multi Connect Room</a></li> -->

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
          <h2>Welcome to Conjurr!</h2>
          <p>
            Video conferencing platform made for tabletop gamers, by gamers.
            <br />
            Message your friends and hop on Conjurr, epic adventures await!
          </p>
        </header>
        <span class="image"><img src="images/dnd_red_box.jpg" alt="" /></span>
      </div>
      <a href="#one" class="goto-next scrolly">Next</a>
    </section>

    <!-- One -->
    <!-- <section id="one" class="spotlight style1 bottom">
      <span class="image fit main"><img src="images/conan-frank-frazetta.jpg" alt="conan" /></span>
      <div class="content">
        <div class="container">
          <div class="row">
            <div class="col-4 col-12-medium">
              <header>
                <h2>Welcome to Conjurr, it's hot</h2>
                <p>
                  Bender, being God isn't easy. If you do too much, people get dependent on you, and if you do nothing,
                  they lose hope. You have to use a light touch. Like a safecracker, or a pickpocket.
                </p>
              </header>
            </div>
            <div class="col-4 col-12-medium">
              <P>
                I feel like I was mauled by Jesus. Oh, I don't have time for this. I have to go and buy a single piece
                of fruit with a coupon and then return it, making people wait behind me while I complain. Yes, if you
                make it look like an electrical fire. When you do things right, people won't be sure you've done
                anything at all.
                <br />
                Come, Comrade Bender! We must take to the streets! Quite possible. We live long and are celebrated
                poopers. Anyone who laughs is a communist! Shut up and get to the point! Bender, I didn't know you liked
                cooking. That's so cute.
              </P>
            </div>
            <div class="col-4 col-12-medium">
              <p>
                I'm just glad my fat, ugly mama isn't alive to see this day. Kif might! Can we have Bender Burgers
                again? Oh, how awful. Did he at least die painlessly? …To shreds, you say. Well, how is his wife holding
                up? …To shreds, you say. Ah, the 'Breakfast Club' soundtrack! I can't wait til I'm old enough to feel
                ways about stuff! Oh dear! She's stuck in an infinite loop, and he's an idiot! Well, that's love for
                you.
                <br />
                And until then, I can never die? These old Doomsday Devices are dangerously unstable. I'll rest easier
                not knowing where they are. Isn't it true that you have been paid for your testimony? But I know you in
                the future. I cleaned your poop. Guess again. It's a T. It goes "tuh". You, minion. Lift my arm. AFTER
                HIM! Oh Leela! You're the only person I could turn to; you're the only person who ever loved me. Stop
                it, stop it. It's fine. I will 'destroy' you!
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
      <div>
        <p>
          Thanks for checking out Conjurr!
          <br />
          “Don’t adventures ever have an end? I suppose not. Someone else always has to carry on the story.” - Bilbo
          Baggins
        </p>
      </div>
      <ul class="icons">
        <li>
          <a href="https://twitter.com/fullcathouse?lang=en" class="icon brands alt fa-twitter">
            <span class="label">Twitter</span>
          </a>
        </li>
        <li>
          <a href="https://www.youtube.com/watch?v=7O4LQII6gLc" class="icon brands alt fa-facebook-f">
            <span class="label">Facebook</span>
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/tom-chulick/" class="icon brands alt fa-linkedin-in">
            <span class="label">LinkedIn</span>
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/spacegooose/?hl=en" class="icon brands alt fa-instagram">
            <span class="label">Instagram</span>
          </a>
        </li>
        <li>
          <a href="https://github.com/Tchulick" class="icon brands alt fa-github">
            <span class="label">GitHub</span>
          </a>
        </li>
        <li>
          <a href="/if_you_found_this_page_good_job_youll_have_to_let_me_know" class="icon solid alt fa-envelope">
            <span class="label">Email</span>
          </a>
        </li>
      </ul>
      <ul class="copyright">
        <li>&copy; Conjurr. All rights reserved.</li>
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

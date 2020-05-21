import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import RoomsIndex from "../views/RoomsIndex.vue";
import Login from "../views/Login.vue";
import Signup from "../views/Signup.vue";
import Logout from "../views/Logout.vue";
import TestRoom from "../views/TestRoom.vue";
import Profile from "../views/Profile.vue";
import RoomNew from "../views/RoomNew.vue";
import RoomShow from "../views/RoomShow.vue";
import RoomEdit from "../views/RoomEdit.vue";
import ProfileEdit from "../views/ProfileEdit.vue";
import TestMultiConnectRoom from "../views/TestMultiConnectRoom.vue";
import SecretPage from "../views/SecretPage.vue";

// ../../public/dice/dice/index.vue

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  { path: "/rooms", name: "RoomsIndex", component: RoomsIndex },
  { path: "/rooms/new", name: "RoomNew", component: RoomNew },
  { path: "/rooms/:id", name: "ShowRoom", component: RoomShow },
  { path: "/rooms/:id/edit", name: "RoomEdit", component: RoomEdit },
  { path: "/signup", name: "Signup", component: Signup },
  { path: "/login", name: "Login", component: Login },
  { path: "/logout", name: "Logout", component: Logout },
  { path: "/profile", name: "Profile", component: Profile },
  { path: "/profile/edit", name: "ProfileEdit", component: ProfileEdit },
  { path: "/test_room", name: "TestRoom", component: TestRoom },
  { path: "/test_multi_room", name: "TestMultiConnectRoom", component: TestMultiConnectRoom },
  { path: "/if_you_found_this_page_good_job_youll_have_to_let_me_know", name: "SecretPage", component: SecretPage },

];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;

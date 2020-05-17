import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import RoomsIndex from "../views/RoomsIndex.vue";
import Login from "../views/Login.vue";
import Signup from "../views/Signup.vue";
import Logout from "../views/Logout.vue";
import Room from "../views/Room.vue";
import Profile from "../views/Profile.vue";
import UserRoom from "../views/UserRoomCreate.vue";
import RoomNew from "../views/RoomNew.vue";

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
  { path: "/login", name: "Login", component: Login },
  { path: "/signup", name: "Signup", component: Signup },
  { path: "/logout", name: "Logout", component: Logout },
  { path: "/room", name: "Room", component: Room },
  { path: "/profile", name: "Profile", component: Profile },
  { path: "/user_room", name: "UserRoom", component: UserRoom },
  { path: "/rooms/new", name: "RoomNew", component: RoomNew },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;

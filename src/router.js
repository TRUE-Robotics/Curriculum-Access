// src/router.js
import { createRouter, createWebHistory } from "vue-router";
import IntroductionToRobotics from "./components/IntroductionToRobotics.vue";
import TakingOffWithPilot from "./components/TakingOffWithPilot.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: IntroductionToRobotics,
  },
  {
    path: "/introduction-to-robotics",
    name: "IntroductionToRobotics",
    component: IntroductionToRobotics,
  },
  {
    path: "/taking-off-with-pilot",
    name: "TakingOffWithPilot",
    component: TakingOffWithPilot,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;

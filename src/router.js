// src/router.js
import { createRouter, createWebHashHistory } from "vue-router";
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
  history: createWebHashHistory(),
  routes,
});

export default router;

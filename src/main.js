import DefaultLayout from "~/layouts/Default.vue";
import VueMq from "vue-mq";

import "~/scss/main.scss";

export default function(Vue, { router, head, isClient }) {
  Vue.use(require("vue-moment"));
  Vue.use(VueMq, {
    breakpoints: {
      sm: 450,
      md: 1250,
      lg: Infinity,
    },
    defaultBreakpoint: "sm",
  });

  Vue.component("Layout", DefaultLayout);
}

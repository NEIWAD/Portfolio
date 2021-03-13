import DefaultLayout from "~/layouts/Default.vue";
import VueMq from "vue-mq";

export default function(Vue, { router, head, isClient }) {
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

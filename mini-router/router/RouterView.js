import { defineComponent, getCurrentInstance, h, unref } from "vue";
export default defineComponent({
  setup() {
    return () => {
      const {
        proxy: { $router },
      } = getCurrentInstance();
      let component;
      const route = $router.options.routes.find(
        (route) => route.path === unref($router.current)
      );
      if (route) {
        component = route.component;
        return h(component, "router-view");
      } else {
        return h("div", "");
      }
    };
  },
});

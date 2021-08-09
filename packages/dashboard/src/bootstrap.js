import { createApp } from "vue";
import Dashboard from "./components/Dashboard.vue";

// mount function
function mount(el) {
  const app = createApp(Dashboard);
  app.mount(el);
}

// dev (isolation) mount immediately
if (process.env.NODE_ENV === "development") {
  const devRoot = document.querySelector("#_dashboard-dev-root");
  if (devRoot) {
    mount(devRoot);
  }
}

// through container, export mount
export { mount };

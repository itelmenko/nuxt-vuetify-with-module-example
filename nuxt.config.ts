// https://nuxt.com/docs/api/configuration/nuxt-config

import { fileURLToPath } from "url";
import { defineNuxtConfig } from "nuxt/config";
import { defineVuetifyConfiguration } from "vuetify-nuxt-module/custom-configuration";

const customDarkTheme = {
  dark: true,
  colors: {
    primary: "#f74780",
    error: "#e74c3c",
  },
};

const customLightTheme = {
  dark: false,
  colors: {
    primary: "#f74780",
    error: "#e74c3c",
  },
};

const vuetifyConfig = defineVuetifyConfiguration({
  theme: {
    defaultTheme: "custom-light",
    themes: {
      "custom-dark": customDarkTheme,
      "custom-light": customLightTheme,
    },
  },
  defaults: {
    VTextField: {
      variant: "outlined",
    },
    VSelect: {
      variant: "outlined",
    },
    VTextarea: {
      variant: "outlined",
    },
  },
});

export default defineNuxtConfig({
  devtools: { enabled: false },
  alias: {
    "@": fileURLToPath(new URL("./", import.meta.url)),
  },
  typescript: {
    typeCheck: true,
  },
  modules: ["vuetify-nuxt-module"],
  vuetify: {
    moduleOptions: {
      styles: {
        configFile: "assets/css/settings.scss",
      },
    },
    vuetifyOptions: vuetifyConfig,
  },
});

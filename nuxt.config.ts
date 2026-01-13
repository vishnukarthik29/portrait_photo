// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  css: ["./app/assets/css/main.css"],
  vite: {
    plugins: [tailwindcss()],
  },

  modules: ["@nuxtjs/seo", "nuxt-swiper"],
  build: {
    transpile: ["swiper"],
  },
  ssr: false, // For static site generation
  app: {
    baseURL: "/portrait_photo/", // Only needed if deploying to a project page
  },
  // SEO Configuration
  site: {
    url: "https://vishnukarthik29.github.io/portrait_photo/", // Replace with your GitHub username
  },

  // Disable robots.txt generation when using baseURL
  robots: {
    robotsTxt: false,
  },
});

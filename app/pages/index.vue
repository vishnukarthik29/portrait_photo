// pages/index.vue
<template>
  <div class="bg-black text-white min-h-screen font-sans">
    <Navigation />
    <Hero />
    <Portfolio />
    <About />
    <Contact />
    <Footer />
  </div>
</template>

<script setup>
// SEO Meta Tags
useHead({
  title: "Arun Photography - Fine Art & Portrait Photography",
  meta: [
    {
      name: "description",
      content:
        "Professional fine art and portrait photography by Arun. Capturing souls through ethereal and emotional imagery.",
    },
    {
      name: "keywords",
      content:
        "photography, portrait, fine art, arun photography, professional photographer",
    },
  ],
});
</script>

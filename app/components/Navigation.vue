// components/Navigation.vue
<template>
  <nav
    :class="[
      'fixed w-full z-50 transition-all duration-300',
      scrolled ? 'bg-black/95 backdrop-blur-sm py-4' : 'bg-transparent py-6',
    ]"
  >
    <div class="max-w-7xl mx-auto px-6 flex items-center justify-between">
      <a href="#home" class="text-2xl font-light tracking-wider">
        ARUN PHOTOGRAPHY
      </a>

      <!-- Desktop Menu -->
      <div class="hidden md:flex items-center space-x-8">
        <a href="#home" class="hover:text-gray-300 transition-colors">Home</a>
        <a href="#portfolio" class="hover:text-gray-300 transition-colors"
          >Portfolio</a
        >
        <a href="#about" class="hover:text-gray-300 transition-colors">About</a>
        <a href="#contact" class="hover:text-gray-300 transition-colors"
          >Contact</a
        >
      </div>

      <!-- Mobile Menu Button -->
      <button class="md:hidden" @click="isMenuOpen = !isMenuOpen">
        <svg
          v-if="!isMenuOpen"
          class="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
        <svg
          v-else
          class="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
    </div>

    <!-- Mobile Menu -->
    <div v-if="isMenuOpen" class="md:hidden bg-black/98 backdrop-blur-sm">
      <div class="px-6 py-8 space-y-4">
        <a
          href="#home"
          class="block hover:text-gray-300 transition-colors"
          @click="isMenuOpen = false"
          >Home</a
        >
        <a
          href="#portfolio"
          class="block hover:text-gray-300 transition-colors"
          @click="isMenuOpen = false"
          >Portfolio</a
        >
        <a
          href="#about"
          class="block hover:text-gray-300 transition-colors"
          @click="isMenuOpen = false"
          >About</a
        >
        <a
          href="#contact"
          class="block hover:text-gray-300 transition-colors"
          @click="isMenuOpen = false"
          >Contact</a
        >
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const isMenuOpen = ref(false);
const scrolled = ref(false);

const handleScroll = () => {
  scrolled.value = window.scrollY > 50;
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

// components/Portfolio.vue
<template>
  <section id="portfolio" class="py-20 px-6">
    <div class="max-w-7xl mx-auto">
      <h2 class="text-5xl md:text-6xl font-light mb-4 text-center">
        Portfolio
      </h2>
      <p class="text-gray-400 text-center mb-12">
        A collection of my finest work
      </p>

      <!-- Category Filter -->
      <div class="flex justify-center space-x-6 mb-16 flex-wrap gap-y-4">
        <button
          v-for="cat in categories"
          :key="cat"
          @click="selectedCategory = cat"
          :class="[
            'pb-2 transition-all',
            selectedCategory === cat
              ? 'border-b-2 border-white text-white'
              : 'text-gray-500 hover:text-gray-300',
          ]"
        >
          {{ cat }}
        </button>
      </div>

      <!-- Image Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div
          v-for="(item, index) in filteredImages"
          :key="item.id"
          class="group relative overflow-hidden aspect-[4/5] cursor-pointer fade-in-up"
          :style="{ animationDelay: `${index * 0.1}s` }"
        >
          <img
            :src="item.image"
            :alt="item.title"
            class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div
            class="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"
          >
            <div class="text-center">
              <p class="text-sm text-gray-400 mb-2">{{ item.category }}</p>
              <h3 class="text-xl font-light">{{ item.title }}</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from "vue";

const selectedCategory = ref("All");

const categories = ["All", "Portrait", "Nature", "Fashion"];

const portfolioImages = [
  {
    id: 1,
    category: "Portrait",
    title: "Ethereal Dreams",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800&h=1000&fit=crop",
  },
  {
    id: 2,
    category: "Nature",
    title: "Wild Serenity",
    image:
      "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&h=1000&fit=crop",
  },
  {
    id: 3,
    category: "Portrait",
    title: "Golden Hour",
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800&h=1000&fit=crop",
  },
  {
    id: 4,
    category: "Fashion",
    title: "Urban Elegance",
    image:
      "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=800&h=1000&fit=crop",
  },
  {
    id: 5,
    category: "Nature",
    title: "Misty Mountains",
    image:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=1000&fit=crop",
  },
  {
    id: 6,
    category: "Portrait",
    title: "Autumn Whispers",
    image:
      "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=800&h=1000&fit=crop",
  },
];

const filteredImages = computed(() => {
  return selectedCategory.value === "All"
    ? portfolioImages
    : portfolioImages.filter((img) => img.category === selectedCategory.value);
});
</script>

<style scoped>
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.fade-in-up {
  animation: fadeInUp 0.6s ease-out both;
}
</style>

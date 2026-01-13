<template>
  <section
    id="hero"
    class="relative h-screen flex items-center justify-center overflow-hidden"
  >
    <!-- Swiper Container -->
    <ClientOnly>
      <Swiper
        :modules="modules"
        :slides-per-view="1"
        effect="fade"
        :speed="1500"
        :autoplay="{
          delay: 2000,
          disableOnInteraction: false,
          pauseOnMouseEnter: false,
        }"
        :pagination="{
          clickable: true,
          dynamicBullets: false,
        }"
        :loop="true"
        class="hero-swiper absolute inset-0 w-full h-full"
        @swiper="onSwiper"
      >
        <SwiperSlide
          v-for="(slide, index) in heroSlides"
          :key="index"
          class="swiper-slide"
        >
          <div
            class="absolute inset-0 bg-cover bg-center transition-all duration-1000"
            :style="`background-image: url('${slide.image}')`"
          >
            <div class="absolute inset-0 bg-black/50"></div>
          </div>
        </SwiperSlide>
      </Swiper>
    </ClientOnly>

    <!-- Content Overlay -->
    <div class="relative z-10 text-center px-6 max-w-5xl mx-auto">
      <div class="overflow-hidden">
        <h1
          class="text-6xl md:text-8xl font-light mb-6 tracking-wider slide-up"
          style="animation-delay: 0.2s"
        >
          CAPTURING SOULS
        </h1>
      </div>
      <div class="overflow-hidden">
        <p
          class="text-xl md:text-2xl font-light text-gray-300 mb-8 slide-up"
          style="animation-delay: 0.4s"
        >
          Fine Art & Portrait Photography
        </p>
      </div>
      <div class="overflow-hidden">
        <a
          href="#portfolio"
          class="inline-flex items-center space-x-2 border border-white px-8 py-3 hover:bg-white hover:text-black transition-all duration-300 slide-up group"
          style="animation-delay: 0.6s"
        >
          <span>View Work</span>
          <svg
            class="w-5 h-5 group-hover:translate-x-1 transition-transform"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </a>
      </div>
    </div>

    <!-- Scroll Indicator -->
    <div
      class="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce"
    >
      <svg
        class="w-6 h-6 text-white"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M19 14l-7 7m0 0l-7-7m7 7V3"
        />
      </svg>
    </div>
  </section>
</template>

<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay, EffectFade, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";

const modules = [Autoplay, EffectFade, Pagination];

const onSwiper = (swiper) => {
  // Ensure autoplay starts
  if (swiper.autoplay) {
    swiper.autoplay.start();
  }
};

const heroSlides = [
  {
    image:
      "https://images.unsplash.com/photo-1502877338535-766e1452684a?w=1920&h=1080&fit=crop",
  },
  {
    image:
      "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?w=1920&h=1080&fit=crop",
  },
  {
    image:
      "https://images.unsplash.com/photo-1519741497674-611481863552?w=1920&h=1080&fit=crop",
  },
  {
    image:
      "https://images.unsplash.com/photo-1554048612-b6a482bc67e5?w=1920&h=1080&fit=crop",
  },

  {
    image:
      "https://images.pexels.com/photos/417173/pexels-photo-417173.jpeg?w=1920&h=1080&auto=compress&cs=tinysrgb",
  },
  {
    image:
      "https://images.pexels.com/photos/34950/pexels-photo.jpg?w=1920&h=1080&auto=compress&cs=tinysrgb",
  },
  {
    image:
      "https://images.pexels.com/photos/355747/pexels-photo-355747.jpeg?w=1920&h=1080&auto=compress&cs=tinysrgb",
  },

  {
    image:
      "https://images.pexels.com/photos/210186/pexels-photo-210186.jpeg?w=1920&h=1080&auto=compress&cs=tinysrgb",
  },
];
</script>

<style scoped>
@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(60px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.slide-up {
  animation: slideUp 1s ease-out both;
}

.swiper-slide {
  height: 100vh;
}

:deep(.swiper-pagination-bullet) {
  background: white;
  opacity: 0.5;
  width: 12px;
  height: 12px;
  transition: all 0.3s ease;
}

:deep(.swiper-pagination-bullet-active) {
  opacity: 1;
  width: 30px;
  border-radius: 6px;
}

:deep(.swiper-pagination) {
  bottom: 60px !important;
}
</style>

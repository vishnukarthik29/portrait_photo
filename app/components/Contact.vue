// components/Contact.vue
<template>
  <section id="contact" class="py-20 px-6">
    <div class="max-w-3xl mx-auto text-center">
      <h2 class="text-5xl font-light mb-6">Let's Create Together</h2>
      <p class="text-gray-400 mb-12">
        Interested in working together? I'd love to hear about your project.
      </p>
      <div class="space-y-6">
        <div class="flex items-center justify-center space-x-4">
          <svg
            class="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
            />
          </svg>
          <a
            href="mailto:hello@arunphotography.com"
            class="text-xl hover:text-gray-400 transition-colors"
          >
            hello@arunphotography.com
          </a>
        </div>
        <button
          class="border border-white px-12 py-4 hover:bg-white hover:text-black transition-all duration-300 text-lg"
        >
          Send Message
        </button>
      </div>
    </div>
  </section>
</template>

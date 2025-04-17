<template>
    <transition name="fade">
      <div
        v-if="show"
        class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40"
      >
        <div class="bg-white p-6 rounded-xl shadow-xl w-80 text-center space-y-4">
          <h2 class="text-xl font-semibold text-[#009fe3]">🎉 ¡Sorpresa!</h2>
          <p class="text-gray-700 italic">“{{ phrase }}”</p>
          <button
            @click="$emit('close')"
            class="bg-[#009fe3] text-white px-4 py-2 rounded-lg hover:bg-[#0084c4] transition"
          >
            ✨ Sigamos chambeando!
          </button>
        </div>
      </div>
    </transition>
  </template>
  
  <script setup>
  defineProps(['show', 'phrase'])
  defineEmits(['close'])
  </script>
  
  <style scoped>
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.3s ease;
  }
  .fade-enter-from,
  .fade-leave-to {
    opacity: 0;
  }
  </style>
  

<script setup>
import MainCards from '@/components/dashboard/MainCards.vue';
import DateWidget from '@/components/dashboard/DateWidget.vue'

import useEasterEgg from '@/composables/useEasterEgg.js'
import EasterEggModal from '@/components/easterEggs/EasterEggModal.vue'

const {
  handleClick,
  showModal,
  selectedPhrase,
  closeModal
} = useEasterEgg()

</script>

<template>
    <div>
      <!-- Topbar y contenido específico -->
      <div class="flex justify-between items-center mb-8">
        <img
          src="@/assets/farmapronto-logo.png"
          alt="Logo"
          class="cursor-pointer hover:brightness-110 transition duration-300"
          @click="handleClick"
        />
        
        <DateWidget />

        <EasterEggModal
          :show="showModal"
          :phrase="selectedPhrase"
          @close="closeModal"
        />
        <!-- <div class="flex items-center space-x-4">
          <div class="relative">
            <button class="rounded-full p-2 hover:bg-gray-200 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8z" />
              </svg>
            </button>
          </div>
        </div> -->
      </div>
  
      <MainCards />
    </div>
  </template>
  
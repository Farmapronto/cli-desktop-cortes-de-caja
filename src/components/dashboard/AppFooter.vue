<template>
  <footer class="mt-8 px-4 py-2 text-sm text-gray-500 bg-gray-50 border-t border-gray-200 flex items-center justify-between relative">
    <!-- Versión -->
    <div class="flex items-center gap-2 text-gray-700">
      <span class="font-semibold">Versión:</span>
      <span>{{ appVersion }}</span>
    </div>

    <!-- Sucursal centrado -->
    <div class="absolute left-1/2 transform -translate-x-1/2 flex items-center gap-2 text-gray-600">
      <MapPinIcon class="w-5 h-5 text-blue-500" />
      <span class="font-semibold">Sucursal:</span>
      <span>Centro</span>
    </div>

    <!-- Botón de actualizaciones -->
    <button
      @click="checkForUpdates"
      class="flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors"
    >
      <ArrowPathIcon class="w-5 h-5" />
      Buscar actualizaciones
    </button>
  </footer>
</template>
  
  <script setup>
  import pkg from '../../../package.json'
  import { ArrowPathIcon, MapPinIcon } from '@heroicons/vue/24/solid'
  
  const appVersion = pkg.version
  
  function checkForUpdates() {
    // Aquí va la lógica para buscar actualizaciones
    alert('Buscando nuevas versiones...')
  }
  </script>
  
  <style scoped>
  /* Personaliza más si lo necesitas */
  </style>
  
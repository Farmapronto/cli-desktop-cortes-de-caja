<template>
    <div class="p-6 max-w-2xl mx-auto">
      <h1 class="text-2xl font-bold text-gray-800 mb-6">Configuración</h1>
  
      <!-- Tarjeta de información -->
      <div class="bg-white shadow rounded-2xl p-6 border border-gray-200 space-y-4">
        <!-- Versión -->
        <div class="flex items-center gap-2 text-gray-700">
          <DocumentTextIcon class="w-5 h-5 text-blue-500" />
          <span class="font-semibold">Versión:</span>
          <span>{{ appVersion }}</span>
        </div>
  
        <!-- Sucursal -->
        <div class="flex items-center gap-2 text-gray-700">
          <MapPinIcon class="w-5 h-5 text-blue-500" />
          <span class="font-semibold">Sucursal:</span>
          <span>Centro</span>
        </div>
  
        <!-- Info adicional -->
        <div class="flex items-center gap-2 text-gray-700">
          <InformationCircleIcon class="w-5 h-5 text-blue-500" />
          <span class="font-semibold">Notas:</span>
          <span>Esta aplicación se encuentra en una verisón Inicial. Cualquier error favor de reportarlo</span>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import pkg from '../../package.json'
  import { MapPinIcon, DocumentTextIcon, InformationCircleIcon } from '@heroicons/vue/24/solid'
  
  const appVersion = pkg.version
  </script>
  
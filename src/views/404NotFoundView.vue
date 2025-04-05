<template>
    <section class="min-h-screen flex flex-col items-center justify-center bg-base-200 text-center px-4">
      <div class="max-w-md w-full space-y-6">
        <div class="text-primary">
          <svg xmlns="http://www.w3.org/2000/svg" class="mx-auto h-24 w-24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
  
        <h1 class="text-5xl font-bold text-error">404</h1>
        <p class="text-lg text-gray-600 dark:text-gray-300">
          ¡Ups! Parece que esta medicina no está en el inventario.
        </p>
        <p class="text-sm text-gray-500">
          La página que buscas no fue encontrada. Tal vez fue dada de baja por el sistema.
        </p>
  
        <button class="btn btn-primary mt-4" @click="$router.push('/')">
          Volver al Inicio
        </button>
      </div>
    </section>
  </template>
  
  <script setup>
  // Nada que declarar, solo lógica del botón
  </script>
  
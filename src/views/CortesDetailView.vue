<template>
    <div class="max-w-6xl mx-auto p-6">
        <div class="bg-[#009fe3] text-white px-6 py-4 rounded-xl shadow mb-6 flex justify-between items-center">
      <h1 class="text-2xl font-bold flex items-center gap-2">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 17v-6a2 2 0 012-2h6m2 2a2 2 0 00-2-2h-6a2 2 0 00-2 2v6m2 2h2m4-2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2" />
        </svg>
        Corte Detallado por fecha
      </h1>

      <div class="flex gap-2">
        <RouterLink to="/" class="btn btn-outline btn-sm">
          Home
        </RouterLink>
        <button @click="exportToExcel" class="btn btn-success btn-sm">
          Exportar Excel
        </button>
        <RouterLink to="/cortes" class="btn btn-secondary btn-sm">
          Corte Individual
        </RouterLink>
      </div>
    </div>

    <!-- Cards Resumen -->
    <div class="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
      <div class="bg-white shadow rounded-xl p-4">
        <p class="text-sm text-gray-500">Venta Total</p>
        <p class="text-2xl font-bold text-green-600">$ {{ totalVentas }}</p>
      </div>
      <div class="bg-white shadow rounded-xl p-4">
        <p class="text-sm text-gray-500">Total Tarjetas</p>
        <p class="text-2xl font-bold text-blue-500">$ {{ totalTarjetas }}</p>
      </div>
      <div class="bg-white shadow rounded-xl p-4">
        <p class="text-sm text-gray-500">Sobrantes</p>
        <p class="text-2xl font-bold text-yellow-500">$ {{ totalSobrantes }}</p>
      </div>
      <div class="bg-white shadow rounded-xl p-4">
        <p class="text-sm text-gray-500">Faltantes</p>
        <p class="text-2xl font-bold text-red-500">$ {{ totalFaltantes }}</p>
      </div>
    </div>

  
      <div class="overflow-x-auto rounded-xl shadow">
        <table class="table w-full">
            <thead class="bg-[#009fe3] text-white">
  <tr>
    <th class="text-left px-4 py-2">📅 Fecha</th>
    <th class="text-left px-4 py-2">Cajero 1</th>
    <th class="text-left px-4 py-2">Cajero 2</th>
    <th class="text-left px-4 py-2">Cajero 3</th>
    <th class="text-left px-4 py-2">Cajero 4</th>
    <th class="text-left px-4 py-2">Tarjeta 1</th>
    <th class="text-left px-4 py-2">Tarjeta 2</th>
    <th class="text-left px-4 py-2">Tarjeta 3</th>
    <th class="text-left px-4 py-2">Tarjeta 4</th>
    <th class="text-left px-4 py-2">Venta Total</th>
    <th class="text-left px-4 py-2">Total Tarjetas</th>
  </tr>
</thead>

  <tbody>
    <tr v-for="(data, fecha) in cortesAgrupados" :key="fecha">
      <td>{{ fecha }}</td>
      <td v-for="i in 4" :key="i">{{ data.cajeros[i].efectivo || '-' }}</td>
      <td v-for="i in 4" :key="'tarjeta' + i">{{ data.cajeros[i].tarjeta || '-' }}</td>
      <td>{{ data.totalEfectivo }}</td>
      <td>{{ data.totalTarjeta }}</td>
    </tr>
  </tbody>
</table>

      </div>
    </div>
  </template>
  
  <script setup>
  import { useFormStore } from '@/stores/formStore'
  import { computed } from 'vue'
  
  const formStore = useFormStore()
  
  const cortesAgrupados = computed(() => {
    const grupos = {}
  
    formStore.cortes.forEach((corte) => {
      if (!grupos[corte.fecha]) {
        grupos[corte.fecha] = {
          cajeros: {
            1: { efectivo: 0, tarjeta: 0 },
            2: { efectivo: 0, tarjeta: 0 },
            3: { efectivo: 0, tarjeta: 0 },
            4: { efectivo: 0, tarjeta: 0 }
          },
          totalEfectivo: 0,
          totalTarjeta: 0
        }
      }
  
      // Detectar número de cajero
      const numCajero = parseInt(corte.cajero.split(' ')[1]) // Asumiendo que es tipo 'Cajero 1'
  
      grupos[corte.fecha].cajeros[numCajero].efectivo = corte.montos.efectivo
      grupos[corte.fecha].cajeros[numCajero].tarjeta = corte.montos.tarjeta
  
      grupos[corte.fecha].totalEfectivo += corte.montos.efectivo
      grupos[corte.fecha].totalTarjeta += corte.montos.tarjeta
    })
  
    return grupos
  })
  </script>
  
  
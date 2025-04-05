<template>
  <div class="max-w-6xl mx-auto p-6">
    <div class="flex justify-between items-center mb-6">
    <h1 class="text-2xl font-bold text-[#009fe3] flex items-center gap-2">
      <span class="inline-block">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-[#009fe3]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 17v-6a2 2 0 012-2h6m2 2a2 2 0 00-2-2h-6a2 2 0 00-2 2v6m2 2h2m4-2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2" />
        </svg>
      </span>
      Listado de Cortes
    </h1>

    <div class="ml-auto flex items-center gap-2">
      <button class="btn btn-success" @click="exportarExcel">
        Exportar a Excel
      </button>
      <router-link to="/" class="btn btn-outline btn-primary">
        Volver al Home
      </router-link>
    </div>
  </div>

    <div class="overflow-x-auto">
      <table class="table w-full text-sm">
        <thead>
          <tr class="bg-[#009fe3] text-white">
            <th class="hidden md:table-cell">ID</th>
            <th>Fecha</th>
            <th>Hora</th>
            <th>Cajero</th>
            <th>Efectivo</th>
            <th>Tarjeta</th>
            <th class="hidden md:table-cell">Sobrante</th>
            <th class="hidden md:table-cell">Faltante</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="corte in formStore.cortes"
            :key="corte.id"
            class="hover:bg-gray-100 transition duration-200"
          >
            <td class="hidden md:table-cell text-gray-500">#{{ corte.id }}</td>
            <td>{{ corte.fecha }}</td>
            <td>{{ corte.horaCorte }}</td>
            <td class="font-semibold text-[#009fe3] flex items-center gap-1">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.121 17.804A13.937 13.937 0 0112 15c3.314 0 6.374 1.21 8.879 3.204M15 10a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              {{ corte.cajero }}
            </td>
            <td class="text-green-600 font-medium">${{ corte.montos.efectivo }}</td>
            <td class="text-blue-600 font-medium">${{ corte.montos.tarjeta }}</td>
            <td class="hidden md:table-cell text-orange-500">${{ corte.corte.sobrante }}</td>
            <td class="hidden md:table-cell text-red-500">${{ corte.corte.faltante }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup>
import { useFormStore } from '@/stores/formStore';
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const formStore = useFormStore();
const router = useRouter()

const exportarExcel = () => {
  // lógica para exportar excel (se agregará luego)
  alert('Exportar a Excel aún no implementado')
}
</script>

<template>
  <div class="max-w-6xl mx-auto p-6">
    <div class="flex justify-between items-center mb-6">
    <h1 class="text-2xl font-bold text-[#009fe3] flex items-center gap-2">
      <span class="inline-block">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-[#009fe3]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 17v-6a2 2 0 012-2h6m2 2a2 2 0 00-2-2h-6a2 2 0 00-2 2v6m2 2h2m4-2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2" />
        </svg>
      </span>
      Listado de Cortes Individuales
    </h1>

    <div class="ml-auto flex items-center gap-2">
      <button class="btn btn-success" @click="exportarExcel">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5m-13.5-9L12 3m0 0 4.5 4.5M12 3v13.5" />
        </svg>


        Exportar a Excel
      </button>
        <router-link to="/cortedetallado" class="btn btn-primary">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
        </svg>

            Ver Cortes a detalle
        </router-link>
        <router-link to="/" class="btn btn-outline btn-primary">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
            </svg>

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
            <!-- <th>Hora</th> -->
            <th>Cajero</th>
            <th>Efectivo</th>
            <th>Tarjeta</th>
            <th>Gasto Farmacia</th>
            <th>Concepto</th>
            <th>Compra Farmacia</th>
            <th>Tipo de Compra</th>
            <th>Retiro</th>
            <th class="hidden md:table-cell">Sobrante</th>
            <th class="hidden md:table-cell">Faltante</th>
            <th class="hidden md:table-cell">Total por Cajero</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="corte in cortes"
            :key="corte.id"
            class="hover:bg-gray-100 transition duration-200"
          >

            <td class="hidden md:table-cell text-gray-500">#{{ corte.id }}</td>
            <td>{{ formatDateToDDMMYYYY(corte.fecha) }}</td>
            <!-- <td>{{ formatTimeToHHMMAMPM(corte.fecha) }}</td> -->
            <td class="font-semibold text-[#009fe3] flex items-center gap-1">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.121 17.804A13.937 13.937 0 0112 15c3.314 0 6.374 1.21 8.879 3.204M15 10a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              Cajero {{corte.cajero}}
            </td>
            <td class="text-green-600 font-medium">${{ corte.efectivo }}</td>
            <td class="text-blue-600 font-medium">${{ corte.tarjeta }}</td>
            <td>{{ corte.gastoFarmacia }}</td>
            <td>{{ corte.conceptoGastoFarmacia }}</td>
            <td>{{ corte.compraFarmacia }}</td>
            <td> {{ corte.tipoCompraFarmacia }} </td>
            <td> {{ corte.retiroTarjeta }} </td>
            <td class="hidden md:table-cell text-orange-500">${{ corte.sobrante }}</td>
            <td class="hidden md:table-cell text-red-500">${{ corte.faltante }}</td>
            <td class="hidden md:table-cell text-teal-600">${{ corte.totalPorCajero }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup>
import { useFormStore } from '@/stores/formStore';
import { useRouter } from 'vue-router'
import { ref, onMounted } from 'vue';
import * as XLSX from 'xlsx';
import axios from 'axios'
import { obtenerRangoMesActual, formatearISOaYYYYMMDD } from '@/utils/fechas' // ajusta según tu estructura

const { fechaInicio, fechaFin } = obtenerRangoMesActual();
console.log(formatearISOaYYYYMMDD(fechaFin), formatearISOaYYYYMMDD(fechaInicio), 'jjjjj')

const formStore = useFormStore();
const router = useRouter()

const cortes = ref([])


const obtenerCortes = async () => {
  try {
    const response = await axios.post('http://localhost:3000/api/cortes/fechas-sucursal', {
      fechaInicio: formatearISOaYYYYMMDD(fechaInicio),
      fechaFin: formatearISOaYYYYMMDD(fechaFin),
      branchId: '86bd6d81-ee0d-4f63-b661-c058093e590a'
    })
    cortes.value = response.data
  } catch (error) {
    console.error('Error al obtener cortes:', error)
  }
}

const formatDateToDDMMYYYY = (dateString) => {
  const date = new Date(dateString);
  const day = String(date.getDate()).padStart(2, '0');     // Día con dos dígitos
  const month = String(date.getMonth() + 1).padStart(2, '0'); // Mes con dos dígitos (0-indexado)
  const year = date.getFullYear();                        // Año completo

  return `${day}/${month}/${year}`;
}

const formatTimeToHHMMAMPM = (dateString) => {
  const date = new Date(dateString);
  let hours = date.getHours();
  const minutes = String(date.getMinutes()).padStart(2, '0');
  const ampm = hours >= 12 ? 'PM' : 'AM';

  hours = hours % 12;
  hours = hours ? hours : 12; // La hora '0' debe ser '12'
  const formattedHours = String(hours).padStart(2, '0');

  return `${formattedHours}:${minutes} ${ampm}`;
}


onMounted(() => {
  obtenerCortes()
})

const exportarExcel = () => {
  const cortesData = cortes.value.map(corte => ({
    //ID: corte.id,
    Fecha: formatDateToDDMMYYYY(corte.fecha),
    Cajero: corte.cajero,
    Efectivo: `$${corte.efectivo}`,
    Tarjeta: `$${corte.tarjeta}`,
    Sobrante: `$${corte.sobrante}`,
    Faltante: `$${corte.faltante}`,
    Total: `$${corte.totalPorCajero}`
  }));

  const ws = XLSX.utils.json_to_sheet(cortesData);
  const wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, 'Cortes');
  XLSX.writeFile(wb, 'cortes.xlsx');
};

</script>

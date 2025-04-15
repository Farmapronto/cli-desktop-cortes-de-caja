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
    <th class="text-left px-4 py-2">Gastos Farmacia</th>
    <th class="text-left px-4 py-2">Concepto</th>
    <th class="text-left px-4 py-2">Tipo de Compra</th>
    <th class="text-left px-4 py-2">Compras</th>
    <th class="text-left px-4 py-2">Sobrante C1</th>
    <th class="text-left px-4 py-2">Sobrante C2</th>
    <th class="text-left px-4 py-2">Sobrante C3</th>
    <th class="text-left px-4 py-2">Sobrante C4</th>
    <th class="text-left px-4 py-2">Faltante C1</th>
    <th class="text-left px-4 py-2">Faltante C2</th>
    <th class="text-left px-4 py-2">Faltante C3</th>
    <th class="text-left px-4 py-2">Faltante C4</th>
    <th class="text-left px-4 py-2">78%</th>
    <th class="text-left px-4 py-2">22%</th>
    <th class="text-left px-4 py-2">TOTAL A DÉPOSITAR</th>

  </tr>
</thead>

<tbody>
  <tr v-for="(data, fecha) in cortesAgrupados" :key="fecha">
    <td>{{ fecha }}</td>
    <td v-for="i in 4" :key="i">{{ data.cajeros[i].efectivo || '-' }}</td>
    <td v-for="i in 4" :key="'tarjeta' + i">{{ data.cajeros[i].tarjeta || '-' }}</td>
    <td>{{ data.totalEfectivo || '-' }}</td>
    <td>{{ data.totalTarjeta || '-' }}</td>
    <td>{{ data.totalGastoFarmacia || '-' }}</td>
    <td>{{ data.concepto || '-' }}</td> <!-- Esto depende de que tengas esa propiedad -->
    <td>{{ data.tipoCompra || '-' }}</td> <!-- Esto también -->
    <td>{{ data.totalCompraFarmacia || '-' }}</td>
    <td>{{ data.cajeros[1].sobrante || '-' }}</td>
    <td>{{ data.cajeros[2].sobrante || '-' }}</td>
    <td>{{ data.cajeros[3].sobrante || '-' }}</td>
    <td>{{ data.cajeros[4].sobrante || '-' }}</td>
    <td>{{ data.cajeros[1].faltante || '-' }}</td>
    <td>{{ data.cajeros[2].faltante || '-' }}</td>
    <td>{{ data.cajeros[3].faltante || '-' }}</td>
    <td>{{ data.cajeros[4].faltante || '-' }}</td>
    <td>{{ data.porcentajeADepositar || '-' }}</td>
    <td>{{ data.restoADepositar || '-' }}</td>
    <td>{{ data.totalADepositar || '-' }}</td>
  </tr>
</tbody>

</table>

      </div>
    </div>
  </template>
  
<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'
import * as XLSX from 'xlsx'

// Parámetros para la petición
const branchId = '86bd6d81-ee0d-4f63-b661-c058093e590a'
const fechaInicio = '2025-04-01'
const fechaFin = '2025-04-30'

// Donde se guarda la data agrupada por fecha
const cortesAgrupados = ref({})

// Para los totales de los cards resumen
const totalVentas = ref(0)
const totalTarjetas = ref(0)
const totalSobrantes = ref(0)
const totalFaltantes = ref(0)

const fetchCortes = async () => {
  try {
    const response = await axios.post('http://localhost:3000/api/cortes/detalle', {
      branchId,
      fechaInicio,
      fechaFin
    })

    const data = response.data
    const grupos = {}
    let ventas = 0
    let tarjetas = 0
    let sobrantes = 0
    let faltantes = 0

    data.forEach((corte) => {
      const fecha = corte.fecha
      grupos[fecha] = {
        cajeros: {
          1: corte.cajeros['1'] || {},
          2: corte.cajeros['2'] || {},
          3: corte.cajeros['3'] || {},
          4: corte.cajeros['4'] || {}
        },
        totalEfectivo: corte.totalEfectivo,
        totalTarjeta: corte.totalTarjeta,
        totalGastoFarmacia: corte.totalGastoFarmacia,
        totalCompraFarmacia: corte.totalCompraFarmacia,
        totalSobrante: corte.totalSobrante,
        totalFaltante: corte.totalFaltante,
        totalADepositar: corte.totalADepositar,
        porcentajeADepositar: corte.porcentajeADepositar,
        restoADepositar: corte.restoADepositar
      }

      ventas += corte.totalEfectivo
      tarjetas += corte.totalTarjeta
      sobrantes += corte.totalSobrante
      faltantes += corte.totalFaltante
    })

    cortesAgrupados.value = grupos
    totalVentas.value = ventas
    totalTarjetas.value = tarjetas
    totalSobrantes.value = sobrantes
    totalFaltantes.value = faltantes
  } catch (error) {
    console.error('Error al obtener los cortes:', error)
  }
}

// Ejecutar al montar componente
onMounted(() => {
  fetchCortes()
})

const exportToExcel = () => {
  const data = []

  for (const fecha in cortesAgrupados.value) {
    const corte = cortesAgrupados.value[fecha]

    // Cajeros y tarjetas individuales
    const cajero1 = corte.cajeros['1'] || {}
    const cajero2 = corte.cajeros['2'] || {}
    const cajero3 = corte.cajeros['3'] || {}
    const cajero4 = corte.cajeros['4'] || {}

    data.push({
      'Fecha': fecha,

      // Efectivo por cajero (sumamos todo menos tarjetas)
      'Cajero 1': totalSinTarjetas(cajero1),
      'Cajero 2': totalSinTarjetas(cajero2),
      'Cajero 3': totalSinTarjetas(cajero3),
      'Cajero 4': totalSinTarjetas(cajero4),

      // Tarjetas individuales (se asume tarjeta1 a tarjeta4)
      'Tarjeta 1': sumaTarjetaN([cajero1, cajero2, cajero3, cajero4], 'tarjeta1'),
      'Tarjeta 2': sumaTarjetaN([cajero1, cajero2, cajero3, cajero4], 'tarjeta2'),
      'Tarjeta 3': sumaTarjetaN([cajero1, cajero2, cajero3, cajero4], 'tarjeta3'),
      'Tarjeta 4': sumaTarjetaN([cajero1, cajero2, cajero3, cajero4], 'tarjeta4'),

      'Venta Total': corte.totalEfectivo || 0,
      'Total Tarjetas': corte.totalTarjeta || 0,
      'Gastos Farmacia': corte.totalGastoFarmacia || 0,

      'Concepto': '', // Puedes rellenar si aplica
      'Tipo de Compra': '',

      'Compras': corte.totalCompraFarmacia || 0,

      'Sobrante C1': cajero1.sobrante || 0,
      'Sobrante C2': cajero2.sobrante || 0,
      'Sobrante C3': cajero3.sobrante || 0,
      'Sobrante C4': cajero4.sobrante || 0,

      'Faltante C1': cajero1.faltante || 0,
      'Faltante C2': cajero2.faltante || 0,
      'Faltante C3': cajero3.faltante || 0,
      'Faltante C4': cajero4.faltante || 0,

      '78%': corte.porcentajeADepositar || 0,
      '22%': corte.restoADepositar || 0,

      'TOTAL A DÉPOSITAR': corte.totalADepositar || 0
    })
  }

  const worksheet = XLSX.utils.json_to_sheet(data)
  const workbook = XLSX.utils.book_new()
  XLSX.utils.book_append_sheet(workbook, worksheet, 'Cortes')
  XLSX.writeFile(workbook, 'cortes.xlsx')
}

// Helpers
const totalSinTarjetas = (cajero) => {
  let total = 0
  for (const key in cajero) {
    if (!key.includes('tarjeta')) {
      total += cajero[key] || 0
    }
  }
  return total
}

const sumaTarjetaN = (cajeros, tarjetaKey) => {
  return cajeros.reduce((acc, cajero) => {
    return acc + (cajero[tarjetaKey] || 0)
  }, 0)
}

</script>
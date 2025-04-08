<template>
  <div class="space-y-4">
    <div class="flex gap-4">
      <label class="label"><span class="label-text">Gasto farmacia ($)</span></label>
      <input
        type="number"
        min="0"
        class="input input-bordered w-full"
        v-model="formStore.corteActual.gastos.gastoFarmacia"
        placeholder="0.00"
      />

      <label class="label"><span>Concepto</span></label>
      <input
        type="text"
        class="input input-bordered p-2 w-full"
        v-model="formStore.corteActual.gastos.conceptoGastoFarmacia"
        placeholder="Ingresa un concepto"
      />
    </div>

    <div>
      <label class="label"><span class="label-text">Compras farmacia ($)</span></label>
      <div class="flex gap-2">
        <input
          type="number"
          min="0"
          class="input input-bordered w-full"
          v-model="formStore.corteActual.gastos.comprasFarmacia"
          placeholder="0.00"
        />
        <select
          class="select select-bordered"
          v-model="formStore.corteActual.gastos.tipoCompraFarmacia"
        >
          <option value="" disabled selected>Selecciona</option>
          <option value="Pepsi">Pepsi</option>
          <option value="Holanda">Holanda</option>
        </select>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useFormStore } from '@/stores/formStore'
const formStore = useFormStore()
</script>

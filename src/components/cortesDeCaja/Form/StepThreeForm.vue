<template>
    <div class="space-y-4">
      <div>
        <label class="label"><span class="label-text">Sobrante ($)</span></label>
        <input
          type="number"
          min="0"
          class="input input-bordered w-full"
          v-model="formStore.corteActual.corte.sobrante"
          placeholder="0.00"
        />
      </div>
  
      <div>
        <label class="label"><span class="label-text">Faltante ($)</span></label>
        <input
          type="number"
          min="0"
          class="input input-bordered w-full"
          v-model="formStore.corteActual.corte.faltante"
          placeholder="0.00"
        />
      </div>
      <div>
        <label class="label"><span class="label-text">Retiro con tarjeta ($)</span></label>
        <input
          type="number"
          min="0"
          class="input input-bordered w-full"
          v-model="formStore.corteActual.movimientos.retiroTarjeta"
          placeholder="0.00"
          disabled
        />
      </div>
    </div>
  </template>
  
  <script setup>
  import { useFormStore } from '@/stores/formStore'
  const formStore = useFormStore()
  </script>
  
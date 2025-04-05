<template>
    <div class="space-y-4">
      <div>
        <label class="label"><span class="label-text">Fecha</span></label>
        <input
          type="date"
          class="input input-bordered w-full"
          v-model="formStore.corteActual.fecha"
        />
      </div>
  
      <div>
        <label class="label"><span class="label-text">Cajero</span></label>
        <select class="select select-bordered w-full" v-model="formStore.corteActual.cajero">
          <option disabled value="">Selecciona un cajero</option>
          <option>Cajero 1</option>
          <option>Cajero 2</option>
          <option>Cajero 3</option>
          <option>Cajero 4</option>
        </select>
      </div>
    </div>
  </template>
  
  <script setup>
  import { useFormStore } from '@/stores/formStore'
  const formStore = useFormStore()
  
</script>
  
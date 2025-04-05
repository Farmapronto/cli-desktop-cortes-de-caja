<template>
    <div
      v-if="visible"
      class="toast toast-top toast-end z-50"
    >
      <div class="alert alert-success shadow-lg">
        <span>✅ {{ message }}</span>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, watch, onMounted } from 'vue'
  
  const props = defineProps({
    show: Boolean,
    message: String
  })
  
  const visible = ref(false)
  
  watch(() => props.show, (val) => {
    if (val) {
      visible.value = true
      setTimeout(() => {
        visible.value = false
      }, 2500)
    }
  })
  </script>
  
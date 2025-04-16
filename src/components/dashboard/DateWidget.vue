<script setup>
import { ref, onMounted } from 'vue'

const today = ref('')

onMounted(() => {
	const date = new Date()
	const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }
	today.value = date.toLocaleDateString('es-MX', options)
})
</script>

<template>
	<div
		class="bg-white shadow-xl rounded-2xl p-6 flex items-center gap-4 transition-transform duration-300 hover:scale-[1.01] border-l-4 border-blue-600"
	>
		<div class="bg-blue-600 text-white p-3 rounded-full shadow">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				stroke-width="1.5"
				stroke="currentColor"
				class="w-6 h-6"
			>
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 
					2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
				/>
			</svg>
		</div>
		<div>
			<p class="text-sm text-gray-500">Hoy es</p>
			<p class="text-lg font-semibold text-blue-800">{{ today }}</p>
		</div>
	</div>
</template>

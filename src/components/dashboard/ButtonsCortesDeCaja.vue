<script setup>
import { DocumentTextIcon, EyeIcon } from '@heroicons/vue/24/outline';
</script>

<template>
	<div class="flex flex-col sm:flex-row gap-4 mt-4">
		<router-link to="/newcorte">
			<button
				class="flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-700 text-white font-semibold 
							rounded-xl shadow-lg hover:scale-105 hover:shadow-xl transition-transform duration-300 w-full sm:w-auto"
			>
				<DocumentTextIcon class="w-6 h-6" />
				Generar Corte de Caja
			</button>
		</router-link>
		<router-link to="/cortes">
			<button
				class="flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-gray-500 to-gray-700 text-white font-semibold 
							rounded-xl shadow-lg hover:scale-105 hover:shadow-xl transition-transform duration-300 w-full sm:w-auto"
			>
				<EyeIcon class="w-6 h-6" />
				Ver Cortes
			</button>
		</router-link>
	</div>
</template>

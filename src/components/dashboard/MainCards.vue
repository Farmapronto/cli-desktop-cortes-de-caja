<template>
	<div class="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-1 gap-8">
		<div class="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
			<h3 class="text-xl font-semibold text-dark">Card 1</h3>
			<p class="mt-4 text-gray-600">Details about this card.</p>
			<ButtonsCortesDeCaja />
		</div>
	</div>
</template>

<script>

import ButtonsCortesDeCaja from '@/components/dashboard/ButtonsCortesDeCaja.vue';

export default {
	components: {
		ButtonsCortesDeCaja
	}
};

</script>
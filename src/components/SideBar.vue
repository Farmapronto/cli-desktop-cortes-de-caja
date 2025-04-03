<template>
	<!-- Sidebar -->
	<div :class="{'w-64': isSidebarOpen, 'w-20': !isSidebarOpen}" class="transition-all duration-300 bg-primary text-white p-4">
	<div class="flex items-center justify-between mb-8">
		<div v-if="isSidebarOpen" class="text-2xl font-semibold">
			<img src="@/assets/farmapronto-logo-white.png" alt="">
		</div>
		<button @click="toggleSidebar" class="text-white focus:outline-none">
			<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
				<path :d="isSidebarOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'" />
			</svg>
		</button>
	</div>

	<!-- Menu Items -->
	<ul class="space-y-6">
		<li>
			<a href="#" class="flex items-center space-x-3 hover:text-accent transition-colors">
				<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
					<path d="M3 12l2 2 5-5 4 4 7-7" />
				</svg>
				<span v-if="isSidebarOpen">Home</span>
			</a>
		</li>
		<li>
			<a href="#" class="flex items-center space-x-3 hover:text-accent transition-colors">
				<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
					<path d="M12 2v20m10-10H2" />
				</svg>
				<span v-if="isSidebarOpen">Analytics</span>
			</a>
		</li>
		<li>
			<a href="#" class="flex items-center space-x-3 hover:text-accent transition-colors">
				<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
					<path d="M3 3h18v18H3z" />
				</svg>
				<span v-if="isSidebarOpen">Settings</span>
			</a>
		</li>
	</ul>
</div>

</template>

<script>

export default {
	data() {
		return {
			isSidebarOpen: false,
		};
	},
	methods: {
		toggleSidebar() {
			this.isSidebarOpen = !this.isSidebarOpen;
		},
	},
};

</script>
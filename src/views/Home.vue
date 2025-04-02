<template>
    <div class="flex h-screen bg-gray-50">
      <!-- Sidebar -->
      <div :class="{'w-64': isSidebarOpen, 'w-20': !isSidebarOpen}" class="transition-all duration-300 bg-primary text-white p-4">
        <div class="flex items-center justify-between mb-8">
          <div v-if="isSidebarOpen" class="text-2xl font-semibold">Farmapronto</div>
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
  
      <!-- Main Content -->
      <div class="flex-1 p-8">
        <!-- Topbar -->
        <div class="flex justify-between items-center mb-8">
          <h1 class="text-3xl font-semibold text-dark">Farmapronto</h1>
          <div class="flex items-center space-x-4">
            <button @click="toggleSidebar" class="md:hidden text-primary">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path :d="isSidebarOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'" />
              </svg>
            </button>
            <div class="relative">
              <button class="rounded-full p-2 hover:bg-gray-200 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
  
        <!-- Main Cards -->
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div class="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
            <h3 class="text-xl font-semibold text-dark">Card 1</h3>
            <p class="mt-4 text-gray-600">Details about this card.</p>
          </div>
          <div class="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
            <h3 class="text-xl font-semibold text-dark">Card 2</h3>
            <p class="mt-4 text-gray-600">Details about this card.</p>
          </div>
          <div class="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
            <h3 class="text-xl font-semibold text-dark">Card 3</h3>
            <p class="mt-4 text-gray-600">Details about this card.</p>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        isSidebarOpen: true,  // Control if sidebar is open or closed
      };
    },
    methods: {
      toggleSidebar() {
        this.isSidebarOpen = !this.isSidebarOpen;
      },
    },
  };
  </script>
  
  <style scoped>
  /* Transitions for smooth opening/closing of the sidebar */
  .transition-all {
    transition: all 0.3s ease;
  }
  
  .md\\:hidden {
    display: none;
  }
  
  /* Enhance accessibility */
  button:focus {
    outline: none;
  }
  </style>
  
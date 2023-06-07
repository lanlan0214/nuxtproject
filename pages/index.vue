<template>
  <div class="flex flex-ol py-10">
    <div>
      <h2 class="text-2xl font-bold text-center">Nuxt Movie App</h2>
    </div>
    <div class="flex justify-center items-center h-32">
      <input class="px-2 border border-gray-800 rounded-md min-w-64" type="text" v-model="searchTerm"
        placeholder="Search...">
    </div>
    {{ searchTerm }}
  </div>
</template>

<script setup lang="ts">
// 這裡使用API響應
import { APIResponse } from '~/types/APIResponse';

const searchTerm = ref('');

const url = computed(() => {
  return `api/movies/search`
})

</script>
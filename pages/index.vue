<template>
  <div class="flex flex-ol py-10">
    <div>
      <h2 class="text-2xl font-bold text-center">Nuxt Movie App</h2>
    </div>
    <div class="flex justify-center items-center h-32">
      <input class="px-2 border border-gray-800 rounded-md min-w-64" type="text" v-model="searchTerm"
        placeholder="Search...">
    </div>
    <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 self-center gap-x-10 gap-y-10 mb-10">
      <div v-for="movie in data?.results">
        {{ movie.title }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// 這裡使用API響應
import { ApiResponse } from '~/types/APIResponse';

const searchTerm = ref('');

const url = computed(() => {
  return `api/movies/search?query=${searchTerm.value}`
})

const { data } = await useFetch<ApiResponse>(url)

</script>
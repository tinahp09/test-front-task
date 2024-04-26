
<template>
    <div class="text-center">
      <v-pagination
        :length="recordcount"
        :total-visible="7"  
        next-icon="mdi-menu-right"
        prev-icon="mdi-menu-left"
      ></v-pagination>
    </div>
  </template>
  
  <script setup lang="ts">


  const props = 
    defineProps<{
        recordcount: number
    }>()
    </script>
  


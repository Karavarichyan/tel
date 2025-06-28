<template>
  <div class="relative w-full aspect-[3/4] rounded-lg overflow-hidden cursor-pointer">
    <img :src="imageSrc" :alt="categoryName" class="absolute inset-0 w-full h-full object-cover" />
    <div class="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black to-transparent text-white text-lg font-semibold">
      {{ categoryName }}
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  categoryName: string;
  imageSrc: string;
}


defineProps<Props>();
</script>


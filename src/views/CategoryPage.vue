<template>
  <div class="bg-violet-950 min-h-screen text-white flex flex-col">
    <header class="bg-purple-900 py-4 px-4 flex items-center">
      <button @click="goBack" class="mr-4">
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
        </svg>
      </button>
      <h1 class="text-2xl font-bold flex-grow text-center">
        {{ categoryName }} </h1>
      <div class="w-6 h-6 mr-4 opacity-0"></div>
    </header>

    <main class="flex-grow p-4 overflow-y-auto custom-scrollbar">
      <div v-if="loading" class="text-center text-lg mt-8">Загрузка изображений...</div>
      <div v-else-if="error" class="text-center text-red-500 mt-8">Ошибка загрузки: {{ error.message }}</div>
      <div v-else class="grid grid-cols-2 gap-4">
        <div
          v-for="image in images"
          :key="image.id"
          class="relative w-full aspect-[3/4] rounded-2xl overflow-hidden cursor-pointer"
          @click="openImage(image.url)"
        >
          <img :src="image.url" :alt="`Image ${image.id}`" class="absolute inset-0 w-full h-full object-cover" />
        </div>
      </div>
    </main>

    <nav class="bg-purple-900 py-3 px-4 flex justify-around items-center">
      <div class="flex flex-col items-center text-sm cursor-pointer" @click="goToHome">
        <svg class="w-6 h-6 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 21l-7-7L3 14l8-8m5 5l-5 5-5-5m10 5l-7-7"></path>
        </svg>
        <span>Стили</span>
      </div>
      <div class="flex flex-col items-center text-sm cursor-pointer" @click="goToPayment">
        <svg class="w-6 h-6 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
        </svg>
        <span>Доступ</span>
      </div>
    </nav>

    <div v-if="showModal" class="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4" @click.self="closeImage">
      <div class="relative max-w-full max-h-full">
        <img :src="currentImageSrc" class="max-w-full max-h-[90vh] object-contain rounded-2xl" />
        <button @click="closeImage" class="absolute top-4 right-4 text-white text-3xl font-bold">&times;</button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, computed } from 'vue';
import { useRouter } from 'vue-router'; 
import { api, type ImageItem, type Category as ApiCategory } from '../api';

interface Props {
  id: string;
}


const { id: routeId } = defineProps<Props>();

const router = useRouter();

const categoryId = computed(() => parseInt(routeId));
const categoryName = ref('Загрузка...');
const images = ref<ImageItem[]>([]);
const loading = ref(true);
const error = ref<Error | null>(null);

const showModal = ref(false);
const currentImageSrc = ref('');

const getCategoryNameById = (id: number): string => {
  const categories: ApiCategory[] = [
    { id: 1, name: 'Модели', image: '/modeli.jpg' },
    { id: 2, name: 'За рулем', image: '/za_rulem.jpg' },
    { id: 3, name: 'На яхте', image: '/na_yakhte.jpg' },
    { id: 4, name: 'Кинозвезда', image: '/kinozvezda.jpg' },
    { id: 5, name: 'Спорт', image: '/sport.jpg' },
    { id: 6, name: 'Природа', image: '/priroda.jpg' },
  ];
  const foundCategory = categories.find(cat => cat.id === id);
  return foundCategory ? foundCategory.name : 'Категория';
};

const fetchImages = async () => {
  try {
    loading.value = true;
    error.value = null;
    const data = await api.getCategoryImages(categoryId.value);
    images.value = data;
    categoryName.value = getCategoryNameById(categoryId.value);
  } catch (err) {
    error.value = err as Error;
  } finally {
    loading.value = false;
  }
};

onMounted(fetchImages);

const goBack = () => {
  router.back();
};

const openImage = (imageUrl: string) => {
  currentImageSrc.value = imageUrl;
  showModal.value = true;
};

const closeImage = () => {
  showModal.value = false;
  currentImageSrc.value = '';
};

const goToHome = () => {
  router.push({ name: 'Home' });
};

const goToPayment = () => {
  router.push({ name: 'Payment' });
};
</script>

<style scoped>
.custom-scrollbar::-webkit-scrollbar {
  width: 8px;
}

.custom-scrollbar::-webkit-scrollbar-track {
  background: #331A47;
  border-radius: 10px;
}

.custom-scrollbar::-webkit-scrollbar-thumb {
  background: #6B4E9F;
  border-radius: 10px;
}

.custom-scrollbar::-webkit-scrollbar-thumb:hover {
  background: #7C5BB8;
}
</style>

<!-- <template>
  <div class="bg-violet-950 min-h-screen text-white flex flex-col">
    <header class="bg-purple-900 py-4 px-4 text-center">
      <h1 class="text-2xl font-bold">Нейрофотограф</h1>
    </header>

    <main class="flex-grow p-4">
      <div class="grid grid-cols-2 gap-4">
        <CategoryCard
          v-for="category in categories"
          :key="category.id"
          :category-name="category.name"
          :image-src="category.image"
          @click="goToCategory(category.id)"
        />
      </div>
    </main>

    <nav class="bg-purple-900 py-3 px-4 flex justify-around items-center">
      <div class="flex flex-col items-center text-sm">
        <svg class="w-6 h-6 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 21l-7-7L3 14l8-8m5 5l-5 5-5-5m10 5l-7-7"></path>
        </svg>
        <span>Стили</span>
      </div>
      <div class="flex flex-col items-center text-sm">
        <svg class="w-6 h-6 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
        </svg>
        <span>Доступ</span>
      </div>
    </nav>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import CategoryCard from '../components/CategoryCard.vue';
import { useRouter } from 'vue-router';

interface Category {
  id: number;
  name: string;
  image: string; // URL изображения
}

const categories = ref<Category[]>([

  { id: 1, name: 'Модели', image: '/modeli.jpg' },

  { id: 2, name: 'За рулем', image: '/za_rulem.jpg' },

  { id: 3, name: 'На яхте', image: '/na_yakhte.jpg' },

  { id: 4, name: 'Кинозвезда', image: '/kinozvezda.jpg' },

  { id: 5, name: 'Спорт', image: '/sport.jpg' },

  { id: 6, name: 'Природа', image: '/priroda.jpg' },

]);

const router = useRouter();

const goToCategory = (categoryId: number) => {
  router.push({ name: 'Category', params: { id: categoryId.toString() } });
};
</script>

<style scoped>
/* Дополнительные стили, если понадобятся */
</style> -->
<!--

<template>
  <div class="bg-violet-950 min-h-screen text-white flex flex-col">
    <header class="bg-purple-900 py-4 px-4 text-center">
      <h1 class="text-2xl font-bold">Нейрофотограф</h1>
    </header>

    <main class="flex-grow p-4">
      <div v-if="loading" class="text-center text-lg mt-8">Загрузка категорий...</div>
      <div v-else-if="error" class="text-center text-red-500 mt-8">Ошибка загрузки: {{ error.message }}</div>
      <div v-else class="grid grid-cols-2 gap-4">
        <CategoryCard
          v-for="category in categories"
          :key="category.id"
          :category-name="category.name"
          :image-src="category.image"
          @click="goToCategory(category.id)"
        />
      </div>
    </main>

    <nav class="bg-purple-900 py-3 px-4 flex justify-around items-center">
      <div class="flex flex-col items-center text-sm">
        <svg class="w-6 h-6 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 21l-7-7L3 14l8-8m5 5l-5 5-5-5m10 5l-7-7"></path>
        </svg>
        <span>Стили</span>
      </div>
      <div class="flex flex-col items-center text-sm">
        <svg class="w-6 h-6 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
        </svg>
        <span>Доступ</span>
      </div>
    </nav>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import CategoryCard from '../components/CategoryCard.vue';
import { useRouter } from 'vue-router';
import { api, Category } from '../api'; // Импортируем наш API сервис и тип Category

const categories = ref<Category[]>([]);
const loading = ref(true); // Состояние загрузки
const error = ref<Error | null>(null); // Состояние ошибки

const router = useRouter();

const fetchCategories = async () => {
  try {
    loading.value = true;
    error.value = null;
    const data = await api.getCategories();
    categories.value = data;
  } catch (err) {
    error.value = err as Error; // Приводим ошибку к типу Error
  } finally {
    loading.value = false;
  }
};

// Вызываем функцию получения категорий при монтировании компонента
onMounted(fetchCategories);

const goToCategory = (categoryId: number) => {
  router.push({ name: 'Category', params: { id: categoryId.toString() } });
};
</script>

<style scoped>
/* Дополнительные стили, если понадобятся */
</style> -->
<template>
  <div class="bg-violet-950 min-h-screen text-white flex flex-col">
    <header class="bg-purple-900 py-4 px-4 text-center">
      <h1 class="text-2xl font-bold">Нейрофотограф</h1>
    </header>

    <main class="flex-grow p-4">
      <div v-if="loading" class="text-center text-lg mt-8">Загрузка категорий...</div>
      <div v-else-if="error" class="text-center text-red-500 mt-8">Ошибка загрузки: {{ error.message }}</div>
      <div v-else class="grid grid-cols-2 gap-4">
        <CategoryCard
          v-for="category in categories"
          :key="category.id"
          :category-name="category.name"
          :image-src="category.image"
          @click="goToCategory(category.id)"
        />
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
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import CategoryCard from '../components/CategoryCard.vue';
import { useRouter } from 'vue-router';
import { api, type Category } from '../api';

const categories = ref<Category[]>([]);
const loading = ref(true);
const error = ref<Error | null>(null);

const router = useRouter();

const fetchCategories = async () => {
  try {
    loading.value = true;
    error.value = null;
    const data = await api.getCategories();
    categories.value = data;
  } catch (err) {
    error.value = err as Error;
  } finally {
    loading.value = false;
  }
};

onMounted(fetchCategories);

const goToCategory = (categoryId: number) => {
  router.push({ name: 'Category', params: { id: categoryId.toString() } });
};

const goToHome = () => {
  router.push({ name: 'Home' });
};

const goToPayment = () => {
  router.push({ name: 'Payment' });
};
</script>


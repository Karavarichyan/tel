<template>
  <div class="bg-violet-950 min-h-screen text-white flex flex-col">
    <header class="bg-purple-900 py-4 px-4 text-center">
      <h1 class="text-2xl font-bold">Получить доступ</h1>
    </header>

    <main class="flex-grow p-4 overflow-y-auto custom-scrollbar">
      <div class="mb-6 bg-violet-900 p-4 rounded-lg">
        <div class="flex items-center justify-center space-x-2">
          <div class="grid grid-cols-2 gap-1 flex-shrink-0">
             <img
              src="/pay_previews/image1.jpg"
              class="w-20 h-20 object-cover rounded-md"
              alt="Face 1"
            />

                       
            <img
              src="/pay_previews/image2.jpg"
              class="w-20 h-20 object-cover rounded-md"
              alt="Face 2"
            />

                       
            <img
              src="/pay_previews/image3.jpg"
              class="w-20 h-20 object-cover rounded-md"
              alt="Face 3"
            />

                       
            <img
              src="/pay_previews/image4.jpg"
              class="w-20 h-20 object-cover rounded-md"
              alt="Face 4"
            />
          </div>

          <svg
            class="w-10 h-10 text-white flex-shrink-0"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            ></path>
          </svg>

          <div class="grid grid-cols-2 gap-1 flex-shrink-0">
             <img
              src="/pay_previews/image1.jpg"
              class="w-20 h-20 object-cover rounded-md"
              alt="Generated 1"
            />

                       
            <img
              src="/pay_previews/image2.jpg"
              class="w-20 h-20 object-cover rounded-md"
              alt="Generated 2"
            />

                       
            <img
              src="/pay_previews/image3.jpg"
              class="w-20 h-20 object-cover rounded-md"
              alt="Generated 3"
            />

                       
            <img
              src="/pay_previews/image4.jpg"
              class="w-20 h-20 object-cover rounded-md"
              alt="Generated 4"
            />

                       
            <img
              src="/pay_previews/image1.jpg"
              class="w-20 h-20 object-cover rounded-md"
              alt="Generated 5"
            />
          </div>
        </div>
        <div class="text-center text-sm mt-4 text-gray-300">
          Мы не накладываем твое лицо на фото, а генерируем твое фото по любому
          запросу.
        </div>
      </div>

      <div class="bg-purple-800 rounded-lg p-4 mb-6">
        <div v-if="loading" class="text-center text-lg">
          Загрузка тарифов...
        </div>
        <div v-else-if="error" class="text-center text-red-500">
          Ошибка загрузки тарифов: {{ error.message }}
        </div>
        <div v-else>
          <div
            v-for="pkg in packages"
            :key="pkg.id"
            class="flex items-center justify-between py-3 border-b border-purple-700 last:border-b-0"
          >
            <div>
              <div class="text-lg font-semibold">
                {{ pkg.generations }} генераций
              </div>
            </div>
            <div class="flex items-center">
              <div class="text-lg font-bold mr-3">
                {{ pkg.price }} {{ pkg.currency }}
              </div>
              <span
                v-if="pkg.oldPrice"
                class="text-sm line-through text-gray-400 mr-2"
                >{{ pkg.oldPrice }} {{ pkg.currency }}</span
              >
              <button
                @click="selectPackage(pkg.id)"
                :class="[
                  'px-4 py-2 rounded-full text-sm font-semibold',
                  selectedPackageId === pkg.id
                    ? 'bg-orange-500 text-white'
                    : 'bg-purple-600 hover:bg-purple-700',
                ]"
              >
                {{ selectedPackageId === pkg.id ? 'Выбрано' : 'Выбрать' }}
              </button>
            </div>
          </div>
        </div>
      </div>

      <div class="mb-6 text-sm text-gray-300">
        <p class="mb-4">
          Нейросеть создаст до 10-15-ти фото твоего лица по любому описанию,
          сохраняя при этом четкие черты твоего лица, волос и аксессуаров.
        </p>
        <p class="mb-4">
          После ты можешь безлимитно генерировать изображения себя как в
          предложенными нами образах, так и придумывать свои.
        </p>
        <ul class="space-y-2">
          <li class="flex items-start">
            <svg
              class="w-5 h-5 text-gray-400 mr-2 flex-shrink-0"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              ></path>
            </svg>
            <span
              >Проведи онлайн фотосессию в любом локации мира без вложений</span
            >
          </li>
          <li class="flex items-start">
            <svg
              class="w-5 h-5 text-gray-400 mr-2 flex-shrink-0"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              ></path>
            </svg>
            <span>Пример: от себя до любого бренда</span>
          </li>
          <li class="flex items-start">
            <svg
              class="w-5 h-5 text-gray-400 mr-2 flex-shrink-0"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              ></path>
            </svg>
            <span>Плюсы: какие цвета одежды тебе идут больше всего?</span>
          </li>
          <li class="flex items-start">
            <svg
              class="w-5 h-5 text-gray-400 mr-2 flex-shrink-0"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              ></path>
            </svg>
            <span>Создай яркий контент для своих соц. сетей или рекламы</span>
          </li>
          <li class="flex items-start">
            <svg
              class="w-5 h-5 text-gray-400 mr-2 flex-shrink-0"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              ></path>
            </svg>
            <span>Создай индивидуально будущего со своим участием</span>
          </li>
        </ul>
      </div>

      <button
        @click="processPayment"
        :disabled="!selectedPackageId || processingPayment"
        class="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-4 rounded-full text-lg transition duration-300"
        :class="{
          'opacity-50 cursor-not-allowed':
            !selectedPackageId || processingPayment,
        }"
      >
        {{ processingPayment ? 'Обработка...' : 'Получить доступ' }}
      </button>
    </main>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { api, type Package } from '../api'
interface PaymentPackage extends Package {
  oldPrice?: number
}

const packages = ref<PaymentPackage[]>([])
const selectedPackageId = ref<number | null>(null)
const loading = ref(true)
const error = ref<Error | null>(null)
const processingPayment = ref(false)

const fetchPackages = async () => {
  try {
    loading.value = true
    error.value = null
    const data = await api.getPackages()
    packages.value = data as PaymentPackage[]
    if (data.length > 0) {
      selectedPackageId.value = data[0].id
    }
  } catch (err) {
    error.value = err as Error
  } finally {
    loading.value = false
  }
}

onMounted(fetchPackages)

const selectPackage = (packageId: number) => {
  selectedPackageId.value = packageId
}

const processPayment = async () => {
  if (!selectedPackageId.value) {
    alert('Пожалуйста, выберите тарифный план.')
    return
  }

  processingPayment.value = true
  try {

    const mockInitData = 'mock_init_data_from_telegram'

    const response = await api.createInvoice(
      mockInitData,
      selectedPackageId.value
    )
    const paymentUrl = response.paymentUrl

    if (paymentUrl) {
      window.location.href = paymentUrl
    } else {
      alert('Не удалось получить URL для оплаты.')
    }
  } catch (err) {
    console.error('Ошибка при оплате:', err)
    alert('Произошла ошибка при обработке платежа. Попробуйте еще раз.')
  } finally {
    processingPayment.value = false
  }
}
</script>

<style scoped>
.custom-scrollbar::-webkit-scrollbar {
  width: 8px;
}

.custom-scrollbar::-webkit-scrollbar-track {
  background: #331a47;
  border-radius: 10px;
}

.custom-scrollbar::-webkit-scrollbar-thumb {
  background: #6b4e9f;
  border-radius: 10px;
}

.custom-scrollbar::-webkit-scrollbar-thumb:hover {
  background: #7c5bb8; 
}
</style>

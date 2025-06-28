import axios from 'axios';

const API_BASE_URL = 'http://localhost:3000';


const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export interface Category {
  id: number;
  name: string;
  image: string;
}

export interface ImageItem {
  id: number;
  url: string;
}

export interface Package {
  id: number;
  name: string;
  price: number;
  generations: number;
  currency: string;
  oldPrice?: number;
}


// const mockCategories: Category[] = [
//   { id: 1, name: 'Модели', image: '/modeli.jpg' },
//   { id: 2, name: 'За рулем', image: '/za_rulem.jpg' },
//   { id: 3, name: 'На яхте', image: '/na_yakhte.jpg' },
//   { id: 4, name: 'Кинозвезда', image: '/kinozvezda.jpg' },
//   { id: 5, name: 'Спорт', image: '/sport.jpg' },
//   { id: 6, name: 'Природа', image: '/priroda.jpg' },
// ];

// const mockImages: ImageItem[] = [
//   { id: 101, url: '/models/image1.jpg' },
//   { id: 102, url: '/models/image2.jpg' },
//   { id: 103, url: '/models/image3.jpg' },
//   { id: 104, url: '/models/image4.jpg' },
//   { id: 105, url: '/models/image1.jpg' },
//   { id: 106, url: '/models/image2.jpg' },
//   { id: 107, url: '/models/image3.jpg' },
//   { id: 108, url: '/models/image4.jpg' },
// ];

// const mockPackages: Package[] = [
//   { id: 1, name: '10 генераций', generations: 10, price: 329, currency: '₽' },
//   { id: 2, name: '100 генераций', generations: 100, price: 1390, currency: '₽', oldPrice: 2890 },
//   { id: 3, name: '500 генераций', generations: 500, price: 4990, currency: '₽', oldPrice: 7990 },
// ];

export const api = {

  async getCategories(): Promise<Category[]> {
    console.log('Запрос GET /api/categories на реальный бэкенд');
    try {
      const response = await apiClient.get('/api/categories');
      return response.data;
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        console.error('Ошибка при получении категорий:', error.response?.data || error.message);
      } else {
        console.error('Неизвестная ошибка при получении категорий:', error);
      }
      throw error;
    }
  },


  async getCategoryImages(categoryId: number): Promise<ImageItem[]> {
    console.log(`Запрос GET /api/category/${categoryId}/images на реальный бэкенд`);
    try {
      const response = await apiClient.get(`/api/category/${categoryId}/images`);
      return response.data;
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        console.error('Ошибка при получении изображений категории:', error.response?.data || error.message);
      } else {
        console.error('Неизвестная ошибка при получении изображений категории:', error);
      }
      throw error;
    }
  },


  async getPackages(): Promise<Package[]> {
    console.log('Запрос GET /api/packages на реальный бэкенд');
    try {
      const response = await apiClient.get('/api/packages');
      return response.data;
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        console.error('Ошибка при получении пакетов:', error.response?.data || error.message);
      } else {
        console.error('Неизвестная ошибка при получении пакетов:', error);
      }
      throw error;
    }
  },

  /**

   * POST /api/invoices/create
   * @param initData
   * @param packageId
   */
  async createInvoice(initData: string, packageId: number): Promise<{ paymentUrl: string }> {
    console.log(`Отправка запроса POST /api/invoices/create на бэкенд для packageId: ${packageId} с initData: ${initData.substring(0, 30)}...`);
    try {
      const response = await apiClient.post('/api/invoices/create', { initData, packageId });
      return response.data;
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        console.error('Ошибка при создании инвойса через NestJS бэкенд:', error.response?.data || error.message);
        if (error.response && error.response.status === 400 && error.response.data) {
          console.error('Детали ошибки бэкенда:', error.response.data);
        }
      } else {
        console.error('Неизвестная ошибка при создании инвойса:', error);
      }
      throw error; 
    }
  },
};

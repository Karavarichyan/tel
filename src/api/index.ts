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

export const api = {
  async getCategories(): Promise<Category[]> {
    return Promise.resolve([
      { id: 1, name: 'Модели', image: '/modeli.jpg' },
      { id: 2, name: 'За рулем', image: '/za_rulem.jpg' },
      { id: 3, name: 'На яхте', image: '/na_yakhte.jpg' },
      { id: 4, name: 'Кинозвезда', image: '/kinozvezda.jpg' },
      { id: 5, name: 'Спорт', image: '/sport.jpg' },
      { id: 6, name: 'Природа', image: '/priroda.jpg' },
    ]);
  },

  async getCategoryImages(categoryId: number): Promise<ImageItem[]> {
    switch (categoryId) {
      case 1:
        return Promise.resolve([
          { id: 101, url: '/models/image1.jpg' },
          { id: 102, url: '/models/image2.jpg' },
          { id: 103, url: '/models/image3.jpg' },
          { id: 104, url: '/models/image4.jpg' },
        ]);
      case 2:
        return Promise.resolve([
          { id: 201, url: '/za_rulem/image1.jpg' },
          { id: 202, url: '/za_rulem/image2.jpg' },
        ]);
      default:
        return Promise.resolve([]);
    }
  },

  async getPackages(): Promise<Package[]> {
    return Promise.resolve([
      { id: 1, name: '10 генераций', generations: 10, price: 329, currency: '₽' },
      { id: 2, name: '100 генераций', generations: 100, price: 1390, currency: '₽', oldPrice: 2890 },
      { id: 3, name: '500 генераций', generations: 500, price: 4990, currency: '₽', oldPrice: 7990 },
    ]);
  },

  async createInvoice(_initData: string, _packageId: number): Promise<{ paymentUrl: string }> {
    return Promise.resolve({
      paymentUrl: 'https://example.com/payment/mock-success',
    });
  },
};

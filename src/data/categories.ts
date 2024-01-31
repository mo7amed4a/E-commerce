import customAxios from '../lib/axios';

export const categories = async (filter?: string) => {
    return await customAxios.get(`/categories/?populate=*&${filter}`);
}

export const bestCategories = async () => {
    return await customAxios.get(`/best-category?populate[categories][populate]=*`);
}


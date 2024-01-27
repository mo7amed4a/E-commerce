import customAxios from '../lib/axios';

export const categories = async (filter?: string) => {
    return await customAxios.get(`/categories/?populate=*&${filter}`);
}
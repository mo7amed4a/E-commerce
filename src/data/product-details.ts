import customAxios from '../lib/axios';

export const productDetails = async (id: string | number,filter?: string) => {
    return await customAxios.get(`/products/${id}?populate=*&${filter}`);
}
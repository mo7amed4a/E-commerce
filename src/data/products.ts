import customAxios from '../lib/axios';

export const productDetails = async (id: string | number,filter?: string) => {
    return await customAxios.get(`/products/${id}?populate=*&${filter}`);
}

export const products = async (filter?: string) => {
    return await customAxios.get(`/products?populate=*&${filter}`);
}

export const productsByCategory = async (slug: string, filter?: string) => {
    if (slug === "all") {
        return await products()
    }
    return await customAxios.get(`/products?populate=*&filters[$and][0][category][slug][$eq]=${slug}&${filter}`);
}

export const bestSellersProducts = async (data: "products" | "product") => {
    return await customAxios.get(`/best-seller?populate[${data}][populate]=*`);
}
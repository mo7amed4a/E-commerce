import customAxios, { customAxiosWithToken } from '../lib/axios';

export const addToCart = async (payload : {}) => {    
    return await customAxiosWithToken.post('/carts', payload);
}

export const deleteFromCart = async (id : number) => {    
    return await customAxiosWithToken.delete('/carts/'+id);
}

export const getCartItems = async (userId: string) => {    
    return await customAxios.get(`/carts?populate[products][populate]=banner&filters[userId][$eq]=${userId}`);
}

export const getCartItemsTwo = async (userId: string) => {    
    return await customAxiosWithToken.get(`/carts?populate[products][populate]=banner&filters[userId][$eq]=${userId}`);
}


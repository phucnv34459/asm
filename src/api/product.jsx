import instance from "./config";

export const getProducts = async () => {
    try {
        const {data} = await instance.get("/products");// http:/localhost:3000/products
        return data;
    } catch (error) {
        console.log(error);
    }
};

export const getProductsById = async (id) => {
    try {
        const {data} = await instance.get(`/products/${id}`);// http:/localhost:3000/products
        return data;
    } catch (error) {
        console.log(error);
    }
};

export const removeProductById = async (id) => {
    try {
        const {data} = await instance.delete(`/products/${id}`);// http:/localhost:3000/products
        return data;
    } catch (error) {
        console.log(error);
    }
};

export const addProducts = async (product) => {
    try {
        const {data} = await instance.post("/products", product);// http:/localhost:3000/products
        return data;
    } catch (error) {
        console.log(error);
    }
};

export const updateProducts = async (product) => {
    try {
        const {data} = await instance.put(`/products/${product.id}`,product);// http:/localhost:3000/products
        return data;
    } catch (error) {
        console.log(error);
    }
};


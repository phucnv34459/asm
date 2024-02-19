import instance from "./config";


export const getPost = async () => {
    try {
        const {data} = await instance.get("/posts");// http:/localhost:3000/products
        return data;
    } catch (error) {
        console.log(error);
    }
};

export const getPostById = async (id) => {
    try {
        const {data} = await instance.get(`/posts/${id}`);// http:/localhost:3000/products
        return data;
    } catch (error) {
        console.log(error);
    }
};

export const removePostsById = async (id) => {
    try {
        const {data} = await instance.delete(`/posts/${id}`);// http:/localhost:3000/products
        return data;
    } catch (error) {
        console.log(error);
    }
};

export const addPosts = async (post) => {
    try {
        const {data} = await instance.post("/posts", post);// http:/localhost:3000/products
        return data;
    } catch (error) {
        console.log(error);
    }
};

export const updatePosts = async (post) => {
    try {
        const {data} = await instance.put(`/posts/${post.id}`,post);// http:/localhost:3000/products
        return data;
    } catch (error) {
        console.log(error);
    }
};

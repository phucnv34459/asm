import { useEffect, useState } from 'react'
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import ProductPage from "./pages/admin/product";
import DashboardPage from "./pages/admin/dashboard";
import {Routes, Route } from "react-router-dom";
import { addProducts, getProducts, removeProductById, updateProducts } from "./api/product";
import { ToastContainer, toast } from 'react-toastify';
import ProductAddPage from './pages/admin/product-add';
import ProductEditPage from './pages/admin/product-edit';
import LayoutWebsite from './components/layouts/LayoutWebsite';
import LayoutAdmin from './components/layouts/LayoutAdmin';
import ProductPageWebsite from './pages/admin/ProductPage';
import ProductDetail from './pages/admin/ProductDetail';
import PostPage from './pages/admin/post';
import { addPosts, getPost, removePostsById, updatePosts } from './api/post';
import PostAddPage from './pages/admin/post-add';
import PostEditPage from './pages/admin/post-edit';
import PostPageWebsite from './pages/admin/PostPage';
import PostDetail from './pages/admin/PostDetail';
import Signup from './pages/admin/Signup';
import Signin from './pages/admin/Signin';

function App() {
  const [posts, setPosts] = useState([]);
  useEffect(()=>{
    (async() =>{
      const data = await getPost();
      setPosts(data);
    })();
  },[]);
 
  const onHandRemove = async (id) =>{
    const confirm = window.confirm('Bạn có chắc chắn xóa sản phẩm');
    if(confirm==true){
     try {
       await removePostsById(id);
       toast.success("Xóa bài viết thành công");
      setPosts(posts.filter((post) => post.id !== id))
      } catch (error) {
       toast.error("Xóa sản phẩm không thành công");
      }
    }
   
    
  }
  const onHandAdd = async (post) =>{
   try {
     const data = await addPosts(post);
     toast.success('thêm sản phẩm thành công');
 
     setPosts([...posts,data]);
   } catch (error) {
     toast.error(error);
   }
  }
  const onHandUpdate = async (post) =>{
   try {
     await updatePosts(post);
     toast.success('Cập nhật sản phẩm thành công');
     
     setPosts(posts.map((item) =>(item.id === post.id ? post : item)));
 
 
   } catch (error) {
     console.log(error);
   }
  }











 const [products, setProducts] = useState([]);
 useEffect(()=>{
   (async() =>{
     const data = await getProducts();
     setProducts(data);
   })();
 },[]);

 const onHandleRemove = async (id) =>{
   const confirm = window.confirm('Bạn có chắc chắn xóa sản phẩm');
   if(confirm==true){
    try {
      await removeProductById(id);
      toast.success("Xóa sản phẩm thành công");
     setProducts(products.filter((product) => product.id !== id))
     } catch (error) {
      toast.error("Xóa sản phẩm không thành công");
     }
   }
  
   
 }
 const onHandleAdd = async (product) =>{
  try {
    const data = await addProducts(product);
    toast.success('thêm sản phẩm thành công');

    setProducts([...products,data]);
  } catch (error) {
    toast.error(error);
  }
 }
 const onHandleUpdate = async (product) =>{
  try {
   await updateProducts(product);
    toast.success('Cập nhật sản phẩm thành công');
    
    setProducts(products.map((item) =>(item.id === product.id ? product : item)));


  } catch (error) {
    console.log(error);
  }
 }
  return (
    <>
    <Routes>
      <Route path="/" element={<LayoutWebsite/>}>
        <Route index element={<h1>Home</h1>} />
        <Route path='signup' element={<Signup/> } />
        <Route path='signin' element={<Signin/> } />
        <Route path='about' element={<h1>Aboutpage</h1>} />
        <Route path='posts' element={<PostPageWebsite posts={posts}  /> } />
        <Route path='posts/:id' element={<PostDetail/>}/>
        <Route path='products' element={<ProductPageWebsite products={products} />} />
        <Route path='products/:id' element={<ProductDetail />} />
      </Route>

      <Route path="admin" element={<LayoutAdmin/>}>
      <Route index element={<h1>Home Page</h1>}/>
        <Route path="dashboard" element={<DashboardPage products={products}/>}/>
        <Route path="posts" element={<PostPage posts={posts} onDeleteRemove={onHandRemove}/>} />
        <Route path="posts/add" element={<PostAddPage onPostAdd={onHandAdd}/>}/>
        <Route path="posts/:id/edit" element={<PostEditPage onPostUpdate={onHandUpdate}/>}/>
        <Route path="products" element={<ProductPage products={products} onRemove={onHandleRemove}/>}/>
        <Route path="products/add" element={<ProductAddPage onAdd={onHandleAdd}/>}/>
        <Route path="products/:id/edit" element={<ProductEditPage onUpdate={onHandleUpdate}/>}/>
      </Route>
    </Routes>
    <ToastContainer/>
    </>
  );
}

export default App

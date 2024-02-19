import  { useEffect } from 'react'
import { useForm } from 'react-hook-form';
import {  useNavigate, useParams } from 'react-router-dom';
import { getPostById } from '../../api/post';

const PostEditPage = ({onPostUpdate}) => {
    const {id} = useParams();

    const { register, handleSubmit, reset } = useForm();
    const navigate = useNavigate();
   useEffect(() => {
    (async()=>{
     const data = await getPostById(id);
     reset(data);
    })();
   }, [id]);
    const onSubmit = (data) => {
      
        onPostUpdate(data);
      navigate("/admin/posts");
    }
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
    <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
  <h1 className="h2">Thêm bài viết </h1>
  </div>
  
  <div className="mb-3 mt-5">
    <label htmlFor="postName" className="form-label">
       Tiêu đề
    </label>
    <input type="text"{...register('title')} id="postName" className="form-control"  />
  </div>
  
  <div className="mb-3 ">
    <label htmlFor="postImage" className="form-label">
      Ảnh bài viết
    </label>
    <input type="text" {...register('image')} id="postImage" className="form-control"  />
  </div>
  
  <div className="mb-3">
    <label htmlFor="postConten" className="form-label">
       Nội dung
    </label>

    <textarea className="form-control" {...register('conten')} id="postConten" cols="30" rows="10"></textarea>
  </div>
  <button type="submit" className="btn btn-primary">Cật nhập</button>
</form>
  )
}

export default PostEditPage
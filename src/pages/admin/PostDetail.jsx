import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { getPostById } from '../../api/post';

const PostDetail = () => {
    const [post, setPost] = useState({});
    const {id} = useParams();
    useEffect(() => {
        ( async() => {
           const data = await getPostById(id);
           setPost(data);
        })();
    }, [id]);
  return (
    <div> 
          <div class="row g-5">
          <div class="col-md-8">
          <article className="blog-post" style={{marginLeft:"20px"}}>
           <h2 className="display-5 link-body-emphasis mb-1">{post.title}</h2>
           <p className="blog-post-meta">January 1, 2021 by <a href="#">Mark</a></p>
           <img style={{width:"60%",height:"300px"}} src={post.image} alt="" />
           <hr />
           <p>{post.conten}</p>
         </article>
         </div>
        
         <div className="col-md-4">
           <div className="position-sticky" style={{top: '2rem'}}>
             <div>
               <h4 className="fst-italic">Bài viết liên quan</h4>
               <ul className="list-unstyled">
                 <li>
                   <a className="d-flex flex-column flex-lg-row gap-3 align-items-start align-items-lg-center py-3 link-body-emphasis text-decoration-none border-top" href="#">
                    <img style={{width:"30%"}} src={post.image} alt="" />
                     <div className="col-lg-8">
                       <h6 className="mb-0">{post.title}</h6>
                       <small className="text-body-secondary">January 15, 2023</small>
                       <p>{post.desc}</p>
                     </div>
                   </a>
                 </li>
               </ul>
             </div>
           </div>
         </div>
         
             </div>


    
    </div>
  )
}

export default PostDetail
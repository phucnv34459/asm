import React from 'react'
import { Link } from 'react-router-dom'

const PostPageWebsite = ({posts}) => {
  return (
   
    <div className="row mb-2" style={{width:"1500px",marginLeft:"10px"}}>
      <h1 style={{textAlign:"center",marginBottom:"20px"}}>Bài viết</h1>
      {posts.map((post, index) =>(
           
       <div className="col-md-6" key={index}>
         <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
           <div className="col p-4 d-flex flex-column position-static">
             <strong className="d-inline-block mb-2 text-primary-emphasis">Bài viết</strong>
             <h5><Link style={{textDecoration:"none",}} to={`/posts/${post.id}`}>{post.title}</Link></h5>
             <div className="mb-1 text-body-secondary">Nov 12</div>
             <h6 className="card-text mb-auto">{post.desc}</h6>
             <Link to={`/posts/${post.id}`} className="icon-link gap-1 icon-link-hover stretched-link">
               xem thêm
             </Link>
           </div>
           <div className="col-auto d-none d-lg-block">
            <img src={post.image} alt="" />
           </div>
         </div>
       </div>
     
     
))}
   </div>
   
  )
}

export default PostPageWebsite
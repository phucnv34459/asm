import React from 'react'
import { Link } from 'react-router-dom'

const PostPage = ({posts ,onDeleteRemove}) => {
  return (
    <>
  <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
  <h1 className="h2">Quản lí Bài viết </h1>
  <div className="btn-toolbar mb-2 mb-md-0">
    <div className="btn-group me-2">
      <Link to="/admin/posts/add" className="btn btn-sm btn-outline-secondary">
        Thêm
      </Link>
    </div>
  </div>
</div>
    <div className="table-responsive small">
      <table className="table table-striped table-sm">
        <thead>
          <tr>
            <th scope="col">Stt</th>
            <th scope="col">Tiêu đề</th>
            <th scope="col">Ảnh</th>
            <th scope="col">Nội dung</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
        {posts.map((post, index) => (
            <tr key={index}>
             <td>{index + 1}</td>
             <td>
                <h6>{post.title}</h6>
             </td>
             <td>
                <img src={post.image}  width={50} />
             </td>
            
             <td>
                <p>{post.conten}</p>
             </td>
             <td>
                <div className='d-flex'>
                <button style={{backgroundColor:"green"}}  className='btn btn-danger ' onClick={() => onDeleteRemove(post.id)}>Xóa</button>
                <Link to={`/admin/posts/${post.id}/edit`}className='btn btn-primary ml-3'>Cật nhập</Link>
                </div>
             </td>
            </tr>
        ))}
        </tbody>
      </table>
    </div>
    </>
  )
}

export default PostPage
import React from 'react'
import { Link } from 'react-router-dom'

const HeaderWebsite = () => {
  return (
    <nav className="navbar navbar-expand-md bg-dark sticky-top border-bottom" data-bs-theme="dark">
    <div className="container">
      <a className="navbar-brand d-md-none" href="#">
        <svg className="bi" width={24} height={24}><use xlinkHref="#aperture" /></svg>
        Aperture
      </a>
      <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvas" aria-controls="#offcanvas" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon" />
      </button>
      <div className="offcanvas offcanvas-end" tabIndex={-1} id="#offcanvas" aria-labelledby="#offcanvasLabel">
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="#offcanvasLabel">Aperture</h5>
          <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close" />
        </div>
        <div  className="offcanvas-body">
          <ul className="navbar-nav flex-grow-1 justify-content-between">
            <li className="nav-item"><Link className="nav-link" to="/">Trang chủ</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/products">Sản Phẩm</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/posts">Bài viết</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/">Liên hệ</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/about">Về chúng tôi</Link></li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
  )
}

export default HeaderWebsite
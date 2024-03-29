import React from 'react'

const Banner = () => {
  return (
    
    <div className="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-body-tertiary">
        <img src="" alt="" />
  <div className="col-md-6 p-lg-5 mx-auto my-5">
    <h1 className="display-3 fw-bold">Designed for engineers</h1>
    <h3 className="fw-normal text-muted mb-3">Build anything you want with Aperture</h3>
    <div className="d-flex gap-3 justify-content-center lead fw-normal">
      <a className="icon-link" href="#">
        Learn more
        <svg className="bi"><use xlinkHref="#chevron-right" /></svg>
      </a>
      <a className="icon-link" href="#">
        Buy
        <svg className="bi"><use xlinkHref="#chevron-right" /></svg>
      </a>
    </div>
  </div>
</div>

  )
}

export default Banner
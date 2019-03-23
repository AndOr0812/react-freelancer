import React from 'react';

const Item = ({modalId, imgSrc, onClickModal, children}) => {
  return (
    <div className="col-md-6 col-lg-4">
      <a className="portfolio-item d-block mx-auto" href={`#${modalId}`} onClick={() => onClickModal(modalId)}>
        <div className="portfolio-item-caption d-flex position-absolute h-100 w-100">
          <div className="portfolio-item-caption-content my-auto w-100 text-center text-white">
            <i className="fa fa-search-plus fa-3x"></i>
          </div>
        </div>
        <img className="img-fluid" src={imgSrc} alt=""/>
      </a>
      <h3>{children}</h3>
    </div>
  );
}

export default Item;
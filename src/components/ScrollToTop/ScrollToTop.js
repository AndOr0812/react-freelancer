import React from 'react';

const ScrollToTop = ({onScrollTop}) => {
  return (
    <div className="scroll-to-top position-fixed" style={{display: 'block'}}>
      <a className="js-scroll-trigger d-block text-center text-white rounded" href="#page-top" onClick={onScrollTop}>
        <i className="fa fa-chevron-up"></i>
      </a>
    </div>
  );
}

export default ScrollToTop;
import React, { Component } from 'react';

import './overlay.css';
import Modal from './Modal';
import Item from './Item';

class Portfolio extends Component {
  constructor(props) {
    super(props);
    this.state = {showModal: null};
  }

  handleClickModal = (modalId) => {
    this.setState({showModal: modalId});
    document.body.style.overflow = "hidden";
  }

  handleCloseModal = () => {
    this.setState({showModal: null});
    document.body.style.overflow = "auto"
  }

  render() {
    return (
      <React.Fragment>
        {this.state.showModal && <div className="modal-overlay-div" />}
        
        <section className="portfolio" id="portfolio">
          <div className="container">
            <h2 className="text-center text-uppercase text-secondary mb-0">Portfolio</h2>
            <hr className="star-dark mb-5"/>
            <div className="row">
              <Item modalId="portfolio-modal-1" imgSrc="img/portfolio/cabin.png" onClickModal={this.handleClickModal} />
              <Item modalId="portfolio-modal-2" imgSrc="img/portfolio/cake.png" onClickModal={this.handleClickModal} />
              <Item modalId="portfolio-modal-3" imgSrc="img/portfolio/circus.png" onClickModal={this.handleClickModal} />
              <Item modalId="portfolio-modal-4" imgSrc="img/portfolio/game.png" onClickModal={this.handleClickModal} />
              <Item modalId="portfolio-modal-5" imgSrc="img/portfolio/safe.png" onClickModal={this.handleClickModal} />
              <Item modalId="portfolio-modal-6" imgSrc="img/portfolio/submarine.png" onClickModal={this.handleClickModal} />
            </div>
          </div>
        </section>

        <Modal id="portfolio-modal-1" name="Project Name" show={this.state.showModal === "portfolio-modal-1"} onCloseModal={this.handleCloseModal}>
          <img className="img-fluid mb-5" src="img/portfolio/cabin.png" alt=""/>
          <p className="mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.</p>
        </Modal>
        <Modal id="portfolio-modal-2" name="Project Name" show={this.state.showModal === "portfolio-modal-2"} onCloseModal={this.handleCloseModal}>
          <img className="img-fluid mb-5" src="img/portfolio/cake.png" alt=""/>
          <p className="mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.</p>
        </Modal>
        <Modal id="portfolio-modal-3" name="Project Name" show={this.state.showModal === "portfolio-modal-3"} onCloseModal={this.handleCloseModal}>
          <img className="img-fluid mb-5" src="img/portfolio/circus.png" alt=""/>
          <p className="mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.</p>
        </Modal>
        <Modal id="portfolio-modal-4" name="Project Name" show={this.state.showModal === "portfolio-modal-4"} onCloseModal={this.handleCloseModal}>
          <img className="img-fluid mb-5" src="img/portfolio/game.png" alt=""/>
          <p className="mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.</p>
        </Modal>
        <Modal id="portfolio-modal-5" name="Project Name" show={this.state.showModal === "portfolio-modal-5"} onCloseModal={this.handleCloseModal}>
          <img className="img-fluid mb-5" src="img/portfolio/safe.png" alt=""/>
          <p className="mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.</p>
        </Modal>
        <Modal id="portfolio-modal-6" name="Project Name" show={this.state.showModal === "portfolio-modal-6"} onCloseModal={this.handleCloseModal}>
          <img className="img-fluid mb-5" src="img/portfolio/submarine.png" alt=""/>
          <p className="mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.</p>
        </Modal>
      </React.Fragment>
    );
  };
}

export default Portfolio;
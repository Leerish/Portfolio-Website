import React, { useState } from 'react';
import { Col, Modal, Button } from 'react-bootstrap';
import './project.css'

export const ProjectCard = ({ title, description, imgUrl, githubUrl, link }) => {
  const [showModal, setShowModal] = useState(false);

  const handleViewClick = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} alt={title} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          
          <br/>
          <Button  className='button' onClick={handleViewClick}>View</Button>
          <a href={githubUrl} target="_blank" rel="noopener noreferrer">
            <Button className='button' >Try</Button>
          </a>
        </div>
      </div>

      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>{description}</p>
          <a href={link} target="_blank" rel="noopener noreferrer">
            <Button className='button' >Github</Button>
          </a>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
          <a href={githubUrl} target="_blank" rel="noopener noreferrer">
            <Button className='button' >Try</Button>
          </a>
          {/* Add any additional actions or buttons you want here */}
        </Modal.Footer>
      </Modal>
    </Col>
  );
};



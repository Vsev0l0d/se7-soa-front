import React, {useState} from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export const RouteForm = () => {
    const [isFormShow, setIsFormShow] = useState(false);

    const handleClose = () => setIsFormShow(false);
    const handleShow = () => setIsFormShow(true);

    return (
        <>
            <Button variant="dark" onClick={handleShow}>
                Add route
            </Button>
            <Modal show={isFormShow} onHide={handleClose}>
                <Modal.Header className="bg-dark text-light" closeButton closeVariant="white">
                    <Modal.Title>RouteForm</Modal.Title>
                </Modal.Header>
                <Modal.Body className="bg-dark text-light">
                    ssssssssss
                </Modal.Body>
                <Modal.Footer className="bg-dark text-light">
                    <Button variant="outline-secondary text-light" onClick={handleClose}>Send</Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}
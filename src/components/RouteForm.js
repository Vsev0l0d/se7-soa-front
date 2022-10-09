import React from 'react'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import {useRecoilState} from 'recoil'
import {showModalForm} from '../state/atoms'

export const RouteForm = () => {
    const [show, setShow] = useRecoilState(showModalForm)
    const handleClose = () => setShow(false)

    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header className='bg-dark text-light' closeButton closeVariant='white'>
                <Modal.Title>RouteForm</Modal.Title>
            </Modal.Header>
            <Modal.Body className='bg-dark text-light'>
                ssssssssss
            </Modal.Body>
            <Modal.Footer className='bg-dark text-light'>
                <Button variant='outline-secondary text-light' onClick={handleClose}>Send</Button>
            </Modal.Footer>
        </Modal>
    )
}
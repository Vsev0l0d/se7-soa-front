import React from 'react'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import {useRecoilState} from 'recoil'
import {bufferRoute, showModalForm} from '../state/atoms'
import {RouteForm} from './RouteForm'

export const ModalWindow = () => {
	const [show, setShow] = useRecoilState(showModalForm)
	const handleClose = () => setShow(false)
	const [route, setRoute] = useRecoilState(bufferRoute)

	return (
		<Modal show={show} onHide={handleClose}>
			<Modal.Header className="bg-dark text-light" closeButton closeVariant="white">
				<Modal.Title>RouteForm {route ? 'for id: ' + route.id : ''}</Modal.Title>
			</Modal.Header>
			<Modal.Body className="bg-dark text-light">
				<RouteForm/>
			</Modal.Body>
			<Modal.Footer className="bg-dark text-light">
				<Button variant="outline-secondary text-light" onClick={handleClose}>Send</Button>
			</Modal.Footer>
		</Modal>
	)
}
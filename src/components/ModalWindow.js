import React from 'react'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import {useRecoilState, useRecoilValue} from 'recoil'
import {bufferRoute, isEditingRoute, routesState, showModalForm} from '../state/atoms'
import {RouteForm} from './RouteForm'

export const ModalWindow = () => {
	const [show, setShow] = useRecoilState(showModalForm)
	const [route, setRoute] = useRecoilState(bufferRoute)
	const [routes, setRoutes] = useRecoilState(routesState)
	const isEditing = useRecoilValue(isEditingRoute)

	const addRoute = () => {
		setRoutes([...routes, route])
		setShow(false)
	}
	const updateRoute = () => {
		setRoutes([...routes.filter((x) => {
			return x.id !== route.id
		}), route])
		setShow(false)
	}

	return (
		<Modal show={show} onHide={() => setShow(false)}>
			<Modal.Header className="bg-dark text-light" closeButton closeVariant="white">
				<Modal.Title>RouteForm {isEditing ? 'for id: ' + route.id : ''}</Modal.Title>
			</Modal.Header>
			<Modal.Body className="bg-dark text-light">
				<RouteForm/>
			</Modal.Body>
			<Modal.Footer className="bg-dark text-light">
				<Button variant="outline-secondary text-light" hidden={isEditing}
						onClick={() => setRoute({})}>Clear</Button>
				<Button variant="outline-secondary text-light"
						onClick={isEditing ? updateRoute : addRoute}>{isEditing ? 'Update route' : 'Add route'}</Button>
			</Modal.Footer>
		</Modal>
	)
}
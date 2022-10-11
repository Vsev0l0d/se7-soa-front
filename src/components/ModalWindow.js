import React from 'react'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import {useRecoilState, useRecoilValue, useSetRecoilState} from 'recoil'
import {
	bufferRoute,
	feedbackRouteValidator,
	isEditingRoute,
	routesState,
	showModalForm,
	wasValidated
} from '../state/atoms'
import {RouteForm} from './RouteForm'
import {validate} from '../utils/routeValidator'

export const ModalWindow = () => {
	const [show, setShow] = useRecoilState(showModalForm)
	const [route, setRoute] = useRecoilState(bufferRoute)
	const [routes, setRoutes] = useRecoilState(routesState)
	const setFeedback = useSetRecoilState(feedbackRouteValidator)
	const setValidated = useSetRecoilState(wasValidated)
	const isEditing = useRecoilValue(isEditingRoute)

	const addRoute = () => {
		const freshFeedback = validate(route)
		setFeedback(freshFeedback)
		if (Object.keys(freshFeedback).length === 0) {
			setRoutes([...routes, route])
			setShow(false)
			setValidated(false)
		} else setValidated(true)
	}
	const updateRoute = () => {
		const freshFeedback = validate(route)
		setFeedback(freshFeedback)
		if (Object.keys(freshFeedback).length === 0) {
			setRoutes([...routes.filter((x) => {
				return x.id !== route.id
			}), route])
			setShow(false)
			setValidated(false)
		} else setValidated(true)
	}

	const clear = () => {
		setRoute({})
		setValidated(false)
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
						onClick={clear}>Clear</Button>
				<Button variant="outline-secondary text-light"
						onClick={isEditing ? updateRoute : addRoute}>{isEditing ? 'Update route' : 'Add route'}</Button>
			</Modal.Footer>
		</Modal>
	)
}
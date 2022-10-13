import React from 'react'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import {useRecoilState, useRecoilValue, useSetRecoilState} from 'recoil'
import {
	bufferRoute,
	feedbackRouteValidator,
	isAddingWithLocationIds,
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
	const [isEditing, setIsEditing] = useRecoilState(isEditingRoute)
	const setFeedback = useSetRecoilState(feedbackRouteValidator)
	const setValidated = useSetRecoilState(wasValidated)
	const isWithLocationIds = useRecoilValue(isAddingWithLocationIds)

	const addRoute = () => {
		const freshFeedback = validate(route, isWithLocationIds)
		setFeedback(freshFeedback)
		if (Object.keys(freshFeedback).length === 0) {
			setRoutes([...routes, route])
			setShow(false)
			setValidated(false)
		} else setValidated(true)
	}
	const updateRoute = () => {
		const freshFeedback = validate(route, isWithLocationIds)
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

	const handleShow = () => {
		setIsEditing(false)
		setValidated(false)
		setShow(true)
	}
	return (
		<>
			<Button variant="dark me-2" onClick={handleShow}>Add route</Button>
			<Modal show={show} onHide={() => setShow(false)} contentClassName="bg-dark text-light">
				<Modal.Header closeButton closeVariant="white">
					<Modal.Title>RouteForm {isEditing ? 'for id: ' + route.id : ''}</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<RouteForm isEditing={isEditing}/>
				</Modal.Body>
				<Modal.Footer>
					<Button variant="outline-secondary text-light" hidden={isEditing}
							onClick={clear}>Clear</Button>
					<Button variant="outline-secondary text-light"
							onClick={isEditing ? updateRoute : addRoute}>{isEditing ? 'Update route' : 'Add route'}</Button>
				</Modal.Footer>
			</Modal>
		</>
	)
}
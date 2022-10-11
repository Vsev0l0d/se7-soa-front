import {useSetRecoilState} from 'recoil'
import {isEditingRoute, showModalForm, wasValidated} from '../state/atoms'
import Button from 'react-bootstrap/Button'
import React from 'react'

export const AddRouteButton = () => {
	const setShow = useSetRecoilState(showModalForm)
	const setIsEditing = useSetRecoilState(isEditingRoute)
	const setValidated = useSetRecoilState(wasValidated)

	const handleShow = () => {
		setIsEditing(false)
		setValidated(false)
		setShow(true)
	}

	return (
		<Button variant="dark me-2" onClick={handleShow}>Add route</Button>
	)
}
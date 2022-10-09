import {useSetRecoilState} from 'recoil'
import {isEditingRoute, showModalForm} from '../state/atoms'
import Button from 'react-bootstrap/Button'
import React from 'react'

export const AddRouteButton = () => {
	const setShow = useSetRecoilState(showModalForm)
	const setIsEditing = useSetRecoilState(isEditingRoute)
	const handleShow = () => {
		setIsEditing(false)
		setShow(true)
	}

	return (
		<Button variant="dark me-2" onClick={handleShow}>Add route</Button>
	)
}
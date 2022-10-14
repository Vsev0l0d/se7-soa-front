import {useRecoilState} from 'recoil'
import {selectedRoutesId} from '../state/atoms'
import Button from 'react-bootstrap/Button'
import React from 'react'
import {deleteRoute} from '../utils/apiInteraction'
import toast from 'react-hot-toast'
import get from 'lodash.get'

export const DeleteRouteButton = ({updateRoutes}) => {
	const [selectedIds, setSelectedId] = useRecoilState(selectedRoutesId)

	const deleteRoutes = () => {
		selectedIds.forEach((id) => {
			deleteRoute(id).then((response) => {
				setSelectedId([])
				updateRoutes()
			}).catch((err) => {
				toast.error(get(err, 'response.data.message', 'error'))
			})
		})
	}

	return (
		<Button hidden={selectedIds.length === 0} variant="danger" onClick={deleteRoutes}>Delete</Button>
	)
}
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
		const promises = []
		selectedIds.forEach((id) => {
			promises.push(deleteRoute(id).then(() => {
				toast.success('route with id=' + id + ' removed')
			}).catch((err) => {
				toast.error(get(err, 'response.data.message', 'error'))
			}))
		})
		Promise.all(promises).finally(() => {
			updateRoutes()
			setSelectedId([])
		})
	}

	return (
		<Button hidden={selectedIds.length === 0} variant="danger" onClick={deleteRoutes}>Delete</Button>
	)
}
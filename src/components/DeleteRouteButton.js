import {useRecoilState, useSetRecoilState} from 'recoil'
import {isDataNeedsToBeUpdatedState, selectedRoutesId} from '../state/atoms'
import Button from 'react-bootstrap/Button'
import React from 'react'
import {deleteRoute} from '../utils/apiInteraction'
import toast from 'react-hot-toast'
import get from 'lodash.get'

export const DeleteRouteButton = () => {
	const [selectedIds, setSelectedId] = useRecoilState(selectedRoutesId)
	const setIsDataNeedsToBeUpdated = useSetRecoilState(isDataNeedsToBeUpdatedState)

	const deleteRoutes = () => {
		const promises = []
		selectedIds.forEach((id) => {
			promises.push(toast.promise(deleteRoute(id), {
				loading: 'Removing route with id=' + id + '...',
				success: 'Route with id=' + id + ' removed',
				error: (err) => 'Route with id=' + id + ' is not deleted\n' + get(err, 'response.data.message', ''),
			}))
		})
		Promise.all(promises).finally(() => {
			setIsDataNeedsToBeUpdated(true)
			setSelectedId([])
		})
	}

	return (
		<Button hidden={selectedIds.length === 0} variant="danger" onClick={deleteRoutes}>Delete</Button>
	)
}
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
			promises.push(deleteRoute(id).then(() => {
				toast.success('route with id=' + id + ' removed')
			}).catch((err) => {
				toast.error(get(err, 'response.data.message', 'error'))
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
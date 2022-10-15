import React from 'react'
import {useRecoilState, useRecoilValue, useSetRecoilState} from 'recoil'
import {
	bufferRoute,
	isAddingWithLocationIds,
	isEditingRoute,
	routesState,
	selectedRoutesId,
	showModalForm,
	wasValidated
} from '../state/atoms'
import {fieldList} from '../utils/constants'
import get from 'lodash.get'

export const RoutesTable = () => {
	const routes = useRecoilValue(routesState)
	const setShow = useSetRecoilState(showModalForm)
	const setIsEditing = useSetRecoilState(isEditingRoute)
	const setBufferRoute = useSetRecoilState(bufferRoute)
	const setValidated = useSetRecoilState(wasValidated)
	const setIsAddingWithLocationIds = useSetRecoilState(isAddingWithLocationIds)
	const [selectedIds, setSelectedId] = useRecoilState(selectedRoutesId)

	const edit = (route) => {
		setBufferRoute(route)
		setValidated(false)
		setIsAddingWithLocationIds(false)
		setIsEditing(true)
		setShow(true)
	}

	const select = (event, routeId) => {
		if (selectedIds.indexOf(routeId) >= 0) {
			setSelectedId(selectedIds.filter((x) => {
				return x !== routeId
			}))
		} else {
			setSelectedId([...selectedIds, routeId])
		}
	}

	return (
		<table className="table table-dark table-bordered mt-2">
			<thead className="text-center align-middle">
			<tr>
				<th rowSpan="2">id</th>
				<th rowSpan="2">name</th>
				<th colSpan="2">coordinates</th>
				<th rowSpan="2">creationDate</th>
				<th colSpan="4">from</th>
				<th colSpan="4">to</th>
				<th rowSpan="2">distance</th>
			</tr>
			<tr>
				<th>x</th>
				<th>y</th>
				<th>id</th>
				<th>x</th>
				<th>y</th>
				<th>z</th>
				<th>id</th>
				<th>x</th>
				<th>y</th>
				<th>z</th>
			</tr>
			</thead>
			<tbody>
			{routes.map(route => (
				<tr key={route.id} data-bs-toggle="tooltip" title={JSON.stringify(route, undefined, 4)}
					className={selectedIds.indexOf(route.id) !== -1 ? 'selected' : ''}
					onDoubleClick={() => {
						edit(route)
					}}
					onClick={(event) => {
						select(event, route.id)
					}}>
					{fieldList.map(field => (
						<td key={field}>
							{get(route, field.replaceAll('_', '.'), '')}
						</td>
					))}
				</tr>
			))}
			</tbody>
		</table>
	)
}
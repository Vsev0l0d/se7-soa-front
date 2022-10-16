import React from 'react'
import {useRecoilState, useRecoilValue, useSetRecoilState} from 'recoil'
import {
	bufferRoute,
	isAddingWithLocationIds,
	isDataNeedsToBeUpdatedState,
	isEditingRoute,
	pagingState,
	routesState,
	selectedRoutesId,
	showModalForm,
	wasValidated
} from '../state/atoms'
import {fieldList} from '../utils/constants'
import get from 'lodash.get'
import set from 'lodash.set'
import Button from 'react-bootstrap/Button'
import {ButtonGroup, ToggleButton} from 'react-bootstrap'

export const RoutesTable = () => {
	const routes = useRecoilValue(routesState)
	const setIsDataNeedsToBeUpdated = useSetRecoilState(isDataNeedsToBeUpdatedState)
	const setShow = useSetRecoilState(showModalForm)
	const setIsEditing = useSetRecoilState(isEditingRoute)
	const setBufferRoute = useSetRecoilState(bufferRoute)
	const setValidated = useSetRecoilState(wasValidated)
	const setIsAddingWithLocationIds = useSetRecoilState(isAddingWithLocationIds)
	const [selectedIds, setSelectedId] = useRecoilState(selectedRoutesId)
	const [paging, setPaging] = useRecoilState(pagingState)

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
		<>
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
				{[...Array(Math.max(get(paging, 'limit', 10) - routes.length, 0))].map((e, i) =>
					<tr key={i}>{fieldList.map(field => <td key={field}>-</td>)}</tr>
				)}
				</tbody>
			</table>
			<div className="text-center">
				<ButtonGroup>
					<Button variant="dark" onClick={()=> {
						setPaging(set(Object.assign({}, paging), 'pageNumber', Math.max(get(paging, 'pageNumber', 1) - 1, 1)))
						setIsDataNeedsToBeUpdated(true)
					}}>&lt;</Button>
					<ToggleButton variant="dark" value="page">{get(paging, 'pageNumber', 1)}</ToggleButton>
					<Button variant="dark" onClick={()=>{
						setPaging(set(Object.assign({}, paging), 'pageNumber', get(paging, 'pageNumber', 1) + 1))
						setIsDataNeedsToBeUpdated(true)
					}}>&gt;</Button>
				</ButtonGroup>
			</div>
		</>
	)
}
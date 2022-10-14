import {Form, Modal} from 'react-bootstrap'
import React, {useState} from 'react'
import Button from 'react-bootstrap/Button'
import {FilterBetween} from './FilterBetween'
import {FilterEquality} from './FilterEquality'
import {filtersState, isDataNeedsToBeUpdatedState} from '../state/atoms'
import {useSetRecoilState} from 'recoil'

export const FiltersForm = () => {
	const setFiltersGlobal = useSetRecoilState(filtersState)
	const setIsDataNeedsToBeUpdated = useSetRecoilState(isDataNeedsToBeUpdatedState)
	const [filters, setFilters] = useState({})
	const [show, setShow] = useState(false)

	return (
		<>
			<Button variant="dark me-2" onClick={()=>setShow(!show)}>Set up filters</Button>
			<Modal contentClassName="bg-dark text-light p-3" id="filtersForm"
				   show={show} onHide={() => setShow(false)}>
				<Modal.Header closeButton closeVariant="white">
					<Modal.Title>Filters</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<Form>
						<FilterBetween filters={filters} setFilters={setFilters} id="id"/>
						<FilterEquality filters={filters} setFilters={setFilters} id="name"/>
						<FilterBetween filters={filters} setFilters={setFilters} id="coordinates_x"/>
						<FilterBetween filters={filters} setFilters={setFilters} id="coordinates_y"/>
						<FilterBetween filters={filters} setFilters={setFilters} id="creationDate" type="date"/>
						<FilterBetween filters={filters} setFilters={setFilters} id="from_id"/>
						<FilterBetween filters={filters} setFilters={setFilters} id="from_x"/>
						<FilterBetween filters={filters} setFilters={setFilters} id="from_y"/>
						<FilterBetween filters={filters} setFilters={setFilters} id="from_z"/>
						<FilterBetween filters={filters} setFilters={setFilters} id="to_id"/>
						<FilterBetween filters={filters} setFilters={setFilters} id="to_x"/>
						<FilterBetween filters={filters} setFilters={setFilters} id="to_y"/>
						<FilterBetween filters={filters} setFilters={setFilters} id="to_z"/>
						<FilterBetween filters={filters} setFilters={setFilters} id="distance"/>
					</Form>
				</Modal.Body>
				<Modal.Footer>
					<Button variant="outline-secondary text-light"
							onClick={() => {
								setFilters({})
								setFiltersGlobal({})
							}}>Clear</Button>
					<Button variant="outline-secondary text-light"
							onClick={() => {
								setFiltersGlobal(filters)
								setIsDataNeedsToBeUpdated(true)
							}}>Apply filters</Button>
				</Modal.Footer>
			</Modal>
		</>
	)
}
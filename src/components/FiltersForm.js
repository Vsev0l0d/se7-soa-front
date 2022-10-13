import {Form, Modal} from 'react-bootstrap'
import React, {useState} from 'react'
import Button from 'react-bootstrap/Button'
import {FilterBetween} from './FilterBetween'
import {FilterEquality} from './FilterEquality'

export const FiltersForm = () => {
	const [filters, setFilters] = useState({})

	return (
		<Modal.Dialog contentClassName="bg-dark text-light p-3" className="mb-3 m-0" id="filtersForm">
			<Modal.Header>
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
				<Button variant="outline-secondary text-light mx-1"
						onClick={() => setFilters({})}>Clear</Button>
				<Button variant="outline-secondary text-light"
						onClick={() => {console.log(filters)}}>Apply filters</Button>
			</Modal.Footer>
		</Modal.Dialog>
	)
}
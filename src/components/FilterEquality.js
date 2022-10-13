import set from 'lodash.set'
import {Form, InputGroup} from 'react-bootstrap'
import get from 'lodash.get'
import React from 'react'

export const FilterEquality = ({filters, setFilters, id, type = 'text'}) => {

	const change = (event) => {
		const newFilters = JSON.parse(JSON.stringify(filters))
		set(newFilters, id, event.target.value)
		setFilters(newFilters)
	}

	return (
		<InputGroup className="mb-3">
			<InputGroup.Text>{id.firstLetterToUppercase()} = </InputGroup.Text>
			<Form.Control id="min" type={type} onChange={change} value={get(filters, id, '')}/>
		</InputGroup>
	)
}
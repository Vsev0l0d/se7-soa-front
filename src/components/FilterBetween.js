import {Form, InputGroup} from 'react-bootstrap'
import React from 'react'
import set from 'lodash.set'
import get from 'lodash.get'

export const FilterBetween = ({filters, setFilters, id, type = 'number', step = 'any'}) => {
	const change = (event) => {
		const newFilters = JSON.parse(JSON.stringify(filters))
		set(newFilters, id + '.' + event.target.id, event.target.value)
		setFilters(newFilters)
	}

	return (
		<InputGroup className="mb-3">
			<InputGroup.Text>{id.firstLetterToUppercase()}</InputGroup.Text>
			<Form.Control id="min" type={type} step={step} placeholder="min" onChange={change}
						  value={get(filters, id + '.min', '')}/>
			<Form.Control id="max" type={type} step={step} placeholder="max" onChange={change}
						  value={get(filters, id + '.max', '')}/>
		</InputGroup>
	)
}
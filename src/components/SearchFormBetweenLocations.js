import {Form, InputGroup} from 'react-bootstrap'
import Button from 'react-bootstrap/Button'
import {useState} from 'react'

export const SearchFormBetweenLocations = () => {
	const [fromId, setFromId] = useState('')
	const [toId, setToId] = useState('')

	const findAll = () => {
		console.log(fromId + ' ' + toId + ' ' + document.getElementById('selectOrderBy').value)
	}

	return (
		<Form>
			<InputGroup className="mb-3">
				<Button variant="dark" onClick={findAll}
						disabled={fromId.includes('.') || toId.includes('.') ||
							fromId.includes('-') || toId.includes('-') || fromId === '' || toId === ''}
				>Find all</Button>
				<InputGroup.Text>between</InputGroup.Text>
				<InputGroup.Text>from id</InputGroup.Text>
				<Form.Control type="number" value={fromId}
							  onChange={event => setFromId(event.target.value)}/>
				<InputGroup.Text>to id</InputGroup.Text>
				<Form.Control type="number" value={toId}
							  onChange={event => setToId(event.target.value)}/>
				<InputGroup.Text>sort by</InputGroup.Text>
				<Form.Select id="selectOrderBy">
					<option>id</option>
					<option>name</option>
					<option>coordinates_x</option>
					<option>coordinates_y</option>
					<option>creationDate</option>
					<option>from_id</option>
					<option>from_x</option>
					<option>from_y</option>
					<option>from_z</option>
					<option>to_id</option>
					<option>to_x</option>
					<option>to_y</option>
					<option>to_z</option>
				</Form.Select>
			</InputGroup>
		</Form>
	)
}
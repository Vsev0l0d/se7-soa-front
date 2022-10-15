import {Form, InputGroup} from 'react-bootstrap'
import Button from 'react-bootstrap/Button'
import {useState} from 'react'
import {countByDistance} from '../utils/apiInteraction'
import toast from 'react-hot-toast'
import get from 'lodash.get'

export const QuantityFormByDistance = () => {
	const [distance, setDistance] = useState('')

	const findOut = () => {
		toast.promise(countByDistance(document.getElementById('selectComparisonOperation').value, distance), {
			loading: 'Counting...',
			success: (response) => response.data,
			error: (err) => get(err, 'response.data.message', 'Error'),
		})
	}

	return (
		<Form>
			<InputGroup className="mb-3">
				<Button variant="dark" onClick={findOut} disabled={distance === ''}>Find out</Button>
				<InputGroup.Text>the number of objects whose distance field value</InputGroup.Text>
				<Form.Select id="selectComparisonOperation">
					<option value="equals">is</option>
					<option value="greater">is greater than</option>
				</Form.Select>
				<Form.Control type="number" step="any" onChange={event => setDistance(event.target.value)}/>
			</InputGroup>
		</Form>
	)
}
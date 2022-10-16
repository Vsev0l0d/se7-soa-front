import {Form, InputGroup} from 'react-bootstrap'
import Button from 'react-bootstrap/Button'
import {useState} from 'react'
import {findBetweenLocationsAndSortBy} from '../utils/apiInteraction'
import toast from 'react-hot-toast'
import get from 'lodash.get'
import {useSetRecoilState} from 'recoil'
import {routesState} from '../state/atoms'
import {fieldList} from '../utils/constants'

export const SearchFormBetweenLocations = () => {
	const setRoutes = useSetRecoilState(routesState)
	const [fromId, setFromId] = useState('')
	const [toId, setToId] = useState('')

	const findAll = () => {
		toast.promise(findBetweenLocationsAndSortBy(Number(fromId), Number(toId), document.getElementById('selectOrderBy').value), {
			loading: 'Finding...',
			success: 'Successfully',
			error: (err) => get(err, 'response.data.message', 'Error'),
		}).then((response) => {
			setRoutes(response.data)
		})
	}

	return (
		<Form id="searchFormBetweenLocations">
			<InputGroup className="mb-3">
				<Button variant="dark" onClick={findAll}
						disabled={fromId === '' || toId === '' ||
							document.querySelectorAll('#searchFormBetweenLocations .form-control[type="number"]:invalid').length}
				>Find all</Button>
				<InputGroup.Text>between</InputGroup.Text>
				<InputGroup.Text>from id</InputGroup.Text>
				<Form.Control type="number" min="1" value={fromId}
							  onChange={event => setFromId(event.target.value)}/>
				<InputGroup.Text>to id</InputGroup.Text>
				<Form.Control type="number" min="1" value={toId}
							  onChange={event => setToId(event.target.value)}/>
				<InputGroup.Text>sort by</InputGroup.Text>
				<Form.Select id="selectOrderBy">
					{fieldList.map(field => ['+' + field, '-' + field]).flat().map(x =>
						<option key={x}>{x}</option>
					)}
				</Form.Select>
			</InputGroup>
		</Form>
	)
}
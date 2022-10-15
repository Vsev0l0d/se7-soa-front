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
		findBetweenLocationsAndSortBy(fromId, toId, document.getElementById('selectOrderBy').value).then((response) => {
			setRoutes(response.data)
			toast.success('Successfully')
		}).catch((err) => {
			toast.error(get(err, 'response.data.message', 'error'))
		})
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
					{fieldList.map(field => ['+' + field, '-' + field]).flat().map(x =>
						<option key={x}>{x}</option>
					)}
				</Form.Select>
			</InputGroup>
		</Form>
	)
}
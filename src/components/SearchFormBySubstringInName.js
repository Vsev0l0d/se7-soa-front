import {Form, InputGroup} from 'react-bootstrap'
import Button from 'react-bootstrap/Button'
import {useState} from 'react'
import {findRoutesWithNameContains} from '../utils/apiInteraction'
import toast from 'react-hot-toast'
import get from 'lodash.get'
import {useSetRecoilState} from 'recoil'
import {routesState} from '../state/atoms'

export const SearchFormBySubstringInName = () => {
	const setRoutes = useSetRecoilState(routesState)
	const [substr, setSubstr] = useState('')

	const findAll = () => {
		findRoutesWithNameContains(substr).then((response) => {
			setRoutes(response.data)
			toast.success('Successfully')
		}).catch((err) => {
			toast.error(get(err, 'response.data.message', 'error'))
		})
	}

	return (
		<Form>
			<InputGroup className="mb-3">
				<Button variant="dark" onClick={findAll} disabled={substr === ''}>Find all</Button>
				<InputGroup.Text>whose name contains</InputGroup.Text>
				<Form.Control value={substr} onChange={event => setSubstr(event.target.value)}/>
			</InputGroup>
		</Form>
	)
}
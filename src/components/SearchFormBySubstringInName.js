import {Form, InputGroup} from 'react-bootstrap'
import Button from 'react-bootstrap/Button'
import {useState} from 'react'

export const SearchFormBySubstringInName = () => {
	const [substr, setSubstr] = useState('')

	const findAll = () => {
		console.log()
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
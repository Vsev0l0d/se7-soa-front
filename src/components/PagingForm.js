import {Form, InputGroup} from 'react-bootstrap'
import Button from 'react-bootstrap/Button'
import {useState} from 'react'

export const PagingForm = () => {
	const [limit, setLimit] = useState("")
	const [pageNumber, setPageNumber] = useState("")

	const findAll = () => {
		console.log(limit + ' ' + pageNumber)
	}

	return (
		<Form>
			<InputGroup className="mb-3">
				<Button variant="dark" onClick={findAll}
						disabled={limit.includes('.') || pageNumber.includes('.') ||
							limit.includes('-') || pageNumber.includes('-') ||
							limit === '' || pageNumber === ''}
				>Set paging</Button>
				<InputGroup.Text>with limit</InputGroup.Text>
				<Form.Control type="number" value={limit}
							  onChange={event => setLimit(event.target.value)}/>
				<InputGroup.Text>and page number</InputGroup.Text>
				<Form.Control type="number" value={pageNumber}
							  onChange={event => setPageNumber(event.target.value)}/>
			</InputGroup>
		</Form>
	)
}
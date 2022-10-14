import {Form, InputGroup} from 'react-bootstrap'
import Button from 'react-bootstrap/Button'
import {useState} from 'react'
import {useRecoilState} from 'recoil'
import {pagingState} from '../state/atoms'

export const PagingForm = ({updateRoutes}) => {
	const [paging, setPaging] = useRecoilState(pagingState)
	const [limit, setLimit] = useState("")
	const [pageNumber, setPageNumber] = useState("")

	const click = () => {
		setPaging({'limit': limit, 'pageNumber': pageNumber})
		updateRoutes(null, null, {'limit': limit, 'pageNumber': pageNumber})
	}

	return (
		<Form>
			<InputGroup className="mb-3">
				<Button variant="dark" onClick={click}
						disabled={limit.includes('.') || pageNumber.includes('.') ||
							limit.includes('-') || pageNumber.includes('-') ||
							limit === '' || pageNumber === ''}
				>Set paging</Button>
				<InputGroup.Text>with limit</InputGroup.Text>
				<Form.Control type="number"
							  className={Object.entries(paging).length ? 'bg-warning' : ''}
							  onChange={event => {
								  setLimit(event.target.value)
								  setPaging({})
							  }}/>
				<InputGroup.Text>and page number</InputGroup.Text>
				<Form.Control type="number"
							  className={Object.entries(paging).length ? 'bg-warning' : ''}
							  onChange={event => {
								  setPageNumber(event.target.value)
								  setPaging({})
							  }}/>
			</InputGroup>
		</Form>
	)
}
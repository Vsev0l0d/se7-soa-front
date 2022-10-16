import {Form, InputGroup} from 'react-bootstrap'
import Button from 'react-bootstrap/Button'
import {useState} from 'react'
import {useRecoilState, useSetRecoilState} from 'recoil'
import {isDataNeedsToBeUpdatedState, pagingState} from '../state/atoms'
import get from 'lodash.get'

export const PagingForm = () => {
	const [paging, setPaging] = useRecoilState(pagingState)
	const setIsDataNeedsToBeUpdated = useSetRecoilState(isDataNeedsToBeUpdatedState)
	const [limit, setLimit] = useState('')
	const [pageNumber, setPageNumber] = useState('')

	const click = () => {
		const newPaging = {}
		if (limit.length) newPaging.limit = Number(limit)
		if (pageNumber.length) newPaging.pageNumber = Number(pageNumber)
		setPaging(newPaging)
		setIsDataNeedsToBeUpdated(true)
	}

	return (
		<Form id="pagingForm">
			<InputGroup className="mb-3">
				<Button variant="dark" onClick={click} disabled={(limit === '' && pageNumber === '') ||
					document.querySelectorAll('#pagingForm .form-control[type="number"]:invalid').length}
				>Set paging</Button>
				<InputGroup.Text>with limit</InputGroup.Text>
				<Form.Control type="number" min="1"
							  className={get(paging, 'limit', '10') === Number(limit) ? 'bg-warning' : ''}
							  onChange={event => {
								  setLimit(event.target.value)
							  }}/>
				<InputGroup.Text>and page number</InputGroup.Text>
				<Form.Control type="number" min="1"
							  className={get(paging, 'pageNumber', 1) === Number(pageNumber) ? 'bg-warning' : ''}
							  onChange={event => {
								  setPageNumber(event.target.value)
							  }}/>
			</InputGroup>
		</Form>
	)
}
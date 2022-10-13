import Dropdown from 'react-bootstrap/Dropdown'
import {DropdownButton, Form, InputGroup} from 'react-bootstrap'
import Button from 'react-bootstrap/Button'
import {useState} from 'react'

export const SortForm = () => {
	const [arr, setArr] = useState([])
	const [fields, setFields] = useState(new Map([
		'id', 'name', 'coordinates_x', 'coordinates_y', 'creationDate',
		'from_id', 'from_x', 'from_y', 'from_z',
		'to_id', 'to_x', 'to_y', 'to_z'].map(x => [x, false])))

	const sortBy = () => {
		console.log(arr)
	}

	const add = (event) => {
		const newFields = Object.assign(fields)
		newFields.set(event.target.innerText.slice(1), true)
		setFields(newFields)
		setArr([...arr, event.target.innerText])
	}

	const pop = () => {
		const newFields = Object.assign(fields)
		newFields.set(arr[arr.length - 1].slice(1), false)
		setFields(newFields)
		setArr(arr.slice(0, -1))
	}

	return (
		<Form id="sortForm">
			<InputGroup className="mb-3">
				<Button variant="dark" onClick={sortBy} disabled={arr.length === 0}>Sort by</Button>
				<InputGroup.Text>{arr.join()}</InputGroup.Text>
				<DropdownButton variant="dark" title="+">
					{[...fields].map(value => (
						<div key={value[0]}>
							{!value[1] && <>
								<Dropdown.Item onClick={add}>{'+' + value[0]}</Dropdown.Item>
								<Dropdown.Item onClick={add}>{'-' + value[0]}</Dropdown.Item>
							</>}
						</div>
					))}
				</DropdownButton>
				<Button variant="dark" onClick={pop}>-</Button>
			</InputGroup>
		</Form>
	)
}
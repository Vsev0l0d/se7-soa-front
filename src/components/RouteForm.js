import {Form} from 'react-bootstrap'
import {InputField} from './InputField'
import {InputObject} from './InputObject'

export const RouteForm = () => {
	return (
		<Form>
			<InputField id="name" type="text"/>
			<InputObject id="coordinates" fields={['x', 'y']}/>
			<InputObject id="from" fields={['x', 'y', 'z']}/>
			<InputObject id="to" fields={['x', 'y', 'z']}/>
			<InputField id="distance"/>
		</Form>
	)
}
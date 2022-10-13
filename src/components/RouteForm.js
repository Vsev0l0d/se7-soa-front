import {Form} from 'react-bootstrap'
import {InputField} from './InputField'
import {InputObject} from './InputObject'
import {useRecoilState, useRecoilValue, useSetRecoilState} from 'recoil'
import {bufferRoute, feedbackRouteValidator, isAddingWithLocationIds} from '../state/atoms'
import {validate} from '../utils/routeValidator'

export const RouteForm = ({isEditing}) => {
	const [withIds, setWithIds] = useRecoilState(isAddingWithLocationIds)
	const setFeedback = useSetRecoilState(feedbackRouteValidator)
	const route = useRecoilValue(bufferRoute)

	const change = () => {
		setFeedback(validate(route, !withIds))
		setWithIds(!withIds)
	}

	return (
		<Form>
			<InputField id="name" type="text"/>
			<InputObject id="coordinates" fields={['x', 'y']}/>

			{!isEditing && <Form.Check type="switch" label="is adding with location ids" reverse
									   onChange={change} checked={withIds}/>}
			{withIds ?
				<>
					<InputField id="from.id" step="1"/>
					<InputField id="to.id" step="1"/>
				</>
				:
				<>
					<InputObject id="from" fields={['x', 'y', 'z']}/>
					<InputObject id="to" fields={['x', 'y', 'z']}/>
				</>
			}

			<InputField id="distance"/>
		</Form>
	)
}
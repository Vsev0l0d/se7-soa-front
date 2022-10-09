import {Form, InputGroup} from 'react-bootstrap'
import {useRecoilState} from 'recoil'
import {bufferRoute} from '../state/atoms'

export const RouteForm = () => {
	const [route, setRoute] = useRecoilState(bufferRoute)

	return (
		<Form>
			<fieldset>
				<Form.Group className="mb-3">
					<Form.Label htmlFor="name">Name</Form.Label>
					<Form.Control id="name" value={route ? route.name : ''}/>
				</Form.Group>

				<Form.Label htmlFor="coordinates" column>Coordinates</Form.Label>
				<InputGroup className="mb-1" id="coordinates">
					<InputGroup.Text id="coordinatesx">X</InputGroup.Text>
					<Form.Control id="coordinatesx" value={route ? route.coordinates.x : ''}/>
				</InputGroup>
				<InputGroup className="mb-3">
					<InputGroup.Text id="coordinatesy">Y</InputGroup.Text>
					<Form.Control id="coordinatesy" value={route ? route.coordinates.y : ''}/>
				</InputGroup>

				<Form.Label htmlFor="from" column>From</Form.Label>
				<InputGroup className="mb-1" id="from">
					<InputGroup.Text id="fromx">X</InputGroup.Text>
					<Form.Control id="fromx" value={route ? route.from.x : ''}/>
				</InputGroup>
				<InputGroup className="mb-1">
					<InputGroup.Text id="fromy">Y</InputGroup.Text>
					<Form.Control id="fromy" value={route ? route.from.y : ''}/>
				</InputGroup>
				<InputGroup className="mb-3">
					<InputGroup.Text id="fromz">Z</InputGroup.Text>
					<Form.Control id="fromz" value={route ? route.from.z : ''}/>
				</InputGroup>

                <Form.Label htmlFor="to" column>To</Form.Label>
                <InputGroup className="mb-1" id="to">
                    <InputGroup.Text id="tox">X</InputGroup.Text>
                    <Form.Control id="tox" value={route ? route.to.x : ''}/>
                </InputGroup>
                <InputGroup className="mb-1">
                    <InputGroup.Text id="toy">Y</InputGroup.Text>
                    <Form.Control id="toy" value={route ? route.to.y : ''}/>
                </InputGroup>
                <InputGroup className="mb-3">
                    <InputGroup.Text id="toz">Z</InputGroup.Text>
                    <Form.Control id="toz" value={route ? route.to.z : ''}/>
                </InputGroup>

                <Form.Group className="mb-3">
                    <Form.Label htmlFor="distance">Distance</Form.Label>
                    <Form.Control id="distance" value={route ? route.distance : ''}/>
                </Form.Group>
			</fieldset>
		</Form>
	)
}
import {Form, InputGroup} from 'react-bootstrap'
import {useRecoilState} from 'recoil'
import {bufferRoute} from '../state/atoms'
import get from 'lodash.get'
import set from 'lodash.set'

export const RouteForm = () => {
	const [route, setRoute] = useRecoilState(bufferRoute)
    const change = (event) => {
        const newRoute = JSON.parse(JSON.stringify(route))
        set(newRoute, event.target.id, event.target.value)
        setRoute(newRoute)
    }

	return (
		<Form id="routeForm">
            <Form.Group className="mb-3">
                <Form.Label htmlFor="name">Name</Form.Label>
                <Form.Control id="name" value={get(route, 'name', '')}
                              onChange={change} required/>
            </Form.Group>

            <Form.Label htmlFor="coordinates" >Coordinates</Form.Label>
            <InputGroup className="mb-3" id="coordinates">
                <InputGroup.Text id="coordinates.x">X</InputGroup.Text>
                <Form.Control id="coordinates.x" value={get(route, 'coordinates.x', '')}
                              type="number" onChange={change} required/>
                <InputGroup.Text id="coordinates.y">Y</InputGroup.Text>
                <Form.Control id="coordinates.y" value={get(route, 'coordinates.y', '')}
                              type="number" onChange={change} required/>
            </InputGroup>

            <Form.Label htmlFor="from">From</Form.Label>
            <InputGroup className="mb-3" id="from">
                <InputGroup.Text id="from.x">X</InputGroup.Text>
                <Form.Control id="from.x" value={get(route, 'from.x', '')}
                              type="number" onChange={change} required/>
                <InputGroup.Text id="from.y">Y</InputGroup.Text>
                <Form.Control id="from.y" value={get(route, 'from.y', '')}
                              type="number" onChange={change} required/>
                <InputGroup.Text id="from.z">Z</InputGroup.Text>
                <Form.Control id="from.z" value={get(route, 'from.z', '')}
                              type="number" onChange={change} required/>
            </InputGroup>

            <Form.Label htmlFor="to">To</Form.Label>
            <InputGroup className="mb-3" id="to">
                <InputGroup.Text id="to.x">X</InputGroup.Text>
                <Form.Control id="to.x" value={get(route, 'to.x', '')}
                              type="number" onChange={change} required/>
                <InputGroup.Text id="to.y">Y</InputGroup.Text>
                <Form.Control id="to.y" value={get(route, 'to.y', '')}
                              type="number" onChange={change} required/>
                <InputGroup.Text id="to.z">Z</InputGroup.Text>
                <Form.Control id="to.z" value={get(route, 'to.z', '')}
                              type="number" onChange={change} required/>
            </InputGroup>

            <Form.Group className="mb-3">
                <Form.Label htmlFor="distance">Distance</Form.Label>
                <Form.Control id="distance" value={get(route, 'distance', '')}
                              type="number" onChange={change} required/>
            </Form.Group>
		</Form>
	)
}
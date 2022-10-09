import {atom} from 'recoil'

export const selectedRoutesId = atom({
	key: 'selectedRoutesId',
	default: [],
})

export const isEditingRoute = atom({
	key: 'isEditingRoute',
	default: false,
})

export const bufferRoute = atom({
	key: 'bufferRoute',
	default: {},
})

export const showModalForm = atom({
	key: 'showModalForm',
	default: true,
})

export const routesState = atom({
	key: 'routesState',
	default: [
		{
			'id': 4,
			'name': 'string',
			'coordinates': {
				'x': 0,
				'y': 271
			},
			'creationDate': '2022-10-06',
			'from': {
				'id': 5,
				'x': 0,
				'y': 0,
				'z': 0
			},
			'to': {
				'id': 5,
				'x': 0,
				'y': 0,
				'z': 0
			},
			'distance': 2
		},
		{
			'id': 5,
			'name': 'string',
			'coordinates': {
				'x': 0,
				'y': 271
			},
			'creationDate': '2022-10-06',
			'from': {
				'id': 5,
				'x': 0,
				'y': 0,
				'z': 0
			},
			'to': {
				'id': 5,
				'x': 0,
				'y': 0,
				'z': 0
			},
			'distance': 2
		}
	],
})
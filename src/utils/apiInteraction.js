import axios from 'axios'
import get from 'lodash.get'

const SERVICE_1 = 'https://localhost:4568/soa-3-1.0-SNAPSHOT'
const SERVICE_2 = 'https://localhost:31361/soa-3-2-1.0-SNAPSHOT'

const filtersToStr = (filters) => {
	return Object.keys(filters).map(filter => {
		if (typeof filters[filter] === 'string') {
			return filters[filter].length ? filter + '=eq:' + filters[filter] : ''
		} else {
			if (Object.entries(filters[filter]).length === 0) return ''
			let min = get(filters[filter], 'min', '')
			let max = get(filters[filter], 'max', '')
			if (filter === 'creationDate') {
				min = min ? min : '0001-01-01'
				max = max ? max : '9999-12-31'
			} else {
				min = min ? min : Number.MIN_SAFE_INTEGER
				max = max ? max : Number.MAX_SAFE_INTEGER
			}
			return filter + '=between:' + min + ':' + max
		}
	}).join('&')
}

const sortToStr = (sort) => {
	return sort.length ? 'sort=' + sort.join(',') : ''
}

const pagingToStr = (paging) => {
	const limit = get(paging, 'limit', 10)
	const pageNumber = get(paging, 'pageNumber', 1)
	return (limit !== 10 ? 'page_size=' + limit : '') + (limit !== 10 && pageNumber !== 1 ? '&' : '') +
		(pageNumber !== 1 ? 'page=' + pageNumber : '')
}

export const getRoutes = (filters, sort, paging) => {
	const options = [filtersToStr(filters), sortToStr(sort), pagingToStr(paging)].filter(s => s.length).join('&')
	return axios.get(SERVICE_1 + '/routes?' + options)
}

export const deleteRoute = (id) => {
	return axios.delete(SERVICE_1 + '/routes/' + id)
}

export const countByDistance = (mode, distance) => {
	return axios.post(SERVICE_1 + '/routes/count/distance/' + mode + '/' + distance)
}

export const findRoutesWithNameContains = (substr) => {
	return axios.post(SERVICE_1 + '/routes/name/contains/' + substr)
}

export const findBetweenLocationsAndSortBy = (fromId, toId, orderBy) => {
	return axios.get(SERVICE_2 + '/navigator/routes/' + fromId + '/' + toId + '/' + orderBy)
}

const washRoute = (route, isAddingWithLocationIds) => {
	const washedRoute = {
		'name': route.name,
		'coordinates': {
			'x': route.coordinates.x,
			'y': route.coordinates.y
		},
		'distance': route.distance
	}

	if (isAddingWithLocationIds) {
		washedRoute['from'] = {'id': route.from.id}
		washedRoute['to'] = {'id': route.to.id}
	} else {
		washedRoute['from'] = {'x': route.from.x, 'y': route.from.y, 'z': route.from.z}
		washedRoute['to'] = {'x': route.to.x, 'y': route.to.y, 'z': route.to.z}
	}
	return washedRoute
}

export const postRoute = (route, isAddingWithLocationIds) => {
	const url = !isAddingWithLocationIds ? SERVICE_1 + '/routes' :
		SERVICE_2 + '/navigator/route/add/' + route.from.id + '/' + route.to.id + '/' + route.distance

	return axios.post(url,
		JSON.stringify(washRoute(route, isAddingWithLocationIds)),
		{headers: {'Content-Type': 'application/json;charset=UTF-8'}})

}

export const putRoute = (route, isAddingWithLocationIds) => {
	return axios.put(SERVICE_1 + '/routes/' + route.id,
		JSON.stringify(washRoute(route, isAddingWithLocationIds)),
		{headers: {'Content-Type': 'application/json;charset=UTF-8'}})

}
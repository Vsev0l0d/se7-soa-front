import axios from 'axios'
import get from 'lodash.get'

const SERVICE_1 = 'http://localhost:4567/soa-3-1.0-SNAPSHOT'

const filtersToStr = (filters) => {
	return Object.keys(filters).map(filter => {
		if (typeof filters[filter] === 'string'){
			return filters[filter].length ? filter + '=eq:' + filters[filter] : ''
		} else {
			if (Object.entries(filters[filter]).length === 0) return ''
			let min = get(filters[filter], 'min', '')
			let max = get(filters[filter], 'max', '')
			if (filter === 'creationDate'){
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
	const limit = get(paging, 'limit', '')
	const pageNumber = get(paging, 'pageNumber', '')
	return (limit.length ? 'page_size=' + limit + '&': '') + (pageNumber.length ? 'pageNumber=' + pageNumber : '')
}

export const getRoutes = (filters, sort, paging) => {
	const options = [filtersToStr(filters), sortToStr(sort), pagingToStr(paging)].filter(s=>s.length).join('&')
	return axios.get(SERVICE_1 + '/routes?' + options)
}

export const deleteRoute = (id) => {
	return axios.delete(SERVICE_1 + '/routes/' + id)
}
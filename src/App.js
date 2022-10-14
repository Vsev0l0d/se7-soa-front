import React, {useEffect} from 'react'
import {RoutesTable} from './components/RoutesTable'
import {ModalWindow} from './components/ModalWindow'
import {useRecoilValue, useSetRecoilState} from 'recoil'
import {DeleteRouteButton} from './components/DeleteRouteButton'
import {QuantityFormByDistance} from './components/QuantityFormByDistance'
import {FiltersForm} from './components/FiltersForm'
import {SearchFormBetweenLocations} from './components/SearchFormBetweenLocations'
import {SearchFormBySubstringInName} from './components/SearchFormBySubstringInName'
import {SortForm} from './components/SortForm'
import {PagingForm} from './components/PagingForm'
import toast, {Toaster} from 'react-hot-toast'
import {filtersState, pagingState, routesState, sortState} from './state/atoms'
import {getRoutes} from './utils/apiInteraction'
import get from 'lodash.get'

function App() {
	const setRoutes = useSetRecoilState(routesState)
	const sort = useRecoilValue(sortState)
	const filters = useRecoilValue(filtersState)
	const paging = useRecoilValue(pagingState)

	useEffect(() => {
		updateRoutes()
	});

	const updateRoutes = (filtersNew, sortNew, pagingNew) => {
		const  promise = getRoutes(
			filtersNew ? filtersNew : filters,
			sortNew ? sortNew : sort,
			pagingNew ? pagingNew : paging
		)

		promise.then((response) => {
			setRoutes(response.data)
		}).catch((err) => {
			toast.error(
				get(err, 'response.data.message', 'error')
			)
		})
	}

	return (
		<div className="container pt-4">
			<Toaster position="bottom-right" reverseOrder={false}/>
			<QuantityFormByDistance/>
			<SearchFormBetweenLocations/>
			<SearchFormBySubstringInName/>
			<PagingForm updateRoutes={updateRoutes}/>
			<SortForm updateRoutes={updateRoutes}/>
			<FiltersForm updateRoutes={updateRoutes}/>
			<ModalWindow/>
			<DeleteRouteButton/>
			<RoutesTable/>
		</div>
	)
}

export default App

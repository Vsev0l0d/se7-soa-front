import React, {useEffect, useState} from 'react'
import {RoutesTable} from './components/RoutesTable'
import {ModalWindow} from './components/ModalWindow'
import {useRecoilState, useRecoilValue, useSetRecoilState} from 'recoil'
import {DeleteRouteButton} from './components/DeleteRouteButton'
import {QuantityFormByDistance} from './components/QuantityFormByDistance'
import {FiltersForm} from './components/FiltersForm'
import {SearchFormBetweenLocations} from './components/SearchFormBetweenLocations'
import {SearchFormBySubstringInName} from './components/SearchFormBySubstringInName'
import {SortForm} from './components/SortForm'
import {PagingForm} from './components/PagingForm'
import toast, {Toaster} from 'react-hot-toast'
import {filtersState, isDataNeedsToBeUpdatedState, pagingState, routesState, sortState} from './state/atoms'
import {getRoutes} from './utils/apiInteraction'
import get from 'lodash.get'
import {ReloadButton} from './components/ReloadButton'

function App() {
	const setRoutes = useSetRecoilState(routesState)
	const [isDataNeedsToBeUpdated, setIsDataNeedsToBeUpdated] = useRecoilState(isDataNeedsToBeUpdatedState)
	const sort = useRecoilValue(sortState)
	const filters = useRecoilValue(filtersState)
	const paging = useRecoilValue(pagingState)
	const [isLoading, setIsLoading] = useState(true)

	useEffect(() => {
		if (isDataNeedsToBeUpdated) {
			setIsLoading(true)
			setIsDataNeedsToBeUpdated(false)
			getRoutes(filters, sort, paging).then((response) => {
				setRoutes(response.data)
			}).catch((err) => {
				toast.error(get(err, 'response.data.message', 'Error loading data'))
			}).finally(() => setIsLoading(false))
		}
	})

	return (
		<div className="container pt-4">
			<Toaster position="bottom-right" reverseOrder={false}/>
			<QuantityFormByDistance/>
			<SearchFormBetweenLocations/>
			<SearchFormBySubstringInName/>
			<PagingForm/>
			<SortForm/>
			<FiltersForm/>
			<ModalWindow/>
			<ReloadButton isLoading={isLoading}/>
			<DeleteRouteButton/>
			<RoutesTable/>
		</div>
	)
}

export default App

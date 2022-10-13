import React from 'react'
import {RoutesTable} from './components/RoutesTable'
import {ModalWindow} from './components/ModalWindow'
import {RecoilRoot} from 'recoil'
import {DeleteRouteButton} from './components/DeleteRouteButton'
import {QuantityFormByDistance} from './components/QuantityFormByDistance'
import {FiltersForm} from './components/FiltersForm'
import {SearchFormBetweenLocations} from './components/SearchFormBetweenLocations'
import {SearchFormBySubstringInName} from './components/SearchFormBySubstringInName'
import {SortForm} from './components/SortForm'
import {PagingForm} from './components/PagingForm'

function App() {
	return (
		<RecoilRoot>
			<div className="container pt-4">
				<QuantityFormByDistance/>
				<SearchFormBetweenLocations/>
				<SearchFormBySubstringInName/>
				<PagingForm/>
				<SortForm/>
				<FiltersForm/>
				<ModalWindow/>
				<DeleteRouteButton/>
				<RoutesTable/>
			</div>
		</RecoilRoot>
	)
}

export default App

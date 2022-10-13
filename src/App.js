import React from 'react'
import {RoutesTable} from './components/RoutesTable'
import {ModalWindow} from './components/ModalWindow'
import {RecoilRoot} from 'recoil'
import {AddRouteButton} from './components/AddRouteButton'
import {DeleteRouteButton} from './components/DeleteRouteButton'
import {QuantityFormByDistance} from './components/QuantityFormByDistance'
import {FiltersForm} from './components/FiltersForm'

function App() {
	return (
		<RecoilRoot>
			<div className="container pt-4">
				<div className="content">
					<FiltersForm/>
					<div className="mx-3">
						<QuantityFormByDistance/>
					</div>
				</div>
				<AddRouteButton/>
				<DeleteRouteButton/>
				<ModalWindow/>
				<RoutesTable/>
			</div>
		</RecoilRoot>
	)
}

export default App

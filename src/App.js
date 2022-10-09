import React from 'react'
import {RoutesTable} from './components/RoutesTable'
import {ModalWindow} from './components/ModalWindow'
import {RecoilRoot} from 'recoil'
import {AddRouteButton} from './components/AddRouteButton'
import {DeleteRouteButton} from './components/DeleteRouteButton'

function App() {
	return (
		<RecoilRoot>
			<div className="container pt-4">
				<AddRouteButton/>
				<DeleteRouteButton/>
				<ModalWindow/>
				<RoutesTable/>
			</div>
		</RecoilRoot>
	)
}

export default App

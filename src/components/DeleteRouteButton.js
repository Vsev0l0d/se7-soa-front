import {useRecoilState} from 'recoil'
import {routesState, selectedRoutesId} from '../state/atoms'
import Button from 'react-bootstrap/Button'
import React from 'react'

export const DeleteRouteButton = () => {
    const [selectedIds, setSelectedId] = useRecoilState(selectedRoutesId)
    const [routes, setRoutes] = useRecoilState(routesState)

    const deleteRoutes = () => {
        selectedIds.forEach((id) => {
            setRoutes(routes.filter((x) => {return x.id !== id}))
        })
        setSelectedId([])
    }

    return (
        <Button hidden={selectedIds.length === 0} variant='danger' onClick={deleteRoutes}>Delete</Button>
    )
}
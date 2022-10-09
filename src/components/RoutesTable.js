import React from 'react'
import {useRecoilState, useRecoilValue, useSetRecoilState} from 'recoil'
import {bufferRoute, routesState, selectedRoutesId, showModalForm} from '../state/atoms'

export const RoutesTable = () => {
    const routes = useRecoilValue(routesState)
    const setShow = useSetRecoilState(showModalForm)
    const setBufferRoute = useSetRecoilState(bufferRoute)
    const [selectedIds, setSelectedId] = useRecoilState(selectedRoutesId)

    const edit = (route) => {
        setBufferRoute(route)
        setShow(true)
    }

    const select = (event, routeId) => {
        if (selectedIds.indexOf(routeId) >= 0){
            setSelectedId(selectedIds.filter((x) => {return x !== routeId}))
            event.target.parentElement.classList.remove('selected')
        } else {
            setSelectedId([...selectedIds, routeId])
            event.target.parentElement.classList.add('selected')
        }
    }

    return (
        <table className='table table-dark table-bordered'>
            <thead className='text-center align-middle'>
                <tr>
                    <th rowSpan='2'>id</th>
                    <th rowSpan='2'>name</th>
                    <th colSpan='2'>coordinates</th>
                    <th rowSpan='2'>creationDate</th>
                    <th colSpan='4'>from</th>
                    <th colSpan='4'>to</th>
                    <th rowSpan='2'>distance</th>
                </tr>
                <tr>
                    <th>x</th>
                    <th>y</th>
                    <th>id</th>
                    <th>x</th>
                    <th>y</th>
                    <th>z</th>
                    <th>id</th>
                    <th>x</th>
                    <th>y</th>
                    <th>z</th>
                </tr>
            </thead>
            <tbody>
                {routes.map(route => (
                    <tr key={route.id} onDoubleClick={() => {edit(route)}}
                        onClick={(event) => {select(event, route.id)}}>
                        <td>{route.id}</td>
                        <td>{route.name}</td>
                        <td>{route.coordinates.x}</td>
                        <td>{route.coordinates.y}</td>
                        <td>{route.creationDate}</td>
                        <td>{route.from.id}</td>
                        <td>{route.from.x}</td>
                        <td>{route.from.y}</td>
                        <td>{route.from.z}</td>
                        <td>{route.to.id}</td>
                        <td>{route.to.x}</td>
                        <td>{route.to.y}</td>
                        <td>{route.to.z}</td>
                        <td>{route.distance}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}
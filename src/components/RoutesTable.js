import React from "react";

export const RoutesTable = ({routes}) => {
    return (
        <table className="table table-dark table-bordered table-hover">
            <thead className="text-center align-middle">
                <tr>
                    <th rowSpan="2">id</th>
                    <th rowSpan="2">name</th>
                    <th colSpan="2">coordinates</th>
                    <th rowSpan="2">creationDate</th>
                    <th colSpan="4">from</th>
                    <th colSpan="4">to</th>
                    <th rowSpan="2">distance</th>
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
                    <tr>
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
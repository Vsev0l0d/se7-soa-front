import React from "react";
import {RoutesTable} from "./components/RoutesTable";

function App() {
    const routes = [
        {
            "id": 5,
            "name": "string",
            "coordinates": {
                "x": 0,
                "y": 271
            },
            "creationDate": "2022-10-06",
            "from": {
                "id": 5,
                "x": 0,
                "y": 0,
                "z": 0
            },
            "to": {
                "id": 5,
                "x": 0,
                "y": 0,
                "z": 0
            },
            "distance": 2
        },
        {
            "id": 5,
            "name": "string",
            "coordinates": {
                "x": 0,
                "y": 271
            },
            "creationDate": "2022-10-06",
            "from": {
                "id": 5,
                "x": 0,
                "y": 0,
                "z": 0
            },
            "to": {
                "id": 5,
                "x": 0,
                "y": 0,
                "z": 0
            },
            "distance": 2
        }
    ];
  return (
      <div className="container pt-4">
        <RoutesTable routes={routes}/>
      </div>
  );
}

export default App;

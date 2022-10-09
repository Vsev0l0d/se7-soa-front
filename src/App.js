import React from "react";
import {RoutesTable} from "./components/RoutesTable";
import {RouteForm} from "./components/RouteForm";
import {RecoilRoot} from "recoil";
import {AddRouteButton} from "./components/AddRouteButton";

function App() {
    return (
        <RecoilRoot>
            <div className="container pt-4">
                <AddRouteButton/>
                <RouteForm/>
                <RoutesTable/>
            </div>
        </RecoilRoot>
    );
}

export default App;

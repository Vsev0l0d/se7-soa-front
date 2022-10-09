import {atom} from "recoil";

export const showModalForm = atom({
    key: "showModalForm",
    default: false,
})

export const routesState = atom({
    key: "routesState",
    default: [
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
    ],
});
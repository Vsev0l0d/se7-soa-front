import {useSetRecoilState} from 'recoil'
import {showModalForm} from '../state/atoms'
import Button from 'react-bootstrap/Button'
import React from 'react'

export const AddRouteButton = () => {
    const setShow = useSetRecoilState(showModalForm)
    const handleShow = () => setShow(true)

    return (
        <Button variant='dark' onClick={handleShow}>Add route</Button>
    )
}
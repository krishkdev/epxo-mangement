import React from 'react'
import Form from "./Form"
import Stalls from './Stalls'

const Dashboard = () => {
    return (
        <div id="container">
        <h1 className="text-center text-6xl p-6">Expo.</h1>
        <Form />
        <Stalls />
    </div>
    )
}

export default Dashboard

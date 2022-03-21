import React from 'react'
import { AppContext } from '../../App'

export default function Navbar() {
    const {username} = React.useContext(AppContext)
    return (
        <div>
            <h1>Navbar</h1>
            <div>{username}</div>
        </div>
        
    )
}

import React from 'react'
import { AppContext } from '../../App'

export default function Messages() {
    const {username} = React.useContext(AppContext)
    return (
        <div>
            <h1>Message</h1>
            <div>{username}</div>
        </div>
        
    )
}

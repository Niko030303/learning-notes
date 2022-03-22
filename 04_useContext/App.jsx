// 创建“外壳”组件(RFC)
import React from 'react'
import Messages from './components/Messages'
import Navbar from './components/Navbar'

export const AppContext = React.createContext({})

export default function App() {

    return (
        <AppContext.Provider value={{
            username: "Hello"
        }}>
            <div>
                <Messages />
                <Navbar />
            </div>
        </AppContext.Provider>
        
    )
}

import { createContext, useState } from "react";


const AppContext = createContext()
function AppProvider({children}) {

    const [ activeModel, setActiveModel ] = useState('')

    return <AppContext.Provider value={{
        activeModel,
        setActiveModel
    }}>
        {children}
    </AppContext.Provider>
}

export default AppProvider;
export { AppContext }
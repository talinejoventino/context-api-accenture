import {createContext, useContext, useState} from 'react';

const ToggleContext = createContext()

function ToggleProvider({children}){
    const [estadoPai, setEstadoPai] = useState(false)
    const [estadoFilho, setEstadoFilho] = useState(false)

    const handleClickEstadoPai = () => {
        setEstadoPai(pState => !pState)
    }
    const handleClickEstadoFilho = () => {
        setEstadoFilho(pState => !pState)
    }
    return(<ToggleContext.Provider value={{
        estadoPai,
        estadoFilho,
        handleClickEstadoFilho,
        handleClickEstadoPai
    }}>
        {children}
    </ToggleContext.Provider>
    )

}

function useToggle(){
    const context = useContext(ToggleContext)
    return context
}

export {ToggleProvider, useToggle}
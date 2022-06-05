import React,{createContext,useReducer , useEffect} from 'react';
import AuthReducer from '../context/AuthReducer'



const initialState = {
        currentUser:     localStorage.getItem("user") || null
}


export const AuthContext = createContext(initialState)

export const AuthContextProvider = ({children})=>{
        const [state,dispatch] =useReducer(AuthReducer,initialState)
        useEffect(()=>{
                localStorage.setItem("user",JSON.stringify(state.currentUser))
        },[state.currentUser])
        return (
                <AuthContext.Provider value={{currentUser:state.currentUser , dispatch}}>
                        {children}
                </AuthContext.Provider>
        )
}
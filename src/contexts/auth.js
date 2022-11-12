import {createContext, useEffect, useState} from "react"

export const AuthContext = createContext({})

export const AuthProvider = ({ children }) => {

    const [user, setUser] = useState()

    useEffect( () => {
        const userToken = localStorage.getItem("user_token")
        const usersStorage = localStorage.getItem("users_db")

        if(userToken && usersStorage){
            const hasUser = JSON.parse(usersStorage)?.filter(
                (user) => user.username === JSON.parse(userToken).username
            )

            if(hasUser) setUser(hasUser[0])
        }

    }, [])

    const signin = (username, password) => {
        const usersStorage = JSON.parse(localStorage.getItem("users_db"))
    
        const hasUser = usersStorage?.filter( (user) => user.username === username)
    
        if(hasUser?.length){
            if(hasUser[0].username === username && hasUser[0].password === password){
                const token = Math.random().toString(36).substring(2);
                localStorage.setItem("user_token", JSON.stringfy({ username, token}))
                setUser({ username, password })
                return
            } else {
                return "E-mail ou senha incorretos"
            }
        }else{
            return "Usuário não cadastrado"
        }
    }

    const signup = (username, password) => {
        const usersStorage = JSON.parse(localStorage.getItem("users_db"))

        const hasUser = usersStorage?.filter( (user) => user.username === username)

        if(hasUser?.length){
            return "Já existe uma conta com esse E-mail"
        }

        let newUser

        if(usersStorage){
            newUser = [...usersStorage, { username, password }]
        } else {
            newUser = [{ username, password }]
        }

        localStorage.setItem("users_db", JSON.stringify(newUser))

        return
    }

    const signout = () => {
        setUser(null)
        localStorage.removeItem("user_token")
    }

    return <AuthContext.Provider value={{user, signed: !!user, signin, signup, signout}} >{children}</AuthContext.Provider>

}
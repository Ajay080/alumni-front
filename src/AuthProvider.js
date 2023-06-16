import axios from "axios"
import { createContext, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

export const AuthContext = createContext(null)


const AuthProvider = (props) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false)
    const [token, setToken] = useState("")

    const navigate = useNavigate()

    const logout = () => {
        setToken("")
        setIsAuthenticated(false)
        localStorage.removeItem('token')
    }

    const signup = async (name, email, password) => {
        try {
            const data = await (await axios.post(`https://alumni-backend-e8il.onrender.com/users`, {
                name,
                email,
                password
            })).data
            console.log(data)
            const { token, user } = data
            localStorage.setItem('token', token)
            setToken(token)
            setIsAuthenticated(true)
            navigate('/')
            
        } catch (error) {
            console.error(error)
        }
    }
    const login = async (email, password) => {
        try {
            const { data } = await axios.post(`https://alumni-backend-e8il.onrender.com/users/login`, {
                email, password
            });
            const { token, user } = data
            setToken(token)
            setIsAuthenticated(true)
            localStorage.setItem('token', token)
            navigate('/')
        } catch (error) {
            console.error(error)
        }
    }

    const checkToken = async (token) => {
        try {
            const data = await (await axios.get(`https://alumni-backend-e8il.onrender.com/users/me`, {
                headers: {
                    "Authorization": `Bearer ${token}`
                }
            })).data
            console.log(data)
            if (data) {
                setToken(token)
                setIsAuthenticated(true)
            }

        } catch (error) {
            console.error(error)
        }
    }

    useEffect(() => {
        (async () => {
            const token = localStorage.getItem('token')
            console.log("token:" , token)
            if (token) {
                await checkToken(token)
                navigate(
                    "/"
                )
            }

        })()

    }, [])

    return <AuthContext.Provider value={{ token, setToken, isAuthenticated, setIsAuthenticated, logout, signup, login }}>
        {props.children}
    </AuthContext.Provider>
}

export default AuthProvider
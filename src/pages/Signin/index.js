import styles from './styles.module.css'
import {useState} from "react"
import {useNavigate} from "react-router-dom"
import useAuth from "../../hooks/useAuth"

function Signin(){
    const { signin } = useAuth()
    const navigate = useNavigate()

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    function handleLogin(){
        if(!username | !password){
            setError("Preencha todos os campos")
            return
        }

        const res = signin(username, password)

        if(res){
            setError(res)
            return
        }

        navigate("/home")
    }

    return(
        <div className={styles.container}>
            <form className={styles.box}>
                <h1>Signin</h1>
                <br></br> 
                <input type='text' placeholder='Username' value={username} onChange={(e) => [setUsername(e.target.value), setError("")]}/>
                <br></br>
                <br></br>
                <input type='password' placeholder='Password' value={password} onChange={(e) => [setPassword(e.target.value), setError("")]}/>
                <br></br>
                <br></br>
                <button onClick={handleLogin}>Send</button>
            </form>
        </div>
    )
}

export default Signin
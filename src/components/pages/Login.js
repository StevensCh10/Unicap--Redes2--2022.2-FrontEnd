import styles from './Login.module.css'

function Login(){
    return(
        <div className={styles.container}>
            <form className={styles.box}>
                <h1>Login</h1>
                <br></br>
                <input type='text' placeholder='Username'/>
                <br></br>
                <br></br>
                <input type='password' placeholder='Password'/>
                <br></br>
                <br></br>
                <button>Send</button>
            </form>
        </div>
    )
}

export default Login
import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom';
import { AuthContext } from './AuthProvider'
import './Login.css'
const Login = () => {
    const { login } = useContext(AuthContext)

    const [email, setEmail] = useState()
    const [password, setPassword] = useState()

    return (
        <div className="fu">
            <div className="card-content card">
                <div className="card-title">
                   <h2> LOGIN</h2>
                   <hr/>
                </div>
                <form className="form" onSubmit={(e) => { e.preventDefault() }}>
                    
                    <label htmlFor="user-email" className="llabel">Email</label>
                    <input  className="form-content" type="email" id="user-email" name="Email" value={email} required onChange={e => setEmail(e.target.value)} />
                    <div className="form-border"></div>
                    <br/>
                    <label htmlFor="user-password" className="llabel">Password</label>
                    <input className="form-content"type="password" id="user-password" name="Password" value={password} required onChange={e => setPassword(e.target.value)} />
                    <div className="form-border"></div>
                    <br/>
                    <div className="sub">
                    <button className="submit-btn" type="submit" onClick={() => {
                        login(email, password)
                    }}>LOGIN</button>
                    </div>
                    <br/>
                    <div className="Up">
                    <Link to="/signup"id="signup">Does not have account yet?</Link>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login
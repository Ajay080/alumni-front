import { React, useContext, useState } from 'react'
import axios from 'axios'
import { AuthContext } from './AuthProvider'
import {Link} from 'react-router-dom'
import './SignUp.css'

const SignUp = () => {

    const { signup } = useContext(AuthContext)

    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()



    return (
        <div className="fu">
            <div className="card-content card">
                <div className="card-title">
                   <h2>SIGN UP</h2>
                   <hr/>
                </div>
                <form className="form" onSubmit={(e) => { e.preventDefault() }}>
                     <label htmlFor="Name" className="llabel">Name:</label>
                    <input className="form-content" type="text" id="Name" name="Name" value={name} onChange={e => setName(e.target.value)} />
                    <div className="form-border"></div>
                    <br/>
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
                        signup(name, email, password)
                    }}>Sign Up</button>
                    </div>
                    <br/>
                    <div className="In">
                    <Link to="/login" className="login">Already have account ?</Link>
                    </div>
                </form>
            </div>
        </div>
        // <div style={{ flex: 1, backgroundColor: 'red' }}>
        //     <div>
        //         <form onSubmit={(e) => { e.preventDefault() }}>
        //             <label htmlFor="Name">Name:</label>
        //             <input type="text" id="Name" name="Name" value={name} onChange={e => setName(e.target.value)} />
        //             <label htmlFor="Email">Email:</label>
        //             <input type="email" id="Email" name="Email" value={email} onChange={e => setEmail(e.target.value)} />
        //             <label htmlFor="Password">Password:</label>
        //             <input type="password" id="Password" name="Password" value={password} onChange={e => setPassword(e.target.value)} />
        //             <button type="submit" onClick={() => {
        //                 signup(name, email, password)
        //             }}>Click me</button>
        //         </form>
        //     </div>
        // </div>
    )
}
export default SignUp
// const Dummy = () => {
//   const [name, setName] = useState()
//   const [email, setEmail] = useState()
//   const [password, setPassword] = useState()

//   const submit = async () => {
//     const data = await (await axios.post(`https://alumni-backend-e8il.onrender.com:10000/users`, {
//       name,
//       email,
//       password
//     })).data
//     console.log(data)

//   }

//   return (
//     <div style={{ backgroundColor: 'red', flex: 1, width: 300 }}>
//       <form style={{ display: 'flex', flexDirection: 'column' }} onSubmit={(e) => {
//         e.preventDefault()
//       }}>
//         <label for="Name">Name:</label>
//         <input type="text" id="Name" name="Name" value={name} onChange={e => setName(e.target.value)} />
//         <label for="Email">Email:</label>
//         <input type="email" id="Email" name="Email" value={email} onChange={e => setEmail(e.target.value)} />
//         <label for="Password">Password:</label>
//         <input type="password" id="Password" name="Password" value={password} onChange={e => setPassword(e.target.value)} />
//       <button type="submit" onClick={submit}>Click me</button>
//       </form>

//       <div>Hello</div>
//     </div>
//   )
// }
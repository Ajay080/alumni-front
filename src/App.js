

import Home from "./pages/Home"
import Contact from "./pages/Contact"
import Reading from "./pages/Reading"
import TopAlumni from "./pages/TopAlumni"
import Notable from "./pages/Notable"
import Wiser from "./pages/Wiser"
import Award from "./pages/Award"
import Daily from "./pages/Daily"
import Gallery from "./pages/Gallery"
import Video from "./pages/Video"
import FAQ from "./pages/FAQ"
import Career from "./pages/Career"
import Layout from "./Components/Layout"
import Fulljob from "./pages/Fulljob"
// import Signup from "./pages/Signup"
// import Main from "./Authen/Main";
// import Signup from "./Authen/SignUp";
// import Login from "./Authen/Login";
// import SignUp from "./SignUp"
import Test from "./Test"
import Onboarding from "./pages/Onboarding"

import { Route, Routes, Navigate } from "react-router-dom"
import "./App.css"
import SignUp from "./SignUp"
import AuthProvider, { AuthContext } from "./AuthProvider"
import { useContext } from "react"
import Login from "./Login"

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

function App() {

  const { isAuthenticated } = useContext(AuthContext)

  const AuthenticatedRoutes = () => <Routes>
    {/* <Route path="/" element={<Layout />}> */}
      <Route path='/' element={<Home />} />
    {/* </Route> */}
    <Route path="/contact" element={<Contact />} />
    <Route path="/more" element={<Gallery />} />
    <Route path="/reading" element={<Reading />} />
    <Route path="/overview" element={<Home />} />
    <Route path="/about" element={<Home />} />
    <Route path="/news" element={<Home />} />
    <Route path="/topalumni" element={<TopAlumni />} />
    <Route path="/notable" element={<Notable />} />
    <Route path="/wiser" element={<Wiser />} />
    <Route path="/award" element={<Award />} />
    <Route path="/daily" element={<Daily />} />
    <Route path="/gallery" element={<Gallery />} />
    <Route path="/video" element={<Video />} />
    <Route path="/faq" element={<FAQ />} />
    <Route path="/career" element={<Career />} />
    <Route path="/test" element={<Test/>}/>
    <Route path="/onBoarding" element={<Onboarding/>}/>
    <Route path="/full-job" element={<Fulljob/>}/>
    <Route path="*" element={<p>Not found!</p>} />

  </Routes>

  const UnauthenticatedRoutes = () => <Routes>
    <Route path="/signup" element={<SignUp />} />
    <Route path="/login" element={<Login />} />

    <Route path="*" element={<SignUp />} />
  </Routes>

  return (
    <>
      {isAuthenticated ?
        <AuthenticatedRoutes />
        :
        <UnauthenticatedRoutes />
      }
    </>
  )
}

export default App
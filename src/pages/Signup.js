import React from 'react'
import  SignUpContainer from "../Components/Signup/SignUpContainer"
import MuiThemeProvider from "mui/styles/MuiThemeProvider";
import  '../Components/Signup/style.css'
import Header from '../Components/Header'

const Signup = () => {
  return (
    
    <MuiThemeProvider>
      {<Header/>}
    <SignUpContainer />
  </MuiThemeProvider>
  )
}

export default Signup
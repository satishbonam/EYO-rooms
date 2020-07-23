

import React, { Component } from "react";
import styles from "./Form.module.css";
import {connect} from "react-redux"
import {signupRequest} from "../../redux/authentication/actions"

let pattern = {
  username: /^[a-z\d]{5,12}$/i,
  name: /^[a-z]{5,12}$/i,
  password:/^[\w@-]{8,15}$/i,
  mobile:/^\d{10}$/,
  email:/^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,6})(\.[a-z]{2,6})?$/i
  //abc@example.com.in
}

 class SignUp extends Component {

  constructor(props){
    super(props);
    this.state = {
      mobile:"",
      password:"",
      name:"",
      email:"",
      username:"",
      isMobileValid:false,
      isEmailValid:false,
      isUsernameValid:false,
      isNameValid:false,
      isPasswordValid:false
    }
  }
  handleChange = (e)=>{
    this.setState({
      [e.target.name] : e.target.value
    },()=>console.log(this.state))
  }

  validate(pattern,value){
    
    if(pattern.test(value)){
      return true
    }  
    else{
      return false
    }
  }

  handleSignup = (e)=>{
    e.preventDefault()
    const {mobile,password,name,email,username } = this.state
   
    if(!mobile && !name && !username && !email && !password){
      
      this.setState({
        isEmailValid:true,
        isMobileValid:true,
        isNameValid:true,
        isPasswordValid:true,
        isUsernameValid:true
      })
      return
    }
    let mobileValidValue = this.validate(pattern.mobile,mobile)
    let emailValidValue = this.validate(pattern.email,email)
    let nameVaildValue = this.validate(pattern.name,name)
    let usernameValidValue = this.validate(pattern.username,username)
    let passwordValidValue = this.validate(pattern.password,password)
    
    if(!mobileValidValue){
      this.setState({
       isMobileValid:true
    })
    return
    }
    if(!emailValidValue){
      this.setState({
       isEmailValid:true
    })
    return
    }
    if(!usernameValidValue){
      this.setState({
       isUsernameValid:true
    })
    return
    }
    if(!passwordValidValue){
      this.setState({
       isPasswordValid:true
    })
    return
    }
    if(!nameVaildValue){
      this.setState({ isNameValid:true})
    return
    }

    if(mobileValidValue && emailValidValue && nameVaildValue && usernameValidValue && passwordValidValue){
      let value = {mobile,password,name,email,username}
      signupRequest(value)
    }
    else{
      return
    }
    
  }


  render() {
    const{handleChange,name,email,password,mobile,username,
          isNameValid,isMobileValid,isEmailValid,isPasswordValid,isUsernameValid
    } = this
     
    return (
      <form id={styles.signupform}>
        <div className="form-group">
          <label for="exampleInputEmail1">Name</label>
          <input type="text" name="name" value={name} onChange={handleChange} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
          <small className={isNameValid?"d-block":"d-none"}>not valid name</small>
        </div>
        <div className="form-group">
          <label for="exampleInputPassword1">Username</label>
          <input type="password" name="username" value={username} onChange={handleChange} className="form-control" id="exampleInputPassword1" />
          <small className={isUsernameValid?"d-block":"d-none"}>not valid username</small>
        </div>
        <div className="form-group">
          <label for="exampleInputEmail1">Email address</label>
          <input type="email" name="email" value={email} onChange={handleChange} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
          <small className={isEmailValid?"d-block":"d-none"}>not an valid email</small>
        </div>
        <div className="form-group">
          <label for="exampleInputPassword1">Create a password</label>
          <input type="password" name="password" value={password} onChange={handleChange} className="form-control" id="exampleInputPassword1" />
          <small className={isPasswordValid?"d-block":"d-none"}>not valid password</small>
        </div>
        <div className="form-group">
          <label for="exampleInputPassword1">Enter 10 digit mobile</label>
          <input type="number"  name="mobile" value={mobile} onChange={handleChange} className="form-control" id="exampleInputPassword1" />
          <small className={isMobileValid?"d-block":"d-none"}>not valid mobile</small>
        </div>

        <button disabled id={styles.button} type="submit" className="btn btn-primary">
          signup
        </button>
       

      </form>
    );
  }
}

const mapStateToProps = state=>({
  isSignUp:state.auth.isSignup
  
})

const mapDispatchToProps = dispatch=>({
  signupRequest: payload => dispatch(signupRequest(payload)),
})

export default connect(mapStateToProps,mapDispatchToProps)(SignUp)

import React, { Component } from "react";
import styles from "./Form.module.css";
import {connect} from "react-redux"
import {loginRequestWithPassword} from "../../redux/authentication/actions"

let pattern = {
  username: /^[a-z\d]{5,12}$/i,
  name: /^[a-z]{5,12}$/i,
  password:/^[\w@-]{8,15}$/i,
  mobile:/^\d{10}$/,
  email:/^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,6})(\.[a-z]{2,6})?$/i
  //abc@example.com.in
}

 class LoginWithPassword extends Component {

constructor(props){
    super(props);
    this.state = {
      mobile:"",
      password:"",
      isMobileValid:false,
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

  handleLoginWithPassword = (e)=>{

    
    const{mobile,password,isMobileValid,isPasswordValid} = this.state

let mobileValidValue = this.validate(pattern.mobile,mobile)
let passwordValidValue = this.validate(pattern.password,password)

this.setState({
  isMobileValid:mobileValidValue,
  isPasswordValid:passwordValidValue,
})

    if(!isValid && !isPasswordValid){
      loginRequestWithPassword(value)
    }
    else{
      return
    }
    
  }


  render() {
    const {password,mobile,isMobileValid} = this.state
    return (
      <form id={styles.signupform}>
        <div className="form-group">

        <div id={styles.loginHeader}> Login / Signup</div>
          <label for="exampleInputEmail1"> Please enter your phone number to continue</label>
          <input type="number" value={mobile} onChange={this.handleChange} required className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
          <small className={isMobileValid?"d-block":"d-none"}>mobile is not valid</small>
        </div>


        <div className="form-group">
          <label for="exampleInputPassword1">password</label>
          <input type="password" name="password" value={password} onChange={this.handleChange} required  className="form-control" id="exampleInputPassword1" />
        </div>

        <button onClick={this.handleLoginWithPassword} id={styles.button} type="submit" className="btn btn-primary">
          Verify Number
        </button>

        <div id={styles.formFooter}>
          Prefer to Proceed with OTP instead? <span className="text-danger" onClick={this.props.showLoginWithOtp(true)}>Click here</span>{" "}
        </div>
      </form>
    );
  }
}

const mapStateToProps = state=>({
  isLogin:state.app.isLogin
  
})

const mapDispatchToProps = dispatch=>({
  loginRequestWithPassword: payload => dispatch(loginRequestWithPassword(payload)),
})

export default connect(mapStateToProps,mapDispatchToProps)(LoginWithPassword)
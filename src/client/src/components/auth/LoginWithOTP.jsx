
import React, { Component } from "react";
import styles from "./Form.module.css";
import { connect } from "react-redux";
import {loginRequestWithOtp} from "../../redux/authentication/actions"


let pattern = {
  mobile:/^\d{10}$/,
}


export default class LoginWithOTP extends Component {
  
constructor(props){
  super(props);
  this.state = {
    mobile:"",
    isMobileValid:false,
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
const{mobile,isMobileValid} = this.state

let mobileValidValue = this.validate(pattern.mobile,mobile)

this.setState({
isMobileValid:mobileValidValue,
})

  if(!isMobileValid){
    loginRequestWithOtp(value)
  }
  else{
    return
  }
  
}

  render() {
    const{mobile,handleChange} = this

    return (
      <form id={styles.signupform}>
        <div className="form-group">
          <div id={styles.loginHeader}> Login / Signup</div>
          <label for="exampleInputEmail1"> Please enter your phone number to continue</label>
          <input type="password" name="mobile" value={mobile} onChange={handleChange} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
          <small className={isMobileValid?"d-block":"d-none"}>not an valid email</small>
        </div>

        <button disabled id={styles.button} type="submit" className="btn btn-primary">
          Verify Number
        </button>
        <div id={styles.formFooter}>
          Prefer to Proceed with OTP instead? <span className="text-danger" onClick={this.props.showLoginWithPassword(true)}>Click here</span>{" "}
        </div>
      </form>
    );
  }
}


const mapStateToProps = state=>({
  isOtp:state.auth.isOtp
  
})

const mapDispatchToProps = dispatch=>({
  loginRequestWithOtp: payload => dispatch(loginRequestWithOtp(payload)),
})

export default connect(mapStateToProps,mapDispatchToProps)(LoginWithOTP)
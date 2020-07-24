import React, { Component } from "react";
import styles from "./Form.module.css";
import { connect } from "react-redux";
import { loginRequestWithOtp, loginRequestWithOauth } from "../../redux/authentication/actions";
import GoogleLogin from "react-google-login";

let pattern = {
  mobile: /^\d{10}$/,
};

class LoginWithOTP extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mobile: "",
      isMobileValid: false,
    };
  }

  // for google oauth login
  googleResponse = (googleUser) => {
    console.log(googleUser);

    // const value = {
    //   name,
    //   email,
    //   provider:"google",
    //   access_token
    // }
    // if (value) {
    //   loginRequestWithOauth(value);
    // }
  };

  handleChange = (e) => {
    this.setState(
      {
        [e.target.name]: e.target.value,
      },
      () => console.log(this.state)
    );
  };

  validate(pattern, value) {
    if (pattern.test(value)) {
      return true;
    } else {
      return false;
    }
  }

  handleLoginWithOtp = (e) => {
    e.preventDefault();
    const { mobile, isMobileValid } = this.state;
    if (!mobile) {
      this.setState({ isMobileValid: true });
      return;
    }
    
    let mobileValidValue = this.validate(pattern.mobile, mobile);
    if (mobileValidValue) {
      this.props.loginRequestWithOtp(mobile);
    } else {
      this.setState({ isMobileValid: true });
      return 
    }
  };

  render() {
    const { mobile, handleChange, isMobileValid } = this;
    const {showLoginWithPassword} = this.props

    return (
      <form id={styles.signupform}>
        <div className="form-group">
          <div id={styles.loginHeader}> Login / Signup</div>
          <label for="exampleInputEmail1"> Please enter your phone number to continue</label>
          <input type="password" name="mobile" value={mobile} onChange={handleChange} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
          <small className={isMobileValid ? "d-block" : "d-none"}>not an valid email</small>
        </div>

        <button disabled id={styles.button} type="submit" onClick={this.handleLoginWithOtp} className="btn btn-primary">
          Verify Number
        </button>
        <div id={styles.formFooter}>
          Prefer to Proceed with OTP instead?{" "}
          <span className="text-danger" onClick={()=>showLoginWithPassword(true)}>
            Click here
          </span>{" "}
        </div>
        <GoogleLogin
          clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
          onSuccess={this.googleResponse}
          onFailure={this.googleResponse}
          cookiePolicy="single_host_origin"
          // uxMode="popup"
          // isSignedIn={false}
        ></GoogleLogin>
      </form>
    );
  }
}

const mapStateToProps = (state) => ({
  isOtp: state.auth.isOtp,
});

const mapDispatchToProps = (dispatch) => ({
  loginRequestWithOtp: (payload) => dispatch(loginRequestWithOtp(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginWithOTP);

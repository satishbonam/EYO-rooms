import React, { Component } from "react";
import styles from "./Form.module.css";
import { connect } from "react-redux";
import { loginRequestWithPassword, loginRequestWithOauth } from "../../redux/authentication/actions";
import GoogleLogin from "react-google-login";

let pattern = {
  username: /^[a-z\d]{5,12}$/i,
  name: /^[a-z]{5,12}$/i,
  password: /^[\w@-]{8,15}$/i,
  mobile: /^\d{10}$/,
  email: /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,6})(\.[a-z]{2,6})?$/i,
  //abc@example.com.in
};

class LoginWithPassword extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mobile: "",
      password: "",
      isMobileValid: false,
      isPasswordValid: false,
      isMessage: false,
      messageText: "please enter all the fields",
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

  handleLoginWithPassword = (e) => {
    e.preventDefault();
    const { mobile, password, isMobileValid, isPasswordValid } = this.state;

    if (!mobile || !password) {
      this.setState({ isMessage: true });
      return;
    }
    let mobileValidValue = this.validate(pattern.mobile, mobile);
    let passwordValidValue = this.validate(pattern.password, password);

    if (!mobileValidValue) {
      return this.setState({ isMobileValid: true });
    }
    if (!passwordValidValue) {
      return this.setState({ isPasswordValid: true });
    }

    if (mobile && password) {
      let value = { mobile, password };
      console.log(value);
      this.props.loginRequestWithPassword(value);
    } else {
      return;
    }
  };

  render() {
    const { token, showLoginWithOtp } = this.props;
    if (token) {
      localStorage.setItem("jwt", token);
    }
    const { password, isPasswordValid, mobile, isMobileValid, isMessage, messageText } = this.state;
    return (
      <form id={styles.signupform}>
        <div className="form-group">
          <div id={styles.loginHeader}> Login / Signup</div>

          {isMessage && <small className="d-block text-danger">{messageText}</small>}
          <label for="exampleInputEmail1"> Please enter your phone number to continue</label>
          <input type="number" name="mobile" value={mobile} onChange={this.handleChange} required className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
          <small className={isMobileValid ? "d-block text-danger" : "d-none text-danger"}>mobile is not valid</small>
        </div>

        <div className="form-group">
          <label for="exampleInputPassword1">password</label>
          <input type="password" name="password" value={password} onChange={this.handleChange} required className="form-control" id="exampleInputPassword1" />
          <small className={isPasswordValid ? "d-block text-danger" : "d-none text-danger"}>mobile is not valid</small>
        </div>

        <button onClick={this.handleLoginWithPassword} id={styles.button} type="submit" className="btn btn-primary">
          Verify Number
        </button>

        <div id={styles.formFooter}>
          Prefer to Proceed with OTP instead?{" "}
          <span className="text-danger" onClick={() => showLoginWithOtp(true)}>
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
  token: state.auth.token,
});

const mapDispatchToProps = (dispatch) => ({
  loginRequestWithPassword: (payload) => dispatch(loginRequestWithPassword(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginWithPassword);

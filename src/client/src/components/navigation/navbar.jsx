import React, { Component } from "react";
import { Link } from "react-router-dom";
import styles from "../navigation/Navbar.module.css";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faUserCircle } from "@fortawesome/free-solid-svg-icons";

export default class navbar extends Component {
  
    constructor(props){
      super(props);
      this.state = {
        isLogin:false
      }
    }

  handleLogout=(token)=>{
    logoutRequest(token)
  }

  render() {
    const {token,user, isLogout} = this.props
    const {isLogin} = this.state
    if(token){
      isLogin:true
    }
    if(isLogout){
      localStorage.setItem("jwt",null)
    }

    return (
      <nav className="navbar navbar-expand-md navbar-light bg-white shadow-sm  border">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/" style={{ padding: "0.5rem 0" }}>
            <img src="/images/logo_size.jpg" alt="EYO" style={{ height: "35px" }} />
          </Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
              <li role="presentation" className="nav-item d-none d-md-block d-lg-block d-xl-block">
                {
                  isLogin? (
                    <Link to="/" id={styles.button} className="nav-link btn  btn-sm font-weight-bold ">
                        {/* <FontAwesomeIcon icon={faUserCircle} /> */}
                        Login / Signup
                    </Link>
                  ):(
                    <>
                    <b>{user.name || user.email}</b>
                    <Link onClick={()=>handleLogout(token)} id={styles.button} className="nav-link btn  btn-sm font-weight-bold ">
                        {/* <FontAwesomeIcon icon={faUserCircle} /> */}
                        Logout User
                    </Link>
                    </>
                  )
                }
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}



const mapStateToProps = (state) => ({
  token = state.auth.token,
  user = state.auth.userDetails,
  isLogout  =state.auth.isLogout
});

const mapDispatchToProps = (dispatch) => ({
  loginRequestWithPassword: (payload) => dispatch(loginRequestWithPassword(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginWithPassword);
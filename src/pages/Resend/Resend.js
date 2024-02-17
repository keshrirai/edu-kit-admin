import React, { Component } from "react";
import { connect } from 'react-redux';
import { userActions } from '../../_actions';

class Signup extends Component {
  constructor(props) {
    super(props);
    this.props.dispatch(userActions.logout());
    this.state = {
      email: ''
    }
  }
  componentDidMount() {
  }
  inputChange = (e) => {
    e.preventDefault();
    let { name, value } = e.target;
    this.setState({ [name]: value });
  }
  forgotPassword = (e) => {
    e.preventDefault();
    let { email } = this.state;
    this.props.dispatch(userActions.resendVerificationLink({ email}, this.props));
  }
  onClickMenu=(url)=>{
    this.props.history.push(url)
  }
  render() {

    return (
      <>
        <div className="login-signup-part">
          <div className="container">
            <div className="row">
              <div className="col-sm-6 mx-auto">
                <div className="login-box">
                  <div className="logo-col"><img alt="laksdjfl" src="images/logo.png" /></div>
                  <h2>Resend Verification Link</h2>
                  <form onSubmit={this.forgotPassword}>
                    <div className="form-group">
                      <input type="text" name="email" placeholder="Email address" className="form-control" onChange={this.inputChange}  />
                    </div>
                    <div className="form-group">
                      <button type="submit" className="btn submit-btn">Send Link</button>
                    </div>
                  </form>
                  <div className="form-group">
                    <span className="forget-text"  onClick={()=>this.onClickMenu('login')}><span></span>Already have account?</span>
                    <span className="forget-text" onClick={()=>this.onClickMenu('signup')}><span>Create Account, </span>Sign Up?</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    )
  }
}
function mapStateToProps(state) {
  const { loggingIn } = state.authentication;
  const { users } = state;
  return {
    loggingIn,
    users
  };
}
export default connect(mapStateToProps)(Signup);

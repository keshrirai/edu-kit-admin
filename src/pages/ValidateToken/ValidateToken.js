import React, { Component } from "react";
import { connect } from 'react-redux';
import { userActions } from '../../_actions';

class ValidateToken extends Component {

  constructor(props) {
    super(props);
    this.props.dispatch(userActions.logout());
    this.forgotUpdatePassword = this.forgotUpdatePassword.bind(this);
    this.inputChange = this.inputChange.bind(this);
    this.state = {
      newPassword: '',
      confirmnewPassword: ''
    }
  }
  componentDidMount() {
    let data={
      id:this.props.match.params.id
    }
    this.props.dispatch(userActions.validateId(data, this.props));
  }
  onClickMenu=(url)=>{
    this.props.history.push(url)
  }
  inputChange(e) {
    e.preventDefault();
    let { name, value } = e.target;
    this.setState({ [name]: value });
  }
  forgotUpdatePassword(e) {
    e.preventDefault();
    
    let sendDataToAPI={
      ...this.props.users.userinfotoken,confirmnewPassword:this.state.confirmnewPassword,newPassword:this.state.newPassword

    }
    this.props.dispatch(userActions.forgotUpdatePassword(sendDataToAPI, this.props));
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
                  
                  {this.props.users.userinfotoken?<>
                  <h2>Please reset your password</h2><form onSubmit={this.forgotUpdatePassword}>
                    <div className="form-group">
                      <input type="password" name="newPassword" id="newPassword" placeholder="New Password" className="form-control" onChange={this.inputChange} />
                    </div>
                    <div className="form-group">
                      <input type="password" name="confirmnewPassword" id="confirmnewPassword" placeholder="Confirm Password" className="form-control" onChange={this.inputChange} />
                    </div>
                    <div className="form-group">
                      <button type="submit" className="btn submit-btn">Reset Password</button>
                    </div>
                  </form></>:<h2>Link Expired.</h2>}
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
export default connect(mapStateToProps)(ValidateToken);

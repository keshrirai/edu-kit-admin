import React, { Component } from "react";
import { connect } from 'react-redux';
import { userActions } from '../../_actions';

class VerifyEmail extends Component {

  constructor(props) {
    super(props);
    this.props.dispatch(userActions.logout());
    this.registerSubmit = this.registerSubmit.bind(this);
    this.inputChange = this.inputChange.bind(this);
    this.state = {
      email: '',
      password: ''
    }
  }
  componentDidMount() {
    let data={
      id:this.props.match.params.id,
      token:this.props.match.params.token
    }
    this.props.dispatch(userActions.verifyEmail(data, this.props));
  }
  onClickMenu=(url)=>{
    this.props.history.push(url)
  }
  inputChange(e) {
    e.preventDefault();
    let { name, value } = e.target;
    this.setState({ [name]: value });
  }
  registerSubmit(e) {
    e.preventDefault();
    let { email, password } = this.state;
    this.props.dispatch(userActions.register({ email: email, password }, this.props));
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
                  <h2>Your email verified.</h2>
                  <div className="form-group">
                    <span className="forget-text" onClick={()=>this.onClickMenu('../../login')}>Login</span>
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
export default connect(mapStateToProps)(VerifyEmail);

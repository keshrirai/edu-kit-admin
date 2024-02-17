import React, { Component } from "react";
import { connect } from 'react-redux';
// import { userActions } from '../../_actions';
import LoadingOverlay from 'react-loading-overlay';
// import Timer from 'otp-timer'


class CustomLogin extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fieldslogin: {},
      errorslogin: {},
      otpSentLogin: false

    }
  }


  componentDidMount() {
    if (this.props.match.params.id) {
      window.sessionStorage.setItem('user', this.props.match.params.id);
      setTimeout(() => {
        this.props.history.push(`/app/dashboard`)
      }, 100);

    }
  }


  render() {
    let { loading } = this.props;

    return (
      <>

        <div>
          <LoadingOverlay
            active={loading}
            className="temp001"
            spinner
            text='Please wait...' />
        </div>

        <>
        </>

      </>
    )
  }
}
function mapStateToProps(state) {
  const { loggingIn, user, otpSentLogin, registeruser, loading } = state.authentication;
  const { users, authentication } = state;
  return {
    loggingIn,
    otpSentLogin,
    user,
    users,
    registeruser,
    loading,
    authentication
  };
}
export default connect(mapStateToProps)(CustomLogin);
// export default NetworkDetector(connect(mapStateToProps)(CustomLogin));
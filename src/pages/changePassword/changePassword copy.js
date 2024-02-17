import React, { Component } from 'react';
import { userActions } from '../../_actions';
import { connect } from 'react-redux';
import Timer from 'otp-timer'

import { RiFacebookFill, RiInstagramLine, RiTwitterLine } from "react-icons/ri";

class ChangePassword extends Component {
  constructor(props) {
    super(props);
    this.state = {

      fieldsUser: {},
      errorslogin: {},
      optUpdatePassword: false

    }
  }

  static getDerivedStateFromProps(nextProps, prevState) {

    if (nextProps.users.otpSentUpdatePass) {
      return {
        ...nextProps,
        fieldsUser: {},
        errorslogin: {},
        optUpdatePassword: nextProps.users.otpSentUpdatePass ? nextProps.users.otpSentUpdatePass : false
      }
    } else {
      return {
        ...nextProps
      }
    }
  }

  inputChange = (e) => {
    e.preventDefault();
    let { name, value } = e.target;
    // this.setState({ [name]: value });
    let fieldsUser = this.state.fieldsUser;
    let errorslogin = this.state.errorslogin;
    fieldsUser[name] = value;
    errorslogin[name] = "";
    // console.log(name, value);
    this.setState({ fieldsUser, errorslogin });
  }


  updatePasswordSubmit = (e) => {

    if (this.handleValidationUserInfo()) {
      let data = {
        currentpassword: this.state.fieldsUser.currentpassword,
        newpassword: this.state.fieldsUser.newpassword,
        confirmnewpassword: this.state.fieldsUser.confirmnewpassword

      }
      // console.log("updatePasswordSubmit___updatePasswordSubmit:::", data);
      this.props.dispatch(userActions.updatePassword(data, this.props));
    }
  }


  handleValidationUserInfo = () => {
    let fieldsUser = this.state.fieldsUser;
    let errorslogin = {};
    let formIsValid = true;


    //currentpassword
    if (!fieldsUser["currentpassword"]) {
      formIsValid = false;
      errorslogin["currentpassword"] = "Invalid Password!";
    }

    //newpassword
    if (!fieldsUser["newpassword"]) {
      formIsValid = false;
      errorslogin["newpassword"] = "Invalid newpassword!";
    }

    //confirmnewpassword
    if (!fieldsUser["confirmnewpassword"]) {
      formIsValid = false;
      errorslogin["confirmnewpassword"] = "Invalid confirmnewpassword!";
    }

    // console.log("errorsUsererrorsUsererrorsUser", errorslogin);

    this.setState({ errorslogin: errorslogin });
    return formIsValid;
  }

  handleValidationUserInfo2 = () => {
    let fieldsUser = this.state.fieldsUser;
    let errorslogin = {};
    let formIsValid = true;

    //newpassword
    if (!fieldsUser["newpassword"] || !fieldsUser["newpassword"].match("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})")) {
      formIsValid = false;
      errorslogin["newpassword"] = "Invalid Password!";
    }

    //confirmnewpassword
    if (!fieldsUser["confirmnewpassword"] || !fieldsUser["confirmnewpassword"].match("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})")) {
      formIsValid = false;
      errorslogin["confirmnewpassword"] = "Invalid confirmnewpassword!";
    }

    //currentpassword
    if (!fieldsUser["currentpassword"] || fieldsUser["currentpassword"] === "") {
      formIsValid = false;
      errorslogin["currentpassword"] = "Cannot Be Empty";
    }

    // console.log("errorsUsererrorsUsererrorsUser2222222222222222222", errorslogin);

    this.setState({ errorslogin: errorslogin });
    return formIsValid;
  }



  render() {
    let { users } = this.props;
    let { upadatePassDetails, otpSentUpdatePass } = users;

    // console.log("RENDER_________upadatePassDetails::", upadatePassDetails);
    return (
      <>
        <div className="h-screen overflow-y-auto">
          <div className="p-3">
            {/* <h1 className="text-2xl font-medium">My Profile</h1> */}
            <div>
              <div className="md:grid md:grid-cols-3 md:gap-6">


                <div className="mt-5 md:mt-0 md:col-span-2 space-y-3">



                  <form autoComplete="off">
                    <h2 className="text-lg py-2 font-medium text-white">Login into your account</h2>

                    <div className="mt-6">
                      <div className="mt-1 rounded-md shadow-sm relative">
                        <input disabled={this.state.optUpdatePassword ? true : false} className={`bg-white border rounded-md border-gray-300 ring-blue-600 focus:ring-blue-600 focus:ring-1 focus:border-none w-full py-4 px-2 text-sm text-gray-600 leading-tight focus:outline-none ${!this.state.errorslogin["currentpassword"] ? "bg-white border rounded-md border-gray-300 ring-blue-600 focus:ring-blue-600 focus:ring-1 focus:border-none w-full py-4 px-2 text-sm text-gray-600 leading-tight focus:outline-none" : "bg-white border rounded-md border-gray-300 ring-blue-600 focus:ring-blue-600 focus:ring-1 focus:border-none w-full py-4 px-2 text-sm text-gray-600 leading-tight focus:outline-none"}`}
                          id="currentpassword" name="currentpassword" placeholder="Current password" type="password" value={this.state.fieldsUser["currentpassword"] ? this.state.fieldsUser["currentpassword"] : ''} onChange={this.inputChange} />
                        {this.state.errorslogin["currentpassword"] ?
                          <div className="invalid-feedback text-yellow-400">
                            {this.state.errorslogin["currentpassword"]}
                          </div>
                          : null}
                      </div>
                    </div>


                    <div className="mt-6">
                      <div className="mt-1 rounded-md shadow-sm relative">
                        <input disabled={this.state.optUpdatePassword ? true : false} className={`bg-white border rounded-md border-gray-300 ring-blue-600 focus:ring-blue-600 focus:ring-1 focus:border-none w-full py-4 px-2 text-sm text-gray-600 leading-tight focus:outline-none ${!this.state.errorslogin["newpassword"] ? "bg-white border rounded-md border-gray-300 ring-blue-600 focus:ring-blue-600 focus:ring-1 focus:border-none w-full py-4 px-2 text-sm text-gray-600 leading-tight focus:outline-none" : "bg-white border rounded-md border-gray-300 ring-blue-600 focus:ring-blue-600 focus:ring-1 focus:border-none w-full py-4 px-2 text-sm text-gray-600 leading-tight focus:outline-none"}`}
                          id="newpassword" name="newpassword" placeholder="New Password" type="password" value={this.state.fieldsUser["newpassword"] ? this.state.fieldsUser["newpassword"] : ''} onChange={this.inputChange} />
                        {this.state.errorslogin["newpassword"] ?
                          <div className="invalid-feedback text-yellow-400">
                            {this.state.errorslogin["newpassword"]}
                          </div>
                          : null}
                      </div>
                    </div>

                    <div className="mt-6">
                      <div className="mt-1 rounded-md shadow-sm relative">
                        <input disabled={this.state.optUpdatePassword ? true : false} className={`bg-white border rounded-md border-gray-300 ring-blue-600 focus:ring-blue-600 focus:ring-1 focus:border-none w-full py-4 px-2 text-sm text-gray-600 leading-tight focus:outline-none ${!this.state.errorslogin["confirmnewpassword"] ? "bg-white border rounded-md border-gray-300 ring-blue-600 focus:ring-blue-600 focus:ring-1 focus:border-none w-full py-4 px-2 text-sm text-gray-600 leading-tight focus:outline-none" : "bg-white border rounded-md border-gray-300 ring-blue-600 focus:ring-blue-600 focus:ring-1 focus:border-none w-full py-4 px-2 text-sm text-gray-600 leading-tight focus:outline-none"}`}
                          id="confirmnewpassword" name="confirmnewpassword" placeholder="Confirm Password" type="password" value={this.state.fieldsUser["confirmnewpassword"] ? this.state.fieldsUser["confirmnewpassword"] : ''} onChange={this.inputChange} />
                        {this.state.errorslogin["confirmnewpassword"] ?
                          <div className="invalid-feedback text-yellow-400">
                            {this.state.errorslogin["confirmnewpassword"]}
                          </div>
                          : null}
                      </div>
                    </div>

                    <div className="mt-6 flex justify-end w-full">
                      <button className="bg_sidebar w-full flex justify-center py-3 uppercase px-4 border border-none text-xl text-white font-semibold rounded" type="button" onClick={this.updatePasswordSubmit}>Change Password</button>
                    </div>

                  </form>

                </div>
              </div>
            </div>

          </div>
        </div >




      </>
    );
  }
}
function mapStateToProps(state) {
  const { users } = state;
  return {
    users
  };
}
export default connect(mapStateToProps)(ChangePassword);

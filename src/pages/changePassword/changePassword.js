import React, { Component } from 'react';
import { userActions } from '../../_actions';
import { connect } from 'react-redux';
// import Timer from 'otp-timer'

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

  componentDidMount() {
    this.props.dispatch(userActions.getUserDetails());
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

  updateEmailSubmit = (e) => {

    if (this.handleValidationEmail()) {
      let data = {
        email: this.state.fieldsUser.email
      }
      // console.log("changeEmail___changeEmail:::", data);
      this.props.dispatch(userActions.changeEmail(data, this.props));
    }
  }


  handleValidationEmail = () => {
    let fieldsUser = this.state.fieldsUser;
    let errorslogin = {};
    let formIsValid = true;


    //email
    if (!fieldsUser["email"]) {
      formIsValid = false;
      errorslogin["email"] = "Plz enter Email !";
    }
    // console.log("errorsUsererrorsUsererrorsUser", errorslogin);

    this.setState({ errorslogin: errorslogin });
    return formIsValid;
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
    let { users, user } = this.props;
    let { upadatePassDetails, otpSentUpdatePass } = users;

    // console.log("RENDER_________upadatePassDetails::", upadatePassDetails);
    return (
      <>
        <div className='w-full h-screen overflow-y-auto bg-gray-100 p-6'>

          <div className="grid xl:grid-cols-2 gap-10 grid-cols-1 w-full">



            <div className="bg-white border rounded-md p-4">
              <div className='w-full p-4 space-y-6'>
                <h1 className='text-black text-xl font-semibold  pb-4'>Change Password</h1>

                <div className="flex flex-col w-full space-y-1">
                  <label className=" text-sm  text-gray-600 font-medium">Current Password</label>
                  <input className="bg-white border p-2 rounded-md placeholder:text-gary-300 focus:outline-none text-black appearance-none" name="currentpassword" type="password" placeholder='Current Password' value={this.state.fieldsUser && this.state.fieldsUser["currentpassword"] ? this.state.fieldsUser["currentpassword"] : ''} onChange={this.inputChange} />
                  {this.state.errorslogin["currentpassword"] ?
                    <div className="invalid-feedback text-red-500 text-xs italic">
                      {this.state.errorslogin["currentpassword"]}
                    </div>
                    : null}
                </div>

                <div className="flex flex-col w-full space-y-1">
                  <label className=" text-sm  text-gray-600 font-medium" for="grid-first-name">New Password</label>
                  <input className="bg-white border p-2 rounded-md placeholder:text-gary-300 focus:outline-none text-black appearance-none" name="newpassword" type="password" placeholder='New Password' value={this.state.fieldsUser && this.state.fieldsUser["newpassword"] ? this.state.fieldsUser["newpassword"] : ''} onChange={this.inputChange} />
                  {this.state.errorslogin["newpassword"] ?
                    <div className="invalid-feedback text-red-500 text-xs italic">
                      {this.state.errorslogin["newpassword"]}
                    </div>
                    : null}
                </div>

                <div className="flex flex-col w-full space-y-1">
                  <label className=" text-sm  text-gray-600 font-medium" for="grid-first-name">Confirm New Password</label>
                  <input className="bg-white border p-2 rounded-md placeholder:text-gary-300 focus:outline-none text-black appearance-none" name="confirmnewpassword" type="password" placeholder='Confirm New Password' value={this.state.fieldsUser && this.state.fieldsUser["confirmnewpassword"] ? this.state.fieldsUser["confirmnewpassword"] : ''} onChange={this.inputChange} />
                  {this.state.errorslogin["confirmnewpassword"] ?
                    <div className="invalid-feedback text-red-500 text-xs italic">
                      {this.state.errorslogin["confirmnewpassword"]}
                    </div>
                    : null}
                </div>

                <div className="block w-full rounded-md shadow-sm pt-6">
                  <button className=" w-full mx-auto flex justify-center p-2 font-medium  text-base font-meduim rounded-md text-white bg-[#FF8008] focus:outline-none transition duration-150 ease-in-out hover:bg-opacity-90" type="button" onClick={this.updatePasswordSubmit}>Update Password</button>
                </div>
              </div>
            </div>
   
            <div className="bg-white border rounded-md p-4">
              <div className='w-full p-4 space-y-6'>
                <h1 className='text-black text-xl font-semibold  pb-4'>Change Email</h1>

                <div className="flex flex-col w-full space-y-1">
                  <label className=" text-sm  text-gray-600 font-medium" for="grid-first-name">Current Email </label>
                  <div className="bg-white border p-2 rounded-md placeholder:text-gary-300 focus:outline-none text-black appearance-none w-full" >
                    {user && user.email ? user.email : "-"}
                  </div>

                </div>


                <div className="flex flex-col w-full space-y-1">

                  {/* <label className="block tracking-wide text-white text-xs font-bold mb-2" for="grid-first-name">Current Email :<p className="text-green-800 text-xs italic"> {user && user.email ? user.email : "-"} </p></label> */}

                  <label className=" text-sm  text-gray-600 font-medium" for="grid-first-name">Email</label>
                  <input className="bg-white border p-2 rounded-md placeholder:text-gary-300 focus:outline-none text-black appearance-none w-full" name="email" type="email" placeholder='Email' value={this.state.fieldsUser && this.state.fieldsUser["email"] ? this.state.fieldsUser["email"] : ''} onChange={this.inputChange} />
                  {this.state.errorslogin["email"] ?
                    <div className="invalid-feedback text-red-500 text-xs italic">
                      {this.state.errorslogin["email"]}
                    </div>
                    : null}
                </div>

                {/* <div className="w-full">
                      <label className="block tracking-wide text-white text-xs font-bold mb-2" for="grid-first-name">New UserName</label>
                      <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-2 px-4 leading-tight focus:outline-none focus:bg-white" name="newusername" type="password" placeholder='New Password' value={this.state.fieldsUser && this.state.fieldsUser["newusername"] ? this.state.fieldsUser["newusername"] : ''} onChange={this.inputChange} />
                      {this.state.errorslogin["newusername"] ?
                        <div className="invalid-feedback text-red-500 text-xs italic">
                          {this.state.errorslogin["newusername"]}
                        </div>
                        : null}
                    </div> */}

                {/* <div className="w-full ">
                      <label className="block tracking-wide text-white text-xs font-bold mb-2" for="grid-first-name">Confirm New UserName</label>
                      <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-2 px-4 leading-tight focus:outline-none focus:bg-white" name="confirmnewpassword" type="password" placeholder='Confirm New Password' value={this.state.fieldsUser && this.state.fieldsUser["confirmnewpassword"] ? this.state.fieldsUser["confirmnewpassword"] : ''} onChange={this.inputChange} />
                      {this.state.errorslogin["confirmnewpassword"] ?
                        <div className="invalid-feedback text-red-500 text-xs italic">
                          {this.state.errorslogin["confirmnewpassword"]}
                        </div>
                        : null}
                    </div> */}

                <div className="block w-full rounded-md shadow-sm pt-6">
                  <button className=" w-full mx-auto flex justify-center p-2 font-medium  text-base font-meduim rounded-md text-white bg-[#FF8008] focus:outline-none transition duration-150 ease-in-out hover:bg-opacity-90" type="button" onClick={this.updateEmailSubmit}>Update Email</button>
                </div>
              </div>
            </div>



          </div>


        </div>

      </>
    );
  }
}
function mapStateToProps(state) {
  const { users } = state;
  const { overview } = users ? users : {};
  const { user } = overview ? overview : {};
  return {
    users,
    user
  };
}
export default connect(mapStateToProps)(ChangePassword);

import React, { Component } from "react";
import { connect } from 'react-redux';
import { userActions } from '../../_actions';
import LoadingOverlay from 'react-loading-overlay';
import Timer from 'otp-timer'



class Signup extends Component {
  constructor(props) {
    super(props);
    // this.props.dispatch(userActions.logout());
    this.state = {
      fieldslogin: {},
      errorslogin: {},
    }
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.authentication.isForgotSuccess) {
      return {
        ...nextProps,
        fieldslogin: {},
        errorslogin: {},
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
    let fieldslogin = this.state.fieldslogin;
    let errorslogin = this.state.errorslogin;
    fieldslogin[name] = value;
    errorslogin[name] = "";
    // console.log(name, value);
    this.setState({ fieldslogin, errorslogin });
  }



  forgotPasswordSubmit = (e) => {
    // e.preventDefault();
    if (this.handleValidationLogin()) {

      let { email } = this.state.fieldslogin;

      this.props.dispatch(userActions.getUserListByEmail({
        email: email,
      }, this.props));
    }
  }




  resetForm = (e) => {
    e.preventDefault();
    this.setState({
      fieldslogin: {},
      errorslogin: {},
    })
    this.hideErrorMessage();
  }



  handleValidationLogin = () => {
    let fieldslogin = this.state.fieldslogin;
    let errorslogin = {};
    let formIsValid = true;

    //Email

    if (!fieldslogin["email"] || fieldslogin["email"] === "") {
      formIsValid = false;
      errorslogin["email"] = "Cannot Be Empty";
    }

    if (typeof fieldslogin["email"] !== "undefined" && fieldslogin["email"] !== "") {
      let lastAtPos = fieldslogin["email"].lastIndexOf('@');
      let lastDotPos = fieldslogin["email"].lastIndexOf('.');

      if (!(lastAtPos < lastDotPos && lastAtPos > 0 && fieldslogin["email"].indexOf('@@') === -1 && lastDotPos > 2 && (fieldslogin["email"].length - lastDotPos) > 2)) {
        formIsValid = false;
        errorslogin["email"] = "Enter Valid Email!";
      }
    }



    this.setState({ errorslogin: errorslogin });
    return formIsValid;
  }

  componentDidMount() {
  }
  onClickMenu = (url) => {
    this.props.history.push(url)
  }



  render() {
    let { otpSentForgotPass, forgotuser, loading, users } = this.props;

    let { userListByEmailItems } = users;

    // console.log("RENDER________userListByEmailItems:::", userListByEmailItems);

    return (
      <>

        <div >
          <LoadingOverlay
            active={loading}
            className="temp001"
            spinner
            text='Please wait...' />
        </div>

        {/* Whole Structure */}
        <div className="overflow-y-auto">
          {/*Header Section */}
          <div className="overflow-y-auto" style={{ backgroundImage: `url("newImg/lOGIN.png")` }}>
            <div className="h-screen flex flex-col justify-center py-12 px-3 sm:px-6 lg:px-8 z-20  overflow-y-auto">
              <div className="mx-auto 2xl:w-4/12 xl:w-5/12 lg:w-7/12 md:w-9/12 w-full md:p-0 p-4 ">
                <div className="bg-[#0b0b0a]  rounded-3xl md:p-10 p-4 md:py-20 py-10  space-y-10">

                  <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <img src="dist/img/Logo.png" alt="" className="text-center mx-auto h-[60px] mb-10" />
                  </div>


                  <div className="md:flex md:divide-x divide-y  divide-black md:rounded-full rounded overflow-hidden text-center text-white text-base">
                    <button className="bg-[#7f105e] p-2 w-full" onClick={() => this.onClickMenu('login')} >login</button>
                    <button className="bg-[#7f105e] p-2 w-full" onClick={() => this.onClickMenu('signup')} >Sign in</button>
                    <button className="bg-purple-500  p-2 w-full" onClick={() => this.onClickMenu('forgot')} >Forgot Password</button>
                  </div>

                  <form autoComplete="off">
                    <h2 data-aos="fade-up" data-aos-duration="500" className="mb-4 text-left text-xl  font-medium capitalize text-white ">For recover your UserName</h2>


                    <div className="{otpSent?'disableArea':''}">

                      <div data-aos="fade-up" data-aos-duration="1000" className="mt-1 rounded-md shadow-sm relative">
                        <input disabled={otpSentForgotPass ? true : false} className={`appearance-none block w-full px-4  py-2 h-12 rounded  bg-transparent  focus:outline-none  border border-white/20 transition duration-150 ease-in-out text-lg font-normal  placeholder-white/50 text-white ${!this.state.errorslogin["email"] ? "'border-opacity-20 border-opacity-100 border placeholder-gray-700" : "border-opacity-100 border border-red-500"}`}
                          id="email" name="email" placeholder="Enter Email Address" type="email" onChange={this.inputChange} />
                        {this.state.errorslogin["email"] ?
                          <div className="invalid-feedback text-yellow-400">
                            {this.state.errorslogin["email"]}
                          </div>
                          : null}

                      </div>

                    </div>


                    <div data-aos="fade-up" data-aos-duration="1500" className="mt-6  mx-auto">
                      <button className="border-none  flex justify-center py-2 px-8 border text-lg font-medium rounded text-black  focus:outline-none  transition duration-150 ease-in-out bg-gradient-to-b from-yellow-200 to-yellow-500" type="button" onClick={this.forgotPasswordSubmit}>Recover UserName</button>
                    </div>





                    {
                      userListByEmailItems ?

                        <>
                          <div className="inline-block min-w-full  ">
                            <div className="overflow-hidden  ">

                              <table className="min-w-full border border-black  text-center">
                                <thead className="border border-black">
                                  <tr className="border border-black text-center">
                                    <th scope="col" className="whitespace-nowrap border border-white text-center px-[49px] bg-[#790000] py-3 text-xs font-semibold text-white uppercase">userName</th>
                                    <th scope="col" className="whitespace-nowrap border border-white text-center px-[31px] py-3 bg-[#790000] text-xs font-semibold text-white capitalize">Id</th>

                                  </tr>
                                </thead>
                                <tbody>

                                  {
                                    userListByEmailItems && userListByEmailItems.length > 0 ?
                                      userListByEmailItems.map((element, index) => (
                                        <>
                                          <tr className="border border-black text-center">
                                            <td scope="col" className="whitespace-nowrap border border-gray-300 text-center px-[11.5px] py-3 text-xs font-semibold text-black bg-white uppercase bg-whj">{element && element.userName ? element.userName : "-"}</td>
                                            <td scope="col" className="whitespace-nowrap border border-gray-300 text-center px-[11.5px] py-3 text-xs font-semibold text-black bg-white uppercase bg-whj">{element && element.refCode ? element.refCode : "-"} </td>
                                          </tr>
                                        </>
                                      )) : null
                                  }

                                </tbody>
                              </table>
                            </div>
                          </div>


                        </> :
                        null
                    }










                    {/* <div className="mt-10 w-64 sm:w-72 mx-auto hidden">

                      <div className="leading-5 text-center pt-2 font-light">
                        <p className="text-base text-gray-300">Don't have an account?
                          <span className="cursor-pointer text-red-600  hover:underline hover:text-shine focus:outline-none focus:underline transition ease-in-out duration-150" onClick={() => this.onClickMenu('signup')}> Sign up</span>
                        </p>
                      </div>
                    </div> */}

                  </form>

                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Whole Structure End*/}
      </>
    )
  }
}
function mapStateToProps(state) {
  const { loggingIn, otpSentForgotPass, forgotuser, loading } = state.authentication;
  const { users, authentication } = state;
  return {
    loggingIn,
    forgotuser,
    otpSentForgotPass,
    users,
    loading,
    authentication
  };
}
export default connect(mapStateToProps)(Signup);


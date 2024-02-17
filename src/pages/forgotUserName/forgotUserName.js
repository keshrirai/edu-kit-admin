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
          <div className="bg-cover bg-no-repeat overflow-y-auto" style={{ backgroundImage: `url("newImg/lOGIN.png")` }}>
            <div className="h-screen flex flex-col justify-center py-12 px-3 sm:px-6 lg:px-8 z-20  overflow-y-auto">
              <div className="mx-auto w-full  max-w-lg">
                <div className="bg-dark border border-gray-800 py-16 shadow rounded-3xl px-6 sm:px-12">
                  <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                  <a className='cursor-pointer' onClick={() => this.onClickMenu('/')}  > <img src="dist/img/Logo.png" alt="" className="text-center mx-auto h-[60px] mb-10" /></a>
                  </div>

                  <h2 className="text-left text-xl leading-9 font-bold uppercase text-white tracking-wide">Forgot UserName</h2>
                  <form autoComplete="off">
                    <h2 className="mb-4 text-left text-xl font-medium text-white ">For recover your username</h2>


                    <div className="{otpSent?'disableArea':''}">

                      <div className="mt-1 rounded-md shadow-sm relative">
                        <input disabled={otpSentForgotPass ? true : false} className={`appearance-none block w-full px-4 pl-4 py-2 h-12 rounded-xl text-gray-800 bg-gray-50 focus:outline-none focus:border-gray-200 focus:bg-gray-100 focus:text-gray-800 transition duration-150 ease-in-out text-lg font-normal sm:leading-5 ${!this.state.errorslogin["email"] ? "'border-opacity-20 border-opacity-100 border placeholder-gray-700" : "border-opacity-100 border border-red-500"}`}
                          id="email" name="email" placeholder="Enter Email Address" type="email" onChange={this.inputChange} />
                        {this.state.errorslogin["email"] ?
                          <div className="invalid-feedback text-yellow-400">
                            {this.state.errorslogin["email"]}
                          </div>
                          : null}

                      </div>

                    </div>

                    <div className="mt-6  mx-auto">
                      <button className="w-full mx-auto flex justify-center py-3 uppercase px-4 border text-lg font-semibold rounded-xl text-white bg-[#BD0C47] border-[#BD0C47] hover:bg-[#BD0C47] hover:text-white focus:outline-none focus:border-red-600 focus:shadow-outline-yellow active:bg-red-700 transition duration-150 ease-in-out" type="button" onClick={this.forgotPasswordSubmit}>Recover UserName</button>
                    </div>



                    {
                      userListByEmailItems ?

                        <>
                          <div className="inline-block min-w-full mt-4">
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
                                      )) : <td colspan="2" className="col-span-2 whitespace-nowrap border border-gray-300 text-center px-[11.5px] py-3 text-xs font-semibold text-black bg-white uppercase bg-whj"></td>
                                  }

                                </tbody>
                              </table>
                            </div>
                          </div>


                        </> :
                        null
                    }


                  </form>
                  <div className="mt-10 w-64 sm:w-72 mx-auto">
                    <div className="leading-5 text-center pt-2 font-light">
                      <p className="text-base text-gray-300">Don't have an account?
                        <span className="cursor-pointer text-green-600  hover:underline hover:text-shine focus:outline-none focus:underline transition ease-in-out duration-150" onClick={() => this.onClickMenu('signup')}> Sign up</span>
                      </p>
                    </div>
                  </div>
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


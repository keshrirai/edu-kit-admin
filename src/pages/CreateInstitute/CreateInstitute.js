import React, { Component } from 'react';
import { dashboardActions } from '../../_actions';
import { connect } from 'react-redux';
import 'react-confirm-alert/src/react-confirm-alert.css';
import { MdOutlineClose, MdOutlineEdit } from 'react-icons/md';
import { confirmAlert } from 'react-confirm-alert';

class Students extends Component {

  constructor(props) {
    super(props);
    this.institueSubmit = this.institueSubmit.bind(this);
    this.inputChange = this.inputChange.bind(this);
    this.state = {
      offset: 0,
      size: 10,
      keyWord: "",
      pageNo: 1,
      updateShow: false,
      fieldsinstitue: {},
      errorinstitue: {},
      fieldsinstitueUpdate: {},
      errorinstitueUpdate: {},
      dateDetails: {
        from_date: new Date(),
        to_date: new Date(),
      },
    }
  }

  componentDidMount() {
    let data = {
      "keyWord": "",
      "pageNo": 1,
      "size": 10
    }
    this.props.dispatch(dashboardActions.getInstList(data));
  }

  static getDerivedStateFromProps(nextProps, prevState) {

    if (nextProps.dashboard.updateShow) {
      return {
        ...nextProps,
        fieldsinstitueUpdate: {},
        errorinstitueUpdate: {},
        updateShow: false
      }
    } else {
      return {
        ...nextProps
      }
    }
  }


  inputChange(e) {
    e.preventDefault();
    let { name, value } = e.target;
    // this.setState({ [name]: value });
    let fieldsinstitue = this.state.fieldsinstitue;
    let errorinstitue = this.state.errorinstitue;
    fieldsinstitue[name] = value;
    errorinstitue[name] = "";
    this.setState({ fieldsinstitue, errorinstitue });
  }


  inputChangeUpdate = (e) => {
    e.preventDefault();
    let { name, value } = e.target;
    // this.setState({ [name]: value });
    let { fieldsinstitueUpdate } = this.state;
    let { errorinstitueUpdate } = this.state;
    fieldsinstitueUpdate[name] = value;
    errorinstitueUpdate[name] = "";
    this.setState({ fieldsinstitueUpdate, errorinstitueUpdate });
  }

  // Update

  institueSubmit = (e) => {
    e.preventDefault();
    if (this.handleValidationInstitue()) {
      let { name, adds, emailId, InstMobNo, logo } = this.state.fieldsinstitue;
      this.props.dispatch(dashboardActions.createInst({
        name: name,
        adds: adds,
        emailId: emailId,
        InstMobNo: InstMobNo,
        logo: logo,
      }, this.props));
    }
  }

  institueUpdateSubmit = (e) => {
    e.preventDefault();
    if (this.handleValidationInstitueUpdate()) {
      let { name, adds, emailId, InstMobNo, logo, id } = this.state.fieldsinstitueUpdate;
      this.props.dispatch(dashboardActions.updateInst({
        id: id,
        name: name,
        adds: adds,
        emailId: emailId,
        InstMobNo: InstMobNo,
        logo: logo,
      }, this.props));
    }
  }

  resetForm = (e) => {
    e.preventDefault();
    this.setState({
      fieldsinstitue: {},
      errorinstitue: {},
    })
    this.hideErrorcomment();
  }

  handleValidationInstitue = () => {
    let fieldsinstitue = this.state.fieldsinstitue;
    let errorinstitue = {};
    let formIsValid = true;

    //subject
    if (!fieldsinstitue["name"]) {
      formIsValid = false;
      errorinstitue["name"] = "Please enter Institution Name!";
    }
    //emailId
    if (!fieldsinstitue["emailId"]) {
      formIsValid = false;
      errorinstitue["emailId"] = "Please enter Institution Email!";
    }
    //InstMobNo
    if (!fieldsinstitue["InstMobNo"]) {
      formIsValid = false;
      errorinstitue["InstMobNo"] = "Please enter Institution Mobile No!";
    }
    //adds
    if (!fieldsinstitue["adds"]) {
      formIsValid = false;
      errorinstitue["adds"] = "Please select Institution Address!";
    }
    //logo
    if (!fieldsinstitue["logo"]) {
      formIsValid = false;
      errorinstitue["logo"] = "Please select Institution Logo!";
    }
    this.setState({ errorinstitue: errorinstitue });
    return formIsValid;
  }

  handleValidationInstitueUpdate = () => {
    let fieldsinstitueUpdate = this.state.fieldsinstitueUpdate;
    let errorinstitueUpdate = {};
    let formIsValid = true;

    //subject
    if (!fieldsinstitueUpdate["name"]) {
      formIsValid = false;
      errorinstitueUpdate["name"] = "Please enter Institution Name!";
    }
    //emailId
    if (!fieldsinstitueUpdate["emailId"]) {
      formIsValid = false;
      errorinstitueUpdate["emailId"] = "Please enter Institution Email!";
    }
    //InstMobNo
    if (!fieldsinstitueUpdate["InstMobNo"]) {
      formIsValid = false;
      errorinstitueUpdate["InstMobNo"] = "Please enter Institution Mobile No!";
    }
    //adds
    if (!fieldsinstitueUpdate["adds"]) {
      formIsValid = false;
      errorinstitueUpdate["adds"] = "Please select Institution Address!";
    }
    //logo
    if (!fieldsinstitueUpdate["logo"]) {
      formIsValid = false;
      errorinstitueUpdate["logo"] = "Please select Institution Logo!";
    }

    console.log("errorinstitueUpdate_____errorinstitueUpdate:::", errorinstitueUpdate);

    this.setState({ errorinstitueUpdate: errorinstitueUpdate });
    return formIsValid;
  }


  handleUpadte = (data) => {
    this.setState({ fieldsinstitueUpdate: data, updateShow: true });
  }

  onClickMenu = (url) => {
    this.props.history.push(url)
  }

  deleteUser = (data) => {

    let datatemp = {
      "id": data.id,
    }
    confirmAlert({
      title: 'Confirm to Delete?',
      message: `Are you sure to delete ${data.email} email?`,
      buttons: [
        {
          label: 'Yes',
          onClick: () => this.props.dispatch(dashboardActions.deleteInst(datatemp))
        },
        {
          label: 'No'
        }
      ]
    });
  }




  render() {



    let { dashboard } = this.props;
    let { getInstList } = dashboard;

    console.log("RENDER_____________this.state.updateShow:::", this.state.updateShow);
    // console.log("RENDER________________userPromoPackage--:::::", userPromoPackage);


    return (

      <>

        {/* <div >
          <LoadingOverlay
            active={loading}
            className="temp001"
            spinner
            text='Please wait...' />
        </div> */}

        <div className="h-screen overflow-y-auto w-full bg-gray-100 p-6">
          <section>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-6'>


              {
                this.state.updateShow ?
                  <>
                    <div className='border border-slate-300 bg-white'>

                      <form autoComplete="off">
                        <div className='border-b border-slate-300 p-4'>
                          <h1 className='text-xl font-normal'>Update Institution</h1>
                        </div>
                        <div className='p-8'>
                          <div className='space-y-6'>
                            <div>
                              <label class='text-sm font-normal text-gray-600 pb-4'>Institution Name</label>
                              <input className={`w-full border px-4 py-1.5 rounded-xs focus:outline-none text-base text-gray-700 placeholder-gray-500 ${!this.state.errorinstitueUpdate["name"] ? "'border-opacity-20 " : "order-opacity-100 border-red-500 bg-red-100"}`}
                                name="name"
                                value={this.state.fieldsinstitueUpdate && this.state.fieldsinstitueUpdate.name ? this.state.fieldsinstitueUpdate.name : ""}
                                onChange={this.inputChangeUpdate} placeholder="Enter Institution Name" type="text" />
                              {this.state.errorinstitueUpdate["name"] ?
                                <div className="invalid-feedback  text-yellow-600">
                                  {this.state.errorinstitueUpdate["name"]}
                                </div>
                                : null}
                            </div>

                            <div>
                              <label class='text-sm font-normal text-gray-600 pb-4'>Institution Email</label>
                              <input className={`w-full border px-4 py-1.5 rounded-xs focus:outline-none text-base text-gray-700 placeholder-gray-500 ${!this.state.errorinstitueUpdate["emailId"] ? "'border-opacity-20 " : "order-opacity-100 border-red-500 bg-red-100"}`}
                                name="emailId"
                                value={this.state.fieldsinstitueUpdate && this.state.fieldsinstitueUpdate.emailId ? this.state.fieldsinstitueUpdate.emailId : ""} onChange={this.inputChangeUpdate} placeholder="Enter Institution Email" type="text" />
                              {this.state.errorinstitueUpdate["emailId"] ?
                                <div className="invalid-feedback  text-yellow-600">
                                  {this.state.errorinstitueUpdate["emailId"]}
                                </div>
                                : null}
                            </div>

                            <div>
                              <label class='text-sm font-normal text-gray-600 pb-4'>Institution Mobile NO.</label>
                              <input className={`w-full border px-4 py-1.5 rounded-xs focus:outline-none text-base text-gray-700 placeholder-gray-500 ${!this.state.errorinstitueUpdate["InstMobNo"] ? "'border-opacity-20 " : "order-opacity-100 border-red-500 bg-red-100"}`}
                                name="InstMobNo"
                                value={this.state.fieldsinstitueUpdate && this.state.fieldsinstitueUpdate.InstMobNo ? this.state.fieldsinstitueUpdate.InstMobNo : ""}
                                onChange={this.inputChangeUpdate} placeholder="Enter Institution Mobile No" type="text" />
                              {this.state.errorinstitueUpdate["InstMobNo"] ?
                                <div className="invalid-feedback  text-yellow-600">
                                  {this.state.errorinstitueUpdate["InstMobNo"]}
                                </div>
                                : null}
                            </div>

                            <div>
                              <label class='text-sm font-normal text-gray-600 pb-4'>Institution Address</label>
                              <input className={`w-full border px-4 py-1.5 rounded-xs focus:outline-none text-base text-gray-700 placeholder-gray-500 ${!this.state.errorinstitueUpdate["adds"] ? "'border-opacity-20 " : "order-opacity-100 border-red-500 bg-red-100"}`}
                                name="adds"
                                value={this.state.fieldsinstitueUpdate && this.state.fieldsinstitueUpdate.adds ? this.state.fieldsinstitueUpdate.adds : ""}
                                onChange={this.inputChangeUpdate} placeholder="Enter Institution Address" type="text" />
                              {this.state.errorinstitueUpdate["adds"] ?
                                <div className="invalid-feedback  text-yellow-600">
                                  {this.state.errorinstitueUpdate["adds"]}
                                </div>
                                : null}
                            </div>

                            <div>
                              <label class='text-sm font-normal text-gray-600 pb-4'>Institution Logo</label>
                              <input className={`w-full border px-4 py-1.5 rounded-xs focus:outline-none text-base text-gray-700 placeholder-gray-500 ${!this.state.errorinstitueUpdate["logo"] ? "'border-opacity-20 " : "order-opacity-100 border-red-500 bg-red-100"}`}
                                name="logo"
                                value={this.state.fieldsinstitueUpdate && this.state.fieldsinstitueUpdate.logo ? this.state.fieldsinstitueUpdate.logo : ""}
                                onChange={this.inputChangeUpdate} placeholder="Enter Institution Logo" type="text" />
                              {this.state.errorinstitueUpdate["logo"] ?
                                <div className="invalid-feedback  text-yellow-600">
                                  {this.state.errorinstitueUpdate["logo"]}
                                </div>
                                : null}
                            </div>

                          </div>
                        </div>


                        <div className='w-full px-5 pb-4'>
                          <button className='py-2 px-4 bg-sky-500 text-white rounded-sm text-sm' type="button" onClick={this.institueUpdateSubmit} data-config-id="01_primary-action">Save</button>
                        </div>

                      </form>
                    </div>
                  </> 
                  :
                  <>
                    <div className='border border-slate-300 bg-white'>

                      <form autoComplete="off">
                        <div className='border-b border-slate-300 p-4'>
                          <h1 className='text-xl font-normal'>Add Institution</h1>
                        </div>
                        <div className='p-8'>
                          <div className='space-y-6'>
                            <div>
                              <label class='text-sm font-normal text-gray-600 pb-4'>Institution Name</label>
                              <input className={`w-full border px-4 py-1.5 rounded-xs focus:outline-none text-base text-gray-700 placeholder-gray-500 ${!this.state.errorinstitue["name"] ? "'border-opacity-20 " : "order-opacity-100 border-red-500 bg-red-100"}`}
                                name="name"
                                value={this.state.fieldsinstitue["name"] ? this.state.fieldsinstitue["name"] : ''}
                                onChange={this.inputChange} placeholder="Enter Institution Name" type="text" />
                              {this.state.errorinstitue["name"] ?
                                <div className="invalid-feedback  text-yellow-600">
                                  {this.state.errorinstitue["name"]}
                                </div>
                                : null}
                            </div>

                            <div>
                              <label class='text-sm font-normal text-gray-600 pb-4'>Institution Email</label>
                              <input className={`w-full border px-4 py-1.5 rounded-xs focus:outline-none text-base text-gray-700 placeholder-gray-500 ${!this.state.errorinstitue["emailId"] ? "'border-opacity-20 " : "order-opacity-100 border-red-500 bg-red-100"}`}
                                name="emailId"
                                value={this.state.fieldsinstitue["emailId"] ? this.state.fieldsinstitue["emailId"] : ''}
                                onChange={this.inputChange} placeholder="Enter Institution Email" type="text" />
                              {this.state.errorinstitue["emailId"] ?
                                <div className="invalid-feedback  text-yellow-600">
                                  {this.state.errorinstitue["emailId"]}
                                </div>
                                : null}
                            </div>

                            <div>
                              <label class='text-sm font-normal text-gray-600 pb-4'>Institution Mobile NO.</label>
                              <input className={`w-full border px-4 py-1.5 rounded-xs focus:outline-none text-base text-gray-700 placeholder-gray-500 ${!this.state.errorinstitue["InstMobNo"] ? "'border-opacity-20 " : "order-opacity-100 border-red-500 bg-red-100"}`}
                                name="InstMobNo"
                                value={this.state.fieldsinstitue["InstMobNo"] ? this.state.fieldsinstitue["InstMobNo"] : ''}
                                onChange={this.inputChange} placeholder="Enter Institution Mobile No" type="text" />
                              {this.state.errorinstitue["InstMobNo"] ?
                                <div className="invalid-feedback  text-yellow-600">
                                  {this.state.errorinstitue["InstMobNo"]}
                                </div>
                                : null}
                            </div>

                            <div>
                              <label class='text-sm font-normal text-gray-600 pb-4'>Institution Address</label>
                              <input className={`w-full border px-4 py-1.5 rounded-xs focus:outline-none text-base text-gray-700 placeholder-gray-500 ${!this.state.errorinstitue["adds"] ? "'border-opacity-20 " : "order-opacity-100 border-red-500 bg-red-100"}`}
                                name="adds"
                                value={this.state.fieldsinstitue["adds"] ? this.state.fieldsinstitue["adds"] : ''}
                                onChange={this.inputChange} placeholder="Enter Institution Address" type="text" />
                              {this.state.errorinstitue["adds"] ?
                                <div className="invalid-feedback  text-yellow-600">
                                  {this.state.errorinstitue["adds"]}
                                </div>
                                : null}
                            </div>

                            <div>
                              <label class='text-sm font-normal text-gray-600 pb-4'>Institution Logo</label>
                              <input className={`w-full border px-4 py-1.5 rounded-xs focus:outline-none text-base text-gray-700 placeholder-gray-500 ${!this.state.errorinstitue["logo"] ? "'border-opacity-20 " : "order-opacity-100 border-red-500 bg-red-100"}`}
                                name="logo"
                                value={this.state.fieldsinstitue["logo"] ? this.state.fieldsinstitue["logo"] : ''}
                                onChange={this.inputChange} placeholder="Enter Institution Logo" type="text" />
                              {this.state.errorinstitue["logo"] ?
                                <div className="invalid-feedback  text-yellow-600">
                                  {this.state.errorinstitue["logo"]}
                                </div>
                                : null}
                            </div>

                          </div>
                        </div>


                        <div className='w-full px-5 pb-4'>
                          <button className='py-2 px-4 bg-sky-500 text-white rounded-sm text-sm' type="button" onClick={this.institueSubmit} data-config-id="01_primary-action">Save</button>
                        </div>

                      </form>
                    </div>
                  </>
              }


              {/* <div className='border border-slate-300 bg-white'>

                <form autoComplete="off">
                  <div className='border-b border-slate-300 p-4'>
                    <h1 className='text-xl font-normal'>Update Institution</h1>
                  </div>
                  <div className='p-8'>
                    <div className='space-y-6'>
                      <div>
                        <label class='text-sm font-normal text-gray-600 pb-4'>Institution Name</label>
                        <input className={`w-full border px-4 py-1.5 rounded-xs focus:outline-none text-base text-gray-700 placeholder-gray-500 ${!this.state.errorinstitue["name"] ? "'border-opacity-20 " : "order-opacity-100 border-red-500 bg-red-100"}`}
                          name="name"
                          value={this.state.fieldsinstitue["name"] ? this.state.fieldsinstitue["name"] : ''}
                          onChange={this.inputChange} placeholder="Enter Institution Name" type="text" />
                        {this.state.errorinstitue["name"] ?
                          <div className="invalid-feedback  text-yellow-600">
                            {this.state.errorinstitue["name"]}
                          </div>
                          : null}
                      </div>

                      <div>
                        <label class='text-sm font-normal text-gray-600 pb-4'>Institution Email</label>
                        <input className={`w-full border px-4 py-1.5 rounded-xs focus:outline-none text-base text-gray-700 placeholder-gray-500 ${!this.state.errorinstitue["emailId"] ? "'border-opacity-20 " : "order-opacity-100 border-red-500 bg-red-100"}`}
                          name="emailId"
                          value={this.state.fieldsinstitue["emailId"] ? this.state.fieldsinstitue["emailId"] : ''}
                          onChange={this.inputChange} placeholder="Enter Institution Email" type="text" />
                        {this.state.errorinstitue["emailId"] ?
                          <div className="invalid-feedback  text-yellow-600">
                            {this.state.errorinstitue["emailId"]}
                          </div>
                          : null}
                      </div>

                      <div>
                        <label class='text-sm font-normal text-gray-600 pb-4'>Institution Mobile NO.</label>
                        <input className={`w-full border px-4 py-1.5 rounded-xs focus:outline-none text-base text-gray-700 placeholder-gray-500 ${!this.state.errorinstitue["InstMobNo"] ? "'border-opacity-20 " : "order-opacity-100 border-red-500 bg-red-100"}`}
                          name="InstMobNo"
                          value={this.state.fieldsinstitue["InstMobNo"] ? this.state.fieldsinstitue["InstMobNo"] : ''}
                          onChange={this.inputChange} placeholder="Enter Institution Mobile No" type="text" />
                        {this.state.errorinstitue["InstMobNo"] ?
                          <div className="invalid-feedback  text-yellow-600">
                            {this.state.errorinstitue["InstMobNo"]}
                          </div>
                          : null}
                      </div>

                      <div>
                        <label class='text-sm font-normal text-gray-600 pb-4'>Institution Address</label>
                        <input className={`w-full border px-4 py-1.5 rounded-xs focus:outline-none text-base text-gray-700 placeholder-gray-500 ${!this.state.errorinstitue["adds"] ? "'border-opacity-20 " : "order-opacity-100 border-red-500 bg-red-100"}`}
                          name="adds"
                          value={this.state.fieldsinstitue["adds"] ? this.state.fieldsinstitue["adds"] : ''}
                          onChange={this.inputChange} placeholder="Enter Institution Address" type="text" />
                        {this.state.errorinstitue["adds"] ?
                          <div className="invalid-feedback  text-yellow-600">
                            {this.state.errorinstitue["adds"]}
                          </div>
                          : null}
                      </div>

                      <div>
                        <label class='text-sm font-normal text-gray-600 pb-4'>Institution Logo</label>
                        <input className={`w-full border px-4 py-1.5 rounded-xs focus:outline-none text-base text-gray-700 placeholder-gray-500 ${!this.state.errorinstitue["logo"] ? "'border-opacity-20 " : "order-opacity-100 border-red-500 bg-red-100"}`}
                          name="logo"
                          value={this.state.fieldsinstitue["logo"] ? this.state.fieldsinstitue["logo"] : ''}
                          onChange={this.inputChange} placeholder="Enter Institution Logo" type="text" />
                        {this.state.errorinstitue["logo"] ?
                          <div className="invalid-feedback  text-yellow-600">
                            {this.state.errorinstitue["logo"]}
                          </div>
                          : null}
                      </div>

                    </div>
                  </div>


                  <div className='w-full px-5 pb-4'>
                    <button className='py-2 px-4 bg-sky-500 text-white rounded-sm text-sm' type="button" onClick={this.institueSubmit} data-config-id="01_primary-action">Save</button>
                  </div>

                </form>
              </div> */}



              <div className="max-w-full overflow-auto">
                <div className="inline-block min-w-full">
                  <div className="overflow-x-hidden">
                    <table className="min-w-full text-left border border-slate-300 border-collapse bg-white">
                      <thead className="">
                        <tr className="text-left border border-slate-300">
                          <th scope="col" className="px-4 py-3 text-left text-sm capitalize font-medium text-gray-600 whitespace-nowrap">Sl.N.</th>
                          <th scope="col" className="px-4 py-3 text-left text-sm capitalize font-medium text-gray-600 whitespace-nowrap">Institution Name</th>
                          <th scope="col" className="px-4 py-3 text-left text-sm capitalize font-medium text-gray-600 whitespace-nowrap">Institution Email</th>
                          <th scope="col" className="px-4 py-3 text-left text-sm capitalize font-medium text-gray-600 whitespace-nowrap">Institution  Mobile NO</th>
                          <th scope="col" className="px-4 py-3 text-left text-sm capitalize font-medium text-gray-600 whitespace-nowrap">Institution Address</th>
                          <th scope="col" className="px-4 py-3 text-left text-sm capitalize font-medium text-gray-600 whitespace-nowrap">Institution Logo</th>
                          <th scope="col" className="px-4 py-3 text-left text-sm capitalize font-medium text-gray-600 whitespace-nowrap">Action</th>
                        </tr>
                      </thead>
                      <tbody>

                        {
                          getInstList && getInstList.length > 0 ?
                            getInstList.map((element, index) => (
                              <>

                                <tr className="border border-slate-300">
                                  <td className=" text-left px-4 py-3 text-sm font-serif text-black bg-white Capitalize whitespace-nowrap">{index}</td>
                                  <td className=" text-left px-4 py-3 text-sm font-serif text-black bg-white Capitalize whitespace-nowrap">{element && element.name ? element.name : "-"}</td>
                                  <td className=" text-left px-4 py-3 text-sm font-serif text-black bg-white Capitalize whitespace-nowrap">{element && element.emailId ? element.emailId : "-"}</td>
                                  <td className=" text-left px-4 py-3 text-sm font-serif text-black bg-white Capitalize whitespace-nowrap">{element && element.InstMobNo ? element.InstMobNo : "-"}</td>
                                  <td className=" text-left px-4 py-3 text-sm font-serif text-black bg-white Capitalize whitespace-nowrap">{element && element.adds ? element.adds : "-"}</td>
                                  <td className=" text-left px-4 py-3 text-sm font-serif text-black bg-white Capitalize whitespace-nowrap">{element && element.logo ? element.logo : "-"}</td>
                                  <td className='flex space-x-1'>
                                    <span className='hover:bg-[#FF7F50] cursor-pointer'>
                                      <MdOutlineEdit className='text-blue-500 h-5 w-5' onClick={() => this.handleUpadte(element)} />
                                    </span>
                                    <span className='hover:bg-[#FF8008] cursor-pointer'>
                                      <MdOutlineClose className='text-blue-500 h-6 w-6' onClick={() => this.deleteUser(element)} />
                                    </span>
                                  </td>
                                </tr>
                              </>
                            )) : <td colspan="2" className="col-span-2 whitespace-nowrap border border-gray-300 text-center px-[11.5px] py-3 text-xs font-semibold text-black bg-white uppercase bg-whj">Data Not Found</td>
                        }


                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>

          </section>
        </div >


      </>
    );
  }
}

function mapStateToProps(state) {
  const { users, dashboard } = state;
  const { overview } = users ? users : {};
  const { setting } = overview ? overview : {};
  return {
    users,
    dashboard,
    setting
  };
}
export default connect(mapStateToProps)(Students);
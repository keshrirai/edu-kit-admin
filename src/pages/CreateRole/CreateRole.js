import React, { Component } from 'react';
import { dashboardActions } from '../../_actions';
import { connect } from 'react-redux';
import 'react-confirm-alert/src/react-confirm-alert.css';
import { MdOutlineClose, MdOutlineEdit } from 'react-icons/md';
import { confirmAlert } from 'react-confirm-alert';

class CreateRole extends Component {

  constructor(props) {
    super(props);
    this.roleSubmit = this.roleSubmit.bind(this);
    this.inputChange = this.inputChange.bind(this);
    this.state = {
      offset: 0,
      size: 10,
      keyWord: "",
      pageNo: 1,
      fieldsrole: {},
      errorrole: {},
      fieldsroleUpdate: {},
      errorroleUpdate: {},
      updateShow: false,
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
    this.props.dispatch(dashboardActions.getRoleList(data));
    this.props.dispatch(dashboardActions.getAllInst(data));
  }

  static getDerivedStateFromProps(nextProps, prevState) {

    if (nextProps.dashboard.updateShow) {
      return {
        ...nextProps,
        fieldsroleUpdate: {},
        errorroleUpdate: {},
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
    let fieldsrole = this.state.fieldsrole;
    let errorrole = this.state.errorrole;
    fieldsrole[name] = value;
    errorrole[name] = "";
    this.setState({ fieldsrole, errorrole });
  }

  inputChangeUpdate = (e) => {
    e.preventDefault();
    let { name, value } = e.target;
    // this.setState({ [name]: value });
    let { fieldsroleUpdate } = this.state;
    let { errorroleUpdate } = this.state;
    fieldsroleUpdate[name] = value;
    errorroleUpdate[name] = "";
    this.setState({ fieldsroleUpdate, errorroleUpdate });
  }

  roleSubmit = (e) => {
    e.preventDefault();
    if (this.handleValidationRole()) {
      let { instId, fname, lname, roleType } = this.state;
      this.props.dispatch(dashboardActions.createRole({
        instId: instId,
        fname: fname,
        lname: lname,
        roleType: roleType,
      }, this.props));
    }
  }

  roleUpdateSubmit = (e) => {
    e.preventDefault();
    if (this.handleValidationUpdateRole()) {
      let { instId, fname, lname, roleType, id } = this.state.fieldsroleUpdate;
      this.props.dispatch(dashboardActions.updateRole({
        id: id,
        instId: instId,
        fname: fname,
        lname: lname,
        roleType: roleType,
      }, this.props));
    }
  }

  resetForm = (e) => {
    e.preventDefault();
    this.setState({
      fieldsrole: {},
      errorrole: {},
    })
    this.hideErrorcomment();
  }

  handleValidationRole = () => {
    let fieldsrole = this.state.fieldsrole;
    let errorrole = {};
    let formIsValid = true;

    //instId
    if (!fieldsrole["instId"]) {
      formIsValid = false;
      errorrole["instId"] = "Please enter Institution Name!";
    }
    //lname
    if (!fieldsrole["lname"]) {
      formIsValid = false;
      errorrole["lname"] = "Please enter Institution Email!";
    }
    //roleType
    if (!fieldsrole["roleType"]) {
      formIsValid = false;
      errorrole["roleType"] = "Please enter Institution Mobile No!";
    }
    //fname
    if (!fieldsrole["fname"]) {
      formIsValid = false;
      errorrole["fname"] = "Please select Institution Address!";
    }

    console.log('fieldsrolefieldsrolefieldsrolefieldsrole', fieldsrole);
    this.setState({ errorrole: errorrole });
    return formIsValid;

  }


  handleValidationUpdateRole = () => {
    let fieldsroleUpdate = this.state.fieldsroleUpdate;
    let errorroleUpdate = {};
    let formIsValid = true;

    //instId
    if (!fieldsroleUpdate["instId"]) {
      formIsValid = false;
      errorroleUpdate["instId"] = "Please enter Institution Name!";
    }
    //lname
    if (!fieldsroleUpdate["lname"]) {
      formIsValid = false;
      errorroleUpdate["lname"] = "Please enter Institution Email!";
    }
    //roleType
    if (!fieldsroleUpdate["roleType"]) {
      formIsValid = false;
      errorroleUpdate["roleType"] = "Please enter Institution Mobile No!";
    }
    //fname
    if (!fieldsroleUpdate["fname"]) {
      formIsValid = false;
      errorroleUpdate["fname"] = "Please select Institution Address!";
    }

    console.log('errorroleUpdateerrorroleUpdate', errorroleUpdate);
    this.setState({ errorroleUpdate: errorroleUpdate });
    return formIsValid;

  }

  handleUpadte = (data) => {
    this.setState({ fieldsroleUpdate: data, updateShow: true });
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
          onClick: () => this.props.dispatch(dashboardActions.deleteRole(datatemp))
        },
        {
          label: 'No'
        }
      ]
    });
  }

  render() {
    let { dashboard } = this.props;
    let { getRoleList, getAllInst } = dashboard;

    // console.log("RENDER_____________getRoleListgetRoleList___--:::::", getRoleList);
    // console.log("RENDER________________getAllInst--:::::", getAllInst);


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
                          <h1 className='text-xl font-normal'>Update Role</h1>
                        </div>
                        <div className='p-8'>
                          <div className='space-y-6'>
                            <div>
                              <label class='text-sm font-normal text-gray-600 pb-4 capitalize'>select Department type</label>
                              <div className='py-2 relative flex items-center md:w-auto w-full border  text-gray-800 bg-white rounded-sm cursor-pointer appearance-none'>
                                <select className="appearance-none w-full  px-4 bg-white text-sm font-normal focus:outline-none text-gray-700" onChange={this.inputChangeUpdate}
                                  name="instId">
                                  {
                                    getAllInst && getAllInst.length > 0 ?
                                      getAllInst.map((element, index) => (
                                        <React.Fragment>
                                          <option value={element && element.id ? element.id : null}>{element && element.name ? element.name : null}</option>
                                        </React.Fragment>
                                      )) : null
                                  }
                                </select>
                                <div className="pointer-events-none absolute right-0 top-0 bottom-0 flex items-center px-2 text-gray-700">
                                  <svg className="h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                                  </svg>
                                </div>
                              </div>

                            </div>
                            <div>
                              <label class='text-sm font-normal text-gray-600 pb-4'>Role First Name</label>
                              <input className={`w-full border px-4 py-1.5 rounded-xs focus:outline-none text-base text-gray-700 placeholder-gray-500 ${!this.state.errorroleUpdate["fname"] ? "'border-opacity-20 " : "order-opacity-100 border-red-500 bg-red-100"}`}
                                name="fname"
                                value={this.state.fieldsroleUpdate && this.state.fieldsroleUpdate.fname ? this.state.fieldsroleUpdate.fname : ""}
                                onChange={this.inputChangeUpdate} placeholder="Enter Institution Address" type="text" />
                              {this.state.errorroleUpdate["fname"] ?
                                <div className="invalid-feedback  text-yellow-600">
                                  {this.state.errorroleUpdate["fname"]}
                                </div>
                                : null}
                            </div>

                            <div>
                              <label class='text-sm font-normal text-gray-600 pb-4'>Role Last Name</label>
                              <input className={`w-full border px-4 py-1.5 rounded-xs focus:outline-none text-base text-gray-700 placeholder-gray-500 ${!this.state.errorroleUpdate["lname"] ? "'border-opacity-20 " : "order-opacity-100 border-red-500 bg-red-100"}`}
                                name="lname"
                                value={this.state.fieldsroleUpdate && this.state.fieldsroleUpdate.lname ? this.state.fieldsroleUpdate.lname : ""}
                                onChange={this.inputChangeUpdate} placeholder="Enter Institution Email" type="text" />
                              {this.state.errorroleUpdate["lname"] ?
                                <div className="invalid-feedback  text-yellow-600">
                                  {this.state.errorroleUpdate["lname"]}
                                </div>
                                : null}
                            </div>


                            <div>
                              <label class='text-sm font-normal text-gray-600 pb-4'>Role Type</label>
                              <input className={`w-full border px-4 py-1.5 rounded-xs focus:outline-none text-base text-gray-700 placeholder-gray-500 ${!this.state.errorroleUpdate["roleType"] ? "'border-opacity-20 " : "order-opacity-100 border-red-500 bg-red-100"}`}
                                name="roleType"
                                value={this.state.fieldsroleUpdate && this.state.fieldsroleUpdate.roleType ? this.state.fieldsroleUpdate.roleType : ""}
                                onChange={this.inputChangeUpdate} placeholder="Enter Institution Logo" type="text" />
                              {this.state.errorroleUpdate["roleType"] ?
                                <div className="invalid-feedback  text-yellow-600">
                                  {this.state.errorroleUpdate["roleType"]}
                                </div>
                                : null}
                            </div>

                          </div>
                        </div>


                        <div className='w-full px-5 pb-4'>
                          <button className='py-2 px-4 bg-sky-500 text-white rounded-sm text-sm' type="button" onClick={this.roleUpdateSubmit} data-config-id="01_primary-action">Save</button>
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
                              <label class='text-sm font-normal text-gray-600 pb-4 capitalize'>select Department type</label>
                              <div className='py-2 relative flex items-center md:w-auto w-full border  text-gray-800 bg-white rounded-sm cursor-pointer appearance-none'>
                                <select className="appearance-none w-full  px-4 bg-white text-sm font-normal focus:outline-none text-gray-700" onChange={this.inputChange}
                                  name="instId">
                                  {
                                    getAllInst && getAllInst.length > 0 ?
                                      getAllInst.map((element, index) => (
                                        <React.Fragment>
                                          <option value={element && element.id ? element.id : null}>{element && element.name ? element.name : null}</option>
                                        </React.Fragment>
                                      )) : null
                                  }
                                </select>
                                <div className="pointer-events-none absolute right-0 top-0 bottom-0 flex items-center px-2 text-gray-700">
                                  <svg className="h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                                  </svg>
                                </div>
                              </div>

                            </div>
                            <div>
                              <label class='text-sm font-normal text-gray-600 pb-4'>Role First Name</label>
                              <input className={`w-full border px-4 py-1.5 rounded-xs focus:outline-none text-base text-gray-700 placeholder-gray-500 ${!this.state.errorrole["fname"] ? "'border-opacity-20 " : "order-opacity-100 border-red-500 bg-red-100"}`}
                                name="fname"
                                value={this.state.fieldsrole["fname"] ? this.state.fieldsrole["fname"] : ''}
                                onChange={this.inputChange} placeholder="Enter Institution Address" type="text" />
                              {this.state.errorrole["fname"] ?
                                <div className="invalid-feedback  text-yellow-600">
                                  {this.state.errorrole["fname"]}
                                </div>
                                : null}
                            </div>

                            <div>
                              <label class='text-sm font-normal text-gray-600 pb-4'>Role Last Name</label>
                              <input className={`w-full border px-4 py-1.5 rounded-xs focus:outline-none text-base text-gray-700 placeholder-gray-500 ${!this.state.errorrole["lname"] ? "'border-opacity-20 " : "order-opacity-100 border-red-500 bg-red-100"}`}
                                name="lname"
                                value={this.state.fieldsrole["lname"] ? this.state.fieldsrole["lname"] : ''}
                                onChange={this.inputChange} placeholder="Enter Institution Email" type="text" />
                              {this.state.errorrole["lname"] ?
                                <div className="invalid-feedback  text-yellow-600">
                                  {this.state.errorrole["lname"]}
                                </div>
                                : null}
                            </div>


                            <div>
                              <label class='text-sm font-normal text-gray-600 pb-4'>Role Type</label>
                              <input className={`w-full border px-4 py-1.5 rounded-xs focus:outline-none text-base text-gray-700 placeholder-gray-500 ${!this.state.errorrole["roleType"] ? "'border-opacity-20 " : "order-opacity-100 border-red-500 bg-red-100"}`}
                                name="roleType"
                                value={this.state.fieldsrole["roleType"] ? this.state.fieldsrole["roleType"] : ''}
                                onChange={this.inputChange} placeholder="Enter Institution Logo" type="text" />
                              {this.state.errorrole["roleType"] ?
                                <div className="invalid-feedback  text-yellow-600">
                                  {this.state.errorrole["roleType"]}
                                </div>
                                : null}
                            </div>

                          </div>
                        </div>


                        <div className='w-full px-5 pb-4'>
                          <button className='py-2 px-4 bg-sky-500 text-white rounded-sm text-sm' type="button" onClick={this.roleSubmit} data-config-id="01_primary-action">Save</button>
                        </div>

                      </form>
                    </div>
                  </>
              }

              <div className="max-w-full overflow-auto">
                <div className="inline-block min-w-full">
                  <div className="overflow-x-hidden">
                    <table className="min-w-full text-left border border-slate-300 border-collapse bg-white">
                      <thead className="">
                        <tr className="text-left border border-slate-300">
                          <th scope="col" className="px-4 py-3 text-left text-sm capitalize font-medium text-gray-600 whitespace-nowrap">Sl.N.</th>
                          <th scope="col" className="px-4 py-3 text-left text-sm capitalize font-medium text-gray-600 whitespace-nowrap">Institution Name</th>
                          <th scope="col" className="px-4 py-3 text-left text-sm capitalize font-medium text-gray-600 whitespace-nowrap">First Name</th>
                          <th scope="col" className="px-4 py-3 text-left text-sm capitalize font-medium text-gray-600 whitespace-nowrap">Last Name</th>
                          <th scope="col" className="px-4 py-3 text-left text-sm capitalize font-medium text-gray-600 whitespace-nowrap">Role Type</th>
                          <th scope="col" className="px-4 py-3 text-left text-sm capitalize font-medium text-gray-600 whitespace-nowrap">Action</th>
                        </tr>
                      </thead>
                      <tbody>

                        {
                          getRoleList && getRoleList.length > 0 ?
                            getRoleList.map((element, index) => (
                              <>
                                <tr className="border border-slate-300">
                                  <td className=" text-left px-4 py-3 text-sm font-serif text-black bg-white Capitalize whitespace-nowrap">{index}</td>
                                  <td className=" text-left px-4 py-3 text-sm font-serif text-black bg-white Capitalize whitespace-nowrap">{element && element.instId ? element.instId : "-"}</td>
                                  <td className=" text-left px-4 py-3 text-sm font-serif text-black bg-white Capitalize whitespace-nowrap">{element && element.fname ? element.fname : "-"}</td>
                                  <td className=" text-left px-4 py-3 text-sm font-serif text-black bg-white Capitalize whitespace-nowrap">{element && element.lname ? element.lname : "-"}</td>
                                  <td className=" text-left px-4 py-3 text-sm font-serif text-black bg-white Capitalize whitespace-nowrap">{element && element.roleType ? element.roleType : "-"}</td>
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
export default connect(mapStateToProps)(CreateRole);
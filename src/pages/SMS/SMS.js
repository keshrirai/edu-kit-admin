import React, { Component } from 'react';
import { admissionEnquiryActions, dashboardActions } from '../../_actions';
import { connect } from 'react-redux';
import { ImEye } from 'react-icons/im';
import { MdOutlineClose, MdOutlineEdit } from 'react-icons/md';
import 'react-confirm-alert/src/react-confirm-alert.css';
import { confirmAlert } from 'react-confirm-alert';

class AdmissionEnquiry extends Component {

  constructor(props) {
    super(props);
    this.courseSubmit = this.courseSubmit.bind(this);
    this.inputChange = this.inputChange.bind(this);
    this.state = {
      offset: 0,
      size: 10,
      keyWord: "",
      pageNo: 1,
      fieldsCourse: {},
      errorsCourse: {},
      updateShow: false,
      fieldsCourseUpdate: {},
      errorsCourseUpdate: {},
    }
  }

  componentDidMount() {
    let data = {
      "keyWord": "",
      "pageNo": 1,
      "size": 10
    }
    this.props.dispatch(dashboardActions.getCourseList(data));
    this.props.dispatch(dashboardActions.getAllDepartment(data));
    this.props.dispatch(admissionEnquiryActions.getAdmissionEnqList(data));
  }

  static getDerivedStateFromProps(nextProps, prevState) {

    if (nextProps.dashboard.updateShow) {
      return {
        ...nextProps,
        fieldsCourseUpdate: {},
        errorsCourseUpdate: {},
        updateShow: false
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
    let fieldsCourse = this.state.fieldsCourse;
    let errorsCourse = this.state.errorsCourse;
    fieldsCourse[name] = value;
    errorsCourse[name] = "";
    // console.log(name, value);
    this.setState({ fieldsCourse, errorsCourse });
  }

  inputChangeUpdate = (e) => {
    e.preventDefault();
    let { name, value } = e.target;
    let { fieldsCourseUpdate } = this.state;
    let { errorsCourseUpdate } = this.state;
    fieldsCourseUpdate[name] = value;
    errorsCourseUpdate[name] = "";
    this.setState({ fieldsCourseUpdate, errorsCourseUpdate });
  }

  courseSubmit = (e) => {
    e.preventDefault();
    if (this.handleValidationCourse()) {
      let { cCode, cName, desc, tWDays, minAttendPer, attendtype } = this.state.fieldsCourse;
      this.props.dispatch(dashboardActions.createCourse({
        // deprtId: deprtId,
        cCode: cCode,
        cName: cName,
        desc: desc,
        tWDays: tWDays,
        // syllabusName: syllabusName,
        minAttendPer: minAttendPer,
        attendtype: attendtype,
      }, this.props));
    }
  }

  courseUpdateSubmit = (e) => {
    e.preventDefault();
    if (this.handleValidationCourseUpdate()) {
      let { cCode, cName, desc, tWDays, minAttendPer, attendtype, id } = this.state.fieldsCourseUpdate;
      this.props.dispatch(dashboardActions.updateCourse({
        id: id,
        cCode: cCode,
        cName: cName,
        desc: desc,
        tWDays: tWDays,
        minAttendPer: minAttendPer,
        attendtype: attendtype,
      }, this.props));
    }
  }

  resetForm = (e) => {
    e.preventDefault();
    this.setState({
      fieldsCourse: {},
      errorsCourse: {},
    })
    this.hideErrorcomment();
  }

  handleValidationCourse = () => {
    let fieldsCourse = this.state.fieldsCourse;
    let errorsCourse = {};
    let formIsValid = true;
    //deprtId
    // if (!fieldsCourse["deprtId"]) {
    //   formIsValid = false;
    //   errorsCourse["deprtId"] = "Please enter Batch Name!";
    // }
    //cCode
    if (!fieldsCourse["cCode"]) {
      formIsValid = false;
      errorsCourse["cCode"] = "Please select cCode!";
    }
    //cName
    if (!fieldsCourse["cName"]) {
      formIsValid = false;
      errorsCourse["cName"] = "Please select cName!";
    }
    //desc
    if (!fieldsCourse["desc"]) {
      formIsValid = false;
      errorsCourse["desc"] = "Please enter desc!";
    }
    //tWDays
    if (!fieldsCourse["tWDays"]) {
      formIsValid = false;
      errorsCourse["tWDays"] = "Please enter tWDays!";
    }
    //syllabusName
    // if (!fieldsCourse["syllabusName"]) {
    //   formIsValid = false;
    //   errorsCourse["syllabusName"] = "Please enter syllabusName!";
    // }
    //minAttendPer
    if (!fieldsCourse["minAttendPer"]) {
      formIsValid = false;
      errorsCourse["minAttendPer"] = "Please enter minAttendPer!";
    }
    //attendtype
    if (!fieldsCourse["attendtype"]) {
      formIsValid = false;
      errorsCourse["attendtype"] = "Please enter attendtype!";
    }
    this.setState({ errorsCourse: errorsCourse });
    return formIsValid;
  }


  handleValidationCourseUpdate = () => {
    let fieldsCourseUpdate = this.state.fieldsCourseUpdate;
    let errorsCourseUpdate = {};
    let formIsValid = true;
    //deprtId
    // if (!fieldsCourseUpdate["deprtId"]) {
    //   formIsValid = false;
    //   errorsCourseUpdate["deprtId"] = "Please enter Batch Name!";
    // }
    //cCode
    if (!fieldsCourseUpdate["cCode"]) {
      formIsValid = false;
      errorsCourseUpdate["cCode"] = "Please select cCode!";
    }
    //cName
    if (!fieldsCourseUpdate["cName"]) {
      formIsValid = false;
      errorsCourseUpdate["cName"] = "Please select cName!";
    }
    //desc
    if (!fieldsCourseUpdate["desc"]) {
      formIsValid = false;
      errorsCourseUpdate["desc"] = "Please enter desc!";
    }
    //tWDays
    if (!fieldsCourseUpdate["tWDays"]) {
      formIsValid = false;
      errorsCourseUpdate["tWDays"] = "Please enter tWDays!";
    }
    //syllabusName
    // if (!fieldsCourseUpdate["syllabusName"]) {
    //   formIsValid = false;
    //   errorsCourseUpdate["syllabusName"] = "Please enter syllabusName!";
    // }
    //minAttendPer
    if (!fieldsCourseUpdate["minAttendPer"]) {
      formIsValid = false;
      errorsCourseUpdate["minAttendPer"] = "Please enter minAttendPer!";
    }
    //attendtype
    if (!fieldsCourseUpdate["attendtype"]) {
      formIsValid = false;
      errorsCourseUpdate["attendtype"] = "Please enter attendtype!";
    }
    this.setState({ errorsCourseUpdate: errorsCourseUpdate });
    return formIsValid;
  }

  handleUpadte = (data) => {
    this.setState({ fieldsCourseUpdate: data, updateShow: true });
    console.log('datadatadatadatadata', data);
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
          onClick: () => this.props.dispatch(dashboardActions.deleteCourse(datatemp))
        },
        {
          label: 'No'
        }
      ]
    });
  }


  render() {

    let { dashboard } = this.props;
    let { loading, getCourseList, getAllDepartment } = dashboard;

    let { admissionEnquiry } = this.props;
    let { AdmissionEnq } = admissionEnquiry
    console.log('render-----', AdmissionEnq);

    // console.log("RENDER_____________this.state.updateShow:::", this.state.updateShow);
    console.log("RENDER_____this.state.fieldsCourseUpdate:::", this.state.fieldsCourseUpdate);
    // console.log('getAllDepartmentgetAllDepartment11111111111111111111111111', getAllDepartment);

    return (

      <>
        {/* 
        <div >
          <LoadingOverlay
            active={loading}
            className="temp001"
            spinner
            text='Please wait...' />
        </div> */}
        <div className="h-screen overflow-y-auto w-full bg-gray-100 p-6">
          <section>

            <div className='space-y-4'>

              <div className='border border-slate-300 bg-white'>
                <div className='border-b border-slate-300 p-4'>
                  <h1 className='text-xl font-normal'>Send SMS</h1>
                </div>
                <div className='p-8'>
                  <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
                    <div>
                      <label class='text-sm font-normal text-gray-600 pb-4'>Subject</label>
                      <input className={`w-full border px-4 py-1.5 rounded-xs focus:outline-none text-md text-gray-700 placeholder-gray-500 ${!this.state.errorsCourseUpdate["cCode"] ? "'border-opacity-20 " : "order-opacity-100 border-red-500 bg-red-100"}`}
                        name="cCode"
                        value={this.state.fieldsCourseUpdate && this.state.fieldsCourseUpdate.cCode ? this.state.fieldsCourseUpdate.cCode : ''}
                        onChange={this.inputChangeUpdate} placeholder='Subject' type="text" />
                      {this.state.errorsCourseUpdate["cCode"] ?
                        <div className="invalid-feedback  text-yellow-600">
                          {this.state.errorsCourseUpdate["cCode"]}
                        </div>
                        : null}
                    </div>
                    <div>
                      <label class='text-sm font-normal text-gray-600 pb-4'>Audience</label>
                      <div className='py-2 relative flex items-center md:w-auto w-full border  text-gray-800 bg-white rounded-sm cursor-pointer appearance-none'>
                        <select className="appearance-none w-full  px-4 bg-white text-sm font-normal focus:outline-none" onChange={this.inputTypeChange}
                          id="txType"
                          name="txType">
                          <option value="ALL">Select One &hellip;</option>
                          <option value="daily">Daily</option>
                          <option value="subjec_wise">Subject Wise</option>
                        </select>
                        <div className="pointer-events-none absolute right-0 top-0 bottom-0 flex items-center px-2 text-gray-700">
                          <svg className="h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className='mt-6'>
                      
                      <input className={`w-full border px-4 py-1.5 rounded-xs focus:outline-none text-md text-gray-700 placeholder-gray-500 ${!this.state.errorsCourseUpdate["desc"] ? "'border-opacity-20 " : "order-opacity-100 border-red-500 bg-red-100"}`}
                        name="desc"
                        value={this.state.fieldsCourseUpdate && this.state.fieldsCourseUpdate.desc ? this.state.fieldsCourseUpdate.desc : ""}
                        onChange={this.inputChangeUpdate} placeholder='Search Student or Employee' type="text" />
                      {this.state.errorsCourseUpdate["desc"] ?
                        <div className="invalid-feedback  text-yellow-600">
                          {this.state.errorsCourseUpdate["desc"]}
                        </div>
                        : null}
                    </div>
                    <div>
                      <label class='text-sm font-normal text-gray-600 pb-4'>SMS</label>
                      <textarea className={`w-full border px-4 py-1.5 rounded-xs focus:outline-none text-md text-gray-700 placeholder-gray-500 ${!this.state.errorsCourseUpdate["tWDays"] ? "'border-opacity-20 " : "order-opacity-100 border-red-500 bg-red-100"}`}
                        name="tWDays"
                        value={this.state.fieldsCourseUpdate && this.state.fieldsCourseUpdate.tWDays ? this.state.fieldsCourseUpdate.tWDays : ""}
                        onChange={this.inputChangeUpdate} placeholder='SMS' type="text" />
                      {this.state.errorsCourseUpdate["tWDays"] ?
                        <div className="invalid-feedback  text-yellow-600">
                          {this.state.errorsCourseUpdate["tWDays"]}
                        </div>
                        : null}
                    </div>
                    <div>
                      <label class='text-sm font-normal text-gray-600 pb-4'>Include List(0 Number)</label>
                      <textarea className={`w-full border px-4 py-1.5 rounded-xs focus:outline-none text-md text-gray-700 placeholder-gray-500 ${!this.state.errorsCourseUpdate["minAttendPer"] ? "'border-opacity-20 " : "order-opacity-100 border-red-500 bg-red-100"}`}
                        name="minAttendPer"
                        value={this.state.fieldsCourseUpdate && this.state.fieldsCourseUpdate.minAttendPer ? this.state.fieldsCourseUpdate.minAttendPer : ""}
                        onChange={this.inputChangeUpdate} placeholder='Type all additional mobile nubers you want to include separated by enter' type="text" />
                      {this.state.errorsCourseUpdate["minAttendPer"] ?
                        <div className="invalid-feedback  text-yellow-600">
                          {this.state.errorsCourseUpdate["minAttendPer"]}
                        </div>
                        : null}
                    </div>
                    <div>
                      <label class='text-sm font-normal text-gray-600 pb-4'>Exclude List (0 Number)</label>
                      <textarea className={`w-full border px-4 py-1.5 rounded-xs focus:outline-none text-md text-gray-700 placeholder-gray-500 ${!this.state.errorsCourseUpdate["attendtype"] ? "'border-opacity-20 " : "order-opacity-100 border-red-500 bg-red-100"}`}
                        name="attendtype"
                        value={this.state.fieldsCourseUpdate && this.state.fieldsCourseUpdate.attendtype ? this.state.fieldsCourseUpdate.attendtype : ""}
                        onChange={this.inputChangeUpdate} placeholder='Type any existing number you want to exclude separated by enter' type="text" />
                      {this.state.errorsCourseUpdate["attendtype"] ?
                        <div className="invalid-feedback  text-yellow-600">
                          {this.state.errorsCourseUpdate["attendtype"]}
                        </div>
                        : null}
                    </div>
                    <div className='w-full px-5 mt-6'>
                      <button type='button' className='py-2 px-4 bg-sky-500 text-white rounded-sm text-sm' onClick={this.courseUpdateSubmit}>Save</button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="max-w-full overflow-auto">
                <div className="inline-block min-w-full">
                  <div className="overflow-x-hidden">
                    <table className="min-w-full text-left border border-slate-300 border-collapse bg-white">
                      <thead className="">
                        <tr className="text-left border border-slate-300">
                          <th scope="col" className="px-4 py-3 text-left text-sm capitalize font-medium text-gray-600 whitespace-nowrap">Sl.N.</th>
                          <th scope="col" className="px-4 py-3 text-left text-sm capitalize font-medium text-gray-600 whitespace-nowrap">Course Code</th>
                          <th scope="col" className="px-4 py-3 text-left text-sm capitalize font-medium text-gray-600 whitespace-nowrap">Course Name</th>
                          <th scope="col" className="px-4 py-3 text-left text-sm capitalize font-medium text-gray-600 whitespace-nowrap">Description</th>
                          {/* <th scope="col" className="px-4 py-3 text-left text-sm capitalize font-medium text-gray-600 whitespace-nowrap">Department Name</th> */}
                          {/* <th scope="col" className="px-4 py-3 text-left text-sm capitalize font-medium text-gray-600 whitespace-nowrap">syllabusName</th> */}
                          <th scope="col" className="px-4 py-3 text-left text-sm capitalize font-medium text-gray-600 whitespace-nowrap">Minimum Attendance(%)</th>
                          <th scope="col" className="px-4 py-3 text-left text-sm capitalize font-medium text-gray-600 whitespace-nowrap">Total Working Days</th>
                          <th scope="col" className="px-4 py-3 text-left text-sm capitalize font-medium text-gray-600 whitespace-nowrap">Manage</th>
                        </tr>
                      </thead>
                      <tbody>
                        {
                          getCourseList && getCourseList.length > 0 ?
                            getCourseList.map((element, index) => (
                              <>
                                <tr className="border border-slate-300">
                                  <td className=" text-left px-4 py-3 text-sm font-serif text-black bg-white uppercase whitespace-nowrap">1</td>
                                  <td className=" text-left px-4 py-3 text-sm font-serif text-black bg-white uppercase whitespace-nowrap">{element && element.cCode ? element.cCode : "-"}</td>
                                  <td className=" text-left px-4 py-3 text-sm font-serif text-black bg-white uppercase whitespace-nowrap">{element && element.cName ? element.cName : "-"}</td>
                                  <td className=" text-left px-4 py-3 text-sm font-serif text-black bg-white uppercase whitespace-nowrap">{element && element.description ? element.description : "-"}</td>
                                  {/* <td className=" text-left px-4 py-3 text-sm font-serif text-black bg-white uppercase whitespace-nowrap">{element && element.deprtId ? element.deprtId : "-"}</td> */}
                                  {/* <td className=" text-left px-4 py-3 text-sm font-serif text-black bg-white capitalize whitespace-nowrap">{element && element.syllabusName ? element.syllabusName : "-"}</td> */}
                                  <td className=" text-left px-4 py-3 text-sm font-serif text-black bg-white capitalize whitespace-nowrap">{element && element.minAttendPer ? element.minAttendPer : "-"}</td>
                                  <td className=" text-left px-4 py-3 text-sm font-serif text-black bg-white capitalize whitespace-nowrap">{element && element.tWDays ? element.tWDays : "-"}</td>
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
                            )) : <td colspan="7" className="whitespace-nowrap border border-gray-300 text-center px-[11.5px] py-3 text-xs font-semibold text-black bg-white uppercase bg-whj">Data Not Found</td>
                        }

                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>









            {/* <div className='grid grid-cols-1 lg:grid-cols-2 gap-6'>
              <div className='border border-slate-300 bg-white'>
                <div className='border-b border-slate-300 p-4'>
                  <h1 className='text-xl font-normal'>Class Teacher Allocation</h1>
                </div>
                <div className='p-8'>
                  <div className='space-y-6'>
                    <div>
                      <label class=' text-sm font-normal text-gray-600 pb-4'>Course</label>
                      <div className='py-2 relative flex items-center md:w-auto w-full border  text-gray-800 bg-white rounded-sm cursor-pointer appearance-none'>
                        <select className="appearance-none w-full  px-4 bg-white text-sm font-normal focus:outline-none" onChange={this.inputTypeChange}
                          id="txType"
                          name="txType">
                          <option value="ALL">Please select&hellip;</option>
                          <option value="daily">Daily</option>
                          <option value="subjec_wise">Subject Wise</option>
                        </select>
                        <div className="pointer-events-none absolute right-0 top-0 bottom-0 flex items-center px-2 text-gray-700">
                          <svg className="h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div>
                      <label class=' text-sm font-normal text-gray-600 pb-4'>Batch</label>
                      <div className='py-2 relative flex items-center md:w-auto w-full border  text-gray-800 bg-white rounded-sm cursor-pointer appearance-none'>
                        <select className="appearance-none w-full  px-4 bg-white text-sm font-normal focus:outline-none" onChange={this.inputTypeChange}
                          id="txType"
                          name="txType">
                          <option value="ALL">Please select&hellip;</option>
                          <option value="daily">Daily</option>
                          <option value="subjec_wise">Subject Wise</option>
                        </select>
                        <div className="pointer-events-none absolute right-0 top-0 bottom-0 flex items-center px-2 text-gray-700">
                          <svg className="h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div>
                      <label class=' text-sm font-normal text-gray-600 pb-4'>Class Teacher</label>
                      <div className='py-2 relative flex items-center md:w-auto w-full border  text-gray-800 bg-white rounded-sm cursor-pointer appearance-none'>
                        <select className="appearance-none w-full  px-4 bg-white text-sm font-normal focus:outline-none" onChange={this.inputTypeChange}
                          id="txType"
                          name="txType">
                          <option value="ALL">Please select&hellip;</option>
                          <option value="daily">Daily</option>
                          <option value="subjec_wise">Subject Wise</option>
                        </select>
                        <div className="pointer-events-none absolute right-0 top-0 bottom-0 flex items-center px-2 text-gray-700">
                          <svg className="h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='w-full px-5 pb-4'>
                  <button type='submit' className='py-2 px-4 bg-sky-500 text-white rounded-sm text-sm'>Save</button>
                </div>
              </div>
              <div className="max-w-full overflow-auto">
                <div className="inline-block min-w-full">
                  <div className="overflow-x-hidden">
                    <table className="min-w-full text-left border border-slate-300 border-collapse bg-white">
                      <thead className="">
                        <tr className="text-left border border-slate-300">
                          <th scope="col" className="px-4 py-3 text-left text-sm capitalize font-medium text-gray-600 whitespace-nowrap">Sl.N.</th>
                          <th scope="col" className="px-4 py-3 text-left text-sm capitalize font-medium text-gray-600 whitespace-nowrap">Course</th>
                          <th scope="col" className="px-4 py-3 text-left text-sm capitalize font-medium text-gray-600 whitespace-nowrap">Batch</th>
                          <th scope="col" className="px-4 py-3 text-left text-sm capitalize font-medium text-gray-600 whitespace-nowrap">Class Teacher</th>
                          <th scope="col" className="px-4 py-3 text-left text-sm capitalize font-medium text-gray-600 whitespace-nowrap">Manage</th>
                        </tr>
                      </thead>
                      <tbody className='divide-y' >
                        <tr className="hover:bg-[#FF8008]/10 cursor-pointer border border-slate-300">
                          <td className=" text-left px-4 py-3 text-sm font-serif text-black bg-white uppercase whitespace-nowrap">1</td>
                          <td className=" text-left px-4 py-3 text-sm font-serif text-black bg-white uppercase whitespace-nowrap">UKG</td>
                          <td className=" text-left px-4 py-3 text-sm font-serif text-black bg-white uppercase whitespace-nowrap">B</td>
                          <td className=" text-left px-4 py-3 text-sm font-serif text-black bg-white uppercase whitespace-nowrap">James ya jesse</td>
                          <td>
                            <span className='flex space-x-1'><MdOutlineEdit className='text-blue-500 h-6 w-6' /><MdOutlineClose className='text-blue-500 h-6 w-6' /></span>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div> */}
          </section>
        </div >
      </>

    );
  }
}

function mapStateToProps(state) {
  const { users, dashboard, admissionEnquiry } = state;
  const { overview } = users ? users : {};
  const { setting } = overview ? overview : {};
  return {
    users,
    dashboard,
    setting,
    admissionEnquiry
  };
}
export default connect(mapStateToProps)(AdmissionEnquiry);
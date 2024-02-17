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
    this.props.dispatch(dashboardActions.getMeetingHistoryList(data));
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
    let { loading, getCourseList, getAllDepartment, getMeetingHistoryList } = dashboard;

    console.log('getMeetingHistoryListgetMeetingHistoryListgetMeetingHistoryListgetMeetingHistoryList', getMeetingHistoryList);

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
        <div className="w-full h-screen p-6 overflow-y-auto bg-gray-100">
          <section>

            <div className='space-y-4'>

              <div className='bg-white border border-slate-300'>
                <div className='p-4 border-b border-slate-300'>
                  <h1 className='text-xl font-normal'>Communication History</h1>
                </div>
              </div>

              <div className="max-w-full overflow-auto">
                <div className="inline-block min-w-full">
                  <div className="overflow-x-hidden">
                    <table className="min-w-full text-left bg-white border border-collapse border-slate-300">
                      <thead className="">
                        <tr className="text-left border border-slate-300">
                          <th scope="col" className="px-4 py-3 text-sm font-medium text-left text-gray-600 capitalize whitespace-nowrap">Sl.N.</th>
                          <th scope="col" className="px-4 py-3 text-sm font-medium text-left text-gray-600 capitalize whitespace-nowrap">Audience</th>
                          <th scope="col" className="px-4 py-3 text-sm font-medium text-left text-gray-600 capitalize whitespace-nowrap">Title</th>
                          <th scope="col" className="px-4 py-3 text-sm font-medium text-left text-gray-600 capitalize whitespace-nowrap">description</th>
                          <th scope="col" className="px-4 py-3 text-sm font-medium text-left text-gray-600 capitalize whitespace-nowrap">Start Time</th>
                          <th scope="col" className="px-4 py-3 text-sm font-medium text-left text-gray-600 capitalize whitespace-nowrap">End Time</th>
                          <th scope="col" className="px-4 py-3 text-sm font-medium text-left text-gray-600 capitalize whitespace-nowrap">Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        {
                          getMeetingHistoryList && getMeetingHistoryList.length > 0 ?
                            getMeetingHistoryList.map((element, index) => (
                              <>
                                <tr className="border border-slate-300">
                                  <td className="px-4 py-3 font-serif text-sm text-left text-black uppercase bg-white whitespace-nowrap">{index}</td>
                                  <td className="px-4 py-3 font-serif text-sm text-left text-black capitalize bg-white whitespace-nowrap">{element && element.audience ? element.audience : "-"}</td>
                                  <td className="px-4 py-3 font-serif text-sm text-left text-black uppercase bg-white whitespace-nowrap">{element && element.title ? element.title : "-"}</td>
                                  <td className="px-4 py-3 font-serif text-sm text-left text-black uppercase bg-white whitespace-nowrap">{element && element.description ? element.description : "-"}</td>
                                  <td className="px-4 py-3 font-serif text-sm text-left text-black uppercase bg-white whitespace-nowrap">{element && element.startTime ? element.startTime : "-"}</td>
                                  <td className="px-4 py-3 font-serif text-sm text-left text-black uppercase bg-white whitespace-nowrap">{element && element.endTime ? element.endTime : "-"}</td>
                                  <td className='flex space-x-1'>
                                    <span className='hover:bg-[#FF7F50] cursor-pointer'>
                                      <MdOutlineEdit className='w-5 h-5 text-blue-500' onClick={() => this.handleUpadte(element)} />
                                    </span>
                                    <span className='hover:bg-[#FF8008] cursor-pointer'>
                                      <MdOutlineClose className='w-6 h-6 text-blue-500' onClick={() => this.deleteUser(element)} />
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









            {/* <div className='grid grid-cols-1 gap-6 lg:grid-cols-2'>
              <div className='bg-white border border-slate-300'>
                <div className='p-4 border-b border-slate-300'>
                  <h1 className='text-xl font-normal'>Class Teacher Allocation</h1>
                </div>
                <div className='p-8'>
                  <div className='space-y-6'>
                    <div>
                      <label class=' text-sm font-normal text-gray-600 pb-4'>Course</label>
                      <div className='relative flex items-center w-full py-2 text-gray-800 bg-white border rounded-sm appearance-none cursor-pointer md:w-auto'>
                        <select className="w-full px-4 text-sm font-normal bg-white appearance-none focus:outline-none" onChange={this.inputTypeChange}
                          id="txType"
                          name="txType">
                          <option value="ALL">Please select&hellip;</option>
                          <option value="daily">Daily</option>
                          <option value="subjec_wise">Subject Wise</option>
                        </select>
                        <div className="absolute top-0 bottom-0 right-0 flex items-center px-2 text-gray-700 pointer-events-none">
                          <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div>
                      <label class=' text-sm font-normal text-gray-600 pb-4'>Batch</label>
                      <div className='relative flex items-center w-full py-2 text-gray-800 bg-white border rounded-sm appearance-none cursor-pointer md:w-auto'>
                        <select className="w-full px-4 text-sm font-normal bg-white appearance-none focus:outline-none" onChange={this.inputTypeChange}
                          id="txType"
                          name="txType">
                          <option value="ALL">Please select&hellip;</option>
                          <option value="daily">Daily</option>
                          <option value="subjec_wise">Subject Wise</option>
                        </select>
                        <div className="absolute top-0 bottom-0 right-0 flex items-center px-2 text-gray-700 pointer-events-none">
                          <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div>
                      <label class=' text-sm font-normal text-gray-600 pb-4'>Class Teacher</label>
                      <div className='relative flex items-center w-full py-2 text-gray-800 bg-white border rounded-sm appearance-none cursor-pointer md:w-auto'>
                        <select className="w-full px-4 text-sm font-normal bg-white appearance-none focus:outline-none" onChange={this.inputTypeChange}
                          id="txType"
                          name="txType">
                          <option value="ALL">Please select&hellip;</option>
                          <option value="daily">Daily</option>
                          <option value="subjec_wise">Subject Wise</option>
                        </select>
                        <div className="absolute top-0 bottom-0 right-0 flex items-center px-2 text-gray-700 pointer-events-none">
                          <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='w-full px-5 pb-4'>
                  <button type='submit' className='px-4 py-2 text-sm text-white rounded-sm bg-sky-500'>Save</button>
                </div>
              </div>
              <div className="max-w-full overflow-auto">
                <div className="inline-block min-w-full">
                  <div className="overflow-x-hidden">
                    <table className="min-w-full text-left bg-white border border-collapse border-slate-300">
                      <thead className="">
                        <tr className="text-left border border-slate-300">
                          <th scope="col" className="px-4 py-3 text-sm font-medium text-left text-gray-600 capitalize whitespace-nowrap">Sl.N.</th>
                          <th scope="col" className="px-4 py-3 text-sm font-medium text-left text-gray-600 capitalize whitespace-nowrap">Course</th>
                          <th scope="col" className="px-4 py-3 text-sm font-medium text-left text-gray-600 capitalize whitespace-nowrap">Batch</th>
                          <th scope="col" className="px-4 py-3 text-sm font-medium text-left text-gray-600 capitalize whitespace-nowrap">Class Teacher</th>
                          <th scope="col" className="px-4 py-3 text-sm font-medium text-left text-gray-600 capitalize whitespace-nowrap">Manage</th>
                        </tr>
                      </thead>
                      <tbody className='divide-y' >
                        <tr className="hover:bg-[#FF8008]/10 cursor-pointer border border-slate-300">
                          <td className="px-4 py-3 font-serif text-sm text-left text-black uppercase bg-white whitespace-nowrap">1</td>
                          <td className="px-4 py-3 font-serif text-sm text-left text-black uppercase bg-white whitespace-nowrap">UKG</td>
                          <td className="px-4 py-3 font-serif text-sm text-left text-black uppercase bg-white whitespace-nowrap">B</td>
                          <td className="px-4 py-3 font-serif text-sm text-left text-black uppercase bg-white whitespace-nowrap">James ya jesse</td>
                          <td>
                            <span className='flex space-x-1'><MdOutlineEdit className='w-6 h-6 text-blue-500' /><MdOutlineClose className='w-6 h-6 text-blue-500' /></span>
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
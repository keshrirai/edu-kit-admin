import React, { Component } from 'react';
import { dashboardActions } from '../../_actions';
import { connect } from 'react-redux';
import 'react-confirm-alert/src/react-confirm-alert.css';
import { MdOutlineClose, MdOutlineEdit } from 'react-icons/md';
import { confirmAlert } from 'react-confirm-alert';

class SubjectsAllocationTeacher extends Component {

  constructor(props) {
    super(props);
    this.teacherSubmit = this.teacherSubmit.bind(this);
    this.inputChange = this.inputChange.bind(this);
    this.state = {
      offset: 0,
      size: 10,
      keyWord: "",
      pageNo: 1,
      fieldsTeacher: {},
      errorsTeacher: {},
      updateShow: false,
      fieldsTeacherUpdate: {},
      errorsTeacherUpdate: {},
    }
  }

  componentDidMount() {
    let data = {
      "keyWord": "",
      "pageNo": 1,
      "size": 1000
    }
    this.props.dispatch(dashboardActions.getAllSubject(data));
    this.props.dispatch(dashboardActions.getAllDepartment(data));
    this.props.dispatch(dashboardActions.getAllCourse(data));
    this.props.dispatch(dashboardActions.getAllBatch(data));
    this.props.dispatch(dashboardActions.getAllEmployee(data));
    this.props.dispatch(dashboardActions.getClsTeachAllocatList(data));
  }

  static getDerivedStateFromProps(nextProps, prevState) {

    if (nextProps.dashboard.updateShow) {
      return {
        ...nextProps,
        fieldsTeacherUpdate: {},
        errorinsterrorsTeacherUpdateitueUpdate: {},
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
    let fieldsTeacher = this.state.fieldsTeacher;
    let errorsTeacher = this.state.errorsTeacher;
    fieldsTeacher[name] = value;
    errorsTeacher[name] = "";
    console.log(name, value);
    this.setState({ fieldsTeacher, errorsTeacher });
  }
  inputChangeUpdate = (e) => {
    e.preventDefault();
    let { name, value } = e.target;
    let { fieldsTeacherUpdate } = this.state;
    let { errorsTeacherUpdate } = this.state;
    fieldsTeacherUpdate[name] = value;
    errorsTeacherUpdate[name] = "";
    console.log(name, value);
    this.setState({ fieldsTeacherUpdate, errorsTeacherUpdate });
  }
  teacherSubmit = (e) => {
    e.preventDefault();
    if (this.handleValidationTeacher()) {
      let { courseId, batchId, employeeId, } = this.state.fieldsTeacher;
      this.props.dispatch(dashboardActions.createClsTeachAllocat({
        courseId: courseId,
        batchId: batchId,
        employeeId: employeeId,
      }, this.props));
    }
  }

  teacherUpdateSubmit = (e) => {
    e.preventDefault();
    if (this.handleValidationTeacherUpdate()) {
      let { courseId, batchId, employeeId, id } = this.state.fieldsTeacherUpdate;
      this.props.dispatch(dashboardActions.updateClsTeachAllocat({
        id: id,
        courseId: courseId,
        batchId: batchId,
        employeeId: employeeId,
      }, this.props));
    }
  }

  resetForm = (e) => {
    e.preventDefault();
    this.setState({
      fieldsTeacher: {},
      errorsTeacher: {},
    })
    this.hideErrorcomment();
  }

  handleValidationTeacher = () => {
    let fieldsTeacher = this.state.fieldsTeacher;
    let errorsTeacher = {};
    let formIsValid = true;
    //courseId
    if (!fieldsTeacher["courseId"]) {
      formIsValid = false;
      errorsTeacher["courseId"] = "Please enter Batch Name!";
    }
    // batchId
    if (!fieldsTeacher["batchId"]) {
      formIsValid = false;
      errorsTeacher["batchId"] = "Please select batchId!";
    }
    // employeeId
    if (!fieldsTeacher["employeeId"]) {
      formIsValid = false;
      errorsTeacher["employeeId"] = "Please select employeeId!";
    }
    console.log('errorsTeachererrorsTeachererrorsTeachererrorsTeacher', errorsTeacher);
    this.setState({ errorsTeacher: errorsTeacher });
    return formIsValid;
  }

  // handleUpdateSelectType = (e) => {
  //   console.log("handleUpdateSelectType::::#", e.target.value);
  //   let { value } = e.target;
  //   let { fieldsRankingUpdate } = this.state;
  //   fieldsRankingUpdate["type"] = value;
  //   this.setState({ fieldsRankingUpdate });
  // }


  handleValidationTeacherUpdate = () => {
    let fieldsTeacherUpdate = this.state.fieldsTeacherUpdate;
    let errorsTeacherUpdate = {};
    let formIsValid = true;
    //courseId
    if (!fieldsTeacherUpdate["courseId"]) {
      formIsValid = false;
      errorsTeacherUpdate["courseId"] = "Please enter Batch Name!";
    }
    // batchId
    if (!fieldsTeacherUpdate["batchId"]) {
      formIsValid = false;
      errorsTeacherUpdate["batchId"] = "Please select batchId!";
    }
    // employeeId
    if (!fieldsTeacherUpdate["employeeId"]) {
      formIsValid = false;
      errorsTeacherUpdate["employeeId"] = "Please select employeeId!";
    }
    console.log('errorsTeacherUpdate errorsTeacherUpdate errorsTeacherUpdate errorsTeacherUpdate ', errorsTeacherUpdate);
    this.setState({ errorsTeacherUpdate: errorsTeacherUpdate });
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
          onClick: () => this.props.dispatch(dashboardActions.deleteClsTeachAllocat(datatemp))
        },
        {
          label: 'No'
        }
      ]
    });
  }

  render() {

    let { dashboard } = this.props;
    let { loading, getAllSubject, getAllDepartment, getAllCourse, getAllBatch, getAllEmployee, getClsTeachAllocatList } = dashboard;


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
                      <div className='border-b border-slate-300 p-4'>
                        <h1 className='text-xl font-normal'>Update Subject Allocation</h1>
                      </div>
                      <div className='p-8'>
                        <div className='space-y-6'>
                          <div>
                            <label class=' text-sm font-normal text-gray-600 pb-4'>Department</label>
                            <div className='py-2 relative flex items-center md:w-auto w-full border  text-gray-800 bg-white rounded-sm cursor-pointer appearance-none'>
                              <select className="appearance-none w-full  px-4 bg-white text-sm font-normal focus:outline-none text-gray-700" onChange={this.inputChangeUpdate}
                                name="courseId">
                                {
                                  getAllDepartment && getAllDepartment.length > 0 ?
                                    getAllDepartment.map((element, index) => (
                                      <React.Fragment>
                                        <option value={element && element.id ? element.id : null}>{element && element.deprtName ? element.deprtName : null}</option>
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
                            <label class=' text-sm font-normal text-gray-600 pb-4'>Employee Name</label>
                            <div className='py-2 relative flex items-center md:w-auto w-full border  text-gray-800 bg-white rounded-sm cursor-pointer appearance-none'>
                              <select className="appearance-none w-full  px-4 bg-white text-sm font-normal focus:outline-none text-gray-700" onChange={this.inputChangeUpdate}
                                name="batchId">
                                {
                                  getAllBatch && getAllBatch.length > 0 ?
                                    getAllBatch.map((element, index) => (
                                      <React.Fragment>
                                        <option value={element && element.id ? element.id : null}>{element && element.batchName ? element.batchName : null}</option>
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
                            <label class=' text-sm font-normal text-gray-600 pb-4'>Course</label>
                            <div className='py-2 relative flex items-center md:w-auto w-full border  text-gray-800 bg-white rounded-sm cursor-pointer appearance-none'>
                              <select className="appearance-none w-full  px-4 bg-white text-sm font-normal focus:outline-none text-gray-700" onChange={this.inputChangeUpdate}
                                name="employeeId">
                                {
                                  getAllEmployee && getAllEmployee.length > 0 ?
                                    getAllEmployee.map((element, index) => (
                                      <React.Fragment>
                                        <option value={element && element.id ? element.id : null}>{element && element.fname ? element.fname : null}</option>
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
                    
                        </div>
                      </div>
                      <div className='w-full px-5 pb-4'>
                        <button type='submit' className='py-2 px-4 bg-sky-500 text-white rounded-sm text-sm' onClick={this.teacherUpdateSubmit}>Save</button>
                      </div>
                    </div>
                  </>
                  :
                  <>
                    <div className='border border-slate-300 bg-white'>
                      <div className='border-b border-slate-300 p-4'>
                        <h1 className='text-xl font-normal'>Add Subject Allocation</h1>
                      </div>
                      <div className='p-8'>
                        <div className='space-y-6'>
                          <div>
                            <label class=' text-sm font-normal text-gray-600 pb-4'>Department</label>
                            <div className='py-2 relative flex items-center md:w-auto w-full border  text-gray-800 bg-white rounded-sm cursor-pointer appearance-none'>
                              <select className="appearance-none w-full  px-4 bg-white text-sm font-normal focus:outline-none text-gray-700" onChange={this.inputChange}
                                name="courseId">
                                {
                                  getAllDepartment && getAllDepartment.length > 0 ?
                                    getAllDepartment.map((element, index) => (
                                      <React.Fragment>
                                        <option value={element && element.id ? element.id : null}>{element && element.deprtName ? element.deprtName : null}</option>
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
                            <label class=' text-sm font-normal text-gray-600 pb-4'>Employee Name</label>
                            <div className='py-2 relative flex items-center md:w-auto w-full border  text-gray-800 bg-white rounded-sm cursor-pointer appearance-none'>
                              <select className="appearance-none w-full  px-4 bg-white text-sm font-normal focus:outline-none text-gray-700" onChange={this.inputChange}
                                name="batchId">
                                {
                                  getAllBatch && getAllBatch.length > 0 ?
                                    getAllBatch.map((element, index) => (
                                      <React.Fragment>
                                        <option value={element && element.id ? element.id : null}>{element && element.batchName ? element.batchName : null}</option>
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
                            <label class=' text-sm font-normal text-gray-600 pb-4'>Course</label>
                            <div className='py-2 relative flex items-center md:w-auto w-full border  text-gray-800 bg-white rounded-sm cursor-pointer appearance-none'>
                              <select className="appearance-none w-full  px-4 bg-white text-sm font-normal focus:outline-none text-gray-700" onChange={this.inputChange}
                                name="employeeId">
                                {
                                  getAllEmployee && getAllEmployee.length > 0 ?
                                    getAllEmployee.map((element, index) => (
                                      <React.Fragment>
                                        <option value={element && element.id ? element.id : null}>{element && element.fname ? element.fname : null}</option>
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
                          {/* <div>
                      <label class=' text-sm font-normal text-gray-600 pb-4'>Batch</label>
                      <div className='py-2 relative flex items-center md:w-auto w-full border  text-gray-800 bg-white rounded-sm cursor-pointer appearance-none'>
                      <select className="appearance-none w-full  px-4 bg-white text-sm font-normal focus:outline-none text-gray-700" onChange={this.inputChange}
                          name="deprtId">
                          {
                            getAllBatch && getAllBatch.length > 0 ?
                              getAllBatch.map((element, index) => (
                                <React.Fragment>
                                  <option value={element && element.id ? element.id : null}>{element && element.batchName ? element.batchName : null}</option>
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
                      <label class=' text-sm font-normal text-gray-600 pb-4'>Subject</label>
                      <div className='py-2 relative flex items-center md:w-auto w-full border  text-gray-800 bg-white rounded-sm cursor-pointer appearance-none'>
                      <select className="appearance-none w-full  px-4 bg-white text-sm font-normal focus:outline-none text-gray-700" onChange={this.inputChange}
                          name="deprtId">
                          {
                            getAllSubject && getAllSubject.length > 0 ?
                              getAllSubject.map((element, index) => (
                                <React.Fragment>
                                  <option value={element && element.id ? element.id : null}>{element && element.subName ? element.subName : null}</option>
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
                    </div> */}
                        </div>
                      </div>
                      <div className='w-full px-5 pb-4'>
                        <button type='submit' className='py-2 px-4 bg-sky-500 text-white rounded-sm text-sm' onClick={this.teacherSubmit}>Save</button>
                      </div>
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
                          <th scope="col" className="px-4 py-3 text-left text-sm capitalize font-medium text-gray-600 whitespace-nowrap">Department</th>
                          <th scope="col" className="px-4 py-3 text-left text-sm capitalize font-medium text-gray-600 whitespace-nowrap">Employee Name</th>
                          <th scope="col" className="px-4 py-3 text-left text-sm capitalize font-medium text-gray-600 whitespace-nowrap">Course</th>
                          <th scope="col" className="px-4 py-3 text-left text-sm capitalize font-medium text-gray-600 whitespace-nowrap">Batch</th>
                          <th scope="col" className="px-4 py-3 text-left text-sm capitalize font-medium text-gray-600 whitespace-nowrap">Subject</th>
                          <th scope="col" className="px-4 py-3 text-left text-sm capitalize font-medium text-gray-600 whitespace-nowrap">Manage</th>
                        </tr>
                      </thead>
                      <tbody className='divide-y' >

                        {
                          getClsTeachAllocatList && getClsTeachAllocatList.length > 0 ?
                            getClsTeachAllocatList.map((element, index) => (
                              <>

                                <tr className="border border-slate-300">
                                  <td className=" text-left px-4 py-3 text-sm font-serif text-black bg-white Capitalize whitespace-nowrap">1</td>
                                  <td className=" text-left px-4 py-3 text-sm font-serif text-black bg-white Capitalize whitespace-nowrap">Class Teacher</td>
                                  <td className=" text-left px-4 py-3 text-sm font-serif text-black bg-white Capitalize whitespace-nowrap">Anitha Paslam</td>
                                  <td className=" text-left px-4 py-3 text-sm font-serif text-black bg-white Capitalize whitespace-nowrap">UKG</td>
                                  <td className=" text-left px-4 py-3 text-sm font-serif text-black bg-white Capitalize whitespace-nowrap">A</td>
                                  <td className=" text-left px-4 py-3 text-sm font-serif text-black bg-white Capitalize whitespace-nowrap">Science SC-1010</td>

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
export default connect(mapStateToProps)(SubjectsAllocationTeacher);
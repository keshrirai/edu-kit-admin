import React, { Component } from 'react';
import { dashboardActions } from '../../_actions';
import { connect } from 'react-redux';
import 'react-confirm-alert/src/react-confirm-alert.css';
import { MdOutlineClose, MdOutlineEdit } from 'react-icons/md';
import { confirmAlert } from 'react-confirm-alert';

class VehicleInchange extends Component {

  constructor(props) {
    super(props);
    this.examSubmit = this.examSubmit.bind(this);
    this.inputChange = this.inputChange.bind(this);
    this.state = {
      offset: 0,
      size: 10,
      keyWord: "",
      pageNo: 1,
      fieldsExam: {},
      errorsExam: {},
      updateShow: false,
      fieldsExamUpdate: {},
      errorsExamUpdate: {},
    }
  }

  componentDidMount() {
    let data = {
      "keyWord": "",
      "pageNo": 1,
      "size": 10
    }
    this.props.dispatch(dashboardActions.getExamList(data));
    this.props.dispatch(dashboardActions.getAllCourse(data));
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.dashboard.updateShow) {
      return {
        ...nextProps,
        fieldsExamUpdate: {},
        errorsExamUpdate: {},
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
    let fieldsExam = this.state.fieldsExam;
    let errorsExam = this.state.errorsExam;
    fieldsExam[name] = value;
    errorsExam[name] = "";
    console.log(name, value);
    this.setState({ fieldsExam, errorsExam });
  }

  inputChangeUpdate = (e) => {
    e.preventDefault();
    let { name, value } = e.target;
    let { fieldsExamUpdate } = this.state;
    let { errorsExamUpdate } = this.state;
    fieldsExamUpdate[name] = value;
    errorsExamUpdate[name] = "";
    console.log(name, value);
    this.setState({ fieldsExamUpdate, errorsExamUpdate });
  }

  examSubmit = (e) => {
    e.preventDefault();
    if (this.handleValidationBatch()) {
      let { courseId, examCode, description, examName, examType, invigilator, roomNo, startDate, startTime, endDate, endTime } = this.state.fieldsExam;
      this.props.dispatch(dashboardActions.createExam({
        courseId: courseId,
        examCode: examCode,
        examName: examName,
        description: description,
        examType: examType,
        invigilator: invigilator,
        roomNo: roomNo,
        startDate: startDate,
        endDate: endDate,
        startTime: startTime,
        endTime: endTime,
      }, this.props));
    }
  }

  examUpdateSubmit = (e) => {
    e.preventDefault();
    if (this.handleValidationBatchUpdate()) {
      let { id, courseId, examCode, description, examName, examType, invigilator, roomNo, startDate, startTime, endDate, endTime } = this.state.fieldsExamUpdate;
      this.props.dispatch(dashboardActions.updateExam({
        id: id,
        courseId: courseId,
        examCode: examCode,
        examName: examName,
        description: description,
        examType: examType,
        invigilator: invigilator,
        roomNo: roomNo,
        startDate: startDate,
        endDate: endDate,
        startTime: startTime,
        endTime: endTime,
      }, this.props));
    }
  }
  resetForm = (e) => {
    e.preventDefault();
    this.setState({
      fieldsExam: {},
      errorsExam: {},
    })
    this.hideErrorcomment();
  }

  handleValidationBatch = () => {
    let fieldsExam = this.state.fieldsExam;
    let errorsExam = {};
    let formIsValid = true;
    // courseId
    if (!fieldsExam["courseId"]) {
      formIsValid = false;
      errorsExam["courseId"] = "Please enter Batch Name!";
    }
    //examCode
    if (!fieldsExam["examCode"]) {
      formIsValid = false;
      errorsExam["examCode"] = "Please select examCode!";
    }
    //examName
    if (!fieldsExam["examName"]) {
      formIsValid = false;
      errorsExam["examName"] = "Please select examName!";
    }
    //description
    if (!fieldsExam["description"]) {
      formIsValid = false;
      errorsExam["description"] = "Please select description!";
    }
    //examType
    if (!fieldsExam["examType"]) {
      formIsValid = false;
      errorsExam["examType"] = "Please enter examType!";
    }
    //invigilator
    if (!fieldsExam["invigilator"]) {
      formIsValid = false;
      errorsExam["invigilator"] = "Please enter invigilator!";
    }
    //roomNo
    if (!fieldsExam["roomNo"]) {
      formIsValid = false;
      errorsExam["roomNo"] = "Please enter roomNo!";
    }
    //startDate
    if (!fieldsExam["startDate"]) {
      formIsValid = false;
      errorsExam["startDate"] = "Please enter startDate!";
    }
    //endDate
    if (!fieldsExam["endDate"]) {
      formIsValid = false;
      errorsExam["endDate"] = "Please enter endDate!";
    }
    //startTime
    if (!fieldsExam["startTime"]) {
      formIsValid = false;
      errorsExam["startTime"] = "Please enter startTime!";
    }
    //endTime
    if (!fieldsExam["endTime"]) {
      formIsValid = false;
      errorsExam["endTime"] = "Please enter endTime!";
    }
    //attendtype
    // if (!fieldsExam["attendtype"]) {
    //   formIsValid = false;
    //   errorsExam["attendtype"] = "Please enter attendtype!";
    // }

    console.log("errorsExamerrorsExamerrorsExam::::", errorsExam);

    this.setState({ errorsExam: errorsExam });
    return formIsValid;
  }

  handleValidationBatchUpdate = () => {
    let fieldsExamUpdate = this.state.fieldsExamUpdate;
    let errorsExamUpdate = {};
    let formIsValid = true;
    // courseId
    if (!fieldsExamUpdate["courseId"]) {
      formIsValid = false;
      errorsExamUpdate["courseId"] = "Please enter Batch Name!";
    }
    //examCode
    if (!fieldsExamUpdate["examCode"]) {
      formIsValid = false;
      errorsExamUpdate["examCode"] = "Please select examCode!";
    }
    //examName
    if (!fieldsExamUpdate["examName"]) {
      formIsValid = false;
      errorsExamUpdate["examName"] = "Please select examName!";
    }
    //description
    if (!fieldsExamUpdate["description"]) {
      formIsValid = false;
      errorsExamUpdate["description"] = "Please select description!";
    }
    //examType
    if (!fieldsExamUpdate["examType"]) {
      formIsValid = false;
      errorsExamUpdate["examType"] = "Please enter examType!";
    }
    //invigilator
    if (!fieldsExamUpdate["invigilator"]) {
      formIsValid = false;
      errorsExamUpdate["invigilator"] = "Please enter invigilator!";
    }
    //roomNo
    if (!fieldsExamUpdate["roomNo"]) {
      formIsValid = false;
      errorsExamUpdate["roomNo"] = "Please enter roomNo!";
    }
    //startDate
    if (!fieldsExamUpdate["startDate"]) {
      formIsValid = false;
      errorsExamUpdate["startDate"] = "Please enter startDate!";
    }
    //endDate
    if (!fieldsExamUpdate["endDate"]) {
      formIsValid = false;
      errorsExamUpdate["endDate"] = "Please enter endDate!";
    }
    //startTime
    if (!fieldsExamUpdate["startTime"]) {
      formIsValid = false;
      errorsExamUpdate["startTime"] = "Please enter startTime!";
    }
    //endTime
    if (!fieldsExamUpdate["endTime"]) {
      formIsValid = false;
      errorsExamUpdate["endTime"] = "Please enter endTime!";
    }
    //attendtype
    // if (!fieldsExamUpdate["attendtype"]) {
    //   formIsValid = false;
    //   errorsExamUpdate["attendtype"] = "Please enter attendtype!";
    // }

    console.log("errorsExamUpdateerrorsExamUpdateerrorsExamUpdate::::", errorsExamUpdate);

    this.setState({ errorsExamUpdate: errorsExamUpdate });
    return formIsValid;
  }

  handleUpadte = (data) => {
    this.setState({ fieldsExamUpdate: data, updateShow: true });
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
          onClick: () => this.props.dispatch(dashboardActions.deleteExam(datatemp))
        },
        {
          label: 'No'
        }
      ]
    });
  }


  render() {
    let { dashboard } = this.props;
    let { loading, getExamList, getAllCourse, getAllBatch } = dashboard;

    console.log('getAllCoursegetAllCourse1111', getAllCourse);

    return (

      <>

        {/* Aarif Chacko */}

        {/* <div >
          <LoadingOverlay
            active={loading}
            className="temp001"
            spinner
            text='Please wait...' />
        </div> */}

        <div className="w-full h-screen p-6 overflow-y-auto bg-gray-100">
          <section>

            <div className='bg-white border border-slate-300'>
              <div className='p-4 border-b border-slate-300'>
                <h1 className='text-xl font-normal'>Create VehicleInchange</h1>
              </div>
              <div className='p-8'>
                <div className='grid grid-cols-1 gap-4 lg:grid-cols-4 md:grid-cols-2'>

                  <div>
                    <label class='text-sm font-normal text-gray-600 pb-4 capitalize'>Name</label>
                    <input className={`w-full border px-4 py-1.5 rounded-xs focus:outline-none text-base text-gray-700 placeholder-gray-500 ${!this.state.errorsExam["examCode"] ? "'border-opacity-20 " : "order-opacity-100 border-red-500 bg-red-100"}`}
                      name="examCode"
                      value={this.state.fieldsExam["examCode"] ? this.state.fieldsExam["examCode"] : ''}
                      onChange={this.inputChange} placeholder='Enter Name' type="text" />
                    {this.state.errorsExam["examCode"] ?
                      <div className="text-yellow-600 invalid-feedback">
                        {this.state.errorsExam["examCode"]}
                      </div>
                      : null}
                  </div>

                  <div>
                    <label class='text-sm font-normal text-gray-600 pb-4 capitalize'>Registration Number</label>
                    <input className={`w-full border px-4 py-1.5 rounded-xs focus:outline-none text-base text-gray-700 placeholder-gray-500 ${!this.state.errorsExam["examName"] ? "'border-opacity-20 " : "order-opacity-100 border-red-500 bg-red-100"}`}
                      name="examName"
                      value={this.state.fieldsExam["examName"] ? this.state.fieldsExam["examName"] : ''}
                      onChange={this.inputChange} placeholder='Enter Registration Number' type="text" />
                    {this.state.errorsExam["examName"] ?
                      <div className="text-yellow-600 invalid-feedback">
                        {this.state.errorsExam["examName"]}
                      </div>
                      : null}
                  </div>

                  <div>
                    <label class='text-sm font-normal text-gray-600 pb-4 capitalize'>Owner Name</label>
                    <input className={`w-full border px-4 py-1.5 rounded-xs focus:outline-none text-base text-gray-700 placeholder-gray-500 ${!this.state.errorsExam["examType"] ? "'border-opacity-20 " : "order-opacity-100 border-red-500 bg-red-100"}`}
                      name="examType"
                      value={this.state.fieldsExam["examType"] ? this.state.fieldsExam["examType"] : ''}
                      onChange={this.inputChange} placeholder='Enter Owner Name' type="text" />
                    {this.state.errorsExam["examType"] ?
                      <div className="text-yellow-600 invalid-feedback">
                        {this.state.errorsExam["examType"]}
                      </div>
                      : null}
                  </div>

                  <div>
                    <label class='text-sm font-normal text-gray-600 pb-4 capitalize'>Company Name</label>
                    <input className={`w-full border px-4 py-1.5 rounded-xs focus:outline-none text-base text-gray-700 placeholder-gray-500 ${!this.state.errorsExam["description"] ? "'border-opacity-20 " : "order-opacity-100 border-red-500 bg-red-100"}`}
                      name="description"
                      value={this.state.fieldsExam["description"] ? this.state.fieldsExam["description"] : ''}
                      onChange={this.inputChange} placeholder='Enter Company Name' type="text" />
                    {this.state.errorsExam["description"] ?
                      <div className="text-yellow-600 invalid-feedback">
                        {this.state.errorsExam["description"]}
                      </div>
                      : null}
                  </div>

                  <div>
                    <label class='text-sm font-normal text-gray-600 pb-4 capitalize'>Max Seating Capacity</label>
                    <input className={`w-full border px-4 py-1.5 rounded-xs focus:outline-none text-base text-gray-700 placeholder-gray-500 ${!this.state.errorsExam["roomNo"] ? "'border-opacity-20 " : "order-opacity-100 border-red-500 bg-red-100"}`}
                      name="roomNo"
                      value={this.state.fieldsExam["roomNo"] ? this.state.fieldsExam["roomNo"] : ''}
                      onChange={this.inputChange} placeholder='Enter Max Seating Capacity' type="text" />
                    {this.state.errorsExam["roomNo"] ?
                      <div className="text-yellow-600 invalid-feedback">
                        {this.state.errorsExam["roomNo"]}
                      </div>
                      : null}
                  </div>

                  <div>
                    <label class='text-sm font-normal text-gray-600 pb-4 capitalize'>Make</label>
                    <input className={`w-full border px-4 py-1.5 rounded-xs focus:outline-none text-base text-gray-700 placeholder-gray-500 ${!this.state.errorsExam["invigilator"] ? "'border-opacity-20 " : "order-opacity-100 border-red-500 bg-red-100"}`}
                      name="invigilator"
                      value={this.state.fieldsExam["invigilator"] ? this.state.fieldsExam["invigilator"] : ''}
                      onChange={this.inputChange} placeholder='Enter Make' type="text" />
                    {this.state.errorsExam["invigilator"] ?
                      <div className="text-yellow-600 invalid-feedback">
                        {this.state.errorsExam["invigilator"]}
                      </div>
                      : null}
                  </div>
                  <div>
                    <label class='text-sm font-normal text-gray-600 pb-4 capitalize'>Owner Phone</label>
                    <input className={`w-full border px-4 py-1.5 rounded-xs focus:outline-none text-base text-gray-700 placeholder-gray-500 ${!this.state.errorsExam["invigilator"] ? "'border-opacity-20 " : "order-opacity-100 border-red-500 bg-red-100"}`}
                      name="invigilator"
                      value={this.state.fieldsExam["invigilator"] ? this.state.fieldsExam["invigilator"] : ''}
                      onChange={this.inputChange} placeholder='Enter Owner Phone' type="text" />
                    {this.state.errorsExam["invigilator"] ?
                      <div className="text-yellow-600 invalid-feedback">
                        {this.state.errorsExam["invigilator"]}
                      </div>
                      : null}
                  </div>

                  <div>
                    <label class='text-sm font-normal text-gray-600 pb-4 capitalize'>Owner Email </label>
                    <input className={`w-full border px-4 py-1.5 rounded-xs focus:outline-none text-base text-gray-700 placeholder-gray-500 ${!this.state.errorsExam["invigilator"] ? "'border-opacity-20 " : "order-opacity-100 border-red-500 bg-red-100"}`}
                      name="invigilator"
                      value={this.state.fieldsExam["invigilator"] ? this.state.fieldsExam["invigilator"] : ''}
                      onChange={this.inputChange} placeholder='Enter Owner Email' type="text" />
                    {this.state.errorsExam["invigilator"] ?
                      <div className="text-yellow-600 invalid-feedback">
                        {this.state.errorsExam["invigilator"]}
                      </div>
                      : null}
                  </div>
                  <div>
                    <label class='text-sm font-normal text-gray-600 pb-4 capitalize'>Max Allowed</label>
                    <input className={`w-full border px-4 py-1.5 rounded-xs focus:outline-none text-base text-gray-700 placeholder-gray-500 ${!this.state.errorsExam["invigilator"] ? "'border-opacity-20 " : "order-opacity-100 border-red-500 bg-red-100"}`}
                      name="invigilator"
                      value={this.state.fieldsExam["invigilator"] ? this.state.fieldsExam["invigilator"] : ''}
                      onChange={this.inputChange} placeholder='Enter Max Allowed' type="text" />
                    {this.state.errorsExam["invigilator"] ?
                      <div className="text-yellow-600 invalid-feedback">
                        {this.state.errorsExam["invigilator"]}
                      </div>
                      : null}
                  </div>

                  <div>
                    <label class='text-sm font-normal text-gray-600 pb-4 capitalize'>Model</label>
                    <input className={`w-full border px-4 py-1.5 rounded-xs focus:outline-none text-base text-gray-700 placeholder-gray-500 ${!this.state.errorsExam["invigilator"] ? "'border-opacity-20 " : "order-opacity-100 border-red-500 bg-red-100"}`}
                      name="invigilator"
                      value={this.state.fieldsExam["invigilator"] ? this.state.fieldsExam["invigilator"] : ''}
                      onChange={this.inputChange} placeholder='Enter Model' type="text" />
                    {this.state.errorsExam["invigilator"] ?
                      <div className="text-yellow-600 invalid-feedback">
                        {this.state.errorsExam["invigilator"]}
                      </div>
                      : null}
                  </div>

                  <div>
                    <label class=' text-sm font-normal text-gray-600 pb-4'>Vehicle Fuel Type</label>
                    <div className='relative flex items-center w-full py-2 text-gray-800 bg-white border rounded-sm appearance-none cursor-pointer md:w-auto'>
                      <select className="w-full px-4 text-sm font-normal text-gray-700 bg-white appearance-none focus:outline-none" onChange={this.inputChange}
                        name="courseId">
                        {/* {
                          getAllCourse && getAllCourse.length > 0 ?
                            getAllCourse.map((element, index) => ( */}
                        <React.Fragment>
                          {/* <option value={element && element.id ? element.id : null}>{element && element.cName ? element.cName : null}</option> */}
                          <option>CNG</option>
                          <option>Petrol</option>
                          <option>Diesel</option>
                        </React.Fragment>
                        {/* )) : null
                        } */}
                      </select>
                      <div className="absolute top-0 bottom-0 right-0 flex items-center px-2 text-gray-700 pointer-events-none">
                        <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                          <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                        </svg>
                      </div>
                    </div>
                  </div>

                  <div>
                    <label class='text-sm font-normal text-gray-600 pb-4 capitalize'>Max Fuel Capacity</label>
                    <input className={`w-full border px-4 py-1.5 rounded-xs focus:outline-none text-base text-gray-700 placeholder-gray-500 ${!this.state.errorsExam["invigilator"] ? "'border-opacity-20 " : "order-opacity-100 border-red-500 bg-red-100"}`}
                      name="invigilator"
                      value={this.state.fieldsExam["invigilator"] ? this.state.fieldsExam["invigilator"] : ''}
                      onChange={this.inputChange} placeholder='Enter Max Fuel Capacity' type="text" />
                    {this.state.errorsExam["invigilator"] ?
                      <div className="text-yellow-600 invalid-feedback">
                        {this.state.errorsExam["invigilator"]}
                      </div>
                      : null}
                  </div>

                </div>
              </div>
              <div className='flex justify-end w-full px-5 pb-4'>
                <button className='px-4 py-2 text-sm text-white rounded-sm bg-sky-500' type="button" onClick={this.examSubmit} data-config-id="01_primary-action">Save</button>
              </div>
            </div>


            <div className="max-w-full mt-4 overflow-auto">
              <div className="inline-block min-w-full">
                <div className="overflow-x-hidden">
                  <table className="min-w-full text-left bg-white border border-collapse border-slate-300">
                    <thead className="">
                      <tr className="text-left border border-slate-300">
                        <th scope="col" className="px-4 py-3 text-sm font-medium text-left text-gray-600 capitalize whitespace-nowrap">Sl.N.</th>
                        <th scope="col" className="px-4 py-3 text-sm font-medium text-left text-gray-600 capitalize whitespace-nowrap">Title</th>
                        <th scope="col" className="px-4 py-3 text-sm font-medium text-left text-gray-600 capitalize whitespace-nowrap">VehicleInchange Author</th>
                        <th scope="col" className="px-4 py-3 text-sm font-medium text-left text-gray-600 capitalize whitespace-nowrap">VehicleInchange Language</th>
                        <th scope="col" className="px-4 py-3 text-sm font-medium text-left text-gray-600 capitalize whitespace-nowrap">VehicleInchange Topic</th>
                        <th scope="col" className="px-4 py-3 text-sm font-medium text-left text-gray-600 capitalize whitespace-nowrap">VehicleInchange Publisher</th>
                        <th scope="col" className="px-4 py-3 text-sm font-medium text-left text-gray-600 capitalize whitespace-nowrap">ISBN Number</th>
                        <th scope="col" className="px-4 py-3 text-sm font-medium text-left text-gray-600 capitalize whitespace-nowrap">No Of Pages</th>
                        <th scope="col" className="px-4 py-3 text-sm font-medium text-left text-gray-600 capitalize whitespace-nowrap">Price Of VehicleInchange</th>
                        <th scope="col" className="px-4 py-3 text-sm font-medium text-left text-gray-600 capitalize whitespace-nowrap">Summary</th>
                        <th scope="col" className="px-4 py-3 text-sm font-medium text-left text-gray-600 capitalize whitespace-nowrap">Description</th>
                        <th scope="col" className="px-4 py-3 text-sm font-medium text-left text-gray-600 capitalize whitespace-nowrap">Action</th>
                      </tr>
                    </thead>
                    <tbody className='divide-y' >

                      {
                        getExamList && getExamList.length > 0 ?
                          getExamList.map((element, index) => (
                            <>
                              <tr className="border border-slate-300">
                                <td className="px-4 py-3 font-serif text-sm text-left text-black capitalize bg-white whitespace-nowrap">{index}</td>
                                <td className="px-4 py-3 font-serif text-sm text-left text-black capitalize bg-white whitespace-nowrap">{element && element.examCode ? element.examCode : "-"}</td>
                                <td className="px-4 py-3 font-serif text-sm text-left text-black capitalize bg-white whitespace-nowrap">{element && element.examType ? element.examType : "-"}</td>
                                <td className="px-4 py-3 font-serif text-sm text-left text-black capitalize bg-white whitespace-nowrap">{element && element.examName ? element.examName : "-"}</td>
                                <td className="px-4 py-3 font-serif text-sm text-left text-black capitalize bg-white whitespace-nowrap">{element && element.description ? element.description : "-"}</td>
                                <td className="px-4 py-3 font-serif text-sm text-left text-black capitalize bg-white whitespace-nowrap">{element && element.invigilator ? element.invigilator : "-"}</td>
                                <td className="px-4 py-3 font-serif text-sm text-left text-black capitalize bg-white whitespace-nowrap">{element && element.roomNo ? element.roomNo : "-"}</td>
                                <td className="px-4 py-3 font-serif text-sm text-left text-black capitalize bg-white whitespace-nowrap">{element && element.startDate ? element.startDate : "-"}</td>
                                <td className="px-4 py-3 font-serif text-sm text-left text-black capitalize bg-white whitespace-nowrap">{element && element.endDate ? element.endDate : "-"}</td>
                                <td className="px-4 py-3 font-serif text-sm text-left text-black capitalize bg-white whitespace-nowrap">{element && element.startTime ? element.startTime : "-"}</td>
                                <td className="px-4 py-3 font-serif text-sm text-left text-black capitalize bg-white whitespace-nowrap">{element && element.endTime ? element.endTime : "-"}</td>
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
                          )) : <td colspan="12" className="col-span-12 whitespace-nowrap border border-gray-300 text-center px-[11.5px] py-3 text-xs font-semibold text-black bg-white uppercase bg-whj">Data Not Found</td>
                      }

                    </tbody>
                  </table>
                </div>
              </div>
            </div>

          </section>
        </div>
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
export default connect(mapStateToProps)(VehicleInchange);
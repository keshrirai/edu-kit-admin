import React, { Component } from 'react';
import { dashboardActions } from '../../_actions';
import { connect } from 'react-redux';
import 'react-confirm-alert/src/react-confirm-alert.css';
import { MdOutlineClose, MdOutlineEdit } from 'react-icons/md';
import { confirmAlert } from 'react-confirm-alert';

class ReportCard extends Component {

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
    let { getExamList, getAllCourse } = dashboard;

    console.log('getAllCoursegetAllCourse1111', getAllCourse);

    return (

      <>

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
                <h1 className='text-xl font-normal'>Report Card</h1>
              </div>
              <div className='p-8'>
                <div className='grid grid-cols-1 gap-4 lg:grid-cols-4 md:grid-cols-2'>

                  <div>
                    <label class=' text-sm font-normal text-gray-600 pb-4'>Batch</label>
                    <div className='relative flex items-center w-full py-2 text-gray-800 bg-white border rounded-sm appearance-none cursor-pointer md:w-auto'>
                      <select className="w-full px-4 text-sm font-normal text-gray-700 bg-white appearance-none focus:outline-none" onChange={this.inputChange}
                        name="courseId">
                        {
                          getAllCourse && getAllCourse.length > 0 ?
                            getAllCourse.map((element, index) => (
                              <React.Fragment>
                                <option value={element && element.id ? element.id : null}>{element && element.cName ? element.cName : null}</option>
                              </React.Fragment>
                            )) : null
                        }
                      </select>
                      <div className="absolute top-0 bottom-0 right-0 flex items-center px-2 text-gray-700 pointer-events-none">
                        <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                          <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                        </svg>
                      </div>
                    </div>
                  </div>

                  <div>
                    <label class=' text-sm font-normal text-gray-600 pb-4'>Class</label>
                    <div className='relative flex items-center w-full py-2 text-gray-800 bg-white border rounded-sm appearance-none cursor-pointer md:w-auto'>
                      <select className="w-full px-4 text-sm font-normal text-gray-700 bg-white appearance-none focus:outline-none" onChange={this.inputChange}
                        name="courseId">
                        {
                          getAllCourse && getAllCourse.length > 0 ?
                            getAllCourse.map((element, index) => (
                              <React.Fragment>
                                <option value={element && element.id ? element.id : null}>{element && element.cName ? element.cName : null}</option>
                              </React.Fragment>
                            )) : null
                        }
                      </select>
                      <div className="absolute top-0 bottom-0 right-0 flex items-center px-2 text-gray-700 pointer-events-none">
                        <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                          <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                        </svg>
                      </div>
                    </div>
                  </div>

                  <div>
                    <label class=' text-sm font-normal text-gray-600 pb-4'>Section</label>
                    <div className='relative flex items-center w-full py-2 text-gray-800 bg-white border rounded-sm appearance-none cursor-pointer md:w-auto'>
                      <select className="w-full px-4 text-sm font-normal text-gray-700 bg-white appearance-none focus:outline-none" onChange={this.inputChange}
                        name="courseId">
                        {
                          getAllCourse && getAllCourse.length > 0 ?
                            getAllCourse.map((element, index) => (
                              <React.Fragment>
                                <option value={element && element.id ? element.id : null}>{element && element.cName ? element.cName : null}</option>
                              </React.Fragment>
                            )) : null
                        }
                      </select>
                      <div className="absolute top-0 bottom-0 right-0 flex items-center px-2 text-gray-700 pointer-events-none">
                        <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                          <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                        </svg>
                      </div>
                    </div>
                  </div>

                  <div>
                    <label class=' text-sm font-normal text-gray-600 pb-4'>Student Name</label>
                    <div className='relative flex items-center w-full py-2 text-gray-800 bg-white border rounded-sm appearance-none cursor-pointer md:w-auto'>
                      <select className="w-full px-4 text-sm font-normal text-gray-700 bg-white appearance-none focus:outline-none" onChange={this.inputChange}
                        name="courseId">
                        {
                          getAllCourse && getAllCourse.length > 0 ?
                            getAllCourse.map((element, index) => (
                              <React.Fragment>
                                <option value={element && element.id ? element.id : null}>{element && element.cName ? element.cName : null}</option>
                              </React.Fragment>
                            )) : null
                        }
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
              <div className='flex justify-end w-full px-5 pb-4'>
                <button className='px-4 py-2 text-sm text-white rounded-sm bg-sky-500 hover:bg-sky-600' type="button" onClick={this.examSubmit} data-config-id="01_primary-action">Generate Report</button>
              </div>
            </div>


            <div className="flex justify-center w-full mt-4">
              <div className="w-full bg-gray-400 lg:w-2/3">
                <div className='px-4 py-3'>
                  <div className='flex items-center justify-between'>
                    <div className='flex space-x-1'>
                      <div>
                        <img src='school/logo.png' className='w-12 h-12 text-white' alt='logo' />
                      </div>
                      <div>
                        <h1 className='text-2xl font-bold text-white capitalize'>Demo school</h1>
                        <p className='text-xs font-semibold text-white uppercase'>Creative tagline here</p>
                      </div>
                    </div>
                    <div>
                      <div>
                        <h1 className='text-lg font-medium tracking-wider text-white uppercase'>demo international school</h1>
                      </div>
                      <div className='text-xs font-semibold text-white'>
                        <p>123, Main Street, Your City, USA 789456</p>
                        <p>Ph:+123 4567 8900</p>
                        <p>Email:name@website.com</p>
                        <p>https://www.demowebsite.com</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-center mt-4">
                    <p>Report Card Session 2022-23</p>
                  </div>


                  <div class="overflow-x-auto relative">
                    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                      <tbody>
                        <tr class="border">
                          <th class="py-4 px-4 font-medium text-gray-900 whitespace-nowrap border w-28">Name</th>
                          <td class="py-4 px-4 text-gray-900 border">Nitin Ramaswamy</td>
                          <th class="py-4 px-4 font-medium text-gray-900 whitespace-nowrap border w-28">Adm No</th>
                          <td class="py-4 px-4 text-gray-900 border">SM108</td>
                          <th class="py-4 px-4 font-medium text-gray-900 whitespace-nowrap border w-28">Roll Number</th>
                          <td class="py-4 px-4 text-gray-900 border">NA1</td>
                        </tr>
                        <tr class="border">
                          <th class="py-4 px-4 font-medium text-gray-900 whitespace-nowrap border w-28">Father's Name</th>
                          <td class="py-4 px-4 text-gray-900 border">Mukund Ramaswamy	</td>
                          <th class="py-4 px-4 font-medium text-gray-900 whitespace-nowrap border w-28">Date of Admission	</th>
                          <td class="py-4 px-4 text-gray-900 border">18-04-2021</td>
                          <th class="py-4 px-4 font-medium text-gray-900 whitespace-nowrap border w-28">Date of Birth</th>
                          <td class="py-4 px-4 text-gray-900 border">05-08-2015</td>
                        </tr>
                        <tr class="border">
                          <th class="py-4 px-4 font-medium text-gray-900 whitespace-nowrap border w-28">Mother's Name</th>
                          <td class="py-4 px-4 text-gray-900 border">Indira Ramaswamy	</td>
                          <th class="py-4 px-4 font-medium text-gray-900 whitespace-nowrap border w-28">Batch</th>
                          <td class="py-4 px-4 text-gray-900 border">Nursery Section A</td>
                          <th class="py-4 px-4 font-medium text-gray-900 whitespace-nowrap border w-28">Gender</th>
                          <td class="py-4 px-4 text-gray-900 border">Male</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <div className="max-w-full mt-4 overflow-auto">
                    <div className="inline-block min-w-full">
                      <div className="overflow-x-hidden">
                        <table className="min-w-full text-left">
                          <thead className="">
                            <tr className="text-left border border-slate-300">
                              <th scope="col" className="px-4 py-2 text-sm font-medium text-left text-gray-600 capitalize border w-44 whitespace-nowrap">Sl.N.</th>
                              <th scope="col" className="px-4 py-2 text-sm font-medium text-center text-gray-600 capitalize border whitespace-nowrap">Subject</th>
                            </tr>
                          </thead>
                          <tbody className='' >
                            <tr className="border border-slate-300">
                              <th class="px-6 py-2 font-medium text-gray-900 whitespace-nowrap border">1</th>
                              <td className="px-4 py-2 font-serif text-sm text-left text-black capitalize whitespace-nowrap">LAN</td>
                            </tr>
                            <tr className="border border-slate-300">
                              <th class="px-6 py-2 font-medium text-gray-900 whitespace-nowrap border">2</th>
                              <td className="px-4 py-2 font-serif text-sm text-left text-black capitalize whitespace-nowrap">ENV</td>
                            </tr>
                            <tr className="border border-slate-300">
                              <th class="px-6 py-2 font-medium text-gray-900 whitespace-nowrap border">3</th>
                              <td className="px-4 py-2 font-serif text-sm text-left text-black capitalize whitespace-nowrap">RHY</td>
                            </tr>
                            <tr className="border border-slate-300">
                              <th class="px-6 py-2 font-medium text-gray-900 whitespace-nowrap border">4</th>
                              <td className="px-4 py-2 font-serif text-sm text-left text-black capitalize whitespace-nowrap">NUM</td>
                            </tr>
                            <tr className="">
                              <th class="px-6 py-2 font-medium text-gray-900 whitespace-nowrap border-r border-l"></th>
                              <td className="px-4 py-2 font-serif text-sm text-left text-black capitalize border-b border-r whitespace-nowrap">Total</td>
                            </tr>
                            <tr className="">
                              <th class="px-6 py-2 font-medium text-gray-900 whitespace-nowrap border-r border-l"></th>
                              <td className="px-4 py-2 font-serif text-sm text-left text-black capitalize border-b border-r whitespace-nowrap">Grand Total</td>
                            </tr>
                            <tr className="">
                              <th class="px-6 py-2 font-medium text-gray-900 whitespace-nowrap border-r border-l border-b"></th>
                              <td className="px-4 py-2 font-serif text-sm text-left text-black capitalize border-b border-r whitespace-nowrap">Percentage</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>

                  <div className="max-w-full mt-4 overflow-auto lg:w-2/3">
                    <div className="inline-block min-w-full">
                      <div className="overflow-x-hidden">
                        <table className="min-w-full text-left">
                          <tbody>
                            <tr class="border">
                              <th class="py-2 px-6 font-medium text-gray-900 whitespace-nowrap border">Total Working Days</th>
                              <td class="py-2 px-6 text-gray-900 border w-32"></td>
                            </tr>
                            <tr class="border">
                              <th class="py-2 px-6 font-medium text-gray-900 whitespace-nowrap border">Total Attendance</th>
                              <td class="py-2 px-6 text-gray-900 border w-32"></td>
                            </tr>
                            <tr class="border">
                              <th class="py-2 px-6 font-medium text-gray-900 whitespace-nowrap border">Attendance Percentage</th>
                              <td class="py-2 px-6 text-gray-900 border w-32"></td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex justify-between px-6 py-20">
                  <h1>Class Teacher</h1>
                  <h1>Exam In-charge</h1>
                  <h1>Principal</h1>
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
export default connect(mapStateToProps)(ReportCard);
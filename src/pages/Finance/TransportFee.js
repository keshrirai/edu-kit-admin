import React, { Component } from 'react';
import { dashboardActions } from '../../_actions';
import { connect } from 'react-redux';
import 'react-confirm-alert/src/react-confirm-alert.css';
// import { MdOutlineClose, MdOutlineEdit } from 'react-icons/md';
import { confirmAlert } from 'react-confirm-alert';

class TransportFee extends Component {

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
                <h1 className='text-xl font-normal'>Add New Transport Fee</h1>
              </div>
              <div className='p-8'>
                <div className='grid grid-cols-1 gap-4 lg:grid-cols-4 md:grid-cols-2'>
                  <div>
                    <label class='text-sm font-normal text-gray-600 pb-4 capitalize'>Name</label>
                    <input className="w-full border px-4 py-1.5 rounded-xs focus:outline-none text-base text-gray-700 placeholder-gray-500" placeholder='Enter Name' type="text" />
                  </div>
                  <div>
                    <label class='text-sm font-normal text-gray-600 pb-4 capitalize'>Name</label>
                    <input className="w-full border px-4 py-1.5 rounded-xs focus:outline-none text-base text-gray-700 placeholder-gray-500" placeholder='Enter Name' type="text" />
                  </div>
                </div>
              </div>
            </div>

            <div className='bg-white border border-slate-300'>
              <div className='p-8 space-y-3'>
                <div className='grid grid-cols-1 gap-4 lg:grid-cols-4 md:grid-cols-2'>
                  <div>
                    <h1 className="pt-8 text-gray-700">0-6 Km (Per Installment)</h1>
                  </div>
                  <div>
                    <label class='text-sm font-normal text-gray-600 pb-4 capitalize'>Name</label>
                    <input className="w-full border px-4 py-1.5 rounded-xs focus:outline-none text-base text-gray-700 placeholder-gray-500" placeholder='Enter Name' type="text" />
                  </div>
                </div>
                <div className='grid grid-cols-1 gap-4 lg:grid-cols-4 md:grid-cols-2'>
                  <div>
                    <h1 className="pt-8 text-gray-700">0-6 Km (Per Installment)</h1>
                  </div>
                  <div>
                    <label class='text-sm font-normal text-gray-600 pb-4 capitalize'>Name</label>
                    <input className="w-full border px-4 py-1.5 rounded-xs focus:outline-none text-base text-gray-700 placeholder-gray-500" placeholder='Enter Name' type="text" />
                  </div>
                </div>
                <div className='grid grid-cols-1 gap-4 lg:grid-cols-4 md:grid-cols-2'>
                  <div>
                    <h1 className="pt-8 text-gray-700">0-6 Km (Per Installment)</h1>
                  </div>
                  <div>
                    <label class='text-sm font-normal text-gray-600 pb-4 capitalize'>Name</label>
                    <input className="w-full border px-4 py-1.5 rounded-xs focus:outline-none text-base text-gray-700 placeholder-gray-500" placeholder='Enter Name' type="text" />
                  </div>
                </div>
                <div className='grid grid-cols-1 gap-4 lg:grid-cols-4 md:grid-cols-2'>
                  <div>
                    <h1 className="pt-8 text-gray-700">0-6 Km (Per Installment)</h1>
                  </div>
                  <div>
                    <label class='text-sm font-normal text-gray-600 pb-4 capitalize'>Name</label>
                    <input className="w-full border px-4 py-1.5 rounded-xs focus:outline-none text-base text-gray-700 placeholder-gray-500" placeholder='Enter Name' type="text" />
                  </div>
                </div>
                <div className='grid grid-cols-1 gap-4 lg:grid-cols-4 md:grid-cols-2'>
                  <div>
                    <h1 className="pt-8 text-gray-700">0-6 Km (Per Installment)</h1>
                  </div>
                  <div>
                    <label class='text-sm font-normal text-gray-600 pb-4 capitalize'>Name</label>
                    <input className="w-full border px-4 py-1.5 rounded-xs focus:outline-none text-base text-gray-700 placeholder-gray-500" placeholder='Enter Name' type="text" />
                  </div>
                </div>
              </div>
              <div className='flex justify-end w-full px-5 pb-4'>
                <button className='px-6 py-2 text-sm text-white rounded-sm bg-sky-500 hover:bg-sky-600' type="button" onClick={this.examSubmit} data-config-id="01_primary-action">Save</button>
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
export default connect(mapStateToProps)(TransportFee);
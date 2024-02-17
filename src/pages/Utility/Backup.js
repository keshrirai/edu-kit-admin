import React, { Component } from 'react';
import { dashboardActions } from '../../_actions';
import { connect } from 'react-redux';
// import { MdOutlineClose, MdOutlineEdit } from 'react-icons/md';
import 'react-confirm-alert/src/react-confirm-alert.css';
import { confirmAlert } from 'react-confirm-alert';

class Backup extends Component {

  constructor(props) {
    super(props);
    this.batchSubmit = this.batchSubmit.bind(this);
    this.inputChange = this.inputChange.bind(this);
    this.state = {
      offset: 0,
      size: 10,
      keyWord: "",
      pageNo: 1,
      updateShow: false,
      fieldsBatch: {},
      errorBatch: {},
      fieldsBatchUpdate: {},
      errorBatchUpdate: {},
    }
  }

  componentDidMount() {
    let data = {
      "keyWord": "",
      "pageNo": 1,
      "size": 10
    }
    this.props.dispatch(dashboardActions.getAllStudent(data));
    this.props.dispatch(dashboardActions.getAllCourse(data));
    this.props.dispatch(dashboardActions.getAllBatch(data));
  }

  static getDerivedStateFromProps(nextProps, prevState) {

    if (nextProps.dashboard.updateShow) {
      return {
        ...nextProps,
        fieldsBatchUpdate: {},
        errorBatchUpdate: {},
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
    let fieldsBatch = this.state.fieldsBatch;
    let errorsBatch = this.state.errorsBatch;
    fieldsBatch[name] = value;
    errorsBatch[name] = "";
    console.log(name, value);
    this.setState({ fieldsBatch, errorsBatch });
  }

  // inputChangeUpdate = (e) => {
  //   e.preventDefault();
  //   let { name, value } = e.target;
  //   let fieldsBatchUpdate = this.state.fieldsBatchUpdate;
  //   let errorBatchUpdate = this.state.errorBatchUpdate;
  //   fieldsBatchUpdate[name] = value;
  //   errorBatchUpdate[name] = "";
  //   console.log(name, value);
  //   this.setState({ fieldsBatchUpdate, errorBatchUpdate });
  // }

  batchSubmit = (e) => {
    e.preventDefault();
    if (this.handleValidationBatch()) {
      let { studentId, courseId, batchId, sessionYear, amount } = this.state.fieldsBatch;
      this.props.dispatch(dashboardActions.acceptFee({
        studentId: studentId,
        courseId: courseId,
        batchId: batchId,
        sessionYear: sessionYear,
        amount: amount,
      }, this.props));
    }
  }

  // batchUpdateSubmit = (e) => {
  //   e.preventDefault();
  //   if (this.handleValidationUpdateBatch()) {
  //     let { studentId, courseId, batchId, sessionYear, amount, id } = this.state.fieldsBatchUpdate;
  //     this.props.dispatch(dashboardActions.updateBatch({
  //       id: id,
  //       studentId: studentId,
  //       courseId: courseId,
  //       batchId: batchId,
  //       sessionYear: sessionYear,
  //       amount: amount,
  //     }, this.props));
  //   }
  // }
  resetForm = (e) => {
    e.preventDefault();
    this.setState({
      fieldsBatch: {},
      errorsBatch: {},
    })
    this.hideErrorcomment();
  }

  handleValidationBatch = () => {
    let fieldsBatch = this.state.fieldsBatch;
    let errorsBatch = {};
    let formIsValid = true;

    //subject
    if (!fieldsBatch["courseId"]) {
      formIsValid = false;
      errorsBatch["courseId"] = "Please enter Batch Name!";
    }
    //batchId
    if (!fieldsBatch["batchId"]) {
      formIsValid = false;
      errorsBatch["batchId"] = "Please select batchId!";
    }
    //sessionYear
    if (!fieldsBatch["sessionYear"]) {
      formIsValid = false;
      errorsBatch["sessionYear"] = "Please select sessionYear!";
    }
    //amount
    if (!fieldsBatch["amount"]) {
      formIsValid = false;
      errorsBatch["amount"] = "Please enter amount!";
    }
    this.setState({ errorsBatch: errorsBatch });
    return formIsValid;
  }
  // handleValidationUpdateBatch = () => {
  //   let fieldsBatchUpdate = this.state.fieldsBatchUpdate;
  //   let errorBatchUpdate = {};
  //   let formIsValid = true;

  //   //subject
  //   if (!fieldsBatchUpdate["courseId"]) {
  //     formIsValid = false;
  //     errorBatchUpdate["courseId"] = "Please enter Batch Name!";
  //   }
  //   //batchId
  //   if (!fieldsBatchUpdate["batchId"]) {
  //     formIsValid = false;
  //     errorBatchUpdate["batchId"] = "Please select batchId!";
  //   }
  //   //sessionYear
  //   if (!fieldsBatchUpdate["sessionYear"]) {
  //     formIsValid = false;
  //     errorBatchUpdate["sessionYear"] = "Please select sessionYear!";
  //   }
  //   //amount
  //   if (!fieldsBatchUpdate["amount"]) {
  //     formIsValid = false;
  //     errorBatchUpdate["amount"] = "Please enter amount!";
  //   }
  //   console.log('errorBatchUpdateerrorBatchUpdateerrorBatchUpdate', errorBatchUpdate);
  //   this.setState({ errorBatchUpdate: errorBatchUpdate });
  //   return formIsValid;
  // }

  handleUpadte = (data) => {
    this.setState({ fieldsBatchUpdate: data, updateShow: true });
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
          onClick: () => this.props.dispatch(dashboardActions.deleteBatch(datatemp))
        },
        {
          label: 'No'
        }
      ]
    });
  }


  render() {

    let { dashboard } = this.props;
    let { getBatchList, getAllCourse, getAllStudent, getAllBatch } = dashboard;

    console.log('getAllStudent3333333333', getAllStudent);
    console.log('getAllCoursegetAllCoursegetAllCourse2222222222', getAllCourse);
    console.log('getAllBatchgetAllBatchgetAllBatchgetAllBatchgetAllBatch1111111', getAllBatch);
    console.log("RENDER_____________this.state.updateShow111111:::", this.state.updateShow);
    console.log('this.state.fieldsBatchUpdatethis.state.fieldsBatchUpdate', this.state.fieldsBatchUpdate);

    return (

      <>

        <div className="w-full h-screen p-6 overflow-y-auto bg-gray-100">
          <section>
            <div className='bg-white border border-slate-300'>
              <div className='p-4 border-b border-slate-300'>
                <h1 className='text-xl font-normal'>Backup <span className="text-sm text-gray-500">No result found</span></h1>
              </div>
            </div>

            <h1 className='mt-6 text-xl'>Generate Backup</h1>

            <div class="py-2 bg-[#d1ecf1] rounded-md mt-4">
              <div className='border border-[#d1ecf1] px-4 py-2 rounded-lg'>
                <span className="text-[#0c5460]"> You can dump your database in gzip sql format with this backup utility. You can also choose to delete previous back by turning on the below option.</span>
              </div>
            </div>

            <div className="mt-6">
              <label for="Toggle1" class="inline-flex items-center space-x-4 cursor-pointer dark:text-gray-100">
                <span class="relative">
                  <input id="Toggle1" type="checkbox" class="hidden peer" />
                  <div class="w-10 h-6 rounded-full shadow-inner bg-gray-300 peer-checked:dark:bg-gray-300"></div>
                  <div class="absolute inset-y-0 left-0 w-4 h-4 m-1 rounded-full shadow peer-checked:right-0 peer-checked:left-auto bg-green-600"></div>
                </span>
                <span>Delete previous Backup?</span>
              </label>
            </div>

            <div className="mt-6">
              <button type="button" class="px-6 py-1 font-normal text-sm rounded bg-blue-400 text-white">Generate Backup</button>
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
export default connect(mapStateToProps)(Backup);
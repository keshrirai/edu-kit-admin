import React, { Component } from 'react';
import { dashboardActions } from '../../_actions';
import { connect } from 'react-redux';
import 'react-confirm-alert/src/react-confirm-alert.css';
import { HiOutlineClock } from "react-icons/hi";
import { confirmAlert } from 'react-confirm-alert';

class Feed extends Component {

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
                <h1 className='text-xl font-normal'>Add New Feed</h1>
              </div>
            </div>


            <div>
              <div class="p-4 gap-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 select-none">
                <div class="w-full cursor-pointer border border-gray-300 bg-white rounded-md shadow-xl shadow-gray-200  hover:shadow-2xl hover:bg-gray-50">
                  <div class="p-4 space-y-4">
                    <span class="text-blue-600 font-normal text-xl ">New Term Announcement</span>
                    <div className='flex pb-4 border-b border-gray-200'>
                      <span class="text-gray-400 font-normal text-base pr-4"># Circular</span>
                      <span class="text-gray-400 font-normal text-base flex pl-3"><HiOutlineClock className='mt-1' /> New</span>
                    </div>
                    <p class="font-normal text-gray-700 text-justify pb-4 border-b border-gray-200">This is to inform that all the classes will be starting from Sep 1, 2019. The timing and transport schedule will be communicated later.</p>
                    <div class="flex justify-between mt-10 align-bottom">
                      <div className='flex flex-wrap space-x-4'>
                        <img class="w-10 h-10 rounded-full" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAPdvF3u9YGCmWQZDGug3Jy2Eqrb4XuoOQbjozL6ObMiSl_2AvFQGSdpuqNPgADM37GJQ&usqp=CAU" />
                        <div class="flex flex-col space-y-0">
                          <p class="text-xl text-gray-600">Akash Pathak</p>
                          <p class="font-light text-sm">20 de Dezembro de 2021</p>
                        </div>
                      </div>
                      <div>
                        <button class="bg-blue-400 hover:bg-blue-600 text-white text-center py-2 px-4 rounded">Read More</button>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="w-full cursor-pointer border border-gray-300 bg-white rounded-md shadow-xl shadow-gray-200  hover:shadow-2xl hover:bg-gray-50">
                  <div class="p-4 space-y-4">
                    <span class="text-blue-600 font-normal text-xl ">New Term Announcement</span>
                    <div className='flex pb-4 border-b border-gray-200'>
                      <span class="text-gray-400 font-normal text-base pr-4"># Circular</span>
                      <span class="text-gray-400 font-normal text-base flex pl-3"><HiOutlineClock className='mt-1' /> New</span>
                    </div>
                    <p class="font-normal text-gray-700 text-justify pb-4 border-b border-gray-200">This is to inform that all the classes will be starting from Sep 1, 2019. The timing and transport schedule will be communicated later.</p>
                    <div class="flex justify-between mt-10 align-bottom">
                      <div className='flex flex-wrap space-x-4'>
                        <img class="w-10 h-10 rounded-full" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAPdvF3u9YGCmWQZDGug3Jy2Eqrb4XuoOQbjozL6ObMiSl_2AvFQGSdpuqNPgADM37GJQ&usqp=CAU" />
                        <div class="flex flex-col space-y-0">
                          <p class="text-xl text-gray-600">Akash Pathak</p>
                          <p class="font-light text-sm">20 de Dezembro de 2021</p>
                        </div>
                      </div>
                      <div>
                        <button class="bg-blue-400 hover:bg-blue-600 text-white text-center py-2 px-4 rounded">Read More</button>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="w-full cursor-pointer border border-gray-300 bg-white rounded-md shadow-xl shadow-gray-200  hover:shadow-2xl hover:bg-gray-50">
                  <div class="p-4 space-y-4">
                    <span class="text-blue-600 font-normal text-xl ">New Term Announcement</span>
                    <div className='flex pb-4 border-b border-gray-200'>
                      <span class="text-gray-400 font-normal text-base pr-4"># Circular</span>
                      <span class="text-gray-400 font-normal text-base flex pl-3"><HiOutlineClock className='mt-1' /> New</span>
                    </div>
                    <p class="font-normal text-gray-700 text-justify pb-4 border-b border-gray-200">This is to inform that all the classes will be starting from Sep 1, 2019. The timing and transport schedule will be communicated later.</p>
                    <div class="flex justify-between mt-10 align-bottom">
                      <div className='flex flex-wrap space-x-4'>
                        <img class="w-10 h-10 rounded-full" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAPdvF3u9YGCmWQZDGug3Jy2Eqrb4XuoOQbjozL6ObMiSl_2AvFQGSdpuqNPgADM37GJQ&usqp=CAU" />
                        <div class="flex flex-col space-y-0">
                          <p class="text-xl text-gray-600">Akash Pathak</p>
                          <p class="font-light text-sm">20 de Dezembro de 2021</p>
                        </div>
                      </div>
                      <div>
                        <button class="bg-blue-400 hover:bg-blue-600 text-white text-center py-2 px-4 rounded">Read More</button>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="w-full cursor-pointer border border-gray-300 bg-white rounded-md shadow-xl shadow-gray-200  hover:shadow-2xl hover:bg-gray-50">
                  <div class="p-4 space-y-4">
                    <span class="text-blue-600 font-normal text-xl ">New Term Announcement</span>
                    <div className='flex pb-4 border-b border-gray-200'>
                      <span class="text-gray-400 font-normal text-base pr-4"># Circular</span>
                      <span class="text-gray-400 font-normal text-base flex pl-3"><HiOutlineClock className='mt-1' /> New</span>
                    </div>
                    <p class="font-normal text-gray-700 text-justify pb-4 border-b border-gray-200">This is to inform that all the classes will be starting from Sep 1, 2019. The timing and transport schedule will be communicated later.</p>
                    <div class="flex justify-between mt-10 align-bottom">
                      <div className='flex flex-wrap space-x-4'>
                        <img class="w-10 h-10 rounded-full" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAPdvF3u9YGCmWQZDGug3Jy2Eqrb4XuoOQbjozL6ObMiSl_2AvFQGSdpuqNPgADM37GJQ&usqp=CAU" />
                        <div class="flex flex-col space-y-0">
                          <p class="text-xl text-gray-600">Akash Pathak</p>
                          <p class="font-light text-sm">20 de Dezembro de 2021</p>
                        </div>
                      </div>
                      <div>
                        <button class="bg-blue-400 hover:bg-blue-600 text-white text-center py-2 px-4 rounded">Read More</button>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="w-full cursor-pointer border border-gray-300 bg-white rounded-md shadow-xl shadow-gray-200  hover:shadow-2xl hover:bg-gray-50">
                  <div class="p-4 space-y-4">
                    <span class="text-blue-600 font-normal text-xl ">New Term Announcement</span>
                    <div className='flex pb-4 border-b border-gray-200'>
                      <span class="text-gray-400 font-normal text-base pr-4"># Circular</span>
                      <span class="text-gray-400 font-normal text-base flex pl-3"><HiOutlineClock className='mt-1' /> New</span>
                    </div>
                    <p class="font-normal text-gray-700 text-justify pb-4 border-b border-gray-200">This is to inform that all the classes will be starting from Sep 1, 2019. The timing and transport schedule will be communicated later.</p>
                    <div class="flex justify-between mt-10 align-bottom">
                      <div className='flex flex-wrap space-x-4'>
                        <img class="w-10 h-10 rounded-full" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAPdvF3u9YGCmWQZDGug3Jy2Eqrb4XuoOQbjozL6ObMiSl_2AvFQGSdpuqNPgADM37GJQ&usqp=CAU" />
                        <div class="flex flex-col space-y-0">
                          <p class="text-xl text-gray-600">Akash Pathak</p>
                          <p class="font-light text-sm">20 de Dezembro de 2021</p>
                        </div>
                      </div>
                      <div>
                        <button class="bg-blue-400 hover:bg-blue-600 text-white text-center py-2 px-4 rounded">Read More</button>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="w-full cursor-pointer border border-gray-300 bg-white rounded-md shadow-xl shadow-gray-200  hover:shadow-2xl hover:bg-gray-50">
                  <div class="p-4 space-y-4">
                    <span class="text-blue-600 font-normal text-xl ">New Term Announcement</span>
                    <div className='flex pb-4 border-b border-gray-200'>
                      <span class="text-gray-400 font-normal text-base pr-4"># Circular</span>
                      <span class="text-gray-400 font-normal text-base flex pl-3"><HiOutlineClock className='mt-1' /> New</span>
                    </div>
                    <p class="font-normal text-gray-700 text-justify pb-4 border-b border-gray-200">This is to inform that all the classes will be starting from Sep 1, 2019. The timing and transport schedule will be communicated later.</p>
                    <div class="flex justify-between mt-10 align-bottom">
                      <div className='flex flex-wrap space-x-4'>
                        <img class="w-10 h-10 rounded-full" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAPdvF3u9YGCmWQZDGug3Jy2Eqrb4XuoOQbjozL6ObMiSl_2AvFQGSdpuqNPgADM37GJQ&usqp=CAU" />
                        <div class="flex flex-col space-y-0">
                          <p class="text-xl text-gray-600">Akash Pathak</p>
                          <p class="font-light text-sm">20 de Dezembro de 2021</p>
                        </div>
                      </div>
                      <div>
                        <button class="bg-blue-400 hover:bg-blue-600 text-white text-center py-2 px-4 rounded">Read More</button>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="w-full cursor-pointer border border-gray-300 bg-white rounded-md shadow-xl shadow-gray-200  hover:shadow-2xl hover:bg-gray-50">
                  <div class="p-4 space-y-4">
                    <span class="text-blue-600 font-normal text-xl ">New Term Announcement</span>
                    <div className='flex pb-4 border-b border-gray-200'>
                      <span class="text-gray-400 font-normal text-base pr-4"># Circular</span>
                      <span class="text-gray-400 font-normal text-base flex pl-3"><HiOutlineClock className='mt-1' /> New</span>
                    </div>
                    <p class="font-normal text-gray-700 text-justify pb-4 border-b border-gray-200">This is to inform that all the classes will be starting from Sep 1, 2019. The timing and transport schedule will be communicated later.</p>
                    <div class="flex justify-between mt-10 align-bottom">
                      <div className='flex flex-wrap space-x-4'>
                        <img class="w-10 h-10 rounded-full" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAPdvF3u9YGCmWQZDGug3Jy2Eqrb4XuoOQbjozL6ObMiSl_2AvFQGSdpuqNPgADM37GJQ&usqp=CAU" />
                        <div class="flex flex-col space-y-0">
                          <p class="text-xl text-gray-600">Akash Pathak</p>
                          <p class="font-light text-sm">20 de Dezembro de 2021</p>
                        </div>
                      </div>
                      <div>
                        <button class="bg-blue-400 hover:bg-blue-600 text-white text-center py-2 px-4 rounded">Read More</button>
                      </div>
                    </div>
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
export default connect(mapStateToProps)(Feed);
import React, { Component } from 'react';
import { dashboardActions, userActions } from '../../_actions';
import { connect } from 'react-redux';
import 'react-confirm-alert/src/react-confirm-alert.css';
import { MdOutlineClose, MdOutlineEdit, MdOutlineFormatListBulleted } from 'react-icons/md';
import { CgMenuGridR } from "react-icons/cg";
import { confirmAlert } from 'react-confirm-alert';

class StudentIdCard extends Component {

  constructor(props) {
    super(props);
    this.state = {
      offset: 0,
      size: 10,
      keyWord: "",
      pageNo: 1,
      formField: {},
      errorField: {},
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
    this.props.dispatch(dashboardActions.getStudentList(data));
    this.props.dispatch(dashboardActions.getCourseList(data));
    this.props.dispatch(dashboardActions.getAllBatch(data));
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.dashboard.updateShow) {
      return {
        ...nextProps,
        fieldsStudentUpdate: {},
        errorsStudentUpdate: {},
        updateShow: false
      }
    } else {
      return {
        ...nextProps
      }
    }
  }

  handleUpadte = (data) => {
    this.setState({ fieldsStudentUpdate: data, updateShow: true });
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
          onClick: () => this.props.dispatch(dashboardActions.deleteStudent(datatemp))
        },
        {
          label: 'No'
        }
      ]
    });
  }

  render() {

    let { dashboard } = this.props;
    let { loading, getStudentList, getCourseList, getAllBatch } = dashboard;

    // console.log("RENDER________________getAllBatch--:::::", getAllBatch);

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

          <div className='border border-slate-300 pl-5 py-4 bg-white'>
            <h1 className='text-xl text-gray-500'>Student Admission List</h1>
          </div>

          <section className='' >
            <div className='lg:flex justify-between items-center my-6 lg:space-x-3'>
              <div className='lg:flex lg:space-x-3 w-full'>
                <div className='lg:w-72 w-full'>
                  <label class='text-sm font-normal text-gray-600 pb-4 capitalize'>select Department type</label>
                  <div className='py-2 relative flex items-center md:w-auto w-full border  text-gray-800 bg-white rounded-sm cursor-pointer appearance-none'>
                    <select className="appearance-none w-full  px-4 bg-white text-sm font-normal focus:outline-none text-gray-700" onChange={this.inputChangeUpdate}
                      name="deprtId">
                      {
                        getCourseList && getCourseList.length > 0 ?
                          getCourseList.map((element, index) => (
                            <React.Fragment>
                              <option value={element && element.id ? element.id : null}>{element && element.cName ? element.cName : null}</option>
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
                <div className='lg:w-72 w-full'>
                  <label class='text-sm font-normal text-gray-600 pb-4 capitalize'>select batch type</label>
                  <div className='py-2 relative flex items-center md:w-auto w-full border  text-gray-800 bg-white rounded-sm cursor-pointer appearance-none'>
                    <select className="appearance-none w-full  px-4 bg-white text-sm font-normal focus:outline-none text-gray-700" onChange={this.inputChangeUpdate}
                      name="">
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
              </div>
              {/* <div>
                <input type='text' className='w-full border px-4 py-2 rounded-xs focus:outline-none text-base placeholder:font-normal font-medium text-black placeholder-gray-500' placeholder='Search...' />
              </div> */}
            </div>



            <div className='grid xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-2 w-full'>

              {
                getStudentList && getStudentList.length > 0 ?
                  getStudentList.map((element, index) => (
                    <>
                      <div className='w-[32rem] mt-2'>
                        <div className='shadow-lg shadow-gray-700 w-full rounded-md'>

                          <div className='bg-blue-600 px-4 py-3'>
                            <div className='flex justify-between items-center'>
                              <div className='flex space-x-1'>
                                <div>
                                  <img src='school/logo.png' className='h-12 w-12 text-white' alt='logo' />
                                </div>
                                <div>
                                  <h1 className='text-2xl text-white font-bold capitalize'>Demo school</h1>
                                  <p className='uppercase text-white text-xs font-semibold'>Creative tagline here</p>
                                </div>
                              </div>
                              <div>
                                <div>
                                  <h1 className='uppercase text-lg text-white font-medium tracking-wider'>Your identity card</h1>
                                </div>
                                <div className='text-white text-xs font-semibold'>
                                  <p>123, Main Street, Your City, USA 789456</p>
                                  <p>Ph:+123 4567 8900 | Email:name@website.com</p>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className=''>
                            <div className='bg-white flex p-4'>
                              <div className='px-4'>
                                <img src='school/student.png' alt='profile_picture' className='w-64 h-52' />
                              </div>
                              <div className='space-y-2 px-4 w-full pt-2'>
                                <div className='flex justify-between uppercase w-full text-gray-800'>
                                  <div>
                                    <p className='uppercase text-xs font-semibold'>Employee id</p>
                                    <p className='text-xs font-semibold text-blue-500'>{element.admissionNo}</p>
                                  </div>
                                  <div>
                                    <p className='uppercase text-xs font-semibold'>date of issued</p>
                                    <p className='text-xs font-semibold text-blue-500'>{element.joinDate}</p>
                                  </div>
                                </div>
                                <div>
                                  <p className='text-xs font-semibold text-black/90'>Name</p>
                                  <h1 className='text-xs font-semibold text-blue-500'>{element.fName} {element.lName}</h1>
                                </div>
                                <div className=''>
                                  <p className='text-xs font-semibold text-black/90'>Father Name</p>
                                  <h1 className='text-xs font-semibold text-blue-500'>{element.fatherName}</h1>
                                </div>
                                <div className='flex justify-between uppercase w-full text-gray-800'>
                                  <div>
                                    <p className='uppercase text-xs font-semibold'>Mobile No.</p>
                                    <p className='text-xs font-semibold text-blue-500'>{element.mobile}</p>
                                  </div>
                                  <div className="pr-11">
                                    <p className='uppercase text-xs font-semibold'>Gender</p>
                                    <p className='text-xs font-semibold text-blue-500'>{element.gender}</p>
                                  </div>
                                </div>
                                <div className='flex justify-between items-center uppercase w-full text-black/90'>
                                  <div>
                                    <p className='text-xs font-semibold'>Date of birth</p>
                                    <p className='text-xs font-semibold text-blue-500'>{element.dob}</p>
                                  </div>
                                  <div className='pr-3.5'>
                                    <p className='uppercase text-xs font-semibold'>Nationality</p>
                                    <p className='text-xs font-semibold text-blue-500'>{element.nationality}</p>
                                  </div>

                                </div>
                                <div >
                                  <div className=''>
                                    <p className='uppercase text-xs font-semibold '>address</p>
                                    <p className='text-xs font-semibold text-blue-500'>{element.prmtAddr}</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className='bg-blue-600 h-4'></div>
                        </div>
                      </div>
                    </>
                  )) : null
              }
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
export default connect(mapStateToProps)(StudentIdCard);
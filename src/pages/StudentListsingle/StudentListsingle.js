import React, { Component } from 'react';
import { dashboardActions, userActions } from '../../_actions';
import { connect } from 'react-redux';
import 'react-confirm-alert/src/react-confirm-alert.css';
import { MdOutlineClose, MdOutlineEdit, MdOutlineFormatListBulleted } from 'react-icons/md';
import { CgMenuGridR } from "react-icons/cg";
import { confirmAlert } from 'react-confirm-alert';

class StudentListsingle extends Component {

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

  // handleUpadte = (data) => {
  //   this.setState({ fieldsStudentUpdate: data, updateShow: true });
  // }

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
    let { loading, getStudentList, } = dashboard;
    // console.log("RENDER________________getStudentList--:::::", getStudentList);

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

          <div className='py-4 pl-5 bg-white border border-slate-300'>
            <h1 className='text-xl text-gray-500'>Student Admission List</h1>
          </div>

          <div className='flex w-full'>

            {
              getStudentList && getStudentList.length > 0 ?
                getStudentList.map((element, index) => (
                  <>
                    <div className="w-full lg:w-3/5">
                      <div className='mt-6'>
                        <div className='py-1 pl-5 bg-white border border-slate-300'>
                          <h1 className='text-xl text-gray-500'>Basic Information</h1>
                        </div>
                        <ul className="px-4 mt-3 dark:bg-gray-800 dark:text-gray-100">
                          <li>
                            <div className="grid overflow-hidden md:grid-cols-3 rounded-xl xl:grid-cols-12 hover:dark:bg-gray-900">
                              <h1 className="row-start-2 text-sm font-medium text-gray-600 xl:col-span-2 dark:text-gray-400">First Name</h1>
                              <h1 className="row-start-2 text-sm font-medium text-gray-600 xl:col-span-2 dark:text-gray-400">Middle Name</h1>
                              <h1 className="row-start-2 text-sm font-medium text-gray-600 xl:col-span-2 dark:text-gray-400">Last Name</h1>
                            </div>
                          </li>
                          <li>
                            <div className="grid overflow-hidden md:grid-cols-3 rounded-xl xl:grid-cols-12 hover:dark:bg-gray-900">
                              <h1 className="row-start-2 text-sm text-gray-600 xl:col-span-2 dark:text-gray-400">{element && element.fName ? element.fName : "-"}</h1>
                              <h1 className="row-start-2 text-sm text-gray-600 xl:col-span-2 dark:text-gray-400">{element && element.mName ? element.mName : "-"}</h1>
                              <h1 className="row-start-2 text-sm text-gray-600 xl:col-span-2 dark:text-gray-400">{element && element.lName ? element.lName : "-"}</h1>
                            </div>
                          </li>
                        </ul>
                        <ul className="px-4 mt-3 dark:bg-gray-800 dark:text-gray-100">
                          <li>
                            <div className="grid overflow-hidden md:grid-cols-3 rounded-xl xl:grid-cols-12 hover:dark:bg-gray-900">
                              <h1 className="row-start-2 text-sm font-medium text-gray-600 xl:col-span-2 dark:text-gray-400">Gender</h1>
                              <h1 className="row-start-2 text-sm font-medium text-gray-600 xl:col-span-2 dark:text-gray-400">Date of Birth</h1>
                              <h1 className="row-start-2 text-sm font-medium text-gray-600 xl:col-span-2 dark:text-gray-400">Religion</h1>
                            </div>
                          </li>
                          <li>
                            <div className="grid overflow-hidden md:grid-cols-3 rounded-xl xl:grid-cols-12 hover:dark:bg-gray-900">
                              <h1 className="row-start-2 text-sm text-gray-600 xl:col-span-2 dark:text-gray-400">{element && element.gender ? element.gender : "-"}</h1>
                              <h1 className="row-start-2 text-sm text-gray-600 xl:col-span-2 dark:text-gray-400">{element && element.dob ? element.dob : "-"}</h1>
                              <h1 className="row-start-2 text-sm text-gray-600 xl:col-span-2 dark:text-gray-400">{element && element.religion ? element.religion : "-"}</h1>
                            </div>
                          </li>
                        </ul>
                        <ul className="px-4 mt-3 dark:bg-gray-800 dark:text-gray-100">
                          <li>
                            <div className="grid overflow-hidden md:grid-cols-3 rounded-xl xl:grid-cols-12 hover:dark:bg-gray-900">
                              <h1 className="row-start-2 text-sm font-medium text-gray-600 xl:col-span-2 dark:text-gray-400">Nationality</h1>
                              <h1 className="row-start-2 text-sm font-medium text-gray-600 xl:col-span-2 dark:text-gray-400">Blood Group</h1>
                              <h1 className="row-start-2 text-sm font-medium text-gray-600 xl:col-span-2 dark:text-gray-400">Admission No.</h1>
                            </div>
                          </li>
                          <li>
                            <div className="grid overflow-hidden md:grid-cols-3 rounded-xl xl:grid-cols-12 hover:dark:bg-gray-900">
                              <h1 className="row-start-2 text-sm text-gray-600 xl:col-span-2 dark:text-gray-400">{element && element.nationality ? element.nationality : "-"}</h1>
                              <h1 className="row-start-2 text-sm text-gray-600 xl:col-span-2 dark:text-gray-400">{element && element.stdBloodG ? element.stdBloodG : "-"}</h1>
                              <h1 className="row-start-2 text-sm text-gray-600 xl:col-span-2 dark:text-gray-400">{element && element.admissionNo ? element.admissionNo : "-"}</h1>
                            </div>
                          </li>
                        </ul>
                      </div>
                      <div className='mt-6'>
                        <div className='py-1 pl-5 bg-white border border-slate-300'>
                          <h1 className='text-xl text-gray-500'>Parent Information</h1>
                        </div>
                        <ul className="px-4 mt-3 dark:bg-gray-800 dark:text-gray-100">
                          <li>
                            <div className="grid overflow-hidden md:grid-cols-2 rounded-xl xl:grid-cols-12 hover:dark:bg-gray-900">
                              <h1 className="row-start-2 text-sm font-medium text-gray-600 xl:col-span-2 dark:text-gray-400">Father Name</h1>
                              <h1 className="row-start-2 text-sm font-medium text-gray-600 xl:col-span-2 dark:text-gray-400">Mother Name</h1>
                            </div>
                          </li>
                          <li>
                            <div className="grid overflow-hidden md:grid-cols-2 rounded-xl xl:grid-cols-12 hover:dark:bg-gray-900">
                              <h1 className="row-start-2 text-sm text-gray-600 xl:col-span-2 dark:text-gray-400">{element && element.fatherName ? element.fatherName : "-"}</h1>
                              <h1 className="row-start-2 text-sm text-gray-600 xl:col-span-2 dark:text-gray-400">{element && element.motherName ? element.motherName : "-"}</h1>
                            </div>
                          </li>
                        </ul>
                        <ul className="px-4 mt-3 dark:bg-gray-800 dark:text-gray-100">
                          <li>
                            <div className="grid overflow-hidden md:grid-cols-2 rounded-xl xl:grid-cols-12 hover:dark:bg-gray-900">
                              <h1 className="row-start-2 text-sm font-medium text-gray-600 xl:col-span-2 dark:text-gray-400">Father No.</h1>
                              <h1 className="row-start-2 text-sm font-medium text-gray-600 xl:col-span-2 dark:text-gray-400">Mother No.</h1>
                            </div>
                          </li>
                          <li>
                            <div className="grid overflow-hidden md:grid-cols-2 rounded-xl xl:grid-cols-12 hover:dark:bg-gray-900">
                              <h1 className="row-start-2 text-sm text-gray-600 xl:col-span-2 dark:text-gray-400">{element && element.fatherMo ? element.fatherMo : "-"}</h1>
                              <h1 className="row-start-2 text-sm text-gray-600 xl:col-span-2 dark:text-gray-400">{element && element.motherMo ? element.motherMo : "-"}</h1>
                            </div>
                          </li>
                        </ul>
                      </div>
                      <div className='mt-6'>
                        <div className='py-1 pl-5 bg-white border border-slate-300'>
                          <h1 className='text-xl text-gray-500'>Contact Information</h1>
                        </div>
                        <ul className="px-4 mt-3 dark:bg-gray-800 dark:text-gray-100">
                          <li>
                            <div className="grid overflow-hidden md:grid-cols-2 rounded-xl xl:grid-cols-12 hover:dark:bg-gray-900">
                              <h1 className="row-start-2 text-sm font-medium text-gray-600 xl:col-span-2 dark:text-gray-400">Father Contact Name</h1>
                              <h1 className="row-start-2 text-sm font-medium text-gray-600 xl:col-span-2 dark:text-gray-400">Father Mobile No.</h1>
                            </div>
                          </li>
                          <li>
                            <div className="grid overflow-hidden md:grid-cols-2 rounded-xl xl:grid-cols-12 hover:dark:bg-gray-900">
                              <h1 className="row-start-2 text-sm text-gray-600 xl:col-span-2 dark:text-gray-400">{element && element.fatherName ? element.fatherName : "-"}</h1>
                              <h1 className="row-start-2 text-sm text-gray-600 xl:col-span-2 dark:text-gray-400">{element && element.fatherMo ? element.fatherMo : "-"}</h1>
                            </div>
                          </li>
                        </ul>
                        <ul className="px-4 mt-3 dark:bg-gray-800 dark:text-gray-100">
                          <li>
                            <div className="grid overflow-hidden md:grid-cols-2 rounded-xl xl:grid-cols-12 hover:dark:bg-gray-900">
                              <h1 className="row-start-2 text-sm font-medium text-gray-600 xl:col-span-2 dark:text-gray-400">Email Id</h1>
                              <h1 className="row-start-2 text-sm font-medium text-gray-600 xl:col-span-2 dark:text-gray-400">Student NO.</h1>
                            </div>
                          </li>
                          <li>
                            <div className="grid overflow-hidden md:grid-cols-2 rounded-xl xl:grid-cols-12 hover:dark:bg-gray-900">
                              <h1 className="row-start-2 text-sm text-gray-600 xl:col-span-2 dark:text-gray-400">{element && element.email ? element.email : "-"}</h1>
                              <h1 className="row-start-2 text-sm text-gray-600 xl:col-span-2 dark:text-gray-400">{element && element.mobile ? element.mobile : "-"}</h1>
                            </div>
                          </li>
                        </ul>
                        <ul className="px-4 mt-3 dark:bg-gray-800 dark:text-gray-100">
                          <li>
                            <div className="grid overflow-hidden md:grid-cols-2 rounded-xl xl:grid-cols-12 hover:dark:bg-gray-900">
                              <h1 className="row-start-2 text-sm font-medium text-gray-600 xl:col-span-2 dark:text-gray-400">Present Address</h1>
                              <h1 className="row-start-2 text-sm font-medium text-gray-600 xl:col-span-2 dark:text-gray-400">Permanent Address</h1>
                            </div>
                          </li>
                          <li>
                            <div className="grid overflow-hidden md:grid-cols-2 rounded-xl xl:grid-cols-12 hover:dark:bg-gray-900">
                              <h1 className="row-start-2 text-sm text-gray-600 xl:col-span-2 dark:text-gray-400">{element && element.presentAddr ? element.presentAddr : "-"}</h1>
                              <h1 className="row-start-2 text-sm text-gray-600 xl:col-span-2 dark:text-gray-400">{element && element.prmtAddr ? element.prmtAddr : "-"}</h1>
                            </div>
                            <div className="grid overflow-hidden md:grid-cols-2 rounded-xl xl:grid-cols-12 hover:dark:bg-gray-900">
                              <h1 className="row-start-2 text-sm text-gray-600 xl:col-span-2 dark:text-gray-400">{element && element.city ? element.city : "-"}</h1>
                              <h1 className="row-start-2 text-sm text-gray-600 xl:col-span-2 dark:text-gray-400">{element && element.city ? element.city : "-"}</h1>
                            </div>
                          </li>
                        </ul>
                      </div>
                      <div className='mt-6'>
                        <div className='py-1 pl-5 bg-white border border-slate-300'>
                          <h1 className='text-xl text-gray-500'>Contact Information</h1>
                        </div>
                        <ul className="px-4 mt-3 dark:bg-gray-800 dark:text-gray-100">
                          <li>
                            <div className="grid overflow-hidden md:grid-cols-3 rounded-xl xl:grid-cols-12 hover:dark:bg-gray-900">
                              <h1 className="row-start-2 text-sm font-medium text-gray-600 xl:col-span-2 dark:text-gray-400">Adm No</h1>
                              <h1 className="row-start-2 text-sm font-medium text-gray-600 xl:col-span-2 dark:text-gray-400">Batch</h1>
                              <h1 className="row-start-2 text-sm font-medium text-gray-600 xl:col-span-2 dark:text-gray-400">Date of Admission</h1>
                            </div>
                          </li>
                          <li>
                            <div className="grid overflow-hidden md:grid-cols-3 rounded-xl xl:grid-cols-12 hover:dark:bg-gray-900">
                              <h1 className="row-start-2 text-sm text-gray-600 xl:col-span-2 dark:text-gray-400">{element && element.admissionNo ? element.admissionNo : "-"}</h1>
                              <h1 className="row-start-2 text-sm text-gray-600 xl:col-span-2 dark:text-gray-400">{element && element.batc0 ? element.batc0 : "-"}</h1>
                              <h1 className="row-start-2 text-sm text-gray-600 xl:col-span-2 dark:text-gray-400">{element && element.joinDate ? element.joinDate : "-"}</h1>
                            </div>
                          </li>
                        </ul>
                      </div>


                    </div>

                  </>
                )) : null
            }


            {
              getStudentList && getStudentList.length > 0 ?
                getStudentList.map((element, index) => (
                  <>
                    <div className="hidden w-2/5 mt-6 bg-white border md:block">
                      <div className='flex justify-center pt-6'>
                        <img src="school/img.png" className='' />
                      </div>
                      <div className='mt-4 border divide-gray-400'>
                        <div className='flex justify-between px-8 py-2 border-b'>
                          <h1>Admission No.</h1>
                          <h1>{element && element.admissionNo ? element.admissionNo : "-"}</h1>
                        </div>
                        <div className='flex justify-between px-8 py-2 border-b'>
                          <h1>Name</h1>
                          <h1>{element && element.fName ? element.fName : "-"}{element && element.mName ? element.mName : "-"}</h1>
                        </div>
                        <div className='flex justify-between px-8 py-2 border-b'>
                          <h1>Father's Name</h1>
                          <h1>{element && element.fatherName ? element.fatherName : "-"}</h1>
                        </div>
                        <div className='flex justify-between px-8 py-2 border-b'>
                          <h1>Mother's Name</h1>
                          <h1>{element && element.motherName ? element.motherName : "-"}</h1>
                        </div>
                        <div className='flex justify-between px-8 py-2 border-b'>
                          <h1>Contact Number</h1>
                          <h1>{element && element.mobile ? element.mobile : "-"}</h1>
                        </div>
                        <div className='flex justify-between px-8 py-2 border-b'>
                          <h1>Email ID</h1>
                          <h1>{element && element.email ? element.email : "-"}</h1>
                        </div>
                        <div className='flex justify-between px-8 py-2 border-b'>
                          <h1>Gender</h1>
                          <h1>{element && element.gender ? element.gender : "-"}</h1>
                        </div>
                        <div className='flex justify-between px-8 py-2 border-b'>
                          <h1>Date of Birth</h1>
                          <h1>{element && element.dob ? element.dob : "-"}</h1>
                        </div>
                        <div className='flex justify-between px-8 py-2 border-b'>
                          <h1>Batch</h1>
                          <h1>{element && element.batch ? element.batch : "-"}</h1>
                        </div>
                        <div className='flex justify-between px-8 py-2 border-b'>
                          <h1>Date of Admission</h1>
                          <h1>{element && element.joinDate ? element.joinDate : "-"}</h1>
                        </div>
                        <div className='flex justify-between px-8 py-2 border-b'>
                          <h1>Created at</h1>
                          <h1>{element && element.createdAt ? element.createdAt : "-"}</h1>
                        </div>
                      </div>


                    </div>
                  </>
                )) : null
            }

          </div>

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
export default connect(mapStateToProps)(StudentListsingle);
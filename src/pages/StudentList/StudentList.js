import React, { Component } from 'react';
import { dashboardActions, userActions } from '../../_actions';
import { connect } from 'react-redux';
import 'react-confirm-alert/src/react-confirm-alert.css';
import { MdOutlineClose, MdOutlineEdit, MdOutlineFormatListBulleted } from 'react-icons/md';
import { CgMenuGridR } from "react-icons/cg";
import { confirmAlert } from 'react-confirm-alert';

class StudentList extends Component {

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
        <div className="h-screen overflow-y-auto w-full bg-gray-100 p-6">

          <div className='border border-slate-300 pl-5 py-4 bg-white'>
            <h1 className='text-xl text-gray-500'>Student Admission List</h1>
          </div>

          {
            this.state.updateShow ?
              <>
                <div className="flex justify-end mt-2">
                  <div className='flex justify-center cursor-pointer border border-slate-300 py-1 bg-blue-400 w-24 text-white' onClick={() => this.handleUpadte()}>
                    <span><CgMenuGridR className='w-4 h-4 mt-0.5' /></span>
                    <h1 className='text-sm text-white pl-1'>Card View</h1>
                  </div>
                </div>
              </>
              :
              <>
                <div className="flex justify-end mt-2">
                  <div className='flex justify-center cursor-pointer border border-slate-300 py-1 bg-blue-400 w-24 text-white' onClick={() => this.handleUpadte()}>
                    <span><MdOutlineFormatListBulleted className='w-4 h-4 mt-0.5' /></span>
                    <h1 className='text-sm text-white pl-1'>List View</h1>
                  </div>
                </div>
              </>
          }


          {
            this.state.updateShow ?
              <>
                <section>
                  <div className="">
                    <div className="p-4 gap-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 select-none">
                      {
                        getStudentList && getStudentList.length > 0 ?
                          getStudentList.map((element, index) => (
                            <>
                              <div className="w-full cursor-pointer rounded-md bg-white shadow-md shadow-gray-200 hover:shadow-blue-400/80 hover:shadow-2xl hover:bg-gray-50" onClick={() => this.onClickMenu("/app/studentlistsingle")}>
                                <div className="p-4">
                                  <div className="flex flex-wrap space-x-4">
                                    <div className='text-center flex justify-center items-center'>
                                      <img
                                        className="w-20 h-20 rounded-full"
                                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAPdvF3u9YGCmWQZDGug3Jy2Eqrb4XuoOQbjozL6ObMiSl_2AvFQGSdpuqNPgADM37GJQ&usqp=CAU"
                                      />
                                    </div>
                                    <div className="flex flex-col space-y-0">
                                      <p className="font-semibold text-base">{element && element.admissionNo ? element.admissionNo : "-"}</p>
                                      <p className="font-light text-sm">{element && element.fName ? element.fName : "-"} {element && element.lName ? element.lName : "-"}</p>
                                      <p className="font-semibold text-base">{element && element.email ? element.email : "-"}</p>
                                      <p className="font-light text-sm">{element && element.mobile ? element.mobile : "-"}</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </>
                          )) : null
                      }
                    </div>
                  </div>
                </section>

              </>
              :
              <>
                <section className='' >
                  <div className='lg:flex justify-between items-center my-6 lg:space-x-3'>
                    <div className='lg:flex lg:space-x-3'>
                      <div className='px-3 py-2 relative flex items-center md:w-auto w-full border  text-gray-800 bg-white rounded-sm cursor-pointer appearance-none'>
                        <select className="appearance-none w-full  pr-4 bg-white text-sm font-normal focus:outline-none" onChange={this.inputTypeChange}
                          id="txType"
                          name="txType">
                          <option value="ALL">Select Course&hellip;</option>
                          <option value="SEND">SEND</option>
                          <option value="RECEIVED">RECEIVED</option>
                          <option value="BUY">BUY</option>
                          <option value="REF">REF</option>
                          <option value="RECEIVED_FROM_ADMIN">RECEIVED_FROM_ADMIN</option>
                          <option value="WITHDRAW">WITHDRAW</option>
                          <option value="MINING">MINING</option>
                          <option value="WELCOME">WELCOME</option>
                          <option value="ADMIN_DEPOSIT">ADMIN_DEPOSIT</option>
                        </select>
                        <div className="pointer-events-none absolute right-0 top-0 bottom-0 flex items-center px-2 text-gray-700">
                          <svg className="h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                          </svg>
                        </div>
                      </div>
                      <div className='px-3 py-2 relative flex items-center md:w-auto w-full border  text-gray-800 bg-white rounded-sm cursor-pointer appearance-none'>
                        <select className="appearance-none w-full pr-4 bg-white text-sm font-normal focus:outline-none" onChange={this.inputTypeChange}
                          id="txType"
                          name="txType">
                          <option value="ALL">Select Batch&hellip;</option>
                          <option value="SEND">SEND</option>
                          <option value="RECEIVED">RECEIVED</option>
                          <option value="BUY">BUY</option>
                          <option value="REF">REF</option>
                          <option value="RECEIVED_FROM_ADMIN">RECEIVED_FROM_ADMIN</option>
                          <option value="WITHDRAW">WITHDRAW</option>
                          <option value="MINING">MINING</option>
                          <option value="WELCOME">WELCOME</option>
                          <option value="ADMIN_DEPOSIT">ADMIN_DEPOSIT</option>
                        </select>
                        <div className="pointer-events-none absolute right-0 top-0 bottom-0 flex items-center px-2 text-gray-700">
                          <svg className="h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div>
                      <input type='text' className='w-full border px-4 py-2 rounded-xs focus:outline-none text-base placeholder:font-normal font-medium text-black placeholder-gray-500' placeholder='Search...' />
                    </div>
                  </div>

                  <div className="overflow-auto max-w-full ">
                    <div className="inline-block min-w-full  ">
                      <div className="overflow-hidden  ">
                        <table className="min-w-full text-left divide-y border border-slate-300 border-collapse bg-white">
                          <thead className="">
                            <tr className="text-left border border-slate-300">
                              <th scope="col" className="whitespace-nowrap px-4 py-3 text-left text-sm capitalize font-medium text-gray-600 ">Sl.N.</th>
                              <th scope="col" className="whitespace-nowrap px-4 py-3 text-left text-sm capitalize font-medium text-gray-600 ">Roll no.</th>
                              <th scope="col" className="whitespace-nowrap px-4 py-3 text-left text-sm capitalize font-medium text-gray-600 ">Unique ID</th>
                              <th scope="col" className="whitespace-nowrap px-4 py-3 text-left text-sm capitalize font-medium text-gray-600 ">Student Name</th>
                              <th scope="col" className="whitespace-nowrap px-4 py-3 text-left text-sm capitalize font-medium text-gray-600 ">Mobile No.</th>
                              <th scope="col" className="whitespace-nowrap px-4 py-3 text-left text-sm capitalize font-medium text-gray-600 ">Email Id</th>
                              <th scope="col" className="whitespace-nowrap px-4 py-3 text-left text-sm capitalize font-medium text-gray-600 ">Adm Date</th>
                              <th scope="col" className="whitespace-nowrap px-4 py-3 text-left text-sm capitalize font-medium text-gray-600 ">Course</th>
                              <th scope="col" className="whitespace-nowrap px-4 py-3 text-left text-sm capitalize font-medium text-gray-600 ">Batch</th>
                              <th scope="col" className="whitespace-nowrap px-4 py-3 text-left text-sm capitalize font-medium text-gray-600 ">Guardian Name</th>
                              <th scope="col" className="whitespace-nowrap px-4 py-3 text-left text-sm capitalize font-medium text-gray-600 ">Guardian Mobile</th>
                              <th scope="col" className="whitespace-nowrap px-4 py-3 text-left text-sm capitalize font-medium text-gray-600 ">Manage</th>
                              <th scope="col" className="whitespace-nowrap px-4 py-3 text-left text-sm capitalize font-medium text-gray-600 ">Action</th>
                            </tr>
                          </thead>

                          <tbody className='divide-y' >
                            {
                              getStudentList && getStudentList.length > 0 ?
                                getStudentList.map((element, index) => (
                                  <>
                                    <tr className="border border-slate-300">
                                      <td className="whitespace-nowrap text-left px-4 py-3 text-sm font-serif text-black bg-white uppercase">{index}</td>
                                      <td className="whitespace-nowrap text-left px-4 py-3 text-sm font-serif text-black bg-white uppercase">{element && element.rollNo ? element.rollNo : "-"}</td>
                                      <td className="whitespace-nowrap text-left px-4 py-3 text-sm font-serif text-black bg-white uppercase">{element && element.admissionNo ? element.admissionNo : "-"}</td>
                                      <td className="whitespace-nowrap text-left px-4 py-3 text-sm font-serif text-black bg-white  capitalize">{element && element.fName ? element.fName : "-"}{element && element.mName ? element.mName : "-"}</td>
                                      <td className="whitespace-nowrap text-left px-4 py-3 text-sm font-serif text-black bg-white capitalize">{element && element.mobile ? element.mobile : "-"}</td>
                                      <td className="whitespace-nowrap text-left px-4 py-3 text-sm font-serif text-black bg-white capitalize">{element && element.email ? element.email : "-"}</td>
                                      <td className="whitespace-nowrap text-left px-4 py-3 text-sm font-serif text-black bg-white capitalize">{element && element.joinDate ? element.joinDate : "-"}</td>
                                      <td className="whitespace-nowrap text-left px-4 py-3 text-sm font-serif text-black bg-white ">{element && element.course ? element.course : "-"}</td>
                                      <td className="whitespace-nowrap text-left px-4 py-3 text-sm font-serif text-black bg-white uppercase">{element && element.batch ? element.batch : "-"}</td>
                                      <td className="whitespace-nowrap text-left px-4 py-3 text-sm font-serif text-black bg-white uppercase">{element && element.fatherName ? element.fatherName : "-"}</td>
                                      <td className="whitespace-nowrap text-left px-4 py-3 text-sm font-serif text-black bg-white">{element && element.fatherMo ? element.fatherMo : "-"}</td>
                                      <td className="whitespace-nowrap text-left px-4 py-3 text-sm font-serif text-black bg-white">{element && element.gender ? element.gender : "-"}</td>
                                      <td className='flex space-x-1'>
                                        <span className='hover:bg-[#FF7F50] cursor-pointer'>
                                          <MdOutlineEdit className='text-blue-500 h-5 w-5' />
                                        </span>
                                        <span className='hover:bg-[#FF8008] cursor-pointer'>
                                          <MdOutlineClose className='text-blue-500 h-6 w-6' onClick={() => this.deleteUser(element)} />
                                        </span>
                                      </td>
                                    </tr>
                                  </>
                                )) : <td colspan="2" className="col-span-2 whitespace-nowrap border border-gray-300 text-center px-[11.5px] py-3 text-xs font-semibold text-black bg-white uppercase bg-whj"></td>
                            }

                          </tbody>

                        </table>
                      </div>
                    </div>
                  </div>
                </section>
              </>
          }
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
export default connect(mapStateToProps)(StudentList);
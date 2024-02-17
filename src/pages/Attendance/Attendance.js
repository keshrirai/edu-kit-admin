import React, { Component } from 'react';
import { dashboardActions, userActions } from '../../_actions';
import { connect } from 'react-redux';
import { confirmAlert } from 'react-confirm-alert';
import { RiCupFill, RiCheckLine, RiCloseFill } from "react-icons/ri";

class Attendance extends Component {

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
    this.props.dispatch(dashboardActions.getAllClass(data));
    this.props.dispatch(dashboardActions.getCalAndStudentData(data));
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
    let { loading, getStudentList, getAllClass, getCourseList, getAllBatch, getCalAndStudentData } = dashboard;

    console.log("RENDER________________getCalAndStudentDatagetCalAndStudentData:::::", getCalAndStudentData);

    return (

      <>
        <div className="h-screen overflow-y-auto w-full bg-gray-100 p-6">

          <div className='border border-slate-300 pl-5 py-4 bg-white'>
            <h1 className='text-xl text-gray-500'>Attendance</h1>
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
              <div className='flex justify-between space-x-2'>
                <h1 className="text-sm font-medium whitespace-nowrap flex cursor-pointer hover:underline-emerald-600"><span><RiCheckLine className='w-6 h-5 text-green-600' /></span> Present</h1>
                <h1 className="text-sm font-medium whitespace-nowrap flex cursor-pointer hover:underline-emerald-600"><span><RiCloseFill className='w-6 h-5 text-blue-600' /></span> Late</h1>
                <h1 className="text-sm font-medium whitespace-nowrap flex cursor-pointer hover:underline-emerald-600"><span><RiCupFill className='w-6 h-5 text-yellow-600' /></span> HalfDay</h1>
                <h1 className="text-sm font-medium whitespace-nowrap flex cursor-pointer hover:underline-emerald-600"><span><RiCloseFill className='w-6 h-5 text-red-600' /></span> Absent</h1>
              </div>
            </div>


            <div>
              <div class="flex flex-col">
                <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
                  <div class="py-2 inline-block min-w-full sm:px-2 lg:px-8">
                    <div class="overflow-hidden">
                      <table class="min-w-full border border-collapse border-gray-300">


                        <thead class="border border-collapse border-gray-300">
                          <tr className='border border-collapse border-gray-300'>
                            <th scope="col" class="text-sm font-medium text-gray-900 p-2 border text-center">
                              #
                            </th>
                            <th scope="col" class="text-sm font-medium text-gray-900 p-2 border text-center whitespace-nowrap">
                              Name
                            </th>
                            <th scope="col" class="text-sm font-medium text-gray-900 p-2 border text-center">
                              1
                            </th>
                            <th scope="col" class="text-sm font-medium text-gray-900 p-2 border text-center">
                              2
                            </th>
                            <th scope="col" class="text-sm font-medium text-gray-900 p-2 border text-center">
                              3
                            </th>
                            <th scope="col" class="text-sm font-medium text-gray-900 p-2 border text-center">
                              4
                            </th>
                            <th scope="col" class="text-sm font-medium text-gray-900 p-2 border text-center">
                              5
                            </th>
                            <th scope="col" class="text-sm font-medium text-gray-900 p-2 border text-center">
                              6
                            </th>
                            <th scope="col" class="text-sm font-medium text-gray-900 p-2 border text-center">
                              7
                            </th>
                            <th scope="col" class="text-sm font-medium text-gray-900 p-2 border text-center">
                              8
                            </th>
                            <th scope="col" class="text-sm font-medium text-gray-900 p-2 border text-center">
                              9
                            </th>
                            <th scope="col" class="text-sm font-medium text-gray-900 p-2 border text-center">
                              10
                            </th>
                            <th scope="col" class="text-sm font-medium text-gray-900 p-2 border text-center">
                              11
                            </th>
                            <th scope="col" class="text-sm font-medium text-gray-900 p-2 border text-center">
                              12
                            </th>
                            <th scope="col" class="text-sm font-medium text-gray-900 p-2 border text-center">
                              13
                            </th>
                            <th scope="col" class="text-sm font-medium text-gray-900 p-2 border text-center">
                              14
                            </th>
                            <th scope="col" class="text-sm font-medium text-gray-900 p-2 border text-center">
                              15
                            </th>
                            <th scope="col" class="text-sm font-medium text-gray-900 p-2 border text-center">
                              16
                            </th>
                            <th scope="col" class="text-sm font-medium text-gray-900 p-2 border text-center">
                              17
                            </th>
                            <th scope="col" class="text-sm font-medium text-gray-900 p-2 border text-center">
                              18
                            </th>
                            <th scope="col" class="text-sm font-medium text-gray-900 p-2 border text-center">
                              19
                            </th>
                            <th scope="col" class="text-sm font-medium text-gray-900 p-2 border text-center">
                              20
                            </th>
                            <th scope="col" class="text-sm font-medium text-gray-900 p-2 border text-center">
                              21
                            </th>
                            <th scope="col" class="text-sm font-medium text-gray-900 p-2 border text-center">
                              22
                            </th>
                            <th scope="col" class="text-sm font-medium text-gray-900 p-2 border text-center">
                              23
                            </th>
                            <th scope="col" class="text-sm font-medium text-gray-900 p-2 border text-center">
                              24
                            </th>
                            <th scope="col" class="text-sm font-medium text-gray-900 p-2 border text-center">
                              25
                            </th>
                            <th scope="col" class="text-sm font-medium text-gray-900 p-2 border text-center">
                              26
                            </th>
                            <th scope="col" class="text-sm font-medium text-gray-900 p-2 border text-center">
                              27
                            </th>
                            <th scope="col" class="text-sm font-medium text-gray-900 p-2 border text-center">
                              28
                            </th>
                            <th scope="col" class="text-sm font-medium text-gray-900 p-2 border text-center">
                              29
                            </th>
                            <th scope="col" class="text-sm font-medium text-gray-900 p-2 border text-center">
                              30
                            </th>
                          </tr>
                        </thead>

                        {/* {getCalAndStudentData && Object.keys(getCalAndStudentData).length > 0 ?
                          Object.keys(getCalAndStudentData).map((index) => (<> */}

                        {
                          getCalAndStudentData && getCalAndStudentData.length > 0 ?
                            getCalAndStudentData.map((element, index) => (
                              <React.Fragment>

                                <tbody>
                                  <tr>
                                    <td class=" text-base font-medium text-gray-900 border border-collapse border-gray-300">1</td>
                                    <td class="text-xs p-1 text-gray-900 text-center border">{element.fName}</td>




                                    {element && element.calander && element.calander.length > 0 ?
                                      element.calander.map((e, index) => (
                                        <React.Fragment>
                                          <td class="text-xs p-1 text-gray-900 text-center border">
                                            {/* {JSON.stringify(element.calander)} */}
                                            {e ? e.date : "---"}
                                          </td>
                                        </React.Fragment>
                                      )) : null
                                    }




                                    {/* {
                                  getCalAndStudentData && getCalAndStudentData[index] && getCalAndStudentData[index][calander] && getCalAndStudentData[index][calander].length > 0 ?
                                    getCalAndStudentData[index][calander].map((element) => (<>
                                      <td class="text-xs p-1 text-gray-900 text-center border">{element ? element.date : "---"}</td>
                                    </>))
                                    :
                                    null
                                } */}

                                    {/* <td class="text-xs p-1 text-gray-900 text-center border">1</td>
                                    <td class="text-xs p-1 text-gray-900 text-center border">1</td>
                                    <td class="text-xs p-1 text-gray-900 text-center border">1</td>
                                    <td class="text-xs p-1 text-gray-900 text-center border">1</td>
                                    <td class="text-xs p-1 text-gray-900 text-center border">1</td>
                                    <td class="text-xs p-1 text-gray-900 text-center border">1</td>
                                    <td class="text-xs p-1 text-gray-900 text-center border">1</td>
                                    <td class="text-xs p-1 text-gray-900 text-center border">1</td>
                                    <td class="text-xs p-1 text-gray-900 text-center border">1</td>
                                    <td class="text-xs p-1 text-gray-900 text-center border">1</td>
                                    <td class="text-xs p-1 text-gray-900 text-center border">1</td>
                                    <td class="text-xs p-1 text-gray-900 text-center border">1</td>
                                    <td class="text-xs p-1 text-gray-900 text-center border">1</td>
                                    <td class="text-xs p-1 text-gray-900 text-center border">1</td>
                                    <td class="text-xs p-1 text-gray-900 text-center border">1</td>
                                    <td class="text-xs p-1 text-gray-900 text-center border">1</td>
                                    <td class="text-xs p-1 text-gray-900 text-center border">1</td>
                                    <td class="text-xs p-1 text-gray-900 text-center border">1</td>
                                    <td class="text-xs p-1 text-gray-900 text-center border">1</td>
                                    <td class="text-xs p-1 text-gray-900 text-center border">1</td>
                                    <td class="text-xs p-1 text-gray-900 text-center border">1</td>
                                    <td class="text-xs p-1 text-gray-900 text-center border">1</td>
                                    <td class="text-xs p-1 text-gray-900 text-center border">1</td>
                                    <td class="text-xs p-1 text-gray-900 text-center border">1</td>
                                    <td class="text-xs p-1 text-gray-900 text-center border">1</td>
                                    <td class="text-xs p-1 text-gray-900 text-center border">1</td>
                                    <td class="text-xs p-1 text-gray-900 text-center border">1</td>
                                    <td class="text-xs p-1 text-gray-900 text-center border">1</td>
                                    <td class="text-xs p-1 text-gray-900 text-center border">1</td> */}
                                  </tr>

                                </tbody>
                                {/* </>)) : null} */}

                              </React.Fragment>
                            )) : null
                        }

                      </table>
                    </div>
                  </div>
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

  console.log('dashboarddashboarddashboarddashboard', dashboard);
  return {
    users,
    dashboard,
    setting
  };
}
export default connect(mapStateToProps)(Attendance);
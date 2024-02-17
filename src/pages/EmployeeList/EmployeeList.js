import React, { Component } from 'react';
import { dashboardActions } from '../../_actions';
import { connect } from 'react-redux';
import { MdOutlineEdit, MdOutlineClose } from 'react-icons/md';
import { ImEye } from 'react-icons/im';
import 'react-confirm-alert/src/react-confirm-alert.css';
import LoadingOverlay from 'react-loading-overlay';
import { confirmAlert } from 'react-confirm-alert';
class EmployeeList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      offset: 0,
      size: 10,
      keyWord: "",
      pageNo: 1,
      formField: {},
      errorField: {},
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

    this.props.dispatch(dashboardActions.getEmployeeList(data));
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
                onClick: () => this.props.dispatch(dashboardActions.deleteEmployee(datatemp))
            },
            {
                label: 'No'
            }
        ]
    });
}


  render() {



    let { dashboard } = this.props;
    let { loading, getEmployeeList, } = dashboard;


    return (

      <>



        <div className="h-screen overflow-y-auto w-full bg-gray-100 p-6">
          <section className='space-y-6 bg-white border border-slate-300' >
            <div className='px-5 border border-slate-300 rounded-sm'>
              <div className='flex justify-between items-center py-6'>
                <div>
                  <h1 className='text-base leading-normal  text-gray-500'>Employee's List</h1>
                </div>
                <div>
                  <input type='text' className='w-full border px-4 py-1.5 rounded-xs focus:outline-none text-base placeholder:font-normal font-medium text-black placeholder-gray-500' placeholder='Search...' />
                </div>
              </div>
              <div className="max-w-full overflow-auto">
                <div className="inline-block min-w-full">
                  <div className="overflow-x-hidden">
                    <table className="min-w-full text-left border border-slate-300 border-collapse bg-white">
                      <thead className="">
                        <tr className="text-left border border-slate-300">
                          <th scope="col" className="px-4 py-3 text-left text-sm capitalize font-medium text-gray-600 whitespace-nowrap">S.No.</th>
                          <th scope="col" className="px-4 py-3 text-left text-sm capitalize font-medium text-gray-600 whitespace-nowrap">Employee Code</th>
                          <th scope="col" className="px-4 py-3 text-left text-sm capitalize font-medium text-gray-600 whitespace-nowrap">Employee Name</th>
                          <th scope="col" className="px-4 py-3 text-left text-sm capitalize font-medium text-gray-600 whitespace-nowrap">Department</th>
                          <th scope="col" className="px-4 py-3 text-left text-sm capitalize font-medium text-gray-600 whitespace-nowrap">Qualification</th>
                          <th scope="col" className="px-4 py-3 text-left text-sm capitalize font-medium text-gray-600 whitespace-nowrap">Designation</th>
                          <th scope="col" className="px-4 py-3 text-left text-sm capitalize font-medium text-gray-600 whitespace-nowrap">Mobile</th>
                          <th scope="col" className="px-4 py-3 text-left text-sm capitalize font-medium text-gray-600 whitespace-nowrap">Email</th>
                          <th scope="col" className="px-4 py-3 text-left text-sm capitalize font-medium text-gray-600 whitespace-nowrap">Present/Absent</th>
                          <th scope="col" className="px-4 py-3 text-left text-sm capitalize font-medium text-gray-600 whitespace-nowrap">Action</th>
                        </tr>
                      </thead>
                      <tbody>

                        {
                          getEmployeeList && getEmployeeList.length > 0 ?
                            getEmployeeList.map((element, index) => (
                              <>
                                <tr className="hover:bg-[#FF8008]/10 cursor-pointer border border-slate-300">
                                  <td className=" text-left px-4 py-3 text-sm font-serif text-black bg-white capitalize whitespace-nowrap">{index}</td>
                                  <td className=" text-left px-4 py-3 text-sm font-serif text-black bg-white capitalize whitespace-nowrap">{element && element.code ? element.code : "-"}</td>
                                  <td className=" text-left px-4 py-3 text-sm font-serif text-black bg-white capitalize whitespace-nowrap">{element && element.fname ? element.fname : "-"}{element && element.lname ? element.lname : "-"}</td>
                                  <td className=" text-left px-4 py-3 text-sm font-serif text-black bg-white capitalize whitespace-nowrap">{element && element.fname ? element.fname : "-"}{element && element.lname ? element.lname : "-"}</td>
                                  <td className=" text-left px-4 py-3 text-sm font-serif text-black bg-white capitalize whitespace-nowrap">{element && element.department ? element.department : "-"}</td>
                                  <td className=" text-left px-4 py-3 text-sm font-serif text-black bg-white capitalize whitespace-nowrap">{element && element.Designation ? element.Designation : "-"}</td>
                                  <td className=" text-left px-4 py-3 text-sm font-serif text-black bg-white capitalize whitespace-nowrap">{element && element.mobile ? element.mobile : "-"}</td>
                                  <td className=" text-left px-4 py-3 text-sm font-serif text-black bg-white capitalize whitespace-nowrap">{element && element.rollNo ? element.rollNo : "-"}</td>
                                  <td className=" text-left px-4 py-3 text-sm font-serif text-black bg-white capitalize whitespace-nowrap"><button className='bg-red-600 text-white rounded-sm py-0.5 px-2 text-sm'>Absent</button></td>
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
export default connect(mapStateToProps)(EmployeeList);
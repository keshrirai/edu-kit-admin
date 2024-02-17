import React, { Component } from 'react';
import { dashboardActions } from '../../_actions';
import { connect } from 'react-redux';
import { MdOutlineEdit, MdOutlineClose } from 'react-icons/md';
// import { ImEye } from 'react-icons/im';
// import 'react-confirm-alert/src/react-confirm-alert.css';
// import LoadingOverlay from 'react-loading-overlay';

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

    this.props.dispatch(dashboardActions.getExamList(data));
  }

  render() {

    let { dashboard } = this.props;
    let { getExamList} = dashboard;

    return (

      <>



        <div className="w-full h-screen p-6 overflow-y-auto bg-gray-100">
          <section className='space-y-6 bg-white border border-slate-300' >
            <div className='px-5 border rounded-sm border-slate-300'>
              <div className='flex items-center justify-between py-6'>
                <div>
                  <h1 className='text-base leading-normal text-gray-500'>Role's List</h1>
                </div>
                <div>
                  <input type='text' className='w-full border px-4 py-1.5 rounded-xs focus:outline-none text-base placeholder:font-normal font-medium text-black placeholder-gray-500' placeholder='Search...' />
                </div>
              </div>
              <div className="max-w-full overflow-auto">
                <div className="inline-block min-w-full">
                  <div className="overflow-x-hidden">
                    <table className="min-w-full text-left bg-white border border-collapse border-slate-300">
                      <thead className="">
                        <tr className="text-left border border-slate-300">
                          <th scope="col" className="px-4 py-3 text-sm font-medium text-left text-gray-600 capitalize whitespace-nowrap">Sl.N.</th>
                          <th scope="col" className="px-4 py-3 text-sm font-medium text-left text-gray-600 capitalize whitespace-nowrap">exam Code</th>
                          <th scope="col" className="px-4 py-3 text-sm font-medium text-left text-gray-600 capitalize whitespace-nowrap">exam Type</th>
                          <th scope="col" className="px-4 py-3 text-sm font-medium text-left text-gray-600 capitalize whitespace-nowrap">exam Name</th>
                          <th scope="col" className="px-4 py-3 text-sm font-medium text-left text-gray-600 capitalize whitespace-nowrap">description</th>
                          <th scope="col" className="px-4 py-3 text-sm font-medium text-left text-gray-600 capitalize whitespace-nowrap">invigilator</th>
                          <th scope="col" className="px-4 py-3 text-sm font-medium text-left text-gray-600 capitalize whitespace-nowrap">room No</th>
                          <th scope="col" className="px-4 py-3 text-sm font-medium text-left text-gray-600 capitalize whitespace-nowrap">start Date</th>
                          <th scope="col" className="px-4 py-3 text-sm font-medium text-left text-gray-600 capitalize whitespace-nowrap">end Date</th>
                          <th scope="col" className="px-4 py-3 text-sm font-medium text-left text-gray-600 capitalize whitespace-nowrap">start Time</th>
                          <th scope="col" className="px-4 py-3 text-sm font-medium text-left text-gray-600 capitalize whitespace-nowrap">end Time</th>
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
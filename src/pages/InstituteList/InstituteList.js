import React, { Component } from 'react';
import { dashboardActions } from '../../_actions';
import { connect } from 'react-redux';
import { MdOutlineEdit, MdOutlineClose } from 'react-icons/md';
import { ImEye } from 'react-icons/im';
import 'react-confirm-alert/src/react-confirm-alert.css';
import LoadingOverlay from 'react-loading-overlay';

class InstituteList extends Component {

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

    this.props.dispatch(dashboardActions.getInstList(data));
  }

  render() {



    let { dashboard } = this.props;
    let { loading, getInstList, } = dashboard;


    return (

      <>



        <div className="h-screen overflow-y-auto w-full bg-gray-100 p-6">
          <section className='space-y-6 bg-white border border-slate-300' >
            <div className='px-5 border border-slate-300 rounded-sm'>
              <div className='flex justify-between items-center py-6'>
                <div>
                  <h1 className='text-base leading-normal  text-gray-500'>Institute's List</h1>
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
                          <th scope="col" className="px-4 py-3 text-left text-sm capitalize font-medium text-gray-600 whitespace-nowrap">Sl.N.</th>
                          <th scope="col" className="px-4 py-3 text-left text-sm capitalize font-medium text-gray-600 whitespace-nowrap">Institute Name</th>
                          <th scope="col" className="px-4 py-3 text-left text-sm capitalize font-medium text-gray-600 whitespace-nowrap">Institute Url</th>
                          <th scope="col" className="px-4 py-3 text-left text-sm capitalize font-medium text-gray-600 whitespace-nowrap">Institute Image</th>
                          <th scope="col" className="px-4 py-3 text-left text-sm capitalize font-medium text-gray-600 whitespace-nowrap">Action</th>
                        </tr>
                      </thead>
                      <tbody>

                        {
                          getInstList && getInstList.length > 0 ?
                            getInstList.map((element, index) => (
                              <>
                                <tr className="hover:bg-[#FF8008]/10 cursor-pointer border border-slate-300">
                                  <td className=" text-left px-4 py-3 text-sm font-serif text-black bg-white capitalize whitespace-nowrap">{element && element.department ? element.department : "-"}</td>
                                  <td className=" text-left px-4 py-3 text-sm font-serif text-black bg-white capitalize whitespace-nowrap">{element && element.name ? element.name : "-"}</td>
                                  <td className=" text-left px-4 py-3 text-sm font-serif text-black bg-white capitalize whitespace-nowrap">{element && element.logoUrl ? element.logoUrl : "-"}</td>
                                  <td className=" text-left px-4 py-3 text-sm font-serif text-black bg-white capitalize whitespace-nowrap">{element && element.logo ? element.logo : "-"}{element && element.lname ? element.lname : "-"}</td>
                                  <td className="px-4 py-3 whitespace-nowrap">
                                    <span className='flex space-x-1'><MdOutlineEdit className='text-blue-500 h-6 w-6' /><ImEye className='h-6 w-6 text-blue-500' /><MdOutlineClose className='text-blue-500 h-6 w-6' /></span>
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
export default connect(mapStateToProps)(InstituteList);
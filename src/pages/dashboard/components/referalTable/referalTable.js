import React, { Component } from 'react';
// import { dashboardActions, userActions, alertActions } from '../../_actions';
import { dashboardActions, userActions, alertActions } from '../../../../_actions';
import { connect } from 'react-redux';
import LoadingOverlay from 'react-loading-overlay';
import moment from 'moment';
import jsPDF from "jspdf";
import "jspdf-autotable";
import { GiTireIronCross } from "react-icons/gi";
import { BsCurrencyDollar } from "react-icons/bs";
import { ImArrowUp } from "react-icons/im";
import { SiBitcoinsv } from "react-icons/si";
import { FaEthereum } from "react-icons/fa";
import { TbCurrencyLitecoin } from "react-icons/tb";
// import Marquee from 'react-fast-marquee';
class Dashboard extends Component {

  constructor(props) {
    super(props);
    this.state = {
      offset: 0,
      pageNo: 1,
      size: 10,
      priceTempData: {
        BPC: 1,
        btcPrice: 0,
        dollerPrice: 0,
      },
      fieldslogin: {},
      errorslogin: {},
    }
  }

  componentDidMount() {

    let data = this.props.match.params.refId;
    // console.log("componentDidMount___this.props.match.params.refId:", data);

    if (this.props.match.params.refId) {
      this.props.dispatch(userActions.getReferalById({ refByUserId: data }));
    } else {
      this.props.dispatch(userActions.getReferalById());

    }


    this.props.dispatch(userActions.getUserDetails());
    window.scrollTo(0, 0)
  }


  handleReferalById = (data) => {
    // // console.log("handleReferalById_____--data:", data);

    // console.log(`/app/referalTable/` + data.id);

    this.props.history.push(`/app/referalTable/` + data.id)
    // if (data.refCount > 0) {
    //     this.props.dispatch(userActions.getReferalById({ refByUserId: data.refByUserId ? data.refByUserId : data.id }));
    // }
  }




  render() {

    let { users } = this.props;
    let { loading, referalItems } = users;

    return (
      <>

        <div >
          <LoadingOverlay
            active={loading}
            className="temp001"
            spinner
            text='Please wait...' />
        </div>

        <main className="flex-1 overflow-y-auto focus:outline-none  bg-gray-100  p-6"  >


          <div className=' bg-white  border rounded-md p-4 space-y-6'>

            <h2 className='text-xl font-medium text-black'>Reffral Details</h2>

            <div className=''>
              <div className="overflow-hidden pb-2 ">
                <div className="overflow-auto max-w-full ">
                  <div className="inline-block min-w-full  ">
                    <div className="overflow-hidden  ">

                      <table className="min-w-full text-center divide-y border-b">
                        <tr className="text-center">
                          <th scope="col" className="whitespace-nowrap px-6 py-2 text-center text-md capitalize font-medium text-gray-600 ">username</th>
                          <th scope="col" className="whitespace-nowrap px-6 py-2 text-center text-md capitalize font-medium text-gray-600 ">email</th>
                          <th scope="col" className="whitespace-nowrap px-6 py-2 text-center text-md capitalize font-medium text-gray-600 ">refByCode</th>
                          <th scope="col" className="whitespace-nowrap px-6 py-2 text-center text-md capitalize font-medium text-gray-600 ">refCode</th>
                          <th scope="col" className="whitespace-nowrap px-6 py-2 text-center text-md capitalize font-medium text-gray-600 ">refCount</th>
                        </tr>

                        {
                          this.props.match.params.refId ?
                          <tbody className='divide-y' >

                              {
                                referalItems && referalItems.length > 0 ?
                                  referalItems.map((element, index) => (
                                    <React.Fragment key={index}>
                                    <tr className="hover:bg-[#FF8008]/10 cursor-pointer">
                                        <td className="whitespace-nowrap  text-center px-[11.5px] py-3 text-xs font-semibold text-black bg-white uppercase ">{element && element.userName ? element.userName : "-"}</td>
                                        <td className="whitespace-nowrap  text-center px-[11.5px] py-3 text-xs font-semibold text-black bg-white uppercase ">{element && element.email ? element.email : "-"}</td>
                                        <td className="whitespace-nowrap  text-center px-[11.5px] py-3 text-xs font-semibold text-black bg-white uppercase ">{element && element.refByCode ? element.refByCode : "-"}</td>
                                        <td className="whitespace-nowrap  text-center px-[11.5px] py-3 text-xs font-semibold text-black bg-white uppercase ">{element && element.refCode ? element.refCode : "-"}</td>
                                        <td className={`${element && element.refCount === 0 ? "whitespace-nowrap  text-center px-[11.5px] py-3 text-xs font-semibold text-black bg-white uppercase" : "whitespace-nowrap  text-center px-[11.5px] py-3 text-xs font-semibold text-black bg-white uppercase"}`} onClick={() => this.handleReferalById(element)}>{element && element.refCount ? element.refCount : 0}</td>

                                      </tr>
                                    </React.Fragment>

                                  )) : null
                              }

                            </tbody>
                            :

                            <tbody className='divide-y' >

                              {
                                referalItems && referalItems.length > 0 ?
                                  referalItems.map((element, index) => (
                                    <React.Fragment key={index}>
                                    <tr className="hover:bg-[#FF8008]/10 cursor-pointer">
                                        <td className="whitespace-nowrap  text-center px-[11.5px] py-3 text-xs font-semibold text-black bg-white uppercase ">{element && element.userName ? element.userName : "-"}</td>
                                        <td className="whitespace-nowrap  text-center px-[11.5px] py-3 text-xs font-semibold text-black bg-white uppercase ">{element && element.email ? element.email : "-"}</td>
                                        <td className="whitespace-nowrap  text-center px-[11.5px] py-3 text-xs font-semibold text-black bg-white uppercase ">{element && element.refByCode ? element.refByCode : "-"}</td>
                                        <td className="whitespace-nowrap  text-center px-[11.5px] py-3 text-xs font-semibold text-black bg-white uppercase ">{element && element.refCode ? element.refCode : "-"}</td>

                                        {element && element.refCount === 0 ?
                                          <td className={`${element && element.refCount === 0 ? " whitespace-nowrap  text-center px-[11.5px] py-3 text-xs font-semibold text-black bg-white uppercase" : "whitespace-nowrap  text-center px-[11.5px] py-3 text-xs font-semibold text-black bg-white uppercase cursor-pointer"}`} >{element && element.refCount ? element.refCount : 0}</td>

                                          :
                                          <td className={`${element && element.refCount === 0 ? " whitespace-nowrap  text-center px-[11.5px] py-3 text-xs font-semibold text-black bg-white uppercase" : "whitespace-nowrap  text-center px-[11.5px] py-3 text-xs font-semibold text-black bg-white uppercase cursor-pointer"}`} onClick={() => this.handleReferalById(element)}>{element && element.refCount ? element.refCount : 0}</td>

                                        }

                                        {/* <td className={`${element && element.refCount === 0 ? " px-6 py-1 whitespace-nowrap border border-black text-black text-center text-xs" : "px-6 py-1 whitespace-nowrap border border-black text-black text-center text-xs cursor-pointer"}`} onClick={() => this.handleReferalById(element)}>{element && element.refCount ? element.refCount : 0}</td> */}
                                      </tr>
                                    </React.Fragment>

                                  )) : null
                              }

                            </tbody>

                        }


                        {/* <tbody>

                                                        {
                                                            referalItems && referalItems.length > 0 ?
                                                                referalItems.map((element, index) => (
                                                                    <React.Fragment key={index}>
                                                                        <tr>
                                                                            <td className="px-6 py-1 whitespace-nowrap border border-black text-black text-center text-xs">{element && element.userName ? element.userName : "-"}</td>
                                                                            <td className="px-6 py-1 whitespace-nowrap border border-black text-black text-center text-xs">{element && element.email ? element.email : "-"}</td>
                                                                            <td className="px-6 py-1 whitespace-nowrap border border-black text-black text-center text-xs">{element && element.refByCode ? element.refByCode : "-"}</td>
                                                                            <td className="px-6 py-1 whitespace-nowrap border border-black text-black text-center text-xs">{element && element.refCode ? element.refCode : "-"}</td>
                                                                            <td className="px-6 py-1 whitespace-nowrap border border-black text-black text-center text-xs">{element && element.refCount ? element.refCount : 0}</td>
                                                                        </tr>
                                                                    </React.Fragment>

                                                                )) : null
                                                        }
                                                    </tbody> */}

                      </table>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>


        </main>


      </>
    );
  }

}

function mapStateToProps(state) {
  const { users, dashboard } = state;
  const { overview } = users ? users : {};
  const { setting, user } = overview ? overview : {};
  // console.log("mapStateToProps______________dashboard::", dashboard);
  return {
    users,
    setting,
    user,
    dashboard
  };
}
export default connect(mapStateToProps)(Dashboard);
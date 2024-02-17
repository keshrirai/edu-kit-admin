import React, { Component } from 'react';
import { userActions } from '../../_actions';
import { connect } from 'react-redux';


class directincome extends Component {

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
      "txType": "SEND_RECEIVED",
      "keyWord": "",
      "pageNo": 1,
      "size": 10
    }

    this.props.dispatch(userActions.getTx(data));
  }

  transactionSearchSubmit = (e) => {
    e.preventDefault();
    if (this.handleValidation()) {
      let reqData = {
        "txType": "SEND_RECEIVED",
        "keyWord": "",
        "pageNo": 1,
        "size": 10,
        // "coinId": this.state.formField && this.state.formField.coinId ? this.state.formField.coinId : null,
        "from": (this.state.dateDetails.from_date),
        "to": (this.state.dateDetails.to_date),
      }
      // console.log('transactionSearch_____******', reqData);
      // console.log('this.state.dateDetails******', this.state.dateDetails);
      this.props.dispatch(userActions.transactionSearch(reqData, this.props));
    }
  }


  getDate = (e) => {
    e.preventDefault();
    let { name, value } = e.target;
    let dateDetails = this.state.dateDetails;
    dateDetails[name] = value;
    // console.log(name, value);
    this.setState({ dateDetails });
  }

  inputChange = (event) => {
    // console.log(event.target.name, event.target.value);
    // event.preventDefault();
    const { formField, errorField } = this.state;
    formField[event.target.name] = event.target.value;
    errorField[event.target.name] = "";
    // console.log(event.target.name, event.target.value);
    this.setState({ formField, errorField });
  }


  handleFromDate = (event) => {
    // console.log(event.target.name, event.target.value);
    // event.preventDefault();
    const { dateDetails } = this.state;
    dateDetails["from_date"] = event.target.value;

    this.setState({ dateDetails });
  }


  handleToDate = (event) => {
    // console.log(event.target.name, event.target.value);
    // event.preventDefault();
    const { dateDetails } = this.state;
    dateDetails["to_date"] = event.target.value;

    this.setState({ dateDetails });
  }

  handlePageClick = (data) => {
    let offset = Math.ceil(data.selected * this.state.size);
    this.setState({ offset: offset, page: data.selected });
    let datatemp = {
      "keyWord": this.state.keyWord,
      "pageNo": data.selected + 1,
      "size": this.state.size,
      "txType": "SEND_RECEIVED",
    }
    this.props.dispatch(userActions.getTx(datatemp));
  }

  handleValidation = () => {
    let formField = this.state.formField;
    let errorField = {};
    let formIsValid = true;

    //coinId
    // if (!formField["coinId"] || formField["coinId"] === "") {
    //   formIsValid = false;
    //   errorField["coinId"] = "Cannot be empty";
    // }

    // console.log('errorsIndex_errorsIndex_:::::', errorField);
    this.setState({ errorField: errorField });
    return formIsValid;
  }



  render() {



    let { users } = this.props;
    let { txList, loading, txTotal } = users;

    // console.log("RENDER_txTotaltxTotal:::::", txTotal);
    // // console.log("RENDER_formField:::::", this.state.formField);


    return (

      <>

        {/* <div >
          <LoadingOverlay
            active={loading}
            className="temp001"
            spinner
            text='Please wait...' />
        </div> */}
        <div className="h-screen overflow-y-auto bg_page">
          <div className="p-6">

            <h1 className="bg-gray-50 text-xl bont-bold border py-3 px-1 mb-2">TABLE INCOME</h1>
          













            <section className="bg-white p-2">
              <div className="overflow-hidden">
                <div className="overflow-auto max-w-full">
                  <div className="inline-block min-w-full">
                    <div className="overflow-hidden">
                      <table className="min-w-full text-center">
                        <thead className="bg-[#7d080d] text-white ">
                          <tr className=" text-center items-start ">
                            <th scope="col" className="text-center text-sm font-semibold py-4 px-56">#</th>
                            <th scope="col" className="text-center text-sm font-semibold px-56  ">Rate</th>
                            <th scope="col" className="text-center text-sm font-semibold px-56">Investment</th>
                         
                          </tr>
                        </thead>
                        <tbody className="">
                          <tr className="bg-white">
                            <td className=" text-center text-sm py-4 text-black">1</td>
                            <td className=" text-center text-sm text-black">2%</td>
                            <td className=" text-center text-sm text-black">6120.02</td>
                          
                          </tr>
                          <tr className="bg-gray-200 ">
                            <td className="text-black text-center text-sm py-4">2</td>
                            <td className="text-center text-sm text-black">2%</td>
                            <td className="text-center text-sm text-black">6120.02</td>
                            
                          </tr>
                          <tr className="bg-white ">
                            <td className="text-center text-sm py-4 text-black">3</td>
                            <td className="text-center text-sm text-black">5%</td>
                            <td className="text-center text-sm text-black">6120.02</td>
                        
                          </tr>
                          <tr className="bg-gray-200 ">
                            <td className="text-center text-sm py-4 text-black">4</td>
                            <td className="text-center text-sm text-black">1%</td>
                            <td className="text-center text-sm text-black">6120.02</td>
                           
                          </tr>
                          <tr className="bg-white ">
                            <td className="text-center text-sm py-4 text-black">5</td>
                            <td className="text-center text-sm text-black">3%</td>
                            <td className="text-center text-sm text-black">6120.02</td>
                       
                          </tr>
                          <tr className="bg-gray-200 ">
                            <td className="text-center text-sm py-4 text-black">6</td>
                            <td className="text-center text-sm text-black">1%</td>
                            <td className="text-center text-sm text-black">6120.02</td>
                        
                          </tr>
                          <tr className="bg-white ">
                            <td className="text-center text-sm py-4 text-black">7</td>
                            <td className="text-center text-sm text-black">3%</td>
                            <td className="text-center text-sm text-black">6120.02</td>
                      
                          </tr>
                          <tr className="bg-gray-200 ">
                            <td className="text-center text-sm py-4 text-black">8</td>
                            <td className="text-center text-sm text-black">1%</td>
                            <td className="text-center text-sm text-black">6120.02</td>
                        
                          </tr>
                          <tr className="bg-white ">
                            <td className="text-center text-sm py-4 text-black">9</td>
                            <td className="text-center text-sm text-black">3%</td>
                            <td className="text-center text-sm text-black">6120.02</td>
                       
                          </tr>
                          <tr className="bg-gray-200 ">
                            <td className="text-center text-sm py-4 text-black">10</td>
                            <td className="text-center text-sm text-black">1%</td>
                            <td className="text-center text-sm text-black">6120.02</td>
                        
                          </tr>
                          <tr className="bg-white ">
                            <td className="text-center text-sm py-4 text-black">11</td>
                            <td className="text-center text-sm text-black">3%</td>
                            <td className="text-center text-sm text-black">6120.02</td>
                           
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>

              </div>
            </section>

          </div>
        </div>


      </>

    );
  }
}

function mapStateToProps(state) {
  const { users } = state;
  const { overview } = users ? users : {};
  const { setting } = overview ? overview : {};
  return {
    users,
    setting
  };
}
export default connect(mapStateToProps)(directincome);
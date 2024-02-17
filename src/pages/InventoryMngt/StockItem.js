import React, { Component } from 'react';
import { dashboardActions } from '../../_actions';
import { connect } from 'react-redux';
import { MdOutlineClose, MdOutlineEdit } from 'react-icons/md';
import 'react-confirm-alert/src/react-confirm-alert.css';
import { confirmAlert } from 'react-confirm-alert';

class StockItem extends Component {

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
      fieldsStockItem: {},
      errorStockItem: {},
      fieldsStockItemUpdate: {},
      errorStockItemUpdate: {},
    }
  }

  componentDidMount() {
    let data = {
      "keyWord": "",
      "pageNo": 1,
      "size": 10
    }
    this.props.dispatch(dashboardActions.getAllStudent(data));
    this.props.dispatch(dashboardActions.getAllStockCat(data));
    this.props.dispatch(dashboardActions.getStockItemList(data));
  }

  static getDerivedStateFromProps(nextProps, prevState) {

    if (nextProps.dashboard.updateShow) {
      return {
        ...nextProps,
        fieldsStockItemUpdate: {},
        errorStockItemUpdate: {},
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
    let fieldsStockItem = this.state.fieldsStockItem;
    let errorStockItem = this.state.errorStockItem;
    fieldsStockItem[name] = value;
    errorStockItem[name] = "";
    console.log(name, value);
    this.setState({ fieldsStockItem, errorStockItem });
  }

  inputChangeUpdate = (e) => {
    e.preventDefault();
    let { name, value } = e.target;
    let fieldsStockItemUpdate = this.state.fieldsStockItemUpdate;
    let errorStockItemUpdate = this.state.errorStockItemUpdate;
    fieldsStockItemUpdate[name] = value;
    errorStockItemUpdate[name] = "";
    console.log(name, value);
    this.setState({ fieldsStockItemUpdate, errorStockItemUpdate });
  }

  batchSubmit = (e) => {
    e.preventDefault();
    if (this.handleValidationBatch()) {
      let { stockCatId, openingQuantity, name, code, description } = this.state.fieldsStockItem;
      this.props.dispatch(dashboardActions.createStockItem({
        stockCatId: stockCatId,
        name: name,
        code: code,
        openingQuantity: openingQuantity,
        description: description,
      }, this.props));

      console.log('this.propsthis.propsthis.propsthis.propsthis.props', this.props);
    }
  }


  batchUpdateSubmit = (e) => {
    e.preventDefault();
    if (this.handleValidationUpdateBatch()) {
      let { stockCatId, name, code, openingQuantity, description, id } = this.state.fieldsStockItemUpdate;
      this.props.dispatch(dashboardActions.updateStockItem({
        id: id,
        stockCatId: stockCatId,
        name: name,
        code: code,
        openingQuantity: openingQuantity,
        description: description,
      }, this.props));
    }
  }
  resetForm = (e) => {
    e.preventDefault();
    this.setState({
      fieldsStockItem: {},
      errorStockItem: {},
    })
    this.hideErrorcomment();
  }

  handleValidationBatch = () => {
    let fieldsStockItem = this.state.fieldsStockItem;
    let errorStockItem = {};
    let formIsValid = true;

    //stockCatId
    if (!fieldsStockItem["stockCatId"]) {
      formIsValid = false;
      errorStockItem["stockCatId"] = "Please enter stockCatId!";
    }
    //name
    if (!fieldsStockItem["name"]) {
      formIsValid = false;
      errorStockItem["name"] = "Please select name!";
    }
    //code
    if (!fieldsStockItem["code"]) {
      formIsValid = false;
      errorStockItem["code"] = "Please enter code!";
    }
    //openingQuantity
    if (!fieldsStockItem["openingQuantity"]) {
      formIsValid = false;
      errorStockItem["openingQuantity"] = "Please enter openingQuantity!";
    }
    //description
    if (!fieldsStockItem["description"]) {
      formIsValid = false;
      errorStockItem["description"] = "Please enter description!";
    }
    console.log('errorStockItemUpdateerrorStockItemUpdateerrorStockItemUpdate', errorStockItem);
    this.setState({ errorStockItem: errorStockItem });
    return formIsValid;
  }
  handleValidationUpdateBatch = () => {
    let fieldsStockItemUpdate = this.state.fieldsStockItemUpdate;
    let errorStockItemUpdate = {};
    let formIsValid = true;

    //subject
    // if (!fieldsStockItemUpdate["stockCatId"]) {
    //   formIsValid = false;
    //   errorStockItemUpdate["stockCatId"] = "Please enter stockCatId";
    // }
    //name
    if (!fieldsStockItemUpdate["name"]) {
      formIsValid = false;
      errorStockItemUpdate["name"] = "Please select name!";
    }
    //code
    if (!fieldsStockItemUpdate["code"]) {
      formIsValid = false;
      errorStockItemUpdate["code"] = "Please select code!";
    }
    //openingQuantity
    if (!fieldsStockItemUpdate["openingQuantity"]) {
      formIsValid = false;
      errorStockItemUpdate["openingQuantity"] = "Please enter openingQuantity!";
    }
    //description
    if (!fieldsStockItemUpdate["description"]) {
      formIsValid = false;
      errorStockItemUpdate["description"] = "Please enter description!";
    }
    console.log('errorStockItemUpdateerrorStockItemUpdateerrorStockItemUpdate', errorStockItemUpdate);
    this.setState({ errorStockItemUpdate: errorStockItemUpdate });
    return formIsValid;
  }

  handleUpadte = (data) => {
    this.setState({ fieldsStockItemUpdate: data, updateShow: true });
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
          onClick: () => this.props.dispatch(dashboardActions.deleteStockItem(datatemp))
        },
        {
          label: 'No'
        }
      ]
    });
  }


  render() {

    let { dashboard } = this.props;
    let { getAllStockCat, getStockItemList } = dashboard;

    console.log("RENDER_____________this.state.update5252525255555555555555555:::", getAllStockCat);

    return (

      <>

        <div className="w-full h-screen p-6 overflow-y-auto bg-gray-100">
          <section>


            <div className='bg-white border border-slate-300'>

              {
                this.state.updateShow ?
                  <>
                    <div className='p-4 border-b border-slate-300'>
                      <h1 className='text-xl font-normal'>Update Stock Items</h1>
                    </div>
                    <div className='space-y-6'>
                      <div className='grid grid-cols-1 gap-6 p-8 lg:grid-cols-4 md:grid-cols-2'>
                        <div>
                          <label class=' text-sm font-normal text-gray-600 pb-4'>Course</label>
                          <div className='relative flex items-center w-full py-2 text-gray-800 bg-white border rounded-sm appearance-none cursor-pointer md:w-auto'>
                            <select className="w-full px-4 text-sm font-normal bg-white appearance-none focus:outline-none" onChange={this.inputChange}
                              name="stockCatId">
                              {
                                getAllStockCat && getAllStockCat.length > 0 ?
                                  getAllStockCat.map((element, index) => (
                                    <React.Fragment>
                                      <option value={element && element.id ? element.id : null}>{element && element.name ? element.name : null}</option>
                                    </React.Fragment>
                                  )) : null
                              }
                            </select>
                            <div className="absolute top-0 bottom-0 right-0 flex items-center px-2 text-gray-700 pointer-events-none">
                              <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                              </svg>
                            </div>
                          </div>
                        </div>
                        <div>
                          <label class=' text-sm font-normal text-gray-600 pb-4'>Name</label>
                          <input className={`w-full border px-4 py-1.5 rounded-xs focus:outline-none text-base text-gray-700 placeholder-gray-500 ${!this.state.errorStockItemUpdate["name"] ? "'border-opacity-20 " : "order-opacity-100 border-red-500 bg-red-100"}`}
                            name="name"
                            value={this.state.fieldsStockItemUpdate && this.state.fieldsStockItemUpdate.name ? this.state.fieldsStockItemUpdate.name : ""}
                            onChange={this.inputChangeUpdate} placeholder='Enter Name' type="text" />
                          {this.state.errorStockItemUpdate["name"] ?
                            <div className="text-yellow-600 invalid-feedback">
                              {this.state.errorStockItemUpdate["name"]}
                            </div>
                            : null}
                        </div>
                        <div>
                          <label class=' text-sm font-normal text-gray-600 pb-4'>Code</label>
                          <input className={`w-full border px-4 py-1.5 rounded-xs focus:outline-none text-base text-gray-700 placeholder-gray-500 ${!this.state.errorStockItemUpdate["code"] ? "'border-opacity-20 " : "order-opacity-100 border-red-500 bg-red-100"}`}
                            name="code"
                            value={this.state.fieldsStockItemUpdate && this.state.fieldsStockItemUpdate.code ? this.state.fieldsStockItemUpdate.code : ""}
                            onChange={this.inputChangeUpdate} placeholder='Enter Code' type="text" />
                          {this.state.errorStockItemUpdate["code"] ?
                            <div className="text-yellow-600 invalid-feedback">
                              {this.state.errorStockItemUpdate["code"]}
                            </div>
                            : null}
                        </div>
                        <div>
                          <label class=' text-sm font-normal text-gray-600 pb-4'>Opening Quantity</label>
                          <input className={`w-full border px-4 py-1.5 rounded-xs focus:outline-none text-base text-gray-700 placeholder-gray-500 ${!this.state.errorStockItemUpdate["openingQuantity"] ? "'border-opacity-20 " : "order-opacity-100 border-red-500 bg-red-100"}`}
                            name="openingQuantity"
                            value={this.state.fieldsStockItemUpdate && this.state.fieldsStockItemUpdate.openingQuantity ? this.state.fieldsStockItemUpdate.openingQuantity : ""}
                            onChange={this.inputChangeUpdate} placeholder='Enter Opening Quantity' type="number" />
                          {this.state.errorStockItemUpdate["openingQuantity"] ?
                            <div className="text-yellow-600 invalid-feedback">
                              {this.state.errorStockItemUpdate["openingQuantity"]}
                            </div>
                            : null}
                        </div>
                        <div>
                          <label class=' text-sm font-normal text-gray-600 pb-4'>Description</label>
                          <input className={`w-full border px-4 py-1.5 rounded-xs focus:outline-none text-base text-gray-700 placeholder-gray-500 ${!this.state.errorStockItemUpdate["description"] ? "'border-opacity-20 " : "order-opacity-100 border-red-500 bg-red-100"}`}
                            name="description"
                            value={this.state.fieldsStockItemUpdate && this.state.fieldsStockItemUpdate.description ? this.state.fieldsStockItemUpdate.description : ""}
                            onChange={this.inputChangeUpdate} placeholder='Enter Description' type="text" />
                          {this.state.errorStockItemUpdate["description"] ?
                            <div className="text-yellow-600 invalid-feedback">
                              {this.state.errorStockItemUpdate["description"]}
                            </div>
                            : null}
                        </div>
                      </div>
                      <div className='flex justify-end w-full px-5 pb-4'>
                        <button className='px-6 py-2 text-sm text-white rounded-sm bg-sky-500' type="button" onClick={this.batchUpdateSubmit} data-config-id="01_primary-action">Save</button>
                      </div>
                    </div>
                  </>
                  :
                  <>
                    <div className='p-4 border-b border-slate-300'>
                      <h1 className='text-xl font-normal'>Add Stock Items</h1>
                    </div>
                    <div className='space-y-6'>
                      <div className='grid grid-cols-1 gap-6 p-8 lg:grid-cols-4 md:grid-cols-2'>
                        <div>
                          <label class=' text-sm font-normal text-gray-600 pb-4'>Course</label>
                          <div className='relative flex items-center w-full py-2 text-gray-800 bg-white border rounded-sm appearance-none cursor-pointer md:w-auto'>
                            <select className="w-full px-4 text-sm font-normal bg-white appearance-none focus:outline-none" onChange={this.inputChange}
                              name="stockCatId">
                              {
                                getAllStockCat && getAllStockCat.length > 0 ?
                                  getAllStockCat.map((element, index) => (
                                    <React.Fragment>
                                      <option value={element && element.id ? element.id : null}>{element && element.name ? element.name : null}</option>
                                    </React.Fragment>
                                  )) : null
                              }
                            </select>
                            <div className="absolute top-0 bottom-0 right-0 flex items-center px-2 text-gray-700 pointer-events-none">
                              <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                              </svg>
                            </div>
                          </div>
                        </div>
                        <div>
                          <label class=' text-sm font-normal text-gray-600 pb-4'>Name</label>
                          <input className={`w-full border px-4 py-1.5 rounded-xs focus:outline-none text-base text-gray-700 placeholder-gray-500 ${!this.state.errorStockItem["name"] ? "'border-opacity-20 " : "order-opacity-100 border-red-500 bg-red-100"}`}
                            name="name"
                            value={this.state.fieldsStockItem && this.state.fieldsStockItem["name"] ? this.state.fieldsStockItem["name"] : ""}
                            onChange={this.inputChange} placeholder='Enter Name' type="text" />
                          {this.state.errorStockItem["name"] ?
                            <div className="text-yellow-600 invalid-feedback">
                              {this.state.errorStockItem["name"]}
                            </div>
                            : null}
                        </div>
                        <div>
                          <label class=' text-sm font-normal text-gray-600 pb-4'>Code</label>
                          <input className={`w-full border px-4 py-1.5 rounded-xs focus:outline-none text-base text-gray-700 placeholder-gray-500 ${!this.state.errorStockItem["code"] ? "'border-opacity-20 " : "order-opacity-100 border-red-500 bg-red-100"}`}
                            name="code"
                            value={this.state.fieldsStockItem && this.state.fieldsStockItem["code"] ? this.state.fieldsStockItem["code"] : ""}
                            onChange={this.inputChange} placeholder='Enter Code' type="text" />
                          {this.state.errorStockItem["code"] ?
                            <div className="text-yellow-600 invalid-feedback">
                              {this.state.errorStockItem["code"]}
                            </div>
                            : null}
                        </div>
                        <div>
                          <label class=' text-sm font-normal text-gray-600 pb-4'>Opening Quantity</label>
                          <input className={`w-full border px-4 py-1.5 rounded-xs focus:outline-none text-base text-gray-700 placeholder-gray-500 ${!this.state.errorStockItem["openingQuantity"] ? "'border-opacity-20 " : "order-opacity-100 border-red-500 bg-red-100"}`}
                            name="openingQuantity"
                            value={this.state.fieldsStockItem && this.state.fieldsStockItem["openingQuantity"] ? this.state.fieldsStockItem["openingQuantity"] : ""}
                            onChange={this.inputChange} placeholder='Enter Opening Quantity' type="number" />
                          {this.state.errorStockItem["openingQuantity"] ?
                            <div className="text-yellow-600 invalid-feedback">
                              {this.state.errorStockItem["openingQuantity"]}
                            </div>
                            : null}
                        </div>
                        <div>
                          <label class=' text-sm font-normal text-gray-600 pb-4'>Description</label>
                          <input className={`w-full border px-4 py-1.5 rounded-xs focus:outline-none text-base text-gray-700 placeholder-gray-500 ${!this.state.errorStockItem["description"] ? "'border-opacity-20 " : "order-opacity-100 border-red-500 bg-red-100"}`}
                            name="description"
                            value={this.state.fieldsStockItem && this.state.fieldsStockItem["description"] ? this.state.fieldsStockItem["description"] : ""}
                            onChange={this.inputChange} placeholder='Enter Description' type="text" />
                          {this.state.errorStockItem["description"] ?
                            <div className="text-yellow-600 invalid-feedback">
                              {this.state.errorStockItem["description"]}
                            </div>
                            : null}
                        </div>
                      </div>
                      <div className='flex justify-end w-full px-5 pb-4'>
                        <button className='px-6 py-2 text-sm text-white rounded-sm bg-sky-500' type="button" onClick={this.batchSubmit} data-config-id="01_primary-action">Save</button>
                      </div>
                    </div>

                  </>
              }


            </div>


            <div className="max-w-full mt-6 overflow-auto">
              <div className="inline-block min-w-full ">
                <div className="overflow-hidden ">
                  <table className="min-w-full text-left bg-white border border-collapse border-slate-300">
                    <thead className="">
                      <tr className="text-left border border-slate-300">
                        <th scope="col" className="px-4 py-3 text-sm font-medium text-left text-gray-600 capitalize whitespace-nowrap">Sl.N.</th>
                        <th scope="col" className="px-4 py-3 text-sm font-medium text-left text-gray-600 capitalize whitespace-nowrap">code</th>
                        <th scope="col" className="px-4 py-3 text-sm font-medium text-left text-gray-600 capitalize whitespace-nowrap">name</th>
                        <th scope="col" className="px-4 py-3 text-sm font-medium text-left text-gray-600 capitalize whitespace-nowrap">description</th>
                        <th scope="col" className="px-4 py-3 text-sm font-medium text-left text-gray-600 capitalize whitespace-nowrap">openingQuantity</th>
                        <th scope="col" className="px-4 py-3 text-sm font-medium text-left text-gray-600 capitalize whitespace-nowrap">action</th>
                      </tr>
                    </thead>
                    <tbody className='divide-y' >

                      {
                        getStockItemList && getStockItemList.length > 0 ?
                          getStockItemList.map((element, index) => (
                            <>
                              <tr className="border border-slate-300">
                                <td className="px-4 py-3 font-serif text-sm text-left text-black uppercase bg-white whitespace-nowrap">1</td>
                                <td className="px-4 py-3 font-serif text-sm text-left text-black capitalize bg-white whitespace-nowrap">{element && element.code ? element.code : "-"}</td>
                                <td className="px-4 py-3 font-serif text-sm text-left text-black uppercase bg-white whitespace-nowrap">{element && element.name ? element.name : "-"}</td>
                                <td className="px-4 py-3 font-serif text-sm text-left text-black uppercase bg-white whitespace-nowrap">{element && element.description ? element.description : "-"}</td>
                                <td className="px-4 py-3 font-serif text-sm text-left text-black uppercase bg-white whitespace-nowrap">{element && element.openingQuantity ? element.openingQuantity : "-"}</td>
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
                          )) : <td colspan="7" className="col-span-7 whitespace-nowrap border border-gray-300 text-center px-[11.5px] py-3 text-xs font-semibold text-black bg-white uppercase bg-whj">Data Not Found</td>
                      }

                    </tbody>
                  </table>
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
export default connect(mapStateToProps)(StockItem);
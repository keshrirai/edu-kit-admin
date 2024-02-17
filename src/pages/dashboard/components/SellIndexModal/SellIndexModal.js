import React from "react";

import Modal from 'react-modal';
import moment from 'moment';



export default function SellIndexModal(props) {

  let { sellIndexCreateModal, handleCloseSellIndexModal, getIndexOrderData, offset, sellIndexSubmit } = props;
  // // console.log("MODAL____getCoinBalanceData", getCoinBalanceData);
  // console.log("MODAL____getIndexOrderData:::", getIndexOrderData);

  return (

    <Modal
      isOpen={sellIndexCreateModal}
    // contentLabel="Example Modal"
    >


      <div className="main-modal fixed w-full h-100 inset-0 z-50 overflow-hidden flex justify-center items-center sm:px-2 animated fadeIn faster bg-slate-700">
        <div className=" modal-container bg-slate-800 w-full md:w-[56rem] mx-auto rounded shadow-lg z-50 px-4">
          <div className="modal-content lg:py-4 py-2 text-left">
            {/*Title*/}
            <div className="flex justify-between items-center">
              <p className="text-xl font-bold">Sell Index</p>
              <div className="modal-close cursor-pointer z-50">
                {/* <svg onClick={() => handleCloseSellIndexModal()} className="fill-current text-black" xmlns="http://www.w3.org/2000/svg" width={18} height={18} viewBox="0 0 18 18">
                  <path d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z">
                  </path>
                </svg> */}
              </div>
              <p className="text-xl font-bold cursor-pointer" onClick={() => handleCloseSellIndexModal()}>X</p>
            </div>

            <div className="overflow-y-auto">

              <table className="mt-5 rounded-md bg-slate-900 shadow-2xl flex-wrap">
                <tr className="md:w-full sm:max-w-[320px]">
                  <th className="text-white text-xs">S.no </th>
                  <th className="text-white text-xs">DATE</th>
                  <th className="text-white text-xs">COIN NAME </th>
                  <th className="text-white text-xs ">INDEX NAME</th>
                  <th className="text-white text-xs">INDEX PRICE</th>
                  <th className="text-white text-xs">AMOUNT</th>
                  <th className="text-white text-xs">LOT</th>
                  <th className="text-white text-xs">ACTION</th>
                </tr>

                {
                  getIndexOrderData && getIndexOrderData.length > 0 ?
                    getIndexOrderData.map((element, index) => (<React.Fragment>
                      <tr className="text-white text-xs">
                        <td>
                          <p>{offset + index + 1}</p>
                        </td>
                        <td>
                          <p> {moment(new Date(parseInt(element.createdAt))).utcOffset("+05:30").format("YYYY-MM-DD HH:mm")}</p>
                        </td>
                        <td>
                          <p>{element && element.coinId && element.coinId.name ? element.coinId.name : "-"}</p>
                        </td>
                        <td>
                          <p>{element && element.indexId && element.indexId.name ? element.indexId.name : "-"}</p>
                        </td>
                        <td>
                          <p>{element && element.indexId && element.indexId.cPrice ? element.indexId.cPrice : "-"}</p>
                        </td>
                        <td>
                          <p>{element && element.amount ? element.amount : "-"}</p>
                        </td>
                        <td>
                          <p>{element && element.lot ? element.lot : "-"}</p>
                        </td>
                        <td>
                          <button onClick={() => sellIndexSubmit(element)} style={{ backgroundColor: "#20BFA9" }} type="button" className=" w-16 pl-2 py-1 text-white rounded-md cursor-pointer">
                            SELL</button>
                        </td>
                      </tr>
                    </React.Fragment>))
                    : null
                }





              </table>

            </div>

          </div>
        </div>
      </div>


    </Modal>



  );
}

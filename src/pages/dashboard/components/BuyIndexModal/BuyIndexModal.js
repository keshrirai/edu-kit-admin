import React from "react";

import Modal from 'react-modal';
import { FaDollarSign } from "react-icons/fa";
import { AiOutlineCheckCircle } from "react-icons/ai";


export default function BuyIndexModal(props) {

  let { buyIndexCreateModal, handleCloseBuyIndexModal, errorsIndex, fieldsIndex, inputChange, buyIndexSubmit, getCoinBalanceData, handleSelectCoin, balanceData, currentSelectedCoin, cPrice, inputChangeSelectCoin } = props;
  // console.log("MODAL____getCoinBalanceData", getCoinBalanceData);
  // console.log("MODAL____balanceData", balanceData);

  return (

    <Modal
      isOpen={buyIndexCreateModal}
    // contentLabel="Example Modal"
    >


      <div className="bg-slate-700 main-modal fixed w-full h-100 inset-0 z-50 overflow-hidden flex justify-center items-center animated fadeIn faster">
        <div className="bg-slate-800  outline-none  modal-container w-11/12 md:max-w-md mx-auto rounded shadow-lg z-50 overflow-y-auto">

          <div className="modal-content py-4 text-left px-6">
            <div className="flex justify-between items-center pb-3">
              <p className="text-2xl font-bold" >Buy Index</p>
              <div className="modal-close cursor-pointer z-50">
                {/* <svg onClick={() => handleCloseBuyIndexModal()} className="fill-current text-black" xmlns="http://www.w3.org/2000/svg" width={18} height={18} viewBox="0 0 18 18">
                  <path d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z">
                  </path>
                </svg> */}
              </div>
              <p className="text-lg font-bold cursor-pointer" onClick={() => handleCloseBuyIndexModal()}>X</p>
            </div>

            <div className="my-5">

              <form autoComplete="off">

                <div className="flex justify-center w-full">
                  <div className="mb-3 w-full">
                    <label className="text-white text-sm font-medium ">Coin :</label>
                    {/* bg-slate-700 py-3 text-sm px-3 font-bold shadow-md border border-slate-700 focus:bg-slate-700 outline-none rounded text-gray-400 */}
                    <select className="form-select appearance-none block lg:w-[400px] w-full sm:w[400] px-3 py-1.5 text-base font-normal  text-gray-300 bg-slate-700 bg-clip-padding bg-no-repeat  border border-solid border-slate-700 rounded transition ease-in-out  m-0  focus:outline-none" aria-label="Default select example"
                      onChange={inputChangeSelectCoin}
                      name="coinId"
                      value={fieldsIndex && fieldsIndex["coinId"] ? fieldsIndex["coinId"] : null}
                    >
                      <option selected>Plz Select Coin</option>
                      {
                        getCoinBalanceData && getCoinBalanceData.wallet && getCoinBalanceData.wallet.length > 0 ?
                          getCoinBalanceData.wallet.map((element, index) => (

                            <option value={JSON.stringify(element)}>{element && element.coinId && element.coinId.name ? element.coinId.name : "NA"}</option>

                          ))
                          : null
                      }
                    </select>
                    {errorsIndex && errorsIndex["coinId"] ?
                      <div className="invalid-feedback text-red-500">
                        {errorsIndex["coinId"]}
                      </div>
                      : null}
                  </div>
                </div>

                <div className="py-3">
                  <div className="mt-1 rounded-md shadow-sm relative">
                    <label className="text-white text-sm font-medium ">Balance :</label>
                    <input className={`border-1 px-12 py-3 placeholder-blueGray-400 text-gray-300 bg-slate-700 rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150 ${errorsIndex && !errorsIndex["balance"] ? " placeholder-gray-500" : "border-opacity-100 border border-red-500 "}`}
                      id="balance" name="balance" placeholder="Balance" type="text" onChange={inputChange}
                      value={currentSelectedCoin && currentSelectedCoin.balance ? currentSelectedCoin.balance : 0} disabled
                    />
                    {errorsIndex && errorsIndex["balance"] ?
                      <div className="invalid-feedback text-red-500">
                        {errorsIndex["balance"]}
                      </div>
                      : null}
                    {/* Icon password */}
                    <span className="absolute top-[32px] left-3 text-gray-500 "><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg></span>
                  </div>
                </div>

                <div className="py-3">
                  <div className="mt-1 rounded-md shadow-sm relative">
                    <label className="text-white text-sm font-medium ">Lot :</label>
                    <input className={`border-1 px-12 py-3 placeholder-gray-300 text-gray-300 bg-slate-700 rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150 ${errorsIndex && !errorsIndex["lot"] ? " placeholder-gray-300" : "border-opacity-100 border border-red-500 "}`}
                      id="lot" name="lot" placeholder="Lot" type="number" onChange={inputChange}
                      value={fieldsIndex && fieldsIndex["lot"] ? fieldsIndex["lot"] : null} />
                    {errorsIndex && errorsIndex["lot"] ?
                      <div className="invalid-feedback text-red-500">
                        {errorsIndex["lot"]}
                      </div>
                      : null}
                    {/* Icon password */}
                    <span className="absolute top-[32px] left-3 text-gray-500 "><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg></span>
                  </div>
                </div>

                <div className="py-3">
                  <div className="mt-1 rounded-md shadow-sm relative">
                    <label className="text-white text-sm font-medium ">Price :</label>
                    <input className={`border-1 px-12 py-3 placeholder-blueGray-400 text-gray-300 bg-slate-700 rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150 ${errorsIndex && !errorsIndex["price"] ? " placeholder-gray-500" : "border-opacity-100 border border-red-500 "}`}
                      id="price" name="price" placeholder="Price" type="text" onChange={inputChange}
                      value={cPrice} disabled />
                    {errorsIndex && errorsIndex["price"] ?
                      <div className="invalid-feedback text-red-500">
                        {errorsIndex["price"]}
                      </div>
                      : null}
                    {/* Icon password */}
                    <span className="absolute top-[32px] left-3 text-gray-500 "><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg></span>
                  </div>
                </div>

                <div className="mt-6 w-64 sm:w-72 mx-auto py-6">
                  <button className="bg-[#2DA4FE] w-full mx-auto flex justify-center py-3 uppercase px-4  text-sm font-semibold rounded-md text-white focus:outline-none" type="button" onClick={buyIndexSubmit}>Submit</button>
                </div>
              </form>

            </div>
            {/* Footer */}
          </div>
        </div>
      </div>


    </Modal>



  );
}

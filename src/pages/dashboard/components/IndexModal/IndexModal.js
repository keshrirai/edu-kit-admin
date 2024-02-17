import React from "react";
import Modal from 'react-modal';
import moment from 'moment';



export default function IndexModal(props) {

  let { indexShowModal, handleCloseIndexModal, allCoinIndexByIndexId, offset, cardData
    //  sellIndexSubmit 
  } = props;
  // // console.log("MODAL____getCoinBalanceData", getCoinBalanceData);
  // console.log("MODAL____getIndexOrderData:::", allCoinIndexByIndexId);

  return (

    <Modal
      isOpen={indexShowModal}
    // contentLabel="Example Modal"
    >




      <div className="main-modal fixed w-full inset-0 z-50 lg:ml-[148px] overflow-hidden flex justify-center items-center animated fadeIn faster bg-slate-700 p-2">
        <div className=" modal-container bg-slate-800 w-full md:w-[56rem] lg:w-[40rem] lg:h-[640px] 2xl:h-[790px] h-[440px] 2xl:w-[65rem] mx-auto rounded shadow-lg z-50 lg:mt-20">
          <div className="modal-content lg:py-4 py-2 text-left ">
            <div className="flex w-full  items-center">
              <div className="flex justify-center m-auto ">
                <p className="text-xl text-white 2xl:ml-48 ml-12 py-2 font-bold text-center">{cardData && cardData.name ? cardData.name : "-"}</p>
              </div>
              <div className="modal-close cursor-pointer z-50 ml-auto">
                <p className="text-lg font-bold text-white pr-4" onClick={() => handleCloseIndexModal()}>X</p>
              </div>
            </div>
            <div className="flex flex-col 2xl:h-[740px] xl:h-[540px] lg:h-[580px] h-[340px] ">
              <div className=" overflow-auto overflow-x-auto">
                <table className="min-w-full border-0">
                  <thead className="bg-slate-900 rounded-t">
                    <tr className=" ">
                      <th scope="col" className="sticky top-0 whitespace-nowrap px-6 py-3 bg-slate-900 text-left text-xs font-medium text-white uppercase tracking-wider">S.No</th>
                      <th scope="col" className="sticky top-0 whitespace-nowrap px-6 py-3 bg-slate-900 text-left text-xs font-medium text-white uppercase tracking-wider">Coin Name</th>
                      <th scope="col" className="sticky top-0 whitespace-nowrap px-6 py-3 bg-slate-900 text-left text-xs font-medium text-white uppercase tracking-wider">Symbol</th>
                      <th scope="col" className="sticky top-0 whitespace-nowrap px-6 py-3 bg-slate-900 text-left text-xs font-medium text-white uppercase tracking-wider">Current Price</th>
                      <th scope="col" className="sticky top-0 whitespace-nowrap px-6 py-3 bg-slate-900 text-left text-xs font-medium text-white uppercase tracking-wider">%</th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      allCoinIndexByIndexId && allCoinIndexByIndexId.length > 0 ?
                        allCoinIndexByIndexId.map((element, index) => (<React.Fragment key={element.id}>
                          <tr key={element.id} className="tablenth ">
                            <td className="px-6 py-3 whitespace-nowrap font-medium text-sm text-white">{offset + index + 1}</td>
                            <td className="px-6 py-3 whitespace-nowrap text-sm text-white">{element && element.coin && element.coin.name ? element.coin.name : "-"}</td>
                            <td className="px-6 py-3 whitespace-nowrap text-sm text-white">{element && element.coin && element.coin.ticker ? element.coin.ticker : "-"}</td>
                            <td className="px-6 py-3 whitespace-nowrap text-sm text-white">
                              {element && element.coin && element.coin.price ? element.coin.price >100 ? element.coin.price.toFixed(3):element.coin.price.toFixed(6) : "-"}</td>
                            <td className="px-6 py-3 whitespace-nowrap text-sm text-white">{element && element.weightage ? element.weightage : "-"}</td>

                          </tr>
                        </React.Fragment>))
                        : (<tr className="bg-white bg-opacity-5 " >
                          <td className="col-span-3 px-6 py-3 whitespace-nowrap font-medium text-sm text-gray-600">Not cound</td>
                        </tr>)
                    }
                  </tbody>
                </table>
              </div>
              {/* </div>
              </div> */}

            </div>


          </div>
        </div>
      </div>











      {/* 
      <div className="main-modal fixed w-full inset-0 z-50 lg:ml-[148px] overflow-hidden flex justify-center items-center animated fadeIn faster bg-slate-700 p-2">
        <div className=" modal-container bg-slate-800 w-full md:w-[56rem] lg:w-[40rem] lg:h-[640px] 2xl:h-[790px] h-[440px] 2xl:w-[65rem] mx-auto rounded shadow-lg z-50 lg:mt-20">
          <div className="modal-content lg:py-4 py-2 text-left ">
            <div className="flex w-full  items-center">
              <div className="flex justify-center m-auto ">
                <p className="text-xl text-white 2xl:ml-48 ml-12 py-2 font-bold text-center">{cardData && cardData.name ? cardData.name : "-"}</p>
              </div>
              <div className="modal-close cursor-pointer z-50 ml-auto">
                <p className="text-lg font-bold text-white pr-4" onClick={() => handleCloseIndexModal()}>X</p>
              </div>
            </div>


            <div className="flex flex-col 2xl:h-[740px] xl:h-[540px] lg:h-[580px] h-[340px] ">
              <div className=" overflow-auto overflow-x-auto">
                <table className="relative w-full ">
                  <thead>
                    <tr className="">
                      <th className="sticky top-0 px-8 py-3 text-sm text-white bg-slate-900 whitespace-nowrap">S No</th>
                      <th className="sticky top-0 px-8 py-3 text-sm text-white bg-slate-900 whitespace-nowrap">Coin Name</th>
                      <th className="sticky top-0 px-8 py-3 text-sm text-white bg-slate-900 whitespace-nowrap">Symbol</th>
                      <th className="sticky top-0 px-8 py-3 text-sm text-white bg-slate-900 whitespace-nowrap">Current Price</th>
                      <th className="sticky top-0 px-8 py-3 text-sm text-white bg-slate-900 whitespace-nowrap">%</th>
                    </tr>
                  </thead>
                  <tbody className=" border border-slate-800">
                    {
                      allCoinIndexByIndexId && allCoinIndexByIndexId.length > 0 ?
                        allCoinIndexByIndexId.map((element, index) => (<React.Fragment>
                          <tr className="tablenth">
                            <td className="px-5  py-2 text-center text-xs whitespace-nowrap">{offset + index + 1}</td>
                            <td className="px-5  py-2 text-center text-xs whitespace-nowrap">{element && element.coin && element.coin.name ? element.coin.name : "-"}</td>
                            <td className="px-5  py-2 text-center text-xs whitespace-nowrap">{element && element.coin && element.coin.ticker ? element.coin.ticker : "-"}</td>
                            <td className="px-5  py-2 text-center text-xs whitespace-nowrap">{element && element.coin && element.coin.price ? element.coin.price.toFixed(2) : "-"}</td>
                            <td className="px-5  py-2 text-center text-xs whitespace-nowrap">{element && element.weightage ? element.weightage : "-"}</td>
                          </tr>
                        </React.Fragment>))
                        : null
                    }

                  </tbody>
                </table>
              </div>
            </div>

          </div>
        </div>
      </div> */}


    </Modal>



  );
}

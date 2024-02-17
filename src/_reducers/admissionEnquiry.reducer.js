import {
    admissionEnquiryConstants
  } from '../_constants';
  
  export function admissionEnquiry(state = {}, action) {
  
    switch (action.type) {
  
      case admissionEnquiryConstants.GET_ADMISSION_ENQUIRY_LIST_REQUEST:
        return {
          ...state,
          loading: true
        };
      case admissionEnquiryConstants.GET_ADMISSION_ENQUIRY_LIST_SUCCESS:
        return {
          ...state,
          loading: false,
          AdmissionEnq: action.admissionEnquiry.getAdmissionEnqList.data,
          // otpSentUpdatePass: true
        };
      case admissionEnquiryConstants.GET_ADMISSION_ENQUIRY_LIST_FAILURE:
        return {
          ...state,
          loading: false,
          error: action.error
        };


case admissionEnquiryConstants.RESET_DASHBOARD_REDUX:
    return {
    };

  default:
    return state
}
}
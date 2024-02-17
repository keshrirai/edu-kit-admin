import { admissionEnquiryConstants, dashboardConstants } from '../_constants';
import { admissionEnquiryService, dashboardService } from '../_services';
import { alertActions } from './';
// import {  dashboardActions } from './';


export const admissionEnquiryActions = {

    getAdmissionEnqList,

}


    function getAdmissionEnqList(data) {
        return dispatch => {
            dispatch(request());
            admissionEnquiryService.getAdmissionEnqList(data)
                .then(
                    admissionEnquiry => {
                        dispatch(success(admissionEnquiry))
                    },
                    error => {
                        dispatch(failure(error))
                    }
                );
        };
        function request() { return { type: admissionEnquiryConstants.GET_ADMISSION_ENQUIRY_LIST_REQUEST } }
        function success(admissionEnquiry) { return { type: admissionEnquiryConstants.GET_ADMISSION_ENQUIRY_LIST_SUCCESS, admissionEnquiry } }
        function failure(error) { return { type: admissionEnquiryConstants.GET_ADMISSION_ENQUIRY_LIST_FAILURE, error } }
    }
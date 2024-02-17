import { dashboardConstants } from '../_constants';
import { dashboardService } from '../_services';
import { alertActions } from './';
// import {  dashboardActions } from './';


export const dashboardActions = {

    getStudentList,

}


    function getStudentList(data) {
        return dispatch => {
            dispatch(request());
            dashboardService.getStudentList(data)
                .then(
                    dashboards => {
                        dispatch(success(dashboards))
                    },
                    error => {
                        dispatch(failure(error))
                    }
                );
        };
        function request() { return { type: dashboardConstants.GET_ALL_STUDENT_REQUEST } }
        function success(dashboards) { return { type: dashboardConstants.GET_ALL_STUDENT_SUCCESS, dashboards } }
        function failure(error) { return { type: dashboardConstants.GET_ALL_STUDENT_FAILURE, error } }
    }
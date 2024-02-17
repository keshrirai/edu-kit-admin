
import { authHeader, history } from '../_helpers';
import { CONST } from '../_config';

export const admissionEnquiryService = {
    getAdmissionEnqList,
}

function getAdmissionEnqList(data) {
    let header = new Headers({
        'Content-Type': 'application/json',
        "Authorization": authHeader().Authorization
    });
    const requestOptions = {
        method: "POST",
        headers: header,
        body: JSON.stringify(data)
    }
    return fetch(CONST.BACKEND_URL + `/getAdmissionEnqList`, requestOptions)
        .then(handleResponse)
        .then(data => {

            let userObj = {
                getAdmissionEnqList: data.data
            }
            return userObj;
        });
}


function handleResponse(response) {
    return response.text().then(text => {
        const data = text && JSON.parse(text);
        if (!response.ok) {
            // if (response.status === 401) {
            //     logout();
            // }
            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        }
        if (data.error) {
            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        }
        return data;
    });
}
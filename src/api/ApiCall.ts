import request from "request-promise";
import urls from "../../test/data/urls";
 class ApiCall {

    async getCall(str:string) {
        let options = {
            method: "GET",
            uri: urls.apiUrl + str,
            strictSSL: false,
            resolveWithFullResponse: true,
            simple: false,
            json: true
        };

        let response = await request(options);
        console.log(response.statusCode);
        console.log(response.body);

        return response;
    }

    async addCall(str:string, comment: object) {
        let options = {
            method: "POST",
            uri: urls.apiUrl + str,
            body: comment,
            headers: {
                "content-type": "application/json"
            },
            strictSSL: false,
            resolveWithFullResponse: true,
            simple: false,
            json: true
        };

        let response = await request(options);
        console.log(response.statusCode);
        console.log(response.body);

        return response;
    }

    async editCall(str:string, commentId: number, comment: object) {
        let options = {
            method: "PUT",
            uri: urls.apiUrl + str + commentId,
            body: comment,
            headers: {
                "content-type": "application/json"
            },
            strictSSL: false,
            resolveWithFullResponse: true,
            simple: false,
            json: true
        };

        let response = await request(options);
        console.log(response.statusCode);
        console.log(response.body);

        return response;
    }

    async deleteCall(str:string, commentId: number) {
        let options = {
            method: "DELETE",
           uri: urls.apiUrl + str + commentId,
            strictSSL: false,
            resolveWithFullResponse: true,
            simple: false
        };

        let response = await request(options);
        console.log(response.statusCode);
        console.log(response.body);

        return response;
    }

}
export default new ApiCall();
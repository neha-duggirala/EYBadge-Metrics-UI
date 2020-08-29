import axios from 'axios';
import { GET_CONFIG } from '../../constants/EndPoints';

class AxiosService {

    getConfig() {
        return axios.get(GET_CONFIG).then(response => {
            this.createService(response.data.baseUrl);
            this.baseURL = response.data.baseUrl;
            return response;
        });
    }

    handleSuccess(response) {
        return response;
    }
    handleError = error => {
        return Promise.reject(error);
    };

    createService(baseURL) {

        if (!this.service) {
            this.service = axios.create({
                headers: { "Content-Type": "application/json" },
                responseType: "json",
                baseURL: baseURL
            });
        }

        this.service.interceptors.response.use(
            this.handleSuccess,
            this.handleError
        );

    }

    get(path) {
        
        return this.service
            .get(this.baseURL+path)
            .then(response => {
                response.setHeader("Access-Control-Allow-Headers")
                return response;
            })
            .catch(error => {
                console.log(this.baseURL+path);

                throw error;
            });
    }
    post(path, payload) {
        // console.log(this.baseURL+path);
        return this.service
        .post(this.baseURL+path, payload)
        .then(response => {
                return response;
            })
            .catch(error => {
                throw error;
            });
    }
    put(path, payload) {
        return this.service
            .put(path, payload)
            .then(response => {
                return response;
            })
            .catch(error => {
                throw error;
            });
    }
    patch(path, payload) {
        return this.service
            .patch(path, payload)
            .then(response => {
                return response;
            })
            .catch(error => {
                throw error;
            });
    }
    delete(path, config) {
        return this.service
            .delete(path, config)
            .then(response => {
                return response;
            })
            .catch(error => {
                throw error;
            });
    }


}

export default new AxiosService();
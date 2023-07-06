import { ApiRequest } from './axios';
class ApiService {
    async post(path:any, body:any, headers?:any) {
        return new Promise(async(resolve, reject) => {
            try {
                const response = await ApiRequest.post(path, body, { headers});
                resolve(response.data);
            } catch (err) {
                reject(err);
            }
        });
    }

    async get(path:any, headers?:any) {
        return new Promise(async(resolve, reject) => {
            try {
                const response = await ApiRequest.get(path, { headers });
                resolve(response.data);
            } catch (err) {
                reject(err);
            }
        });
    }
    async patch(path:any, body:any, headers:any) {
        return new Promise(async(resolve, reject) => {
            try {
                const response = await ApiRequest.patch(path, body, { headers });
                resolve(response.data);
            } catch (err) {
                reject(err);
            }
        });
    }

    async put(path:any, body:any, headers:any) {
        return new Promise(async(resolve, reject) => {
            try {
                const response = await ApiRequest.put(path, body, { headers });
                resolve(response.data);
            } catch (err) {
                reject(err);
            }
        });
    }

    async delete(path:any, headers:any) {
        return new Promise(async(resolve, reject) => {
            try {
                const response = await ApiRequest.delete(path, {
                    headers: headers && {}
                });
                resolve(response.data);
            } catch (err) {
                reject(err);
            }
        });
    }
}

export default new ApiService();